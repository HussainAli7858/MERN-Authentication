# MERN Authentication System

A complete User Authentication System built using the MERN Stack (MongoDB, Express, React, and Node.js). This project provides secure authentication functionality including email verification, password reset, and session management.

---

## Features

### User Registration & Login
- Secure user account creation and login functionality.
- Authentication implemented using JSON Web Tokens (JWT).
- Passwords securely hashed using bcryptjs.

### Email Verification
- Sends a secure 6-digit OTP to the user's registered email address.
- Ensures account validation before granting full access.

### Password Reset
- Allows users to reset forgotten passwords securely.
- Sends an OTP directly to the registered email for verification.

### Session Management
- Uses cookies to manage and maintain authentication sessions.

### Responsive User Interface
- Built using React.js and Tailwind CSS.
- Responsive design compatible with multiple screen sizes.

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Tokens (JWT)
- Nodemailer
- Cookie Parser

---

## Project Structure

```text
MERN-Authentication-System
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## Prerequisites

Before running this project, make sure you have:

- Node.js installed
- MongoDB Atlas account
- SMTP provider account (Brevo or another email service)

---

# Backend Setup (Server)

### Step 1: Navigate to the server folder

```bash
cd server
```

### Step 2: Install dependencies

```bash
npm install express cors dotenv nodemon jsonwebtoken mongoose bcryptjs nodemailer cookie-parser
```

### Step 3: Create a `.env` file

Create a `.env` file inside the server folder and add:

```env
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

SMTP_USER=your_email

SMTP_PASS=your_email_password

SENDER_EMAIL=your_sender_email
```

### Step 4: Run backend server

```bash
npm run server
```

---

# Frontend Setup (Client)

### Step 1: Navigate to client folder

```bash
cd client
```

### Step 2: Install dependencies

```bash
npm install axios react-router-dom react-toastify
```

### Step 3: Create a `.env` file

Create a `.env` file inside the client folder:

```env
VITE_BACKEND_URL=http://localhost:4000
```

### Step 4: Run frontend

```bash
npm run dev
```

---

## Running Complete Project

Open two terminals:

### Terminal 1 (Backend)

```bash
cd server
npm run server
```

### Terminal 2 (Frontend)

```bash
cd client
npm run dev
```

---

## Authentication Flow

1. User creates an account.
2. User receives a 6-digit OTP on email.
3. User verifies account using OTP.
4. User logs into the application.
5. Session is maintained using cookies.
6. User can reset password if forgotten.

---

## Security Features

- Password hashing using bcryptjs
- JWT-based authentication
- Email verification through OTP
- Secure password reset process
- Session handling with cookies
- Environment variables for sensitive information

---

## Future Improvements

- Google Authentication
- GitHub Authentication
- User Profile Management
- Dark Mode Support
- Two-Factor Authentication (2FA)

---

## Author

Hussain Ali
