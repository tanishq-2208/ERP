import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Results from './Components/Results.js';
import FeePayment from './Components/feepayment.jsx';

import Schedule from './Components/schedule';
import TeachersSignup from './Components/teacherssignup';
import AdminsSignup from './Components/adminssignup';
import StudentsSignup from './Components/studentssignup';
import Timetable from "./Components/timetable.jsx";
import Attendance from "./Components/attendance.jsx";


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

    const [name, setName] = useState("Default");

    return (
        <Router>
            <Routes>
            
                <Route path="/timetable" element={<Timetable />} />

        
                 <Route path="/Results" element={<Results />} />
                <Route path="/feepayment" element={<FeePayment />} />
                <Route path="/attendance" element={<Attendance/>} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/teacher" element={<TeachersSignup />} />
                <Route path="/adminsignup" element={<AdminsSignup />} />
                <Route path="/student" element={<StudentsSignup />} /> 
            </Routes>
        </Router>
    );
}

export default App;
