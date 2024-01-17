import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from './hooks/useAuth';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user || user === "null") {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
