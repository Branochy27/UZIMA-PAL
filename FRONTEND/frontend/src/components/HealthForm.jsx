import React, { useState } from 'react';

function HealthForm({ onBack }) {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [readings, setReadings] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bloodSugar) {
      setReadings(prev => [...prev, parseInt(bloodSugar)]);
      setBloodSugar('');
    }
  };

  const average = readings.length > 0 ? (readings.reduce((a, b) => a + b, 0) / readings.length).toFixed(1) : 0;
  const min = readings.length > 0 ? Math.min(...readings) : 0;
  const max = readings.length > 0 ? Math.max(...readings) : 0;

  return (
    <div className="health-form card">
      <h3>Health Data Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Blood Sugar Level (mg/dL):
          <input type="number" value={bloodSugar} onChange={(e) => setBloodSugar(e.target.value)} />
        </label>
        <button type="submit" className="btn">Log Reading</button>
      </form>
      <div className="trends">
        <h4>Trends</h4>
        <p>Average: {average} mg/dL</p>
        <p>Min: {min} mg/dL</p>
        <p>Max: {max} mg/dL</p>
        <ul>
          {readings.map((r, i) => <li key={i}>{r} mg/dL</li>)}
        </ul>
      </div>
      <button className="btn" onClick={onBack}>Back to Dashboard</button>
    </div>
  );
}

export default HealthForm;