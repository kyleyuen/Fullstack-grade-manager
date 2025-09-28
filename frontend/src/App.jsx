import { useEffect, useState } from 'react';
import './index.css'


function App() {
  const [students, setStudents] = useState([]);
  const [status, setStatus] = useState('idle');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('');

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

  const addStudent = () => {
    console.log("Add Student clicked");
  };


  // return JSX here...
  return (
    <div className="p-4">
      {/* UI for grade manager */}
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
