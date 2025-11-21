import React from 'react';
import BloodSugarCard from './BloodSugarCard';
import QuickActions from './QuickActions';
import HealthTip from './HealthTip';
import HealthLog from './HealthLog';

function Dashboard({ sugar, readings, onTrackSugar, onLogReading, onGoToForm }) {
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
      <button className="btn" onClick={onGoToForm}>Go to Health Form</button>
      <HealthTip />
    </div>
  );
}

export default Dashboard;
