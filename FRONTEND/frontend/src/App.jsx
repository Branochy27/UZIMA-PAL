import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import HealthForm from './components/HealthForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sugarReadings, setSugarReadings] = useState([95]); // array of readings

  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage or token)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (credentials) => {
    // Simulate API call
    console.log('Logging in with:', credentials);
    // In real app, call backend API
    // For demo, just set logged in
    localStorage.setItem('token', 'fake-token');
    setIsLoggedIn(true);
  };

  const handleTrackSugar = () => {
    alert('Track Blood Sugar clicked');
    // Implement tracking logic
  };

  const handleLogReading = () => {
    const newReading = prompt('Enter blood sugar reading:');
    if (newReading) {
      setSugarReadings(prev => [...prev, parseInt(newReading)]);
    }
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        currentPage === 'dashboard' ? (
          <Dashboard
            sugar={sugarReadings[sugarReadings.length - 1]}
            readings={sugarReadings}
            onTrackSugar={handleTrackSugar}
            onLogReading={handleLogReading}
            onGoToForm={() => setCurrentPage('form')}
          />
        ) : (
          <HealthForm onBack={() => setCurrentPage('dashboard')} />
        )
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
