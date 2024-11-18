import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Results from './Components/Results.js';
import FeePayment from './Components/feepayment.jsx';
import Attendance from './Components/attendance';
import Schedule from './Components/schedule';
import TeachersSignup from './Components/teacherssignup';
import AdminsSignup from './Components/adminssignup';
import StudentsSignup from './Components/studentssignup';
import Timetable from "./Components/timetable.jsx";
import Adminsresult from './Components/Adminsresult';
import Teachersdomain from './Components/teachersdomain.jsx';
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
                <Route path="/student" element={<StudentsSignup/>} />
                <Route path="/Teachersdomain" element={<Teachersdomain />} />
                <Route path="/Adminsresult" element={<Adminsresult />} />
                <Route path="/timetable" element={<Timetable />} />
            </Routes>
        </Router>
    );
}

export default App;
