
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validateRollNumber, validatePassword, getRollNumberErrorMessage, getPasswordErrorMessage } from "@/lib/validation";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rollNumber: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    rollNumber: "",
    password: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const rollNumberValid = validateRollNumber(formData.rollNumber);
    const passwordValid = validatePassword(formData.password);
    
    if (!rollNumberValid || !passwordValid) {
      setErrors({
        rollNumber: rollNumberValid ? "" : getRollNumberErrorMessage(),
        password: passwordValid ? "" : getPasswordErrorMessage()
      });
      return;
    }
    
    // Mock authentication - we'd normally check against a database
    // For demo purposes, let's say any valid roll number format will work
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRoll", formData.rollNumber);
    // Extract name from local storage if available, or use a default
    const storedName = localStorage.getItem(formData.rollNumber);
    localStorage.setItem("userName", storedName || "Student");
    
    toast.success("Login successful!");
    navigate("/home");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Student Login</CardTitle>
              <CardDescription>
                Enter your college roll number and password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="rollNumber">Roll Number</Label>
                    <Input
                      id="rollNumber"
                      name="rollNumber"
                      placeholder="e.g., 23N71A0123"
                      value={formData.rollNumber}
                      onChange={handleInputChange}
                      className={errors.rollNumber ? "border-destructive" : ""}
                    />
                    {errors.rollNumber && (
                      <p className="text-xs text-destructive">{errors.rollNumber}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={errors.password ? "border-destructive" : ""}
                    />
                    {errors.password && (
                      <p className="text-xs text-destructive">{errors.password}</p>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="underline text-primary hover:text-primary/80">
                  Register here
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Login;
