import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Results from './components/Results.js';
import FeePayment from './components/feepayment.jsx';
import Attendance from './components/attendance';
import Schedule from './components/schedule';
import TeachersSignup from './components/teacherssignup';
import AdminsSignup from './components/adminssignup';
import StudentsSignup from './components/studentssignup';


function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/hello')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((data) => setMessage(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const [name, setName] = useState("Default")

    return (
        <Router>


            <Routes>
                <Route path="/Results" element={<Results />} />
                <Route path="/feepayment" element={<FeePayment/>} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/teacher" element={<TeachersSignup/>} />
                <Route path="/adminsignup" element={<AdminsSignup/>} />
                <Route path="/student" element={<StudentsSignup/>} />
            </Routes>
        </Router>

    );
}

export default App;
