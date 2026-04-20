import React, { useState } from 'react'; // Added useState
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // Logout function to be passed down
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Pass the setUser function so Login can update the app state */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        
        {/* Protected Route Logic:
          If user exists, show Dashboard. 
          If not, Redirect (Navigate) to login. 
        */}
        <Route 
          path="/dashboard" 
          element={
            user ? (
              <Dashboard student={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;