# 🏥 Uzima Pal - Health Monitoring App

A simple health monitoring app for tracking diabetes and hypertension (high blood pressure).

## 🎯 What Does This App Do?

- **Track Blood Sugar** 🍬 - Record your glucose levels
- **Track Blood Pressure** ❤️ - Record your BP readings
- **View History** 📊 - See all your past readings
- **Easy Dashboard** 📱 - Simple and colorful interface

---

## 📁 Project Structure

```
uzima-pal/
├── backend/          (The brain - stores data)
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/         (The face - what you see)
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── AddReading.js
│   │   │   └── ReadingsList.js
│   │   └── index.js
│   └── package.json
└── README.md
```

---

## 🛠️ Step 1: Install the Tools You Need

### Things to Install First:
1. **Node.js** - Download from [nodejs.org](https://nodejs.org) (choose LTS version)
2. **MongoDB** - We'll use MongoDB Atlas (free cloud database)
3. **VS Code** - A code editor (optional but helpful)

---

## 🚀 Step 2: Setup Backend (The Brain)

### Create Backend Folder:
```bash
mkdir uzima-pal
cd uzima-pal
mkdir backend
cd backend
```

### Install Backend Packages:
```bash
npm init -y
npm install express mongoose cors dotenv
npm install --save-dev nodemon
```

### Create `.env` file:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
```

### Get MongoDB Connection String:
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create FREE account
3. Create a cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your password
7. Paste it in `.env` file

---

## 🎨 Step 3: Setup Frontend (The Face)

### Create React App:
```bash
cd ..
npx create-react-app frontend
cd frontend
npm install axios
```

---

## ▶️ Step 4: Run the App

### Start Backend (Terminal 1):
```bash
cd backend
npm run dev
```
You should see: `Server running on port 5000` and `MongoDB connected!`

### Start Frontend (Terminal 2):
```bash
cd frontend
npm start
```
Browser will open automatically at `http://localhost:3000`

---

## 📝 What Each File Does

### Backend Files:
- **server.js** - The main brain that handles all requests
- **package.json** - List of tools the backend needs
- **.env** - Secret settings (passwords, etc.)

### Frontend Files:
- **App.js** - Main component that holds everything
- **Dashboard.js** - The homepage with stats
- **AddReading.js** - Form to add new readings
- **ReadingsList.js** - Shows all your readings

---

## 🎮 How to Use the App

1. **Add a Reading**: Click "Add New Reading" button
2. **Fill the Form**: Enter your blood sugar or blood pressure
3. **Save**: Click submit
4. **View History**: Scroll down to see all readings
5. **Check Stats**: See your latest readings at the top

---

## 🐛 Troubleshooting

### Backend won't start?
- Make sure MongoDB connection string is correct in `.env`
- Check if port 5000 is already in use

### Frontend won't connect?
- Make sure backend is running first
- Check if backend is on `http://localhost:5000`

### "Cannot find module" error?
- Run `npm install` in that folder again

---

## 🎉 You're Done!

Your Uzima Pal app is now running! You can:
- Track your health readings
- See your history
- Monitor your progress

---

## 📚 Learn More

- **MongoDB**: Database that stores your readings
- **Express**: Handles requests (like "save this reading")
- **React**: Makes the pretty interface you click
- **Node.js**: Runs JavaScript on the server
