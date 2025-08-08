-- Fix the votes table to reference retro_cards instead of cards
-- First, check if there are any existing votes and clear them if needed
DELETE FROM public.votes;

-- Add foreign key constraint to reference retro_cards
ALTER TABLE public.votes 
ADD CONSTRAINT votes_retro_card_id_fkey 
FOREIGN KEY (card_id) REFERENCES public.retro_cards(id) ON DELETE CASCADE;