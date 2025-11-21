import React from 'react';

function PatientList({ onViewPatient }) {
  // Mock patient data
  const patients = [
    { id: 1, name: 'John Doe', age: 45, gender: 'Male', lastSugar: 120, status: 'Normal' },
    { id: 2, name: 'Jane Smith', age: 32, gender: 'Female', lastSugar: 95, status: 'Good' },
    { id: 3, name: 'Bob Johnson', age: 58, gender: 'Male', lastSugar: 150, status: 'High' },
    { id: 4, name: 'Alice Brown', age: 29, gender: 'Female', lastSugar: 85, status: 'Good' },
    { id: 5, name: 'Charlie Wilson', age: 67, gender: 'Male', lastSugar: 180, status: 'Critical' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Good': return '#10b981';
      case 'Normal': return '#facc15';
      case 'High': return '#f97316';
      case 'Critical': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="patient-list">
      <h2>All Patients</h2>
      <div className="patient-grid">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="patient-card"
            style={{ borderLeftColor: getStatusColor(patient.status) }}
            onClick={() => onViewPatient && onViewPatient(patient)}
          >
            <h3>{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Last Sugar: {patient.lastSugar} mg/dL</p>
            <span className="status" style={{ backgroundColor: getStatusColor(patient.status) }}>
              {patient.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientList;