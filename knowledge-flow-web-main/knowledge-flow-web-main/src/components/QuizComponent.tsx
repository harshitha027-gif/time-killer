
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Mock quiz data for each topic
const quizData = {
  "MATHEMATICS": [
    {
      question: "What is the derivative of f(x) = x²?",
      options: ["f'(x) = x", "f'(x) = 2x", "f'(x) = 2", "f'(x) = x²"],
      answer: "f'(x) = 2x"
    },
    {
      question: "Which of these is a linear equation?",
      options: ["y = x²", "y = 2x + 3", "y = sin(x)", "y = 1/x"],
      answer: "y = 2x + 3"
    },
    {
      question: "What is the integral of f(x) = 2x?",
      options: ["x²", "x² + C", "2x² + C", "x² - C"],
      answer: "x² + C"
    }
  ],
  "PROGRAMMING": [
    {
      question: "Which is not a programming language?",
      options: ["Python", "Java", "HTML", "C++"],
      answer: "HTML"
    },
    {
      question: "What does OOP stand for?",
      options: ["Object Oriented Programming", "Outcome Oriented Protocol", "Object Order Processing", "Online Object Protocol"],
      answer: "Object Oriented Programming"
    },
    {
      question: "Which language is commonly used for Android development?",
      options: ["Swift", "Java", "C#", "Ruby"],
      answer: "Java"
    }
  ],
  "CORE CSE": [
    {
      question: "Which data structure uses LIFO principle?",
      options: ["Queue", "Stack", "Linked List", "Tree"],
      answer: "Stack"
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
      answer: "O(log n)"
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
      answer: "Quick Sort"
    }
  ],
  "SOFTWARE & ENGINEERING": [
    {
      question: "Which is not a software development model?",
      options: ["Waterfall", "Agile", "Spiral", "Circular"],
      answer: "Circular"
    },
    {
      question: "What does CI/CD stand for?",
      options: ["Computer Integration/Computer Development", "Continuous Integration/Continuous Deployment", "Code Integration/Code Delivery", "Continuous Inclusion/Continuous Delivery"],
      answer: "Continuous Integration/Continuous Deployment"
    },
    {
      question: "Which testing method tests individual components or functions?",
      options: ["Unit Testing", "Integration Testing", "System Testing", "Acceptance Testing"],
      answer: "Unit Testing"
    }
  ],
  "INTELLIGENT TECH": [
    {
      question: "What does ML stand for in AI?",
      options: ["Multiple Language", "Machine Learning", "Meta Language", "Module Library"],
      answer: "Machine Learning"
    },
    {
      question: "Which is a supervised learning algorithm?",
      options: ["K-means", "Decision Trees", "Apriori", "Principal Component Analysis"],
      answer: "Decision Trees"
    },
    {
      question: "What is the goal of NLP in AI?",
      options: ["Network Layer Processing", "Natural Language Processing", "Numerical Language Program", "New Learning Protocol"],
      answer: "Natural Language Processing"
    }
  ],
  "EMERGING TECH": [
    {
      question: "Which is not a cloud service model?",
      options: ["IaaS", "PaaS", "SaaS", "BaaS"],
      answer: "BaaS"
    },
    {
      question: "What is the primary technology behind Bitcoin?",
      options: ["AI", "Cloud Computing", "Blockchain", "Big Data"],
      answer: "Blockchain"
    },
    {
      question: "What does IoT stand for?",
      options: ["Internet of Things", "Integration of Technology", "Input Output Technology", "Information of Technology"],
      answer: "Internet of Things"
    }
  ],
  "THEORY BASED": [
    {
      question: "Which is not a type of automaton?",
      options: ["Finite Automaton", "Pushdown Automaton", "Linear Automaton", "Turing Machine"],
      answer: "Linear Automaton"
    },
    {
      question: "Which of these is a formal grammar classification?",
      options: ["Type-0", "Type-5", "Type-10", "Type-E"],
      answer: "Type-0"
    },
    {
      question: "What does CG stand for in computer science?",
      options: ["Command Generation", "Computer Graphics", "Code Generation", "Computer Gateway"],
      answer: "Computer Graphics"
    }
  ],
  "PROJECT & ELECTIVES": [
    {
      question: "What is a capstone project?",
      options: ["First year project", "A small coding task", "A culminating project demonstrating skills", "A theoretical study"],
      answer: "A culminating project demonstrating skills"
    },
    {
      question: "Which is typically not part of an internship?",
      options: ["Learning industry practices", "Working with mentors", "Taking university exams", "Building professional network"],
      answer: "Taking university exams"
    },
    {
      question: "What is the purpose of elective courses?",
      options: ["To replace core courses", "To specialize in areas of interest", "To avoid difficult subjects", "To earn extra credit"],
      answer: "To specialize in areas of interest"
    }
  ]
};

interface QuizComponentProps {
  topic: string;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ topic }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Get questions for the selected topic or use default if topic not found
  const questions = quizData[topic as keyof typeof quizData] || quizData.PROGRAMMING;
  
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };
  
  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      toast.warning("Please select an answer");
      return;
    }
    
    // Check if answer is correct
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    // Move to next question or complete quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };
  
  if (quizCompleted) {
    return (
      <Card className="w-full shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-primary">Quiz Completed!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-2xl font-bold">
            Your Score: {score}/{questions.length}
          </div>
          <div className="text-center text-muted-foreground">
            {score === questions.length 
              ? "Perfect score! Excellent work!" 
              : score >= questions.length / 2 
              ? "Good job! Keep learning to improve further." 
              : "Keep practicing to improve your knowledge."}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={restartQuiz}>Try Again</Button>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>{topic} Quiz</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>
        <RadioGroup value={selectedAnswer || ""} onValueChange={handleAnswerSelect}>
          {questions[currentQuestion].options.map((option, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button onClick={handleNextQuestion} className="w-full">
          {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizComponent;
