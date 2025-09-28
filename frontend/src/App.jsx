import { useEffect, useState } from 'react';
import './index.css'

function App() {
  const [students, setStudents] = useState([]);
  const [status, setStatus] = useState('idle');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('');

  // fetch existing students
  useEffect(() => {
    async function fetchStudents() {
      setStatus('loading');
      try {
        const res = await fetch('/students');
        const data = await res.json();
        setStudents(data);
        setStatus('idle');
      } catch {
        setStatus('error');
      }
    }
    fetchStudents();
  }, []);

  // add new student
  const addStudent = async () => {
    if (!studentName || !grade) return;
    setStatus('loading');
    try {
      const res = await fetch('/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_name: studentName, grade: Number(grade) })
      });
      const newStudent = await res.json();
      setStudents(prev => [...prev, newStudent]);
      setStudentName('');
      setGrade('');
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="p-4">
      {status === 'loading' && <p>Loading students...</p>}
      {status === 'error' && <p>Error loading students.</p>}

      <div className="mb-4 p-4 border rounded shadow">
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={e => setStudentName(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={e => setGrade(e.target.value)}
          className="border p-2 rounded mr-2 w-20"
        />
        <button
          onClick={addStudent}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={status === 'loading'}
        >
          Add Student
        </button>
      </div>

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
