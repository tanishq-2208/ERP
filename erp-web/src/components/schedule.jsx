import React from 'react';
import NavBar from './Nav';

const scheduleData = {
  schedules: [
    {
      exam: "FA-1 Examinations",
      startDate: "2026-27-100",
      endDate: "2024-09-25"
    },
    {
      exam: "Holidays if any",
      startDate: "2024-09-26",
      endDate: "2024-11-27"
    },
    {
      exam: "FA-2 Examinations",
      startDate: "2024-11-28",
      endDate: "2024-11-30"
    },
    {
      exam: "Preparation Holidays",
      startDate: "2024-12-02",
      endDate: "2024-12-07"
    },
    {
      exam: "SA-1 Examinations",
      startDate: "2024-12-09",
      endDate: "2024-12-21"
    },
    {
      exam: "FA-3 Examinations",
      startDate: "2024-09-23",
      endDate: "2024-09-25"
    },
    {
      exam: "Dasara Recess",
      startDate: "2024-09-26",
      endDate: "2024-09-27"
    },
    {
      exam: "FA-4 Examinations",
      startDate: "2024-11-28",
      endDate: "2024-11-30"
    },
    {
      exam: "Preparation Holidays",
      startDate: "2024-12-02",
      endDate: "2024-12-07"
    },
    {
      exam: "SA-2 Examinations",
      startDate: "2024-12-09",
      endDate: "2024-12-21"
    }
  ]
};

const Schedule = () => {
  return (
    <div className="absolute min-h-screen w-full" 
      style={{
        backgroundImage: `url(${require('../image/bg.png')})`,  
        backgroundSize: 'cover',                     
        backgroundPosition: 'center',                 
        backgroundRepeat: 'no-repeat',               
        backgroundAttachment: 'fixed',
      }}
    >
      <NavBar />
      <div className="flex justify-center mt-16 py-8">
        <h2 className="text-4xl font-serif">Schedule</h2>
      </div>
      {/* Sidebar */}
      <div className="flex pt-16">
                    <div className="w-60 h-screen py-11 fixed top-0 left-0 z-10"> 
                        <nav className="flex flex-col space-y-4 mt-16"> 
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
                </div>
        <div className="flex flex-col items-center ml-28 w-full">
          <div className="m-2">
            <select className="px-6 py-2 bg-purple-200 w-28 text-purple-900 rounded-md shadow-md">
              <option>SA-1</option>
              <option>FA-1</option>
              <option>FA-2</option>
            </select>
          </div>
          <div className="w-8/12 rounded-lg mt-9 mb-24">
            <div className="bg-gray-100 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-md w-full max-w-4xl">
                <div className="bg-purple-200 p-4 text-center rounded-t-lg">
                  <h2 className="text-xl font-semibold text-gray-600">Schedule</h2>
                </div>

                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                    <tr>
                      <th className="px-6 py-3 text-left border-r border-gray-300">Exams</th>
                      <th className="px-6 py-3 text-left border-r border-gray-300">Start Date</th>
                      <th className="px-6 py-3 text-left">End Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm">
                    {scheduleData.schedules.slice(0, 5).map((schedule, index) => (
                      <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                        <td className="px-6 py-3 border-r border-gray-300">{schedule.exam}</td>
                        <td className="px-6 py-3 border-r border-gray-300">{schedule.startDate}</td>
                        <td className="px-6 py-3">{schedule.endDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="m-8">
            <select className="px-6 py-2 bg-purple-200 w-28 text-purple-900 rounded-md shadow-md">
              <option>SA-2</option>
              <option>FA-3</option>
              <option>FA-4</option>
            </select>
          </div>
          <div className="w-8/12 rounded-lg mt-9 mb-24">
            <div className="bg-gray-100 flex items-center justify-center ">
              <div className="bg-white rounded-lg shadow-md w-full max-w-4xl">
                <div className="bg-purple-200 p-4 text-center rounded-t-lg">
                  <h2 className="text-xl font-semibold text-gray-600">Schedule</h2>
                </div>
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
                    <tr>
                      <th className="px-6 py-3 text-left border-r border-gray-300">Exams</th>
                      <th className="px-6 py-3 text-left border-r border-gray-300">Start Date</th>
                      <th className="px-6 py-3 text-left">End Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-sm">
                    {scheduleData.schedules.slice(5).map((schedule, index) => (
                      <tr key={index + 5} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                        <td className="px-6 py-3 border-r border-gray-300">{schedule.exam}</td>
                        <td className="px-6 py-3 border-r border-gray-300">{schedule.startDate}</td>
                        <td className="px-6 py-3">{schedule.endDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Schedule;