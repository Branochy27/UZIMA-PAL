import React from 'react';

function HealthLog({ readings }) {
  return (
    <div className="health-log card">
      <h3>Health Log</h3>
      <ul>
        {readings.map((reading, index) => (
          <li key={index}>Reading {index + 1}: {reading} mg/dL</li>
        ))}
      </ul>
    </div>
  );
}

export default HealthLog;