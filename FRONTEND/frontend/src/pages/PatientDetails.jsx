import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/patients/${id}`);
        setPatient(res.data);
      } catch (error) {
        console.error('Error loading patient', error);
      }
    };
    fetchPatient();
  }, [id]);

  if (!patient) return <div>Loading...</div>;

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Diabetes Type: {patient.diabetesType}</p>
      <h3>Blood Sugar Levels</h3>
      <ul>
        {patient.bloodSugarLevels.map((entry, idx) => (
          <li key={idx}>
            {new Date(entry.date).toLocaleDateString()}: {entry.level} mg/dL
          </li>
        ))}
      </ul>
      <h3>Medications</h3>
      <ul>
        {patient.medications.map((med, idx) => (
          <li key={idx}>{med}</li>
        ))}
      </ul>
      <p>Notes: {patient.notes}</p>
    </div>
  );
};

export default PatientDetails;
