import React, { createContext, useContext, useState } from 'react';

// Create the context
const NavigationContext = createContext();

// Export the context itself as default for direct imports
export default NavigationContext;

// Create a provider component
export const NavigationProvider = ({ children }) => {
  // Track if we're on transparent header pages (like homepage)
  const [isTransparentHeader, setIsTransparentHeader] = useState(true);
  
  // Track current page for context-specific styling
  const [currentPage, setCurrentPage] = useState('home');
  
  // Custom theme colors for different pages
  const pageThemes = {
    home: {
      primaryColor: 'blue-600',
      secondaryColor: 'blue-700',
      accentColor: 'blue-400',
    },
    about: {
      primaryColor: 'indigo-600',
      secondaryColor: 'indigo-700',
      accentColor: 'indigo-400',
    },
    watch: {
      primaryColor: 'violet-600',
      secondaryColor: 'violet-700',
      accentColor: 'violet-400',
    },
    give: {
      primaryColor: 'green-600',
      secondaryColor: 'green-700',
      accentColor: 'green-400',
    },
    connect: {
      primaryColor: 'orange-600',
      secondaryColor: 'orange-700',
      accentColor: 'orange-400',
    },
    events: {
      primaryColor: 'amber-600',
      secondaryColor: 'amber-700',
      accentColor: 'amber-400',
    }
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
        getCurrentTheme
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
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
