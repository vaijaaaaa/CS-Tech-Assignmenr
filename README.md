# MERN Stack Task Distribution Application

This is a full-stack web application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js), featuring:

- Admin login with JWT authentication
- Agent creation and management
- CSV upload functionality with data validation
- Automatic distribution of tasks to 5 agents equally
- Real-time display of distributed lists

---

## 🔧 Features

### ✅ Admin Login
- Secure login with JWT
- Protected routes using authentication middleware

### 👥 Agent Management
- Add new agents with:
  - Name
  - Email
  - Mobile number with country code
  - Password (stored securely)

### 📄 CSV Upload and Task Distribution
- Upload .csv, .xlsx, or .xls files
- Validates format
- Distributes entries evenly among 5 agents
- Remaining entries are distributed sequentially
- Displays distributed lists by agent

---

## 🗂 Folder Structure

```plaintext
project-root/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── vite.config.js
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-task-distributor.git
cd mern-task-distributor
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start Backend

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start Frontend

```bash
npm run dev
```

---

## 🧪 Default Admin Credentials

These are the seeded credentials you can use to log in:

```
Email: admin@example.com
Password: Admin@123
```

You can change these by editing the seeding script or adding manually via MongoDB.

---

## 📸 Demo Video

🎥 [Click here to watch the demo video on Google Drive](your-google-drive-link-here)

---

## 📦 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios
- **Backend**: Express.js, Node.js, Mongoose
- **Database**: MongoDB Atlas / Local MongoDB
- **Auth**: JWT (JSON Web Token)
- **File Parsing**: `multer`, `csv-parser`, `xlsx`

---

## 🚀 How It Works

1. Admin logs in
2. Admin can add agents
3. Admin uploads a CSV/XLSX file
4. Tasks are validated and distributed
5. Agents are shown their assigned lists in the UI

---

## ✅ Future Improvements

- Role-based access control
- Agent login and task view
- Export assigned tasks as downloadable files

---

## 👨‍💻 Author

**Vaiju Patil**

Feel free to reach out for contributions, issues, or improvements!

---

> ✅ **Note**: Replace `your-google-drive-link-here` with your actual Google Drive demo video link.
> 
> ✅ **Note**: Replace `your-username` in the clone URL with your actual GitHub username.
