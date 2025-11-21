import React from 'react';

function BloodPressureCard({ value }) {
  return (
    <div className="card">
      <h3>Blood Pressure</h3>
      <div>Latest reading from today</div>
      <div className="value">{value} mmHg - Normal range</div>
      <button>Log New Reading</button>
    </div>
  );
}

export default BloodPressureCard;
