# 📝 Grade Manager Web App

A **fullstack web application** for managing student grades built with **React, Tailwind CSS, Flask, and SQLite**. This project showcases my skills in **frontend development, backend APIs, and database management**.

---

## Features

- **View Students** – Fetch and display all students and their grades.
- **Add Students** – Add new students with their grades in real-time.
- **Responsive Design** – Clean UI built with Tailwind CSS, optimized for different screen sizes.
- **Robust Backend** – RESTful API using Flask and SQLite for persistent data storage.
- **Error Handling & Feedback** – Loading and error states for better user experience.

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Python, Flask  
- **Database:** SQLite  
- **Tools:** Vite.js for frontend bundling, Fetch API for frontend-backend communication

---

## Future Improvements

- **Full CRUD functionality:** Add the ability to update and delete student records.  
- **Advanced sorting & filtering:** Sort students by grade or search by name for easier management.  
- **Authentication & Security:** Implement user login to protect sensitive data.  
- **Cloud Deployment:** Package with Docker and deploy on platforms like Vercel or Railway for production-ready usage.

---

## Why This Project?

This project is one of my **flagship fullstack applications** and demonstrates my ability to:

- **Build end-to-end fullstack applications** from scratch, integrating both frontend and backend seamlessly.  
- **Develop RESTful APIs** and connect them to a responsive frontend interface.  
- **Work with databases** and persist data securely using SQLite.  
- **Design clean, responsive UIs** with Tailwind CSS for optimal user experience.  
- **Handle real-world application requirements** including error handling, loading states, and input validation.  

This project highlights my practical skills in **software engineering, fullstack development, and UI/UX design**, making it a standout example in my portfolio.

---

## Installation & Setup

1. **Clone the repository**
```
bash
git clone https://github.com/yourusername/grade-manager.git
cd grade-manager
```

2. **Setup backend (Flask + SQLite)**
```
cd backend
python3 -m venv venv      # create virtual environment
source venv/bin/activate  # activate venv
pip install -r requirements.txt
python app.py              # starts Flask server on http://127.0.0.1:5000
```
3. **Setup frontend (React + Tailwind)**
```
cd frontend
npm install
npm run dev               # starts React app on http://localhost:5173
```
4. **Open in Browser**
```
Frontend: http://localhost:5173
Backend API: http://127.0.0.1:5000/students
```

## API Endpoints

| Method | Endpoint    | Description                  |
|--------|------------|------------------------------|
| GET    | `/students` | Fetch all students           |
| POST   | `/students` | Add a new student with grade |

**POST Body Example**
```json
{
  "student_name": "Alice",
  "grade": 95
}


