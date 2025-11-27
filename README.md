📌 Coplur RBAC Application

A Role-Based Authentication web application built as part of the Coplur Code Challenge using:

Node.js + Express + JWT + MongoDB (Backend)

React + Vite + Axios + React Router (Frontend)

Role Support: Admin and Student

Admins can create/delete users, while students can register and access basic features.

🚀 Tech Stack
Layer	Technologies
Backend	Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs
Frontend	React.js, Vite, Axios, React Router
Tools	Nodemon, dotenv
Authentication	JSON Web Tokens (JWT)
Password Security	bcrypt hashing
🏗️ Project Structure
coplur-rbac-app/
│── backend/
│   ├── config/        # Database connection
│   ├── middleware/    # JWT auth & role check
│   ├── models/        # User schema
│   ├── routes/        # API routes
│   ├── utils/         # Seed admin script
│   └── server.js
│
│── frontend/
│   ├── src/
│   │   ├── pages/     # Login, Register, Admin, Welcome
│   │   ├── components # NavBar
│   │   ├── App.jsx
│   │   └── api.js
│   └── vite.config.js
│
└── README.md

⚙️ Setup Instructions
📥 1. Clone the Repository
git clone <your-repository-url>
cd coplur-rbac-app

🛠️ 2. Backend Setup
cd backend
npm install

Create .env in backend/
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/coplur_rbac
JWT_SECRET=supersecretchangeme
ADMIN_EMAIL=admin@coplur.local
ADMIN_PASSWORD=Admin@123

Seed Default Admin
npm run seed

Start Backend
npm run dev


Backend runs at 👉 http://localhost:5000

🌐 3. Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend runs at 👉 http://localhost:5173

🔐 Features
Feature	Student	Admin
Register	✔️	✖️
Login	✔️	✔️
Change Password	✔️	✔️
Access Dashboard	✔️	✔️
Create Users	✖️	✔️
Delete Users	✖️	✔️
List All Users	✖️	✔️
📡 API Endpoints
🔑 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register student
POST	/api/auth/login	Login
POST	/api/auth/change-password	Change password
GET	/api/auth/me	Get current user
🛠️ Admin APIs
Method	Endpoint	Description
GET	/api/admin/users	List all users
POST	/api/admin/users	Create new user
DELETE	/api/admin/users/:id	Delete user
🔎 Default Admin Credentials
Email	Password
admin@coplur.local	Admin@123

Use these credentials to login and access admin dashboard.

🧪 Security Highlights

✔ Password stored using bcrypt
✔ JWT for authentication
✔ Separate middleware for role-based protection
✔ Input validation & strong password rules

💻 How to Test

Run backend & frontend

Open http://localhost:5173

Register as student → Login

Login using admin credentials

Go to Admin Dashboard → Manage users

🐞 Troubleshooting
Issue	Solution
EADDRINUSE :5000	Stop previous backend instance or change port
MongoDB URI undefined	Check .env file location
JWT must be provided	Login again & verify token
ECONNREFUSED MongoDB	Ensure MongoDB is installed & running
📄 License

This project was developed for Coplur Code Challenge.
Feel free to modify for educational purposes.

🙌 Author

Yasharth Singh
Developed as part of Coplur Code Challenge 2025
📧 <singhyasharth567@gmail.com>

📢 Final Note

🔥 Make sure to customize, enhance UI & handle more edge cases before submitting. Avoid directly submitting AI-generated code without modification.

Would you like me to:

Create a starter GitHub commit structure?

Add Docker support?

Improve UI responsiveness for dashboard?

Add README badges (Tech Stack, License, etc.)?
