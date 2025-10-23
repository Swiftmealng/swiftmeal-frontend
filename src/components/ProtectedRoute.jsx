import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children, requireAdmin = false, requireRole = null }) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF0000] mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check admin role if required
  if (requireAdmin && user?.role !== 'admin') {
    return <Navigate to="/create-order" replace />;
  }

  // Check specific role if required
  if (requireRole && user?.role !== requireRole) {
    return <Navigate to="/create-order" replace />;
  }

  // User is authenticated and authorized
  return children;
};

export default ProtectedRoute;