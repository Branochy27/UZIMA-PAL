import React from 'react';
import { Link } from 'react-router-dom';
import './PatientList.css';

const PatientList = ({ patients, onDeletePatient }) => {
  if (!patients || patients.length === 0) {
    return (
      <div className="patient-list">
        <h2>🧑‍⚕️ Patients</h2>
        <p>No patients found. Please add some.</p>
      </div>
    );
  }

  return (
    <div className="patient-list">
      <h2>🧑‍⚕️ Patients (Total: {patients.length})</h2>

      <div className="patients-container">
        {patients.map((patient) => (
          <div key={patient._id} className="patient-card">
            <Link to={`/patients/${patient._id}`} className="patient-link">
              <span className="badge name">{patient.name}</span>
              <span className="badge age">{patient.age} yrs</span>
              <span className="badge gender">{patient.gender}</span>
              <span className="badge diabetes-type">{patient.diabetesType}</span>
            </Link>

            <button
              className="btn-delete"
              onClick={() => onDeletePatient(patient._id)}
              title="Delete this patient"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
