import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientDetails from './pages/PatientDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
