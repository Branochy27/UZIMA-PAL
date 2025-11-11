import React, { useState } from 'react';
import './PatientForm.css';

const PatientForm = ({ onSave, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    age: initialData.age || '',
    gender: initialData.gender || '',
    diabetesType: initialData.diabetesType || '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (formData.age && (isNaN(formData.age) || formData.age <= 0))
      errs.age = 'Please enter a valid age';
    if (!formData.gender.trim()) errs.gender = 'Gender required';
    if (!formData.diabetesType.trim()) errs.diabetesType = 'Diabetes type required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
      // Reset form if needed
      setFormData({ name: '', age: '', gender: '', diabetesType: '' });
    }
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div className="form-field">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      
      <div className="form-field">
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>
      
      <div className="form-field">
        <label>Diabetes Type</label>
        <input
          type="text"
          name="diabetesType"
          value={formData.diabetesType}
          onChange={handleChange}
        />
        {errors.diabetesType && <span className="error">{errors.diabetesType}</span>}
      </div>
      
      <button type="submit">Save Patient</button>
    </form>
  );
};

export default PatientForm;
