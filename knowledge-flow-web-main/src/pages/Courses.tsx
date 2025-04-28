
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import CourseCard, { SubjectItem } from "@/components/CourseCard";
import { courseCategories } from "@/lib/courseData";
import { toast } from "sonner";

const Courses = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn) {
      toast.error("Please log in to access courses");
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
        <h1 className="text-3xl font-bold mb-2">Courses</h1>
        <p className="text-muted-foreground mb-8">
          Browse through our comprehensive collection of courses and learning materials
        </p>
        
        {/* Course Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courseCategories.map((category) => (
            <CourseCard key={category.id} category={category} />
          ))}
        </div>
        
        {/* Expanded Categories with Subjects */}
        <div className="space-y-12">
          {courseCategories.map((category) => (
            <div key={category.id} id={`${category.id}-expanded`} className="scroll-mt-20">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <div className={`h-1 w-20 mt-2 rounded-full ${category.gradient}`}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.subjects.map((subject) => (
                  <SubjectItem key={subject.id} subject={subject} />
                ))}
              </div>
            </div>
          ))}
        </div>
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

export default Courses;
