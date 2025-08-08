-- Create retro_cards table for retrospective cards
CREATE TABLE IF NOT EXISTS public.retro_cards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  board_id UUID NOT NULL,
  column_id TEXT NOT NULL,
  content TEXT NOT NULL,
  author_name TEXT,
  author_session_id TEXT NOT NULL, -- For anonymous tracking
  position INTEGER NOT NULL DEFAULT 0,
  is_hidden BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create retro_action_items table for action items
CREATE TABLE IF NOT EXISTS public.retro_action_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  board_id UUID NOT NULL,
  card_id UUID,
  title TEXT NOT NULL,
  description TEXT,
  assignee TEXT,
  due_date DATE,
  status TEXT NOT NULL DEFAULT 'open', -- open, in_progress, done
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.retro_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.retro_action_items ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no auth required)
CREATE POLICY "Anyone can view retro cards" ON public.retro_cards FOR SELECT USING (true);
CREATE POLICY "Anyone can create retro cards" ON public.retro_cards FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update retro cards" ON public.retro_cards FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete retro cards" ON public.retro_cards FOR DELETE USING (true);

CREATE POLICY "Anyone can view retro action items" ON public.retro_action_items FOR SELECT USING (true);
CREATE POLICY "Anyone can create retro action items" ON public.retro_action_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update retro action items" ON public.retro_action_items FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete retro action items" ON public.retro_action_items FOR DELETE USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS retro_cards_board_id_idx ON public.retro_cards(board_id);
CREATE INDEX IF NOT EXISTS retro_cards_column_id_idx ON public.retro_cards(column_id);
CREATE INDEX IF NOT EXISTS retro_action_items_board_id_idx ON public.retro_action_items(board_id);

-- Update votes table to reference retro_cards
ALTER TABLE public.votes DROP CONSTRAINT IF EXISTS votes_card_id_fkey;

-- Create trigger for updated_at on retro_cards
CREATE TRIGGER update_retro_cards_updated_at BEFORE UPDATE ON public.retro_cards FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_retro_action_items_updated_at BEFORE UPDATE ON public.retro_action_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();