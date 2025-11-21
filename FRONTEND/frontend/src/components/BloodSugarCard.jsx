import React from 'react';

function BloodSugarCard({ value, onLogReading }) {
  return (
    <div className="card blood-sugar-card">
      <h3>Blood Sugar</h3>
      <div>Latest reading from today</div>
      <div className="value">{value} mg/dL - Normal range</div>
      <button onClick={onLogReading}>Log New Reading</button>
    </div>
  );
}

export default BloodSugarCard;
