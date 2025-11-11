
# 🩺 Uzima Pal - Diabetes Patient Management App 🩸

Uzima Pal is a modern, user-friendly web app designed to help healthcare providers and patients manage diabetes patient data effectively and intuitively.

## ✨ Features

- Add and manage patient profiles with demographics and diabetes type 🧑‍⚕️
- Track detailed blood sugar and blood pressure readings 📊🩸
- View all patients in a colorful card-based list for easy scanning 🎨
- Responsive and interactive React UI with hot module replacement ⚛️🚀
- REST API backend for secure and scalable patient data management ⚙️🔐


## 🖥️ Frontend

**Frameworks & Tools:**

- React 18+ ⚛️
- Vite for super-fast build and dev server 🚀
- React Router for navigation 🔀
- Axios for API requests 📡
- CSS modules and component-based styling 🎨

**File Structure:**

```
src/
  components/
    PatientForm/
      PatientForm.jsx
      PatientForm.css
    PatientList/
      PatientList.jsx
      PatientList.css
  pages/
    HomePage.jsx
    PatientDetails.jsx
  App.jsx
  main.jsx
  index.css          # Global styles
  app.css            # Layout & shared styles
```

---

## 🔧 Backend

**Technologies 

- Node.js 🟢
- Express.js for routing and middleware 🚂
- MongoDB / Mongoose for patient data storage 🍃
- RESTful API endpoints to support frontend interactions 🔄

**Suggested File Structure:**

```
backend/
  controllers/
    patientController.js
  models/
    patientModel.js
  routes/
    patientRoutes.js
    server.js             # Main Express app
  config/
    db.js              # Database connection
```

---

## 🚀 Getting Started

1. Clone the repo:  
   ```
   git clone <repository_url>
   ```

2. Frontend setup:  
   ```
   cd uzima-pal-frontend
   npm install
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) to view the app.

4. Backend setup 
   ```
   cd uzima-pal-backend
   npm install
   npm start
   ```



Build better diabetes care with Uzima Pal! 🩸🧑‍⚕️📈
```
@ copyright 2025      brian ochieng