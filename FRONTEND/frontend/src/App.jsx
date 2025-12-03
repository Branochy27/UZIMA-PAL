import React, { useState } from 'react';
import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import Dashboard from './components/Dashboard';
import HealthForm from './components/HealthForm';
import PatientList from './components/PatientList';
import BloodSugarTracker from './components/BloodSugarTracker';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [sugarReadings, setSugarReadings] = useState([95]); // array of readings

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
      <SignedIn>
        {currentPage === 'dashboard' ? (
          <Dashboard
            sugar={sugarReadings[sugarReadings.length - 1]}
            readings={sugarReadings}
            onTrackSugar={handleTrackSugar}
            onLogReading={handleLogReading}
            onGoToForm={() => setCurrentPage('form')}
            onGoToPatients={() => setCurrentPage('patients')}
          />
        ) : currentPage === 'form' ? (
          <HealthForm onBack={() => setCurrentPage('dashboard')} />
        ) : currentPage === 'patients' ? (
          <PatientList onViewPatient={(patient) => {
            setSelectedPatient(patient);
            setCurrentPage('tracker');
          }} />
        ) : currentPage === 'tracker' ? (
          <BloodSugarTracker
            patient={selectedPatient}
            onBack={() => setCurrentPage('patients')}
          />
        ) : null}
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}

export default App;
