import React, { createContext, useContext, useState, useEffect } from "react";
import { users } from "../data/data";

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for user in localStorage on initial load
  useEffect(() => {
    const checkLoggedIn = () => {
      try {
        const savedUser = localStorage.getItem("user");
        
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          setCurrentUser(parsedUser);
        }
      } catch (error) {
        console.error("Error loading saved user:", error);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };
    
    checkLoggedIn();
  }, []);

  // Sign in function
  const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      // In a real app, this would be an API call
      setTimeout(() => {
        const user = users.find(user => user.email === email);
        
        if (user && password === "password") { // In a real app, passwords would be hashed and verified
          // Set user in state and local storage
          setCurrentUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  };

  // Sign up function
  const signUp = (username, email, password) => {
    return new Promise((resolve, reject) => {
      // In a real app, this would be an API call
      setTimeout(() => {
        const userExists = users.some(user => user.email === email);
        
        if (userExists) {
          reject(new Error("Email already in use"));
        } else {
          // Create a new user object
          const newUser = {
            id: Date.now(),
            username,
            email,
            isSubscribed: false,
            profileImage: "https://randomuser.me/api/portraits/lego/1.jpg"
          };
          
          // In a real app, you'd add this user to the database
          setCurrentUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
          resolve(newUser);
        }
      }, 1000);
    });
  };

  // Sign out function
  const signOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  // Context value
  const value = {
    currentUser,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
