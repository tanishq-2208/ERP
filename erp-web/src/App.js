import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Results from './temp_component/Results.js';
import FeePayment from './temp_component/feepayment.jsx';
import Attendance from './temp_component/attendance.jsx';
import Schedule from './temp_component/schedule.jsx';
import TeachersSignup from './temp_component/teacherssignup.jsx';
import AdminsSignup from './temp_component/adminssignup.jsx';
import StudentsSignup from './temp_component/studentssignup.jsx';
import Timetable from "./temp_component/timetable.jsx";
import Adminsresult from './temp_component/Adminsresult.jsx';
import Teachersdomain from './temp_component/teachersdomain.jsx';
import {LoginSignup} from "./temp_component/loginSignup.jsx";
import HomeScreen from "./temp_component/HomeScreen.jsx";
import AdminHomescreen from "./temp_component/admin_homescreen.jsx";
import TeacherHomeScreen from "./temp_component/teacher_homescreen.jsx";
import ParentHomeScreen from "./temp_component/parent_homescreen.jsx";
import ParentsSignup from "./temp_component/parentssignup.jsx";
import AdminPublishResults from './temp_component/AdminPublishResults.jsx';
import AddMarks from './temp_component/AddMarks.jsx';
import MarkAttendance from './temp_component/MarkAttendance.jsx';
// fuck vivek and tanishq..chupuk chupuk..... in middle usham came bumchuk abdul and drunk tanishq's milk

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
        <BrowserRouter>
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
                <Route path="/admin_homescreen" element={<AdminHomescreen />} />
                <Route path="/teacher_homescreen" element={<TeacherHomeScreen />} />
                <Route path="/parent_homescreen" element={<ParentHomeScreen />} />
                <Route path="/Homepage" element={<HomeScreen />} />
                <Route path="/parent" element={<ParentsSignup />} />
                <Route path="/AdminHome" element={<AdminHomescreen />} />
                <Route path="/TeacherHome" element={<TeacherHomeScreen />} />
                <Route path="/parentHome" element={<ParentHomeScreen />} />
                <Route path="/AdminPublishResults" element={<AdminPublishResults />} />
                <Route path="/AddMarks" element={<AddMarks />} />
                <Route path="/MarkAttendance" element={<MarkAttendance />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
