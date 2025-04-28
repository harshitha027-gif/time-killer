import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-hero-pattern py-20 text-white">
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Book size={48} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to E-Portal
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Your gateway to interactive learning and knowledge assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                  <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-medium">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose E-Portal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Book size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Courses</h3>
                <p className="text-muted-foreground">
                  Access a wide range of courses across multiple subjects, designed to enhance your learning experience.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Book size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
                <p className="text-muted-foreground">
                  Engage with curated video content from industry experts and educational resources.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Book size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Knowledge Assessment</h3>
                <p className="text-muted-foreground">
                  Test your understanding through quizzes designed to reinforce your learning and track progress.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Categories Preview */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Explore Our Course Categories</h2>
            <p className="text-center text-muted-foreground mb-8">
              Discover a wide range of subjects tailored to your academic needs
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-math-gradient text-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold">MATHEMATICS</h3>
              </div>
              <div className="bg-programming-gradient text-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold">PROGRAMMING</h3>
              </div>
              <div className="bg-core-gradient text-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold">CORE CSE</h3>
              </div>
              <div className="bg-software-gradient text-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold">SOFTWARE</h3>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/login">
                <Button variant="outline" className="group">
                  Explore All Categories
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-card-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-xl mb-8">
              Join E-Portal today and unlock access to all our courses and learning resources
            </p>
            <Link to="/register">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                Register Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Book className="h-6 w-6 text-primary" />
              <span className="font-bold">E-Portal</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Educational Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
