import { Link, useLocation } from "react-router";
import { Film } from "lucide-react";

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Film className="size-8 text-primary" />
          <div>
            <div className="font-semibold text-xl tracking-tight">MOVIE LINK LIMITED</div>
          </div>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/about") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/contact") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
          <Link 
            to="/privacy-policy" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/privacy-policy") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/terms") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Terms
          </Link>
          <Link 
            to="/cookie-policy" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/cookie-policy") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Cookies
          </Link>
        </nav>
      </div>
    </header>
  );
}
