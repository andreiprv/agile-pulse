import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

const Navigation = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">Agile Pulse</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className={isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Home</Link>
          {session && (
            <Link to="/create" className={isActive("/create") ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Create</Link>
          )}
          <a href="https://github.com/andreiprv/agile-pulse" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a>
          {session ? (
            <button onClick={() => supabase.auth.signOut()} className="text-muted-foreground hover:text-foreground">Sign Out</button>
          ) : (
            <>
              <Link to="/sign-in" className={isActive("/sign-in") ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Sign In</Link>
              <Link to="/sign-up" className={isActive("/sign-up") ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;


