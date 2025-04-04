import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contacto from "./pages/contacto";
import Usuarios from "./pages/Usuarios";

// ProtectedRoute component that checks if the user is authenticated
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if a token exists (adjust based on your auth flow)

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children; // Otherwise, render the protected route
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Protected routes */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/contacto" 
          element={
            <ProtectedRoute>
              <Contacto />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/usuarios" 
          element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
