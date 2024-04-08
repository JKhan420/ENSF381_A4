import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './component/Homepage'; // Corrected the path to the Homepage component
import Productpage from './component/Productpage'; // Corrected the path to the Productpage component
import LoginPage from './component/LoginPage'; // Corrected the path to the LoginPage component

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
  return children;
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/products" 
          element={
            <ProtectedRoute>
              <Productpage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
