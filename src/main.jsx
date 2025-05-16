import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { initScrollReveal } from "./utils/scrollReveal";

// Wrapper component to initialize scroll reveal
const AppWithScrollReveal = () => {
  useEffect(() => {
    // Initialize scroll reveal and store cleanup function
    const cleanup = initScrollReveal();

    // Clean up event listener on unmount
    return cleanup;
  }, []);

  return (
    <Router>
      <App />
    </Router>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWithScrollReveal />
  </StrictMode>
);
