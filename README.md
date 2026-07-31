# 🏡 Nestora - AI Powered Real Estate Platform

Nestora is a Full Stack AI-powered Real Estate Platform built using **Next.js**, **Express.js**, **Prisma ORM**, and **PostgreSQL**. It provides a complete solution for property management with separate Admin and User dashboards, AI-powered property description generation, AI Chat Assistant, and Swagger API documentation.

---

# 🚀 Features

## 👨‍💼 Admin Panel

- Dashboard Analytics
- Property CRUD
- Property Gallery Upload
- User Management
- Company Settings
- Enquiry Management
- AI Property Description Generator
- Swagger API Documentation

---

## 👤 User Panel

- User Registration & Login
- Browse Properties
- Property Search & Filters
- Save Properties
- Send Enquiries
- AI Chat Assistant
- Profile Management

---

# 🤖 AI Features

- AI Chat Assistant
- AI Property Description Generator
- Groq AI Integration

---

# 📑 API Documentation

Swagger UI is integrated for API documentation and testing.

```text
http://localhost:8000/api-docs
```

---

# 🛠 Tech Stack

## Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Lucide React

## Backend

- Node.js
- Express.js
- Prisma ORM
- JWT Authentication
- bcrypt
- Swagger
- Groq AI

## Database

- PostgreSQL

---

# 📁 Project Structure

```
real-estate-platform

client/
│
├── app/
├── components/
├── lib/
├── hooks/
├── types/
└── public/

server/
│
├── controllers/
├── routes/
├── services/
├── middleware/
├── prisma/
├── uploads/
├── config/
└── server.ts
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/real-estate-platform.git
```

---

## Frontend

```bash
cd client
npm install
npm run dev
```

Runs on

```
http://localhost:3000
```

---

## Backend

```bash
cd server
npm install
npm run dev
```

Runs on

```
http://localhost:8000
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
DATABASE_URL=

JWT_SECRET=

GROQ_API_KEY=

PORT=8000
```

---

# 🔄 Application Flow

```
Browser

↓

Next.js Frontend

↓

API Request

↓

Express Route

↓

Controller

↓

Service

↓

Prisma ORM

↓

PostgreSQL

↓

JSON Response

↓

Frontend UI
```

---

# 🔑 Authentication Flow

```
Login

↓

JWT Generate

↓

Store Token

↓

Protected Route

↓

Authorization Header

↓

Middleware Verify

↓

Dashboard
```

---

# 📦 Main Modules

- Authentication
- Dashboard
- Property CRUD
- Gallery Upload
- Search
- Saved Properties
- Enquiries
- User Management
- Company Settings
- AI Chat
- AI Property Description
- Swagger Documentation

---

# 📚 API Endpoints

## Authentication

```
POST /api/auth/login

POST /api/auth/register
```

## Properties

```
GET /api/properties

POST /api/properties

PUT /api/properties/:id

DELETE /api/properties/:id
```

## AI

```
POST /api/ai/chat

POST /api/ai/property-description
```

---

# 📸 Screenshots

Add screenshots here.

- Login Page
- Dashboard
- Property Management
- AI Chat
- Swagger
- User Dashboard

---

# 📈 Future Improvements

- Real-time Notifications
- Email Integration
- Payment Gateway
- Google Maps
- Property Recommendation AI
- Socket.IO Notifications

---

# 👨‍💻 Author

**Dinesh**

Full Stack Developer

---

# 📄 License

This project is licensed under the MIT License.
