import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  Settings, 
  Share2, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock,
  Play,
  Pause,
  RotateCcw,
  UserPlus
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BoardHeaderProps {
  board: any;
  sessionId: string;
}

export const BoardHeader = ({ board, sessionId }: BoardHeaderProps) => {
  const [isTimerRunning, setIsTimerRunning] = useState(!!board.timer_started_at);
  const [timerMinutes, setTimerMinutes] = useState(board.timer_duration ? Math.floor(board.timer_duration / 60) : 5);

  // Fetch participants
  const { data: participants = [] } = useQuery({
    queryKey: ["participants", board.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("board_participants")
        .select("*")
        .eq("board_id", board.id)
        .gte("last_seen", new Date(Date.now() - 5 * 60 * 1000).toISOString()); // Active in last 5 minutes
      
      if (error) throw error;
      return data;
    },
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const handleShareBoard = async () => {
    const url = `${window.location.origin}/board/${board.board_id}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Board URL copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy URL");
    }
  };

  const handleToggleVisibility = async () => {
    try {
      const { error } = await supabase
        .from("boards")
        .update({ show_votes: !board.show_votes })
        .eq("id", board.id);

      if (error) throw error;
      window.location.reload(); // Simple refresh for now
    } catch (error) {
      toast.error("Failed to update visibility");
    }
  };

  const handleToggleLock = async () => {
    try {
      const { error } = await supabase
        .from("boards")
        .update({ is_locked: !board.is_locked })
        .eq("id", board.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      toast.error("Failed to update lock status");
    }
  };

  const handleStartTimer = async () => {
    try {
      const duration = timerMinutes * 60;
      const { error } = await supabase
        .from("boards")
        .update({ 
          timer_duration: duration,
          timer_started_at: new Date().toISOString()
        })
        .eq("id", board.id);

      if (error) throw error;
      setIsTimerRunning(true);
      toast.success(`Timer started for ${timerMinutes} minutes`);
    } catch (error) {
      toast.error("Failed to start timer");
    }
  };

  const handleStopTimer = async () => {
    try {
      const { error } = await supabase
        .from("boards")
        .update({ 
          timer_started_at: null,
          timer_duration: null
        })
        .eq("id", board.id);

      if (error) throw error;
      setIsTimerRunning(false);
      toast.success("Timer stopped");
    } catch (error) {
      toast.error("Failed to stop timer");
    }
  };

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">{board.title}</h1>
            <Badge variant="outline" className="capitalize">
              {board.template.replace("_", " ")}
            </Badge>
            {board.is_private && (
              <Badge variant="secondary">Private</Badge>
            )}
            {board.is_locked && (
              <Badge variant="destructive">Locked</Badge>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Participants */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  {participants.length}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-2">
                  <h4 className="font-semibold">Active Participants</h4>
                  {participants.map((participant) => (
                    <div key={participant.id} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{participant.name}</span>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Timer */}
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={timerMinutes}
                onChange={(e) => setTimerMinutes(Number(e.target.value))}
                className="w-16 h-8"
                min="1"
                max="60"
                disabled={isTimerRunning}
              />
              <Button
                onClick={isTimerRunning ? handleStopTimer : handleStartTimer}
                variant="outline"
                size="sm"
              >
                {isTimerRunning ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Stop
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Start
                  </>
                )}
              </Button>
            </div>

            {/* Board Controls */}
            <Button
              onClick={handleToggleVisibility}
              variant="outline"
              size="sm"
            >
              {board.show_votes ? (
                <>
                  <EyeOff className="w-4 h-4 mr-2" />
                  Hide Votes
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  Show Votes
                </>
              )}
            </Button>

            <Button
              onClick={handleToggleLock}
              variant="outline"
              size="sm"
            >
              {board.is_locked ? (
                <>
                  <Unlock className="w-4 h-4 mr-2" />
                  Unlock
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Lock
                </>
              )}
            </Button>

            <Button onClick={handleShareBoard} variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};