import { useEffect, useState } from 'react';
import './index.css';

// Use environment variable for API URL
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [students, setStudents] = useState([]);
  const [status, setStatus] = useState('idle');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('');

  // Fetch existing students
  useEffect(() => {
    async function fetchStudents() {
      setStatus('loading'); // Set loading status
      try {
        const res = await fetch(`${API}/students`); // Fetch from backend
        if (!res.ok) throw new Error('Failed to fetch'); //Provide error if fails
        const data = await res.json(); //store data into json 

        // Update state
        setStudents(data);
        setStatus('idle');

      } catch (err) { // Catch any errors
        console.error(err);
        setStatus('error');
      }
    }
    fetchStudents(); // Call the function
  }, []);

  // Add new student
  const addStudent = async () => {
    if (!studentName || !grade) return;
    setStatus('loading');
    try {
      const res = await fetch(`${API}/students`, { // Post request to backend
        method: 'POST', // Use POST method 
        headers: { 'Content-Type': 'application/json' }, // Set content type to JSON
        body: JSON.stringify({ student_name: studentName, grade: Number(grade) }), //Send it as a template literal
      });
      if (!res.ok) throw new Error('Failed to add student'); // Error handling
      const newStudent = await res.json();
      setStudents(prev => [...prev, newStudent]); // Update state with new student

      // Clear input fields
      setStudentName('');
      setGrade('');

      // Reset status
      setStatus('idle');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Grade Manager</h1>

      {status === 'loading' && <p className="text-blue-500 mb-2">Loading...</p>}
      {status === 'error' && <p className="text-red-500 mb-2">Error connecting to backend.</p>}

      <div className="mb-4 p-4 border rounded shadow flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={e => setStudentName(e.target.value)}
          className="border p-2 rounded flex-1 min-w-[120px]"
        />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={e => setGrade(e.target.value)}
          className="border p-2 rounded w-20"
        />
        <button
          onClick={addStudent}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={status === 'loading'}
        >
          Add
        </button>
      </div>

      {students.length === 0 && <p>No students yet.</p>}

      {students.map(student => (
        <div key={student.id} className="border shadow-md rounded-lg p-4 mb-2">
          <p><strong>Name:</strong> {student.student_name}</p>
          <p><strong>Grade:</strong> {student.grade}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
