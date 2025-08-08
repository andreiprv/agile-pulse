import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MoreVertical, ArrowUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RetroCardProps {
  card: any;
  board: any;
  sessionId: string;
}

export const RetroCard = ({ card, board, sessionId }: RetroCardProps) => {
  const [isVoting, setIsVoting] = useState(false);
  
  const voteCount = card.votes?.length || 0;
  const hasVoted = card.votes?.some((vote: any) => vote.voter_session_id === sessionId);
  const userVoteCount = card.votes?.filter((vote: any) => vote.voter_session_id === sessionId).length || 0;
  
  const handleVote = async () => {
    if (isVoting || !board.voting_enabled) return;

    setIsVoting(true);
    try {
      if (hasVoted) {
        // Remove vote
        const { error } = await supabase
          .from("votes")
          .delete()
          .eq("card_id", card.id)
          .eq("voter_session_id", sessionId);

        if (error) throw error;
        toast.success("Vote removed");
      } else {
        // Check if user has reached vote limit
        const { data: userVotes } = await supabase
          .from("votes")
          .select("*")
          .eq("voter_session_id", sessionId)
          .in("card_id", await getUserCardIds(board.id));

        if (userVotes && userVotes.length >= board.max_votes_per_user) {
          toast.error(`You can only vote ${board.max_votes_per_user} times`);
          return;
        }

        // Add vote
        const { error } = await supabase.from("votes").insert({
          card_id: card.id,
          voter_session_id: sessionId,
        });

        if (error) throw error;
        toast.success("Vote added");
      }
    } catch (error) {
      console.error("Error voting:", error);
      toast.error("Failed to vote");
    } finally {
      setIsVoting(false);
    }
  };

  const handleConvertToAction = async () => {
    try {
      const { error } = await supabase.from("retro_action_items").insert({
        board_id: board.id,
        card_id: card.id,
        title: card.content.slice(0, 100),
        description: card.content,
      });

      if (error) throw error;
      toast.success("Card converted to action item");
    } catch (error) {
      console.error("Error converting to action:", error);
      toast.error("Failed to convert to action item");
    }
  };

  const handleDeleteCard = async () => {
    if (card.author_session_id !== sessionId) {
      toast.error("You can only delete your own cards");
      return;
    }

    try {
      const { error } = await supabase
        .from("retro_cards")
        .delete()
        .eq("id", card.id);

      if (error) throw error;
      toast.success("Card deleted");
    } catch (error) {
      console.error("Error deleting card:", error);
      toast.error("Failed to delete card");
    }
  };

  return (
    <Card className={`relative group transition-all duration-200 hover:shadow-md ${
      board.focus_card_id === card.id ? "ring-2 ring-primary" : ""
    } ${card.is_hidden ? "opacity-50" : ""}`}>
      <CardContent className="p-4">
        <p className="text-sm leading-relaxed">{card.content}</p>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            {board.voting_enabled && (
              <Button
                onClick={handleVote}
                variant={hasVoted ? "default" : "outline"}
                size="sm"
                disabled={isVoting || board.is_locked}
                className="h-8 px-2"
              >
                <Heart className={`w-3 h-3 mr-1 ${hasVoted ? "fill-current" : ""}`} />
                {board.show_votes ? voteCount : "Vote"}
              </Button>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100">
                <MoreVertical className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleConvertToAction}>
                <ArrowUp className="w-4 h-4 mr-2" />
                Convert to Action
              </DropdownMenuItem>
              {card.author_session_id === sessionId && (
                <DropdownMenuItem 
                  onClick={handleDeleteCard}
                  className="text-destructive"
                >
                  Delete Card
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {!board.is_anonymous && card.author_name && (
          <div className="text-xs text-muted-foreground mt-2">
            by {card.author_name}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Helper function to get all card IDs for a board
const getUserCardIds = async (boardId: string) => {
  const { data } = await supabase
    .from("retro_cards")
    .select("id")
    .eq("board_id", boardId);
  
  return data?.map(card => card.id) || [];
};