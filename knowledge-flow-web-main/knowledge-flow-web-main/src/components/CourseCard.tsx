
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { CourseCategory } from "@/lib/courseData";

interface CourseCardProps {
  category: CourseCategory;
}

const CourseCard: React.FC<CourseCardProps> = ({ category }) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className={cn("h-full cursor-pointer overflow-hidden transition-all hover:shadow-lg", category.gradient)}
      onClick={() => {
        const expandedCategory = document.getElementById(`${category.id}-expanded`);
        if (expandedCategory) {
          expandedCategory.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
        <p className="text-white/80 text-sm">
          {category.subjects.length} subjects
        </p>
      </CardContent>
    </Card>
  );
};

export const SubjectItem = ({ subject }: { subject: { id: string; name: string; description: string } }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="p-4 rounded-lg bg-card border hover:bg-accent/10 transition-colors cursor-pointer"
      onClick={() => navigate(`/subject/${subject.id}`)}
    >
      <h4 className="font-medium">{subject.name}</h4>
      <p className="text-sm text-muted-foreground mt-1">{subject.description}</p>
    </div>
  );
};

export default CourseCard;
