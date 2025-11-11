require('dotenv').config(); // load environment variables once at the top
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const patientRoutes = require('./routes/patientRoutes');

const app = express();

// connect to database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/patients', patientRoutes);

app.get('/', (req, res) => {
  res.send('Uzima Pal Diabetes Monitoring API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
