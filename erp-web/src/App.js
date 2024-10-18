import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TeachersSignup from './components/teacherssignup';
import AdminsSignup from './components/adminssignup';
import StudentsSignup from './components/studentssignup';

function App() {
    return (
        <Router>           
            <Routes>
                <Route path="/teacher" element={<TeachersSignup/>} />
                <Route path="/adminsignup" element={<AdminsSignup/>} />
                <Route path="/student" element={<StudentsSignup/>} />
            </Routes>
        </Router>
    );
}

export default App;

