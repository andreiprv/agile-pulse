-- Enforce duplicate-vote prevention and server-side vote cap
-- Safe to run multiple times (idempotent where possible)

-- 1) Prereqs
create extension if not exists pgcrypto;

-- 2) Boards (stores per-board vote cap)
create table if not exists public.boards (
  id uuid primary key default gen_random_uuid(),
  board_id text not null unique,
  title text not null default 'Sprint Retrospective',
  template text not null default 'start_stop_continue',
  columns jsonb not null default '[]'::jsonb,
  is_private boolean not null default false,
  is_locked boolean not null default false,
  is_anonymous boolean not null default false,
  voting_enabled boolean not null default true,
  max_votes_per_user integer not null default 3,
  show_votes boolean not null default true,
  timer_duration integer,
  timer_started_at timestamptz,
  focus_card_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '30 days')
);

alter table public.boards enable row level security;
drop policy if exists "Anyone can view boards" on public.boards;
drop policy if exists "Anyone can create boards" on public.boards;
drop policy if exists "Anyone can update boards" on public.boards;
create policy "Anyone can view boards"   on public.boards for select using (true);
create policy "Anyone can create boards" on public.boards for insert with check (true);
create policy "Anyone can update boards" on public.boards for update using (true);

-- 3) Retro cards (cards belong to a board)
create table if not exists public.retro_cards (
  id uuid primary key default gen_random_uuid(),
  board_id uuid not null references public.boards(id) on delete cascade,
  column_id text not null,
  content text not null,
  author_name text,
  author_session_id text not null,
  position integer not null default 0,
  is_hidden boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists retro_cards_board_id_idx on public.retro_cards(board_id);
create index if not exists retro_cards_column_id_idx on public.retro_cards(column_id);

alter table public.retro_cards enable row level security;
drop policy if exists "Anyone can view retro cards" on public.retro_cards;
drop policy if exists "Anyone can create retro cards" on public.retro_cards;
drop policy if exists "Anyone can update retro cards" on public.retro_cards;
drop policy if exists "Anyone can delete retro cards" on public.retro_cards;
create policy "Anyone can view retro cards"   on public.retro_cards for select using (true);
create policy "Anyone can create retro cards" on public.retro_cards for insert with check (true);
create policy "Anyone can update retro cards" on public.retro_cards for update using (true);
create policy "Anyone can delete retro cards" on public.retro_cards for delete using (true);

-- 4) Votes (unique per card + voter session)
create table if not exists public.votes (
  id uuid primary key default gen_random_uuid(),
  card_id uuid not null references public.retro_cards(id) on delete cascade,
  voter_session_id text not null,
  created_at timestamptz not null default now()
);

-- Ensure unique constraint via unique index
do $$
begin
  if not exists (
    select 1 from pg_indexes
    where schemaname = 'public' and indexname = 'votes_card_voter_unique_idx'
  ) then
    create unique index votes_card_voter_unique_idx
      on public.votes(card_id, voter_session_id);
  end if;
end$$;

alter table public.votes enable row level security;
drop policy if exists "Anyone can view votes" on public.votes;
drop policy if exists "Anyone can create votes" on public.votes;
drop policy if exists "Anyone can delete votes" on public.votes;
create policy "Anyone can view votes"   on public.votes for select using (true);
create policy "Anyone can create votes" on public.votes for insert with check (true);
create policy "Anyone can delete votes" on public.votes for delete using (true);

-- 5) Server-side vote cap (DB-enforced)
create or replace function public.enforce_vote_limit()
returns trigger
language plpgsql
as $$
declare
  v_board_id uuid;
  v_max_votes int;
  v_total_votes int;
begin
  -- Which board is this card on?
  select rc.board_id into v_board_id
  from public.retro_cards rc
  where rc.id = NEW.card_id;

  -- Board's vote cap
  select b.max_votes_per_user into v_max_votes
  from public.boards b
  where b.id = v_board_id;

  -- How many votes this session already cast on that board?
  select count(*) into v_total_votes
  from public.votes v
  join public.retro_cards rc on rc.id = v.card_id
  where v.voter_session_id = NEW.voter_session_id
    and rc.board_id = v_board_id;

  if v_max_votes is not null and v_total_votes >= v_max_votes then
    raise exception 'Vote limit reached (% votes per user)', v_max_votes;
  end if;

  return NEW;
end;
$$;

drop trigger if exists trg_enforce_vote_limit on public.votes;
create trigger trg_enforce_vote_limit
before insert on public.votes
for each row execute function public.enforce_vote_limit();


