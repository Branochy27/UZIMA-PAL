# UZIMA-PAL

UZIMA-PAL is a comprehensive health management application designed to help users track and manage their health data, particularly focusing on blood sugar levels and patient information. The application provides a user-friendly interface for logging health readings, viewing patient lists, and accessing health tips.

## Features

- **User Authentication**: Secure login and signup using Clerk authentication
- **Dashboard**: Overview of health metrics and quick actions
- **Blood Sugar Tracking**: Log and monitor blood sugar readings with historical data
- **Patient Management**: View and manage patient information
- **Health Forms**: Submit detailed health information
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Clerk**: Authentication and user management
- **CSS**: Custom styling for components

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM for MongoDB

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Branochy27/UZIMA-PAL.git
   cd UZIMA-PAL
   ```

2. **Install backend dependencies**:
   ```bash
   cd BACKEND
   npm install
   ```

3. **Install frontend dependencies**:
   ```bash
   cd ../FRONTEND/frontend
   npm install
   ```

4. **Set up environment variables**:

   **Backend (.env)**:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   **Frontend (.env)**:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

5. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

6. **Start the backend server**:
   ```bash
   cd BACKEND
   npm start
   ```

7. **Start the frontend development server**:
   ```bash
   cd ../FRONTEND/frontend
   npm run dev
   ```

The application will be available at `http://localhost:5174` for the frontend and `http://localhost:5000` for the backend API.

## Usage

1. Open your browser and navigate to `http://localhost:5174`
2. Sign up or log in using your credentials
3. Access the dashboard to view your health overview
4. Use the blood sugar tracker to log readings
5. Manage patient information through the patient list
6. Submit health forms as needed

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/patients` - Retrieve all patients
- `POST /api/patients` - Create a new patient
- `GET /api/patients/:id` - Retrieve a specific patient
- `PUT /api/patients/:id` - Update a patient
- `DELETE /api/patients/:id` - Delete a patient

## Deployment

### Frontend (Vercel)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Backend (Heroku/Railway)
1. Set up a cloud database (MongoDB Atlas)
2. Deploy backend to Heroku or Railway
3. Update frontend environment variables with production API URL

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on GitHub.

---

**Note**: This application is for educational and demonstration purposes. Always consult with healthcare professionals for medical advice and treatment.