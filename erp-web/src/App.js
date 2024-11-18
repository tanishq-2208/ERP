import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Results from './components/Results.js';
import FeePayment from './components/feepayment.jsx';
import Attendance from './components/attendance';
import Schedule from './components/schedule';
import TeachersSignup from './components/teacherssignup';
import AdminsSignup from './components/adminssignup';
import StudentsSignup from './components/studentssignup';
import Timetable from "./components/timetable.jsx";
import Adminsresult from './components/Adminsresult';
import Teachersdomain from './components/teachersdomain.jsx';

function App() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:8080/hello')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((data) => {
                if (isMounted) {
                    setMessage(data);
                    setLoading(false);
                }
            })
            .catch((error) => {
                if (isMounted) {
                    console.error("Error fetching message:", error);
                    setLoading(false);
                }
            });

        return () => { isMounted = false }; // cleanup function
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
                <Route path="/student" element={<StudentsSignup />} />
                <Route path="/Teachersdomain" element={<Teachersdomain />} />
                <Route path="/Adminsresult" element={<Adminsresult />} />
                <Route path="/timetable" element={<Timetable />} />
            </Routes>
        </Router>
    );
}

export default App;
