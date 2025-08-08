import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { RetroColumn } from "./RetroColumn";
import { useEffect } from "react";
import { toast } from "sonner";

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

    // Also set up a periodic refresh as backup
    const interval = setInterval(() => {
      queryClient.invalidateQueries({ queryKey: ["cards", board.id] });
    }, 5000);

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
        { id: "mad", title: "Mad", color: "hsl(var(--retro-red))" },
        { id: "sad", title: "Sad", color: "hsl(var(--retro-yellow))" },
        { id: "glad", title: "Glad", color: "hsl(var(--retro-green))" },
      ];
    case "four_ls":
      return [
        { id: "liked", title: "Liked", color: "hsl(var(--retro-green))" },
        { id: "learned", title: "Learned", color: "hsl(var(--retro-blue))" },
        { id: "lacked", title: "Lacked", color: "hsl(var(--retro-yellow))" },
        { id: "longed", title: "Longed For", color: "hsl(var(--retro-purple))" },
      ];
    default: // start_stop_continue
      return [
        { id: "start", title: "Start", color: "hsl(var(--retro-green))" },
        { id: "stop", title: "Stop", color: "hsl(var(--retro-red))" },
        { id: "continue", title: "Continue", color: "hsl(var(--retro-blue))" },
      ];
  }
};