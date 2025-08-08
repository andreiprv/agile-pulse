import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Plus, Users, Timer, Vote } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const [boardTitle, setBoardTitle] = useState("Sprint Retrospective");
  const [selectedTemplate, setSelectedTemplate] = useState("start_stop_continue");

  const templates = [
    {
      id: "start_stop_continue",
      name: "Start/Stop/Continue",
      description: "Classic retrospective format",
      columns: ["Start", "Stop", "Continue"],
    },
    {
      id: "mad_sad_glad",
      name: "Mad/Sad/Glad",
      description: "Emotional reflection format",
      columns: ["Mad", "Sad", "Glad"],
    },
    {
      id: "four_ls",
      name: "4 L's",
      description: "Comprehensive learning format",
      columns: ["Liked", "Learned", "Lacked", "Longed For"],
    },
  ];

  const handleCreateBoard = async () => {
    if (!boardTitle.trim() || isCreating) return;

    setIsCreating(true);
    try {
      // Generate a temporary board_id (will be overridden by the trigger)
      const tempBoardId = crypto.randomUUID().substring(0, 6).toUpperCase();
      
      const { data, error } = await supabase
        .from("boards")
        .insert({
          board_id: tempBoardId,
          title: boardTitle.trim(),
          template: selectedTemplate,
          columns: [],
          voting_enabled: false, // Default to voting disabled
          show_votes: false,
          is_locked: false,
        })
        .select()
        .single();

      if (error) throw error;

      toast.success("Board created successfully!");
      navigate(`/board/${data.board_id}`);
    } catch (error) {
      console.error("Error creating board:", error);
      toast.error("Failed to create board");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Sprint Retrospective Tool</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Create collaborative retrospective boards for your agile team
          </p>
          
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">Real-time collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <Vote className="w-5 h-5 text-primary" />
              <span className="text-sm">Anonymous voting</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-primary" />
              <span className="text-sm">Timeboxed activities</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Create New Board
              </CardTitle>
              <CardDescription>
                Set up a new retrospective session for your team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Board Title</Label>
                <Input
                  id="title"
                  value={boardTitle}
                  onChange={(e) => setBoardTitle(e.target.value)}
                  placeholder="Enter board title..."
                  maxLength={100}
                />
              </div>

              <div className="space-y-3">
                <Label>Template</Label>
                <div className="grid gap-3">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedTemplate === template.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{template.name}</h3>
                        <div className="flex gap-1">
                          {template.columns.map((column, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {column}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {template.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleCreateBoard}
                disabled={!boardTitle.trim() || isCreating}
                className="w-full"
                size="lg"
              >
                {isCreating ? "Creating..." : "Create Board"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
