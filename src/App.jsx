import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavigationContext, {
  NavigationProvider,
  useNavigation,
} from "./context/NavigationContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PageTransition from "./components/transitions/PageTransition";
import ServiceTimer from "./components/common/ServiceTimer";
import Layout from "./components/layout/Layout"; // Import Layout
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WatchPage from "./pages/WatchPage";
import GivePage from "./pages/GivePage";
import ConnectPage from "./pages/ConnectPage";
import EventsPage from "./pages/EventsPage";
import VisitPage from "./pages/VisitPage"; // Added
import GrowPage from "./pages/GrowPage";   // Added
import CarePage from "./pages/CarePage";   // Added
import ServiceTimesPage from "./pages/ServiceTimesPage"; // Added
import SignInPage from "./pages/SignInPage"; // Added
import ProfilePage from "./pages/ProfilePage"; // Added
import AccountSettingsPage from "./pages/AccountSettingsPage"; // Added
import ForgotPasswordPage from "./pages/ForgotPasswordPage"; // Added
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/serviceTimer.css";

// Route wrapper that updates current page in context
const RouteObserver = ({ children }) => {
  const location = useLocation();
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    // Extract the current page from the path
    const path = location.pathname.split("/")[1] || "home";
    setCurrentPage(path);
  }, [location, setCurrentPage]);

  return children;
};

function AppContent() {
  const location = useLocation();

  return (
    <RouteObserver>
      <Layout> {/* Wrap with Layout component */}
        <PageTransition>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/*" element={<AboutPage />} />
            <Route path="/visit/*" element={<VisitPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/watch/:messageId" element={<WatchPage />} />            <Route path="/give" element={<GivePage />} />
            <Route path="/connect/*" element={<ConnectPage />} />
            <Route path="/grow/*" element={<GrowPage />} />
            <Route path="/care/*" element={<CarePage />} />            <Route path="/events/*" element={<EventsPage />} />            <Route path="/service-times/*" element={<ServiceTimesPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/account-settings" element={<AccountSettingsPage />} />
              {/* Add more protected routes here */}
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </Layout> {/* Close Layout component */}
    </RouteObserver>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AuthProvider>
        <div className="app-container">
          <AppContent />
          <ServiceTimer />
        </div>
      </AuthProvider>
    </NavigationProvider>
  );
}

export default App;
