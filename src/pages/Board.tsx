import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { RetroBoard } from "@/components/retro/RetroBoard";
import { BoardHeader } from "@/components/retro/BoardHeader";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Board = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const [sessionId] = useState(() => crypto.randomUUID());

  const { data: board, isLoading, error } = useQuery({
    queryKey: ["board", boardId],
    queryFn: async () => {
      if (!boardId) throw new Error("Board ID is required");
      
      const { data, error } = await supabase
        .from("boards")
        .select("*")
        .eq("board_id", boardId)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!boardId,
  });

  // Join board as participant
  useEffect(() => {
    if (!board || !sessionId) return;

    const joinBoard = async () => {
      await supabase
        .from("board_participants")
        .upsert({
          board_id: board.id,
          session_id: sessionId,
          name: `User ${sessionId.slice(0, 6)}`,
          last_seen: new Date().toISOString(),
        });
    };

    joinBoard();

    // Update last seen every 30 seconds
    const interval = setInterval(() => {
      supabase
        .from("board_participants")
        .update({ last_seen: new Date().toISOString() })
        .eq("board_id", board.id)
        .eq("session_id", sessionId);
    }, 30000);

    return () => clearInterval(interval);
  }, [board, sessionId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading board...</p>
        </div>
      </div>
    );
  }

  if (error || !board) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Board not found</h1>
          <p className="text-muted-foreground">
            The board you're looking for doesn't exist or has expired.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BoardHeader board={board} sessionId={sessionId} />
      <RetroBoard board={board} sessionId={sessionId} />
    </div>
  );
};

export default Board;