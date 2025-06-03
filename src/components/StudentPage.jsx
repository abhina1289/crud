import React, { useState, useEffect } from 'react';
import Editstudent from './Editstudent';
import Profile from './Profile';

function StudentPage({ student }) {
  const [studentData, setStudentData] = useState(student);

  useEffect(() => {
    if (student) {
      setStudentData(student);
    }
  }, [student]);

  const handleSave = (updatedStudent) => {
    setStudentData(updatedStudent);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Student Profile Editor</h2>
      {studentData ? (
        <>
          <Editstudent add={studentData} onSave={handleSave} />
          <hr />
          <Profile data={studentData} />
        </>
      ) : (
        <p>No student selected.</p>
      )}
    </div>
  );
}

export default StudentPage;
