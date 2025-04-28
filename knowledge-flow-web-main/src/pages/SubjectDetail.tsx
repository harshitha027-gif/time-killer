
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import { getSubjectById } from "@/lib/courseData";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const SubjectDetail = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const [subject, setSubject] = useState<{
    id: string;
    name: string;
    videoId?: string;
    description: string;
  } | null>(null);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn) {
      toast.error("Please log in to access subject details");
      navigate("/login");
      return;
    }
    
    if (subjectId) {
      const foundSubject = getSubjectById(subjectId);
      if (foundSubject) {
        setSubject(foundSubject);
      } else {
        toast.error("Subject not found");
        navigate("/courses");
      }
    }
  }, [subjectId, isLoggedIn, navigate]);
  
  if (!isLoggedIn || !subject) {
    return null; // Don't render anything while redirecting or loading
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <Link to="/courses" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Courses
        </Link>
        
        <h1 className="text-3xl font-bold mb-2">{subject.name}</h1>
        <p className="text-muted-foreground mb-8">{subject.description}</p>
        
        <div className="mb-8">
          {subject.videoId ? (
            <VideoPlayer videoId={subject.videoId} />
          ) : (
            <div className="bg-muted p-12 rounded-lg text-center">
              <p className="text-muted-foreground">Video not available for this subject.</p>
            </div>
          )}
        </div>
        
        {/* Additional Resources */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Button variant="link" className="h-auto p-0">
                  Lecture Notes (PDF)
                </Button>
              </li>
              <li className="flex items-center">
                <Button variant="link" className="h-auto p-0">
                  Practice Problems
                </Button>
              </li>
              <li className="flex items-center">
                <Button variant="link" className="h-auto p-0">
                  Recommended Reading
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Related Topics */}
        <h2 className="text-xl font-bold mb-4">Related Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-medium">Introduction</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Basic concepts and foundation knowledge
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-medium">Advanced Topics</h3>
              <p className="text-sm text-muted-foreground mt-1">
                In-depth exploration of complex concepts
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-medium">Practical Applications</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Real-world use cases and implementations
              </p>
            </CardContent>
          </Card>
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

export default SubjectDetail;
