
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, User, Home, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  const isActive = (path: string) => {
    return location.pathname === path ? "bg-primary/10 text-primary" : "";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Book className="h-6 w-6 text-primary" />
          <Link to="/" className="text-xl font-bold text-foreground">
            E-Portal
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/")}`}
          >
            Landing
          </Link>
          
          {isLoggedIn ? (
            <>
              <Link 
                to="/home" 
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/home")}`}
              >
                Home
              </Link>
              <Link 
                to="/courses" 
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/courses")}`}
              >
                Courses
              </Link>
              <Link 
                to="/quizzes" 
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/quizzes")}`}
              >
                Quizzes
              </Link>
              <Link 
                to="/profile" 
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/profile")}`}
              >
                Profile
              </Link>
              <Button 
                variant="ghost" 
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  localStorage.removeItem("userRoll");
                  localStorage.removeItem("userName");
                  window.location.href = "/";
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="mr-2">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden container pb-4 animate-fade-in">
          <nav className="flex flex-col gap-2">
            <Link 
              to="/" 
              className={`flex items-center p-2 rounded-md ${isActive("/")}`}
              onClick={() => setIsOpen(false)}
            >
              <Home className="mr-2 h-5 w-5" />
              Landing
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link 
                  to="/home" 
                  className={`flex items-center p-2 rounded-md ${isActive("/home")}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Home className="mr-2 h-5 w-5" />
                  Home
                </Link>
                <Link 
                  to="/courses" 
                  className={`flex items-center p-2 rounded-md ${isActive("/courses")}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Book className="mr-2 h-5 w-5" />
                  Courses
                </Link>
                <Link 
                  to="/quizzes" 
                  className={`flex items-center p-2 rounded-md ${isActive("/quizzes")}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Book className="mr-2 h-5 w-5" />
                  Quizzes
                </Link>
                <Link 
                  to="/profile" 
                  className={`flex items-center p-2 rounded-md ${isActive("/profile")}`}
                  onClick={() => setIsOpen(false)}
                >
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("userRoll");
                    localStorage.removeItem("userName");
                    window.location.href = "/";
                    setIsOpen(false);
                  }}
                  className="justify-start"
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col gap-2 mt-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Register</Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
