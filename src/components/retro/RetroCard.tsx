import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MoreVertical, ArrowUp, Edit, Save, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
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
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(card.content);
  const [isSaving, setIsSaving] = useState(false);
  const queryClient = useQueryClient();
  
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
        // Check if user has reached vote limit (optimized query)
        // Get all cards for this board first
        const { data: boardCards } = await supabase
          .from("retro_cards")
          .select("id")
          .eq("board_id", board.id);

        const cardIds = boardCards?.map(card => card.id) || [];
        
        if (cardIds.length > 0) {
          const { count: userVoteCount } = await supabase
            .from("votes")
            .select("*", { count: "exact", head: true })
            .eq("voter_session_id", sessionId)
            .in("card_id", cardIds);

          if (userVoteCount && userVoteCount >= board.max_votes_per_user) {
            toast.error(`You can only vote ${board.max_votes_per_user} times`);
            return;
          }
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

    // Optimistic update - remove card from UI immediately
    const originalCards = queryClient.getQueryData(["cards", board.id]) as any[];
    queryClient.setQueryData(["cards", board.id], (oldCards: any[] = []) => {
      return oldCards.filter(c => c.id !== card.id);
    });

    try {
      const { error } = await supabase
        .from("retro_cards")
        .delete()
        .eq("id", card.id);

      if (error) throw error;
      toast.success("Card deleted");
    } catch (error) {
      console.error("Error deleting card:", error);
      
      // Revert optimistic update on error
      if (originalCards) {
        queryClient.setQueryData(["cards", board.id], originalCards);
      }
      
      toast.error("Failed to delete card");
    }
  };

  const handleStartEdit = () => {
    if (card.author_session_id !== sessionId) {
      toast.error("You can only edit your own cards");
      return;
    }
    setIsEditing(true);
    setEditContent(card.content);
  };

  const handleSaveEdit = async () => {
    if (!editContent.trim()) {
      toast.error("Card content cannot be empty");
      return;
    }

    if (card.author_session_id !== sessionId) {
      toast.error("You can only edit your own cards");
      return;
    }

    const originalContent = card.content;
    setIsSaving(true);
    
    // Optimistic update - update UI immediately
    queryClient.setQueryData(["cards", board.id], (oldCards: any[] = []) => {
      return oldCards.map(c => 
        c.id === card.id ? { ...c, content: editContent.trim() } : c
      );
    });
    
    setIsEditing(false);

    try {
      const { error } = await supabase
        .from("retro_cards")
        .update({ content: editContent.trim() })
        .eq("id", card.id)
        .eq("author_session_id", sessionId); // Double-check ownership

      if (error) throw error;
      toast.success("Card updated");
    } catch (error) {
      console.error("Error updating card:", error);
      
      // Revert optimistic update on error
      queryClient.setQueryData(["cards", board.id], (oldCards: any[] = []) => {
        return oldCards.map(c => 
          c.id === card.id ? { ...c, content: originalContent } : c
        );
      });
      
      // Restore editing state
      setEditContent(originalContent);
      setIsEditing(true);
      
      toast.error("Failed to update card");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditContent(card.content);
  };

  return (
    <Card className={`relative group transition-all duration-200 hover:shadow-md ${
      board.focus_card_id === card.id ? "ring-2 ring-primary" : ""
    } ${card.is_hidden ? "opacity-50" : ""}`}>
      <CardContent className="p-4">
        {isEditing ? (
          <div className="space-y-3">
            <Textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="min-h-[80px] resize-none text-sm"
              maxLength={280}
              disabled={isSaving}
            />
            <div className="text-xs text-muted-foreground text-right">
              {editContent.length}/280
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleSaveEdit}
                size="sm"
                disabled={!editContent.trim() || isSaving}
                className="flex-1"
              >
                <Save className="w-3 h-3 mr-1" />
                {isSaving ? "Saving..." : "Save"}
              </Button>
              <Button
                onClick={handleCancelEdit}
                variant="outline"
                size="sm"
                disabled={isSaving}
              >
                <X className="w-3 h-3 mr-1" />
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm leading-relaxed">{card.content}</p>
        )}
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            {board.voting_enabled ? (
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
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="h-8 px-2 opacity-50"
              >
                <Heart className="w-3 h-3 mr-1" />
                Voting Disabled
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
                <>
                  <DropdownMenuItem 
                    onClick={handleStartEdit}
                    disabled={isEditing || board.is_locked}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Card
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={handleDeleteCard}
                    className="text-destructive"
                    disabled={isEditing}
                  >
                    Delete Card
                  </DropdownMenuItem>
                </>
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

// Note: getUserCardIds helper function removed - now using inline optimized queries