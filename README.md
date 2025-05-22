
# 📚 Book Review API (Node.js + Express + PostgreSQL)

This is a RESTful API for a Book Review System built with Node.js, Express, Sequelize ORM, and PostgreSQL. It supports user authentication via JWT, and provides endpoints to add, fetch, search books and manage reviews.

---

## 🚀 Features

- JWT-based Authentication
- Add/Get/Search Books
- Submit/Update/Delete Reviews
- Pagination & Filtering
- Sequelize ORM + PostgreSQL

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT (jsonwebtoken)
- bcryptjs, dotenv, helmet, cors

---

## 🏁 Getting Started

### 📂 Clone the repo

```bash
git clone https://github.com/Nikhil3505/book-review-api-postgresql.git
cd book-review-api
```

### 📦 Install dependencies

```bash
npm install
```

### 🧪 Setup PostgreSQL

Make sure PostgreSQL is running locally and create a database (e.g., `bookdb`).

### 📄 Configure Environment

Rename `.env.example` to `.env` and update the fields:

```env
PORT=3000
DB_USER=postgresql
DB_PASS=Pass@123
DB_NAME=bookdb
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```

### ▶️ Run the app

```bash
node server.js
```

---

## 📮 API Endpoints

### 🔐 Auth

- `POST /api/auth/signup` – Register
- `POST /api/auth/login` – Login & get token

### 📚 Books

- `POST /api/books` – Add a book (auth required)
- `GET /api/books` – List all books (supports `author`, `genre`, `page`, `limit`)
- `GET /api/books/:id` – Book details with average rating and reviews
- `GET /api/search?q=keyword` – Search books by title or author

### ✍️ Reviews

- `POST /api/books/:id/reviews` – Submit a review (auth required)
- `PUT /api/reviews/:id` – Update own review
- `DELETE /api/reviews/:id` – Delete own review

---

## 🧪 Example API Requests (Postman)

### Signup

```http
POST /api/auth/signup
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com",
  "password": "pass123"
}
```

### Login

```http
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "pass123"
}
```

### Add Book

```http
POST /api/books
Authorization: Bearer <token>

{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help",
  "description": "Build better habits"
}
```

---

## 🗃️ Project Structure

```
.
├── models/
├── routes/
├── controllers/
├── middlewares/
├── config/
├── app.js
├── server.js
├── .env.example
└── README.md
```

---

## 📌 Assumptions & Design Notes

- One review per user per book.
- Review updates/deletes allowed only by the original reviewer.
- Sequelize `alter:true` for dev DB sync (not for prod).
- Separate `search` route for flexible search capability.




