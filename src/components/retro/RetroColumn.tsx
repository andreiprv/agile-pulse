import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { RetroCard } from "./RetroCard";

interface RetroColumnProps {
  column: {
    id: string;
    title: string;
    color: string;
  };
  board: any;
  cards: any[];
  sessionId: string;
}

export const RetroColumn = ({ column, board, cards, sessionId }: RetroColumnProps) => {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCardContent, setNewCardContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddCard = async () => {
    if (!newCardContent.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("retro_cards").insert({
        board_id: board.id,
        column_id: column.id,
        content: newCardContent.trim(),
        author_session_id: sessionId,
        position: cards.length,
      });

      if (error) throw error;

      setNewCardContent("");
      setIsAddingCard(false);
      toast.success("Card added successfully!");
    } catch (error) {
      console.error("Error adding card:", error);
      toast.error("Failed to add card");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sortedCards = [...cards].sort((a, b) => {
    if (board.voting_enabled && board.show_votes) {
      return (b.votes?.length || 0) - (a.votes?.length || 0);
    }
    return a.position - b.position;
  });

  return (
    <div className="space-y-4">
      <div 
        className="p-4 rounded-lg text-white font-semibold text-center"
        style={{ backgroundColor: column.color }}
      >
        {column.title}
      </div>
      
      <div className="space-y-3 min-h-[400px]">
        {sortedCards.map((card) => (
          <RetroCard
            key={card.id}
            card={card}
            board={board}
            sessionId={sessionId}
          />
        ))}

        {isAddingCard ? (
          <Card className="p-4 space-y-3">
            <Textarea
              value={newCardContent}
              onChange={(e) => setNewCardContent(e.target.value)}
              placeholder="What's on your mind?"
              maxLength={280}
              className="min-h-[80px] resize-none"
              autoFocus
            />
            <div className="text-xs text-muted-foreground text-right">
              {newCardContent.length}/280
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleAddCard}
                disabled={!newCardContent.trim() || isSubmitting}
                size="sm"
                className="flex-1"
              >
                {isSubmitting ? "Adding..." : "Add Card"}
              </Button>
              <Button
                onClick={() => {
                  setIsAddingCard(false);
                  setNewCardContent("");
                }}
                variant="outline"
                size="sm"
              >
                Cancel
              </Button>
            </div>
          </Card>
        ) : (
          <Button
            onClick={() => setIsAddingCard(true)}
            variant="outline"
            className="w-full h-16 border-dashed"
            disabled={board.is_locked}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Card
          </Button>
        )}
      </div>
    </div>
  );
};