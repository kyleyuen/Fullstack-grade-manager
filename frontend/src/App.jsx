import { useEffect, useState } from 'react';
import './index.css';

// Base API URL (from environment variable or fallback to localhost)
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  // ===== STATE VARIABLES =====
  const [students, setStudents] = useState([]);         // Stores all student records
  const [status, setStatus] = useState('idle');         // Tracks app state: 'idle', 'loading', or 'error'
  const [studentName, setStudentName] = useState('');   // Input field: student name
  const [grade, setGrade] = useState('');               // Input field: student grade

  // ===== FETCH EXISTING STUDENTS ON PAGE LOAD =====
  useEffect(() => {
    async function fetchStudents() {
      setStatus('loading'); // Show loading indicator
      try {
        const res = await fetch(`${API}/students`); // GET request to backend
        if (!res.ok) throw new Error('Failed to fetch'); // Throw error if response is not OK

        const data = await res.json(); // Parse response JSON
        setStudents(data);             // Store data in state
        setStatus('idle');             // Return to idle state
      } catch (err) {
        console.error(err);            // Log any errors for debugging
        setStatus('error');            // Show error message to user
      }
    }

    fetchStudents(); // Call the async function immediately on mount
  }, []); // Empty dependency array → runs once on component mount

  // ===== ADD A NEW STUDENT =====
  const addStudent = async () => {
    // Validate that both fields are filled
    if (!studentName || !grade) return;

    setStatus('loading'); // Show loading indicator
    try {
      // Send POST request to backend API
      const res = await fetch(`${API}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Send JSON body
        body: JSON.stringify({
          student_name: studentName,
          grade: Number(grade), // Convert grade from string → number
        }),
      });

      if (!res.ok) throw new Error('Failed to add student'); // Handle API errors

      // Parse the response and add the new student to the list
      const newStudent = await res.json();
      setStudents(prev => [...prev, newStudent]); // Append new student to existing array

      // Clear input fields after submission
      setStudentName('');
      setGrade('');

      setStatus('idle'); // Reset status
    } catch (err) {
      console.error(err); // Log error for debugging
      setStatus('error'); // Display error message
    }
  };

  // ===== UI RENDERING =====
  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Grade Manager</h1>

      {/* Status messages */}
      {status === 'loading' && <p className="text-blue-500 mb-2">Loading...</p>}
      {status === 'error' && <p className="text-red-500 mb-2">Error connecting to backend.</p>}

      {/* Form for adding students */}
      <div className="mb-4 p-4 border rounded shadow flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={e => setStudentName(e.target.value)} // Update state as user types
          className="border p-2 rounded flex-1 min-w-[120px]"
        />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={e => setGrade(e.target.value)} // Update state as user types
          className="border p-2 rounded w-20"
        />
        <button
          onClick={addStudent}                     // Call function when clicked
          className="bg-blue-500 text-white p-2 rounded"
          disabled={status === 'loading'}          // Disable while loading
        >
          Add
        </button>
      </div>

      {/* Show message if no students */}
      {students.length === 0 && <p>No students yet.</p>}

      {/* Render each student card */}
      {students.map(student => (
        <div
          key={student.id}
          className="border shadow-md rounded-lg p-4 mb-2"
        >
          <p><strong>Name:</strong> {student.student_name}</p>
          <p><strong>Grade:</strong> {student.grade}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
