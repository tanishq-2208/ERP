import React, { useEffect, useState } from 'react';
import schoolImage from '../assets/school.png';
import attendanceLogo from '../assets/Attendance_logo.svg';
import resultLogo from '../assets/Result logo.png';
import FeePaymentLogo from '../assets/Fee payment logo.png';
import Timetable from '../assets/Timetable.png';
import Hallticket from '../assets/Hallticket.png';
import Schedule from '../assets/Schedule.png';
import Assignment from '../assets/Assignment.png';
import Achievement from '../assets/Achievement.png';
import homeScreenImage from '../Images/HomeScreen.png';
import NavBar from './Nav';
import { useNavigate } from 'react-router-dom';

const TeacherHomeScreen = () => {
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
    const navigate = useNavigate();
    const goToPage = (page, type) => {
        if (page === "Teachersdomain") {
            navigate(`/Teachersdomain`, { 
                state: { pageType: type } 
            });
        } 
    };

    return (
        <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${homeScreenImage})`,  // Use the imported image directly
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
         {/* Navbar */}
         <NavBar />

{/* Spacing for fixed navbar */}
     {/* <div className="pt-3"></div> */}

     {/* Student Info */}
            <h1 className="font-serif text-2xl pt-20 text-left ml-10 font-medium">About School</h1>
            <br/>

            <div className="flex font-serif text-left">
                <p className="ml-20 mt-6">
                    A school is both the educational institution and building designed to provide learning spaces and learning
                    <br />
                    environments for the teaching of students under the direction of teachers. Most countries have systems of formal education, which is sometimes compulsory.[2] In these systems,
                    <br />
                    students progress through a series of schools that can be built and operated by both government and private organization. The names for these schools vary by
                    <br />
                    country but generally include primary school for young children and secondary school for teenagers who have completed primary education. An institution where higher education is taught is commonly called a university college or university.
                </p>
                <div className="inline-block mr-20 w-700">
                    <img src={schoolImage} alt="School" />
                </div>
            </div>

            {/* Main Content (Centered Grid Below Navbar) */}
            <div className="min-h-screen flex flex-col ml-60 mr-60 justify-start pt-20 ">
                <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 font-semibold">
                    <a href="" className="bg-purple-200 p-3 rounded-lg flex items-center shadow-lg hover:bg-[#BE9FE1] transform motion-safe:hover:scale-110" 
                        onClick={() => goToPage("Teachersdomain", "attendance")}>
                        <img src={attendanceLogo} alt="Attendance" className="w-12 h-12 mr-4" />
                        <span className="font-saira text-lg">Mark Attendance</span>
                    </a>
                    <a href="" className="bg-purple-200 p-3 rounded-lg flex items-center shadow-lg font-saira hover:bg-[#BE9FE1] transform motion-safe:hover:scale-110" 
                        onClick={() => goToPage("Teachersdomain", "marks")}>
                        <img src={resultLogo} alt="Results" className="w-12 h-12 mr-4" />
                        <span className="font-semibold text-lg">Add Marks</span>
                    </a>
                    <a href="" className="bg-purple-200 p-3 rounded-lg flex items-center shadow-lg font-saira hover:bg-[#BE9FE1] transform motion-safe:hover:scale-110" onClick={() => goToPage("feepayment")}>
                        <img src={FeePaymentLogo} alt="Fee Payment" className="w-12 h-12 mr-4" />
                        <span className="font-semibold text-lg">Check Payment</span>
                    </a>

                    <a href="" class="bg-purple-200 p-3 rounded-lg flex items-center shadow-lg font-saira hover:bg-[#BE9FE1] transform motion-safe:hover:scale-110" onClick={() => goToPage("timetable")}>
                        <img src={Timetable} alt="Time Table" class="w-12 h-12 mr-4" />
                        <span class="font-semibold text-lg">Time Table</span>
                    </a>

                    <a href="" class="bg-purple-200 p-3 rounded-lg flex items-center shadow-lg font-saira hover:bg-[#BE9FE1] transform motion-safe:hover:scale-110" onClick={() => goToPage("schedule")}>
                        <img src={Schedule} alt="Schedule" class="w-12 h-12 mr-4" />
                        <span class="font-semibold text-lg">Schedule</span>
                    </a>

                    <a href="" class="bg-purple-200 p-3 rounded-lg flex items-center shadow-lg font-saira hover:bg-[#BE9FE1] transform motion-safe:hover:scale-110" onClick={() => goToPage("")}>
                        <img src={Assignment} alt="Time Table" class="w-12 h-12 mr-4" />
                        <span class="font-semibold text-lg">Post Assignments</span>
                    </a>
                    {/*Card 8*/}
                    <a href="" class="bg-purple-200 p-3 rounded-lg flex items-center shadow-lg font-saira hover:bg-[#BE9FE1] transform motion-safe:hover:scale-110" onClick={() => goToPage("")}>
                        <img src={Achievement} alt="Hall Ticket" class="w-12 h-12 mr-4" />
                        <span class="font-semibold text-lg">View Achievement</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeacherHomeScreen;
