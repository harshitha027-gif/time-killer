
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import QuizComponent from "@/components/QuizComponent";
import { getQuizTopics } from "@/lib/courseData";
import { toast } from "sonner";

const Quizzes = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const quizTopics = getQuizTopics();
  
  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn) {
      toast.error("Please log in to access quizzes");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  
  if (!isLoggedIn) {
    return null; // Don't render anything while redirecting
  }
  
  const handleStartQuiz = (topic: string) => {
    setSelectedTopic(topic);
    setQuizStarted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
        <p className="text-muted-foreground mb-8">
          Test your knowledge with our interactive quizzes
        </p>
        
        {quizStarted && selectedTopic ? (
          <div className="max-w-2xl mx-auto">
            <Button 
              variant="outline" 
              className="mb-6"
              onClick={() => setQuizStarted(false)}
            >
              Back to Topics
            </Button>
            <QuizComponent topic={selectedTopic} />
          </div>
        ) : (
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Topics</TabsTrigger>
              <TabsTrigger value="recent">Recently Added</TabsTrigger>
              <TabsTrigger value="popular">Popular Quizzes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizTopics.map((topic) => (
                  <Card key={topic} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-2">{topic}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Test your knowledge in {topic.toLowerCase()} concepts
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleStartQuiz(topic)}
                      >
                        Start Quiz
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizTopics.slice(0, 3).map((topic) => (
                  <Card key={topic} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-2">{topic}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Test your knowledge in {topic.toLowerCase()} concepts
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleStartQuiz(topic)}
                      >
                        Start Quiz
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizTopics.slice(2, 5).map((topic) => (
                  <Card key={topic} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-2">{topic}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Test your knowledge in {topic.toLowerCase()} concepts
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleStartQuiz(topic)}
                      >
                        Start Quiz
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
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

export default Quizzes;
