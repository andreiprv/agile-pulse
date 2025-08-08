import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { RetroColumn } from "./RetroColumn";
import { useEffect } from "react";
import { toast } from "sonner";
import { colors } from "@/lib/colors";

interface RetroBoardProps {
  board: any;
  sessionId: string;
}

export const RetroBoard = ({ board, sessionId }: RetroBoardProps) => {
  const queryClient = useQueryClient();

  // Fetch cards for this board
  const { data: cards = [] } = useQuery({
    queryKey: ["cards", board.id],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("retro_cards")
          .select(`
            *,
            votes (
              id,
              voter_session_id
            )
          `)
          .eq("board_id", board.id)
          .order("position");
        
        if (error) {
          console.error("Error fetching cards:", error);
          // Return empty array if there's an error, so columns still render
          return [];
        }
        return data || [];
      } catch (error) {
        console.error("Unexpected error fetching cards:", error);
        return [];
      }
    },
  });

  // Set up real-time subscriptions
  useEffect(() => {
    console.log("Setting up real-time subscriptions for board:", board.id);
    
    const cardsChannel = supabase
      .channel("retro-cards-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "retro_cards",
          filter: `board_id=eq.${board.id}`,
        },
        (payload) => {
          console.log("Real-time update received for retro_cards:", payload);
          queryClient.invalidateQueries({ queryKey: ["cards", board.id] });
        }
      )
      .subscribe();

    const votesChannel = supabase
      .channel("votes-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "votes",
        },
        (payload) => {
          console.log("Real-time update received for votes:", payload);
          queryClient.invalidateQueries({ queryKey: ["cards", board.id] });
        }
      )
      .subscribe();

    // Also set up a periodic refresh as backup (reduced to 2 seconds for better performance)
    const interval = setInterval(() => {
      queryClient.invalidateQueries({ queryKey: ["cards", board.id] });
    }, 2000);

    return () => {
      console.log("Cleaning up real-time subscriptions");
      supabase.removeChannel(cardsChannel);
      supabase.removeChannel(votesChannel);
      clearInterval(interval);
    };
  }, [board.id, queryClient]);

  // Get columns from board configuration or use defaults
  const columns = (board.columns && board.columns.length > 0) 
    ? board.columns 
    : getDefaultColumns(board.template);
  
  console.log("Board data:", board);
  console.log("Board template:", board.template);
  console.log("Board columns:", board.columns);
  console.log("Generated columns:", columns);
  console.log("Cards data:", cards);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {columns.map((column: any) => (
          <RetroColumn
            key={column.id}
            column={column}
            board={board}
            cards={cards.filter((card: any) => card.column_id === column.id)}
            sessionId={sessionId}
          />
        ))}
      </div>
    </div>
  );
};

const getDefaultColumns = (template: string) => {
  switch (template) {
    case "mad_sad_glad":
      return [
        { id: "mad", title: "Mad", color: colors.semantic.retro.negative },
        { id: "sad", title: "Sad", color: colors.semantic.retro.neutral },
        { id: "glad", title: "Glad", color: colors.semantic.retro.positive },
      ];
    case "four_ls":
      return [
        { id: "liked", title: "Liked", color: colors.semantic.retro.positive },
        { id: "learned", title: "Learned", color: colors.semantic.retro.neutral },
        { id: "lacked", title: "Lacked", color: colors.semantic.retro.neutral },
        { id: "longed", title: "Longed For", color: colors.semantic.retro.negative },
      ];
    default: // start_stop_continue
      return [
        { id: "start", title: "Start", color: colors.semantic.retro.positive },
        { id: "stop", title: "Stop", color: colors.semantic.retro.negative },
        { id: "continue", title: "Continue", color: colors.semantic.retro.neutral },
      ];
  }
};