import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // adjust if needed

const PrivateRoute = ({ children, role }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Guest: not logged in, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Logged in, check role
  if (role === "user" && user?.role === "user") {
    // Authenticated user with user role - allow access
    return children;
  }

  if (role === "admin" && user?.role === "admin") {
    // Authenticated user with admin role - allow access
    return children;
  }

  // Role does not match, redirect or block access
  return <Navigate to="/" replace />; // or a forbidden page
};

export default PrivateRoute;
