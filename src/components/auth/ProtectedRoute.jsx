import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

/**
 * A wrapper around routes that should only be accessible to authenticated users.
 * Redirects to login page if user is not authenticated.
 */
const ProtectedRoute = () => {
  const { currentUser, loading } = useAuth();

  // Show nothing while we check if the user is logged in
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
