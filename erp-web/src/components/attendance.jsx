import React, { useState } from 'react';
import NavBar from './Nav';
import BarChart from './graph';

const initialAttendanceData = [
    { subject: "Telugu", teacher: "Teacher 1" },
    { subject: "Hindi", teacher: "Teacher 2" },
    { subject: "English", teacher: "Teacher 3" },
    { subject: "Math", teacher: "Teacher 4" },
    { subject: "Science", teacher: "Teacher 5" },
    { subject: "Social", teacher: "Teacher 6" },
    { subject: "P.T", teacher: "Teacher 7" },
];

const initialMonthlyData = [
    { month: "Jan", telugu: 95, hindi: 70, english: 95, math: 95, science: 95, social: 95 },
    { month: "Feb", telugu: 55, hindi: 55, english: 55, math: 55, science: 55, social: 55 },
    { month: "Mar", telugu: 10, hindi: 10, english: 90, math: 10, science: 10, social: 10 },
];

const Attendance = () => {
    const [attendanceData, setAttendanceData] = useState(initialAttendanceData);
    const [monthlyData, setMonthlyData] = useState(initialMonthlyData);
    const updateAttendanceData = (index, subject, teacher) => {
        const newAttendanceData = [...attendanceData];
        newAttendanceData[index] = { subject, teacher };
        setAttendanceData(newAttendanceData);
        const newMonthlyData = monthlyData.map(data => ({
            ...data,
            [subject.toLowerCase()]: Math.max(0, data[subject.toLowerCase()] - 10) 
        }));
        setMonthlyData(newMonthlyData);
    };

    return (
        <div className="min-h-screen"
            style={{
                backgroundImage: `url(${require('../images/bg4.jpg')})`,
                marginTop:"-20px",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <NavBar />
            <div className="flex justify-center mt-14 py-16">
                <h2 className="font-serif font-italic text-4xl">Subject Details</h2>
            </div>
            <div className="flex">
                <div className="w-60 h-screen py-5">
                    <nav className="flex flex-col py-6 space-y-4">
                        <a href="#attendance" className="px-4 py-2 w-72 bg-[#5B28A2C9] rounded-r-full text-white">Attendance</a>
                        <a href="#results" className="px-4 py-2 bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Results</a>
                        <a href="#timetable" className="px-4 py-2 bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Time Table</a>
                        <a href="#hallticket" className="px-4 py-2 bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Hall Ticket</a>
                        <a href="#schedule" className="px-4 py-2 bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Schedule</a>
                        <a href="#feepayment" className="px-4 py-2 bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Fee Payment</a>
                        <a href="#assignments" className="px-4 py-2 bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Assignments</a>
                        <a href="#achievements" className="px-4 py-2 bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Achievements</a>
                    </nav>
                </div>
                <div>
                    <div className="w-9/12 ml-60 py-8 px-20">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-white dark:text-black border-b dark:border-gray-700">
                                <thead className="text-xs text-black uppercase bg-white dark:bg-white dark:text-black border-b dark:border-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">SUBJECTS</th>
                                        <th scope="col" className="px-6 py-4">TEACHER</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendanceData.map((data, index) => (
                                        <tr key={index} className="odd:bg-white odd:dark:bg-purple-300 even:bg-gray-50 even:dark:bg-white border-b dark:border-gray-700">
                                            <th scope="row" className="px-8 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">{data.subject}</th>
                                            <td className="px-8 py-4 text-black-900 font-medium dark:text-black">{data.teacher}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ml-48 mt-32 w-9/12 h-9/12">
                        <BarChart monthlyData={monthlyData} /> 
                    </div>
                    <div className="flex justify-center w-10/12 ml-[180px] mt-32 px-[70px] py-8">
                        <table className="table-auto border-collapse border border-gray-300 shadow-lg">
                            <thead>
                                <tr>
                                    <th className="px-6 py-4 border border-gray-300 bg-purple-100">Months</th>
                                    <th className="px-6 py-4 border border-gray-300 bg-purple-100">Telugu</th>
                                    <th className="px-6 py-4 border border-gray-300 bg-purple-100">Hindi</th>
                                    <th className="px-6 py-4 border border-gray-300 bg-purple-100">English</th>
                                    <th className="px-6 py-4 border border-gray-300 bg-purple-100">Math</th>
                                    <th className="px-6 py-4 border border-gray-300 bg-purple-100">Science</th>
                                    <th className="px-6 py-4 border border-gray-300 bg-purple-100">Social</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthlyData.map((data, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 border border-gray-300 bg-purple-100">{data.month}</td>
                                        <td className="px-6 py-4 border border-gray-300 bg-purple-100">{data.telugu}</td>
                                        <td className="px-6 py-4 border border-gray-300 bg-purple-100">{data.hindi}</td>
                                        <td className="px-6 py-4 border border-gray-300 bg-purple-100">{data.english}</td>
                                        <td className="px-6 py-4 border border-gray-300 bg-purple-100">{data.math}</td>
                                        <td className="px-6 py-4 border border-gray-300 bg-purple-100">{data.science}</td>
                                        <td className="px-6 py-4 border border-gray-300 bg-purple-100">{data.social}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;