# 📊 Grade Manager - Fullstack Web Application

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Flask-2.3.0-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/TailwindCSS-3.3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/SQLite-3.42.0-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <br>
  <img src="https://img.shields.io/github/license/kyleyuen/Fullstack-grade-manager?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/github/contributors/kyleyuen/Fullstack-grade-manager?style=for-the-badge" alt="Contributors">
  <img src="https://img.shields.io/github/last-commit/kyleyuen/Fullstack-grade-manager?style=for-the-badge" alt="Last Commit">
  <br>
  <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge" alt="Live Demo">
</div>

<p align="center">
  <strong>A modern, responsive grade management system built with React and Flask</strong>
  <br>
  Showcasing fullstack development skills with clean UI/UX, RESTful APIs, and database integration
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## 🚀 Features

### Current Features
- **📋 Student Management**: View all students with their grades in an intuitive interface
- **➕ Add Students**: Real-time student registration with grade input
- **📱 Responsive Design**: Mobile-first design using TailwindCSS
- **🔄 RESTful API**: Clean Flask backend with proper HTTP methods
- **💾 Data Persistence**: SQLite database for reliable data storage
- **⚡ Real-time Updates**: Instant UI updates after data operations
- **🎯 Error Handling**: Comprehensive error states and user feedback
- **🔄 Loading States**: Smooth loading indicators for better UX

### Coming Soon
- **✏️ Edit/Delete**: Full CRUD operations
- **🔍 Search & Filter**: Find students by name or grade range
- **🔐 Authentication**: Secure user login system
- **📊 Analytics**: Grade statistics and visual charts

---

## 🛠️ Tech Stack

### Frontend
- **React.js 18.2+** - Modern component-based architecture
- **TailwindCSS 3.3+** - Utility-first CSS framework
- **Vite.js** - Fast build tool and development server
- **Fetch API** - Native HTTP client for API communication

### Backend
- **Python 3.8+** - Server-side programming language
- **Flask 2.3+** - Lightweight web framework
- **SQLite 3.42+** - Embedded database engine
- **Flask-CORS** - Cross-origin resource sharing

### Development Tools
- **Git** - Version control
- **npm/pip** - Package managers
- **VS Code** - Code editor (recommended)

---

## ⚡ Quick Start

### Prerequisites
- **Node.js 16+** and npm
- **Python 3.8+** and pip
- Git

### 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kyleyuen/Fullstack-grade-manager.git
   cd Fullstack-grade-manager
   ```

2. **Set up the Backend (Flask + SQLite)**
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

3. **Set up the Frontend (React + TailwindCSS)**
   ```bash
   # Open new terminal
   cd frontend
   
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

4. **Access the Application**
   - **Frontend**: http://localhost:5173
   - **Backend API**: http://127.0.0.1:5000/students

---

## 📖 Usage

### Adding Students
1. Fill in the student name and grade in the form
2. Click "Add Student" button
3. Student will be added to the list instantly

### Viewing Students
- All students are displayed in a responsive card layout
- Each card shows student name and grade
- Loading states show while fetching data

---

## 📡 API Documentation

### Base URL
```
http://127.0.0.1:5000
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|-------------|
| `GET` | `/students` | Fetch all students | None |
| `POST` | `/students` | Add a new student | `{"student_name": "string", "grade": number}` |

### Example Requests

**Get all students:**
```bash
curl -X GET http://127.0.0.1:5000/students
```

**Add a student:**
```bash
curl -X POST http://127.0.0.1:5000/students \
  -H "Content-Type: application/json" \
  -d '{"student_name": "Alice Johnson", "grade": 95}'
```

### Response Format
```json
{
  "students": [
    {
      "id": 1,
      "student_name": "Alice Johnson",
      "grade": 95
    }
  ]
}
```

---

## 📸 Screenshots

> **Note**: Screenshots will be added soon to showcase the user interface and key features.

- [ ] Main dashboard view
- [ ] Add student form
- [ ] Mobile responsive design
- [ ] Error states
- [ ] Loading states

---

## 🗺️ Roadmap

### Phase 1: Core Features Enhancement ✅
- [x] Basic CRUD operations (Create, Read)
- [x] Responsive UI design
- [x] Error handling
- [x] Loading states

### Phase 2: Extended CRUD & UX (Q1 2026)
- [ ] **Update Student Records** - Edit existing student information
- [ ] **Delete Students** - Remove students with confirmation dialogs
- [ ] **Bulk Operations** - Select and manage multiple students
- [ ] **Form Validation** - Client-side and server-side validation
- [ ] **Toast Notifications** - Success/error feedback system

### Phase 3: Search & Filter (Q2 2026)
- [ ] **Search Functionality** - Find students by name
- [ ] **Grade Filtering** - Filter by grade ranges (A, B, C, etc.)
- [ ] **Sorting Options** - Sort by name, grade, date added
- [ ] **Pagination** - Handle large datasets efficiently
- [ ] **Advanced Filters** - Combine multiple filter criteria

### Phase 4: Authentication & Security (Q3 2026)
- [ ] **User Registration/Login** - Secure authentication system
- [ ] **JWT Tokens** - Stateless authentication
- [ ] **Role-based Access** - Teacher/Admin permissions
- [ ] **Password Reset** - Email-based password recovery
- [ ] **Session Management** - Secure session handling

### Phase 5: Analytics & Visualization (Q4 2026)
- [ ] **Grade Statistics** - Average, median, distribution
- [ ] **Visual Charts** - Grade distribution graphs
- [ ] **Performance Tracking** - Student progress over time
- [ ] **Export Data** - CSV/PDF export functionality
- [ ] **Dashboard Widgets** - Summary cards and metrics

### Phase 6: Deployment & DevOps (Q1 2027)
- [ ] **Docker Containerization** - Easy deployment setup
- [ ] **Cloud Deployment** - Deploy to Vercel/Heroku/Railway
- [ ] **Environment Configs** - Separate dev/staging/prod environments
- [ ] **CI/CD Pipeline** - Automated testing and deployment
- [ ] **Monitoring & Logging** - Application performance monitoring

### Phase 7: Testing & Quality Assurance
- [ ] **Unit Tests** - Frontend and backend test coverage
- [ ] **Integration Tests** - API endpoint testing
- [ ] **E2E Tests** - User workflow automation
- [ ] **Performance Testing** - Load and stress testing
- [ ] **Accessibility Testing** - WCAG compliance

### Future Considerations
- [ ] **Mobile App** - React Native version
- [ ] **Advanced Analytics** - Machine learning insights
- [ ] **Multi-language Support** - Internationalization
- [ ] **Offline Support** - Progressive Web App features
- [ ] **Real-time Collaboration** - WebSocket integration

---

## 🎯 Why This Project?

This **Grade Manager** demonstrates my comprehensive fullstack development capabilities:

### 🏗️ **Fullstack Architecture**
- **Frontend-Backend Integration**: Seamless communication between React and Flask
- **RESTful API Design**: Clean, maintainable API endpoints
- **Database Management**: Efficient data modeling with SQLite

### 💡 **Technical Skills Showcase**
- **Modern React Development**: Hooks, component composition, state management
- **Python Backend Development**: Flask framework, database ORM patterns
- **Responsive Web Design**: Mobile-first approach with TailwindCSS
- **API Integration**: Fetch API, error handling, loading states

### 🚀 **Professional Development Practices**
- **Code Organization**: Clean file structure and separation of concerns
- **Error Handling**: Comprehensive error states and user feedback
- **User Experience**: Intuitive interface with loading states and validation
- **Version Control**: Git workflow with meaningful commits

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Issues
Feel free to submit issues and enhancement requests!

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - feel free to use this project for learning and development!
```

---

## 📞 Contact & Links

- **Live Demo**: [fullstack-grade-manager.vercel.app](https://fullstack-grade-manager.vercel.app/)
- **GitHub**: [@kyleyuen](https://github.com/kyleyuen)
- **Project Repository**: [Fullstack-grade-manager](https://github.com/kyleyuen/Fullstack-grade-manager)

---

## 🙏 Credits & Acknowledgments

- **React Team** - For the amazing React library
- **Flask Community** - For the lightweight web framework
- **Tailwind Labs** - For the utility-first CSS framework
- **Vercel** - For free hosting and deployment
- **GitHub** - For version control and collaboration tools

---

<div align="center">
  <p><strong>Built with ❤️ by Kyle Yuen</strong></p>
  <p>If you found this project helpful, please consider giving it a ⭐!</p>
</div>
