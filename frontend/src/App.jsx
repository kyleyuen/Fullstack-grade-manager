import { useEffect, useState } from 'react';

const [students, setStudents] = useState([]);
const [status, setStatus] = useState('idle');

useEffect(() => {
  async function fetchStudents() {
    setStatus('loading');
    try {
      const res = await fetch('/students');
      const data = await res.json();
      setStudents(data);
      setStatus('idle');
    }
    catch {
      setStatus('error');
    }
  }
  fetchStudents();
}, []);

function App() {
  return (
    <div className="p-4">
      {/* UI for grade manager */}
      {status === 'loading' && <p>Loading students...</p>}
      {status === 'error' && <p>Error loading students.</p>}

      {students.map(students => (
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
