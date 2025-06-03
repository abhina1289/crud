import { useState } from 'react';
import './bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Studenttable from './pages/Studenttable';
import Createstudent from './pages/Createstudent';
import Editstudent from './pages/Editstudent';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
  const [studentData, setstudentData] = useState({});

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Studenttable setstudentData={setstudentData} />} />
        <Route path='/create' element={<Createstudent />} />
        <Route path='/edit' element={<Editstudent add={studentData} onSave={setstudentData} />} />
        <Route path='/prof' element={<Profile data={studentData} />} />
      </Routes>
    </>
  );
}

export default App;
