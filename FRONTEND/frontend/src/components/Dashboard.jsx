import React from 'react';
import BloodSugarCard from './BloodSugarCard';
import QuickActions from './QuickActions';
import HealthTip from './HealthTip';
import HealthLog from './HealthLog';

function Dashboard({ sugar, readings, onTrackSugar, onLogReading, onGoToForm, onGoToPatients }) {
  return (
    <div className="dashboard">
      <h1>Uzima Pal</h1>
      <h2>Welcome Back! 👋</h2>
      <div className="call-to-action">
        <p>Your health is your wealth</p>
      </div>
      <div className="health-section">
        <BloodSugarCard value={sugar} onLogReading={onLogReading} />
      </div>
      <HealthLog readings={readings} />
      <QuickActions onTrackSugar={onTrackSugar} />
      <div className="navigation-buttons">
        <button className="btn" onClick={onGoToForm}>Go to Health Form</button>
        <button className="btn" onClick={onGoToPatients}>View All Patients</button>
      </div>
      <HealthTip />
    </div>
  );
}

export default Dashboard;
