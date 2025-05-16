import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavigationContext, { NavigationProvider, useNavigation } from './context/NavigationContext';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WatchPage from "./pages/WatchPage";
import GivePage from "./pages/GivePage";
import ConnectPage from "./pages/ConnectPage";
import EventsPage from "./pages/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";

// Route wrapper that updates current page in context
const RouteObserver = ({ children }) => {
  const location = useLocation();
  const { setCurrentPage } = useNavigation();
  
  useEffect(() => {
    // Extract the current page from the path
    const path = location.pathname.split('/')[1] || 'home';
    setCurrentPage(path);
  }, [location, setCurrentPage]);
  
  return children;
};

function AppContent() {
  return (
    <RouteObserver>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/*" element={<AboutPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/give" element={<GivePage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/events/*" element={<EventsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RouteObserver>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;