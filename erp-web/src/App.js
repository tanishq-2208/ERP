import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Results from './Components/Results.js';
import FeePayment from './Components/feepayment.jsx';
import Attendance from './Components/attendance.jsx';
import Schedule from './Components/schedule.jsx';
import TeachersSignup from './Components/teacherssignup.jsx';
import AdminsSignup from './Components/adminssignup.jsx';
import StudentsSignup from './Components/studentssignup.jsx';
import Timetable from "./Components/timetable.jsx";
import Adminsresult from './Components/Adminsresult.jsx';
import Teachersdomain from './Components/teachersdomain.jsx';
import {LoginSignup} from "./Components/loginSignup.jsx";
import HomeScreen from "./Components/HomeScreen.jsx";
import AdminHomescreen from "./Components/admin_homescreen.jsx";
import TeacherHomeScreen from "./Components/teacher_homescreen.jsx";
import ParentHomeScreen from "./Components/parent_homescreen.jsx";


function App() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     let isMounted = true;
    //     fetch('http://localhost:8080/hello')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.text();
    //         })
    //         .then((data) => {
    //             if (isMounted) {
    //                 setMessage(data);
    //                 setLoading(false);
    //             }
    //         })
    //         .catch((error) => {
    //             if (isMounted) {
    //                 console.error("Error fetching message:", error);
    //                 setLoading(false);
    //             }
    //         });

    //     return () => { isMounted = false }; // cleanup function
    // }, []);

    const [name, setName] = useState("Default")

    return (
        <Router>


            <Routes>
                <Route path="/Results" element={<Results />} />
                <Route path="/feepayment" element={<FeePayment/>} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/" element={<LoginSignup />} />
                <Route path="/teacher" element={<TeachersSignup/>} />
                <Route path="/admin" element={<AdminsSignup/>} />
                <Route path="/student" element={<StudentsSignup />} />
                <Route path="/Teachersdomain" element={<Teachersdomain />} />
                <Route path="/Adminsresult" element={<Adminsresult />} />
                <Route path="/timetable" element={<Timetable />} />
                <Route path="/Homepage" element={<HomeScreen />} />
                <Route path="/AdminHome" element={<AdminHomescreen />} />
                <Route path="/TeacherHome" element={<TeacherHomeScreen />} />
                <Route path="/parentHome" element={<ParentHomeScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
