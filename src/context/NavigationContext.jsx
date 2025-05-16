import React, { createContext, useContext, useState } from "react";

// Create the context
const NavigationContext = createContext();

// Export the context itself as default for direct imports
export default NavigationContext;

// Create a provider component
export const NavigationProvider = ({ children }) => {
  // Track if we're on transparent header pages (like homepage)
  const [isTransparentHeader, setIsTransparentHeader] = useState(true);

  // Track current page for context-specific styling
  const [currentPage, setCurrentPage] = useState("home");
  // Custom theme colors aligned with Lakewood Church style
  const pageThemes = {
    home: {
      primaryColor: "blue-800", // Deep blue similar to Lakewood's #004B87
      secondaryColor: "blue-900",
      accentColor: "yellow-500", // Gold/yellow similar to Lakewood's #F2A900
    },
    about: {
      primaryColor: "blue-800",
      secondaryColor: "blue-900",
      accentColor: "yellow-500",
    },
    watch: {
      primaryColor: "blue-800",
      secondaryColor: "blue-900",
      accentColor: "yellow-500",
    },
    give: {
      primaryColor: "blue-800",
      secondaryColor: "blue-900",
      accentColor: "yellow-500",
    },
    connect: {
      primaryColor: "blue-800",
      secondaryColor: "blue-900",
      accentColor: "yellow-500",
    },
    events: {
      primaryColor: "blue-800",
      secondaryColor: "blue-900",
      accentColor: "yellow-500",
    },
  };

  // Get current theme based on page
  const getCurrentTheme = () => {
    return pageThemes[currentPage] || pageThemes.home;
  };

  return (
    <NavigationContext.Provider
      value={{
        isTransparentHeader,
        setIsTransparentHeader,
        currentPage,
        setCurrentPage,
        getCurrentTheme,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

// Create a custom hook to use the context
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
