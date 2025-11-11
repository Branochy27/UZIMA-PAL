const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  diabetesType: String,
  bloodSugarLevels: [
    {
      date: { type: Date, default: Date.now },
      level: Number,
    },
  ],
  medications: [String],
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);
