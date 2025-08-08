-- Create boards table for retrospective boards
CREATE TABLE IF NOT EXISTS public.boards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  board_id TEXT NOT NULL UNIQUE, -- 6-character random ID for sharing
  title TEXT NOT NULL DEFAULT 'Sprint Retrospective',
  template TEXT NOT NULL DEFAULT 'start_stop_continue', -- start_stop_continue, mad_sad_glad, four_ls, custom
  columns JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array of column objects {id, title, color}
  is_private BOOLEAN NOT NULL DEFAULT false,
  is_locked BOOLEAN NOT NULL DEFAULT false,
  is_anonymous BOOLEAN NOT NULL DEFAULT false,
  voting_enabled BOOLEAN NOT NULL DEFAULT true,
  max_votes_per_user INTEGER NOT NULL DEFAULT 3,
  show_votes BOOLEAN NOT NULL DEFAULT true,
  timer_duration INTEGER, -- in seconds
  timer_started_at TIMESTAMP WITH TIME ZONE,
  focus_card_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + INTERVAL '30 days')
);

-- Create votes table for card voting
CREATE TABLE IF NOT EXISTS public.votes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  card_id UUID NOT NULL,
  voter_session_id TEXT NOT NULL, -- For anonymous tracking
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(card_id, voter_session_id)
);

-- Create board participants table for presence tracking
CREATE TABLE IF NOT EXISTS public.board_participants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  board_id UUID NOT NULL,
  session_id TEXT NOT NULL,
  name TEXT,
  last_seen TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_typing BOOLEAN NOT NULL DEFAULT false,
  cursor_position JSONB, -- {x, y} coordinates
  UNIQUE(board_id, session_id)
);

-- Enable Row Level Security
ALTER TABLE public.boards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.board_participants ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no auth required)
CREATE POLICY "Anyone can view boards" ON public.boards FOR SELECT USING (true);
CREATE POLICY "Anyone can create boards" ON public.boards FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update boards" ON public.boards FOR UPDATE USING (true);

CREATE POLICY "Anyone can view votes" ON public.votes FOR SELECT USING (true);
CREATE POLICY "Anyone can create votes" ON public.votes FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can delete votes" ON public.votes FOR DELETE USING (true);

CREATE POLICY "Anyone can view participants" ON public.board_participants FOR SELECT USING (true);
CREATE POLICY "Anyone can create participants" ON public.board_participants FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update participants" ON public.board_participants FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete participants" ON public.board_participants FOR DELETE USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS boards_board_id_idx ON public.boards(board_id);
CREATE INDEX IF NOT EXISTS votes_card_id_idx ON public.votes(card_id);
CREATE INDEX IF NOT EXISTS board_participants_board_id_idx ON public.board_participants(board_id);

-- Create function to generate random board ID
CREATE OR REPLACE FUNCTION generate_board_id()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  chars TEXT := 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  result TEXT := '';
  i INTEGER;
BEGIN
  FOR i IN 1..6 LOOP
    result := result || substr(chars, floor(random() * length(chars) + 1)::integer, 1);
  END LOOP;
  RETURN result;
END;
$$;

-- Create trigger to auto-generate board_id
CREATE OR REPLACE FUNCTION set_board_id()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.board_id IS NULL OR NEW.board_id = '' THEN
    LOOP
      NEW.board_id := generate_board_id();
      -- Check if this ID already exists
      IF NOT EXISTS (SELECT 1 FROM public.boards WHERE board_id = NEW.board_id) THEN
        EXIT;
      END IF;
    END LOOP;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_board_id_trigger
  BEFORE INSERT ON public.boards
  FOR EACH ROW
  EXECUTE FUNCTION set_board_id();

-- Create trigger for updated_at on boards
CREATE TRIGGER update_boards_updated_at BEFORE UPDATE ON public.boards FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();