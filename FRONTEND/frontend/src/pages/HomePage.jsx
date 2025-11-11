import React, { useEffect, useState } from 'react';
import PatientList from '../components/patientList/PatientList.jsx';
import PatientForm from '../components/patientForm/PatientForm.jsx';
import axios from 'axios';

const HomePage = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/patients');
      setPatients(res.data);
    } catch (error) {
      console.error('Error fetching patients', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const addPatient = async (patientData) => {
  try {
    const res = await axios.post('http://localhost:5000/api/patients', patientData);
    // Append new patient locally to avoid refetch
    setPatients(prev => [...prev, res.data]);
  } catch (error) {
    console.error('Error adding patient', error);
  }
};


  return (
    <div>
      <h1>Uzima Pal - Diabetes Patients</h1>
      <PatientForm onSave={addPatient} />
      <PatientList patients={patients} />
    </div>
  );
};

export default HomePage;
