import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">Agile Pulse</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className={isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Home</Link>
          <Link to="/create" className={isActive("/create") ? "text-primary" : "text-muted-foreground hover:text-foreground"}>Create</Link>
          <a href="https://github.com/andreiprv/agile-pulse" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;


