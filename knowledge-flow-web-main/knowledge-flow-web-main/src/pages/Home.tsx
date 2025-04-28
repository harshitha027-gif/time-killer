
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, BookOpen, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const Home = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Student";
  const userRoll = localStorage.getItem("userRoll") || "";
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn) {
      toast.error("Please log in to access this page");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  
  if (!isLoggedIn) {
    return null; // Don't render anything while redirecting
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {/* Welcome Section */}
        <section className="mb-10">
          <div className="bg-card-gradient text-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">Welcome, {userName}!</h1>
            <p className="text-xl">Roll Number: {userRoll}</p>
            <p className="mt-4 text-white/90">
              Explore your courses, take quizzes, and track your progress all in one place.
            </p>
          </div>
        </section>
        
        {/* Quick Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Courses</h3>
                <p className="text-muted-foreground mb-4">
                  Explore all available subjects and access learning resources
                </p>
                <Link to="/courses" className="mt-auto">
                  <Button variant="outline" className="group">
                    Browse Courses
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Quizzes</h3>
                <p className="text-muted-foreground mb-4">
                  Test your knowledge with subject-specific quizzes
                </p>
                <Link to="/quizzes" className="mt-auto">
                  <Button variant="outline" className="group">
                    Take Quizzes
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Profile</h3>
                <p className="text-muted-foreground mb-4">
                  View and update your account information
                </p>
                <Link to="/profile" className="mt-auto">
                  <Button variant="outline" className="group">
                    View Profile
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Announcements */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Announcements</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium">New Course Materials Available</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Additional videos have been added to the Programming section. Check them out!
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Posted: April 25, 2025</p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium">Quiz Week Coming Soon</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Prepare for the upcoming assessment period by taking practice quizzes.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Posted: April 23, 2025</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Platform Updates</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    We've improved the video player and quiz interface for a better learning experience.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Posted: April 20, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-muted py-6">
        <div className="container">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Educational Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
