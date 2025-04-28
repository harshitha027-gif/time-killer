
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validateName } from "@/lib/validation";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { User } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  
  // Get user data from local storage
  const rollNumber = localStorage.getItem("userRoll") || "";
  const storedName = localStorage.getItem("userName") || "";
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  const [name, setName] = useState(storedName);
  
  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn) {
      toast.error("Please log in to view your profile");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  
  if (!isLoggedIn) {
    return null; // Don't render anything while redirecting
  }
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError("");
  };
  
  const handleSaveChanges = () => {
    if (!validateName(name)) {
      setError("Please enter a valid name (letters and spaces only)");
      return;
    }
    
    // Save updated name to local storage
    localStorage.setItem("userName", name);
    if (rollNumber) {
      localStorage.setItem(rollNumber, name);
    }
    
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                {isEditing ? (
                  <div>
                    <Input
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      className={error ? "border-destructive" : ""}
                    />
                    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
                  </div>
                ) : (
                  <p className="text-foreground font-medium">{name}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="rollNumber">Roll Number</Label>
                <p className="text-foreground font-medium">{rollNumber}</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <p className="text-foreground font-medium">Student</p>
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                {isEditing ? (
                  <>
                    <Button variant="outline" onClick={() => {
                      setIsEditing(false);
                      setName(storedName);
                      setError("");
                    }}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveChanges}>Save Changes</Button>
                  </>
                ) : (
                  <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Summary Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Profile Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex flex-col items-center justify-center pt-4">
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-muted-foreground">{rollNumber}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Courses Enrolled</span>
                  <span className="font-medium">8</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Quizzes Completed</span>
                  <span className="font-medium">12</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Score</span>
                  <span className="font-medium">85%</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full" onClick={() => {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("userRoll");
                localStorage.removeItem("userName");
                navigate("/");
                toast.success("Logged out successfully");
              }}>
                Sign Out
              </Button>
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

export default Profile;
