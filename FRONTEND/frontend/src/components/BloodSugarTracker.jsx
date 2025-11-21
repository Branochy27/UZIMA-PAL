import React, { useState } from 'react';

function BloodSugarTracker({ patient, onBack }) {
  const [readings, setReadings] = useState([
    { date: '2023-11-15', value: 95 },
    { date: '2023-11-16', value: 102 },
    { date: '2023-11-17', value: 98 },
    { date: '2023-11-18', value: 105 },
    { date: '2023-11-19', value: 92 },
  ]);

  const [newReading, setNewReading] = useState('');

  const handleAddReading = () => {
    if (newReading) {
      const today = new Date().toISOString().split('T')[0];
      setReadings(prev => [...prev, { date: today, value: parseInt(newReading) }]);
      setNewReading('');
    }
  };

  const average = readings.length > 0 ? (readings.reduce((a, b) => a + b.value, 0) / readings.length).toFixed(1) : 0;
  const min = readings.length > 0 ? Math.min(...readings.map(r => r.value)) : 0;
  const max = readings.length > 0 ? Math.max(...readings.map(r => r.value)) : 0;

  return (
    <div className="blood-sugar-tracker card">
      <h2>Blood Sugar Tracking for {patient.name}</h2>
      <div className="tracker-stats">
        <div className="stat">
          <h3>Average</h3>
          <p>{average} mg/dL</p>
        </div>
        <div className="stat">
          <h3>Min</h3>
          <p>{min} mg/dL</p>
        </div>
        <div className="stat">
          <h3>Max</h3>
          <p>{max} mg/dL</p>
        </div>
      </div>
      <div className="add-reading">
        <input
          type="number"
          placeholder="Enter blood sugar reading"
          value={newReading}
          onChange={(e) => setNewReading(e.target.value)}
        />
        <button className="btn" onClick={handleAddReading}>Add Reading</button>
      </div>
      <div className="readings-list">
        <h3>Recent Readings</h3>
        <ul>
          {readings.slice(-10).reverse().map((reading, index) => (
            <li key={index}>
              {reading.date}: {reading.value} mg/dL
            </li>
          ))}
        </ul>
      </div>
      <button className="btn" onClick={onBack}>Back to Patient List</button>
    </div>
  );
}

export default BloodSugarTracker;