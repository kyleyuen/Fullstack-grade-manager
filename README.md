# Fullstack Grade Manager

[![Language](https://img.shields.io/badge/React-18.2+-61DAFB.svg)](https://reactjs.org/) [![Platform](https://img.shields.io/badge/Platform-Web-blue.svg)](https://github.com/kyleyuen/Fullstack-grade-manager) [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/kyleyuen/Fullstack-grade-manager/blob/main/LICENSE)

## 🎯 Project Overview

A comprehensive full-stack web application for grade management that combines modern frontend technologies with robust backend infrastructure. This project demonstrates end-to-end software development skills including RESTful API design, database management, and responsive user interface development for educational administration.

### 🎯 Purpose

Developed as a portfolio project to showcase proficiency in full-stack web development, combining React.js frontend with Flask backend, RESTful API design, and database integration. Ideal for understanding modern web application architecture, CRUD operations, and responsive design principles.

## ✨ Features

### Core Functionality
- 📝 **Student Management**: Complete CRUD operations for student records
- ➕ **Add Students**: Real-time student registration with grade input validation
- 📊 **Grade Tracking**: View and manage student grades in an intuitive interface
- 💾 **Data Persistence**: SQLite database for reliable data storage
- 🔄 **Real-time Updates**: Instant UI updates after data operations
- ✅ **Input Validation**: Comprehensive form validation on client and server side

### User Experience
- 📱 **Responsive Design**: Mobile-first design using TailwindCSS
- ⚡ **Fast Performance**: Optimized React components with Vite build tool
- 🎯 **Error Handling**: Comprehensive error states and user feedback
- 🔄 **Loading States**: Smooth loading indicators for better UX

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18.2+ with Hooks
- **Backend Framework**: Flask 2.3+ (Python)
- **Database**: SQLite 3.42+ (Embedded)
- **Styling**: TailwindCSS 3.3+ (Utility-first CSS)
- **Build Tool**: Vite.js (Fast development server)
- **HTTP Client**: Fetch API for API communication
- **CORS**: Flask-CORS for cross-origin requests
- **Platform**: Cross-platform web application

## 🚀 Getting Started

### Prerequisites

Before running this application, ensure you have:
- **Node.js**: v16.0+ (with npm)
- **Python**: 3.8+ with pip
- **Operating System**: Linux, macOS, or Windows
- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kyleyuen/Fullstack-grade-manager.git
   cd Fullstack-grade-manager
   ```

2. **Backend Setup (Flask + SQLite)**
   ```bash
   cd Backend
   
   # Create virtual environment
   python3 -m venv venv
   
   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Initialize database and start server
   python app.py
   ```
   Backend will run on `http://127.0.0.1:5000`

3. **Frontend Setup (React + TailwindCSS)**
   ```bash
   # Open new terminal
   cd frontend
   
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 📖 Usage Guide

### Application Flow

1. **View Students**: Upon loading, all students are displayed in a responsive card layout
2. **Add Student**: Fill in the student name and grade in the form and click "Add Student"
3. **Real-time Updates**: New students appear immediately in the list
4. **Error Handling**: Clear error messages for invalid inputs or server errors
5. **Data Persistence**: All changes are automatically saved to the database

### Sample Session

```
=== Grade Manager Dashboard ===

Student List:
  • Alice Johnson - Grade: 95
  • Bob Smith - Grade: 87
  • Carol Davis - Grade: 92

Add New Student:
  Name: [David Wilson]
  Grade: [88]
  [Add Student]

✅ Student added successfully!
```

### API Endpoints

The backend provides RESTful endpoints:
- `GET /students` - Fetch all students
- `POST /students` - Add a new student
  - Request Body: `{"student_name": "string", "grade": number}`

## 🎯 Learning Outcomes

This project demonstrates proficiency in:
- **Full-Stack Development**: Building complete applications from database to UI
- **RESTful API Design**: Creating clean, maintainable API endpoints
- **Database Management**: Efficient data modeling and persistence with SQLite
- **Modern React Development**: Hooks, component composition, and state management
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Error Handling**: Implementing robust error handling and user feedback
- **Code Organization**: Clean file structure and separation of concerns
- **Build Tools**: Modern development workflow with Vite

## 🔮 Future Enhancements

### Planned Features
- [ ] **Update Records**: Edit existing student information
- [ ] **Delete Students**: Remove students with confirmation dialogs
- [ ] **Search & Filter**: Find students by name or grade range
- [ ] **Sorting Options**: Sort by name, grade, or date added
- [ ] **Grade Analytics**: Statistics and visual charts for grade distribution
- [ ] **Authentication**: Secure user login system with JWT
- [ ] **Bulk Operations**: Select and manage multiple students
- [ ] **Export Data**: CSV/PDF export functionality

### Potential Improvements
- **Database Upgrade**: PostgreSQL for production deployment
- **Advanced UI**: Toast notifications and improved animations
- **Testing Suite**: Unit tests and integration tests
- **Docker Deployment**: Containerization for easy deployment
- **Performance Monitoring**: Application performance tracking

## 📊 Technical Specifications

| Aspect | Details |
|--------|--------|
| **Frontend Framework** | React.js 18.2+ |
| **Backend Framework** | Flask 2.3+ |
| **Database** | SQLite 3.42+ |
| **API Response Time** | < 200ms average |
| **Browser Support** | Chrome, Firefox, Safari, Edge |
| **Mobile Responsive** | Yes (TailwindCSS) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow existing code style and conventions
2. Add comments for complex logic
3. Test thoroughly before submitting
4. Update documentation as needed

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/kyleyuen/Fullstack-grade-manager/blob/main/LICENSE) file for details.

## 👨‍💻 Author

**Kyle Yuen**
- GitHub: [@kyleyuen](https://github.com/kyleyuen)
- Project Link: [Fullstack-grade-manager](https://github.com/kyleyuen/Fullstack-grade-manager)
- Live Demo: [fullstack-grade-manager.vercel.app](https://fullstack-grade-manager.vercel.app/)

## 🙏 Acknowledgments

- Inspired by modern educational management systems
- Built as a learning exercise in full-stack web development
- Thanks to the React and Flask communities for excellent documentation
- Special thanks to the open-source community for continuous inspiration

---

⭐ **Star this repository if you found it helpful!** ⭐

**Last Updated**: October 2024
