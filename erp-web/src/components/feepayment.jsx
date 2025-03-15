import React, { useState } from 'react';
import NavBar from './Nav';
import sum from '../assets/The sum of.png';
import bus from '../assets/Bus stop.png';
import exam from '../assets/Exam.png';
import online from '../assets/onlinepayment.png';
import one from '../assets/Tuition (1).png';
import two from '../assets/Tuition.png';

function FeePayment() {
  // State for all fees
  const [tuitionFee, setTuitionFee] = useState(0);
  const [examFee, setExamFee] = useState(0);
  const [bookFee, setBookFee] = useState(0);
  const [transportFee, setTransportFee] = useState(0);

  // State for checkbox selection
  const [isTuitionChecked, setIsTuitionChecked] = useState(false);
  const [isExamChecked, setIsExamChecked] = useState(false);
  const [isBookChecked, setIsBookChecked] = useState(false);
  const [isTransportChecked, setIsTransportChecked] = useState(false);

  // State for total fee
  const [totalFee, setTotalFee] = useState(0);

  // Handler for checkboxes
  const handleCheckboxChange = (e, setChecked) => {
    setChecked(e.target.checked);
  };

  // Total fee calculation function
  const calculateTotalFee = () => {
    let total = 0;
    if (isTuitionChecked) total += parseFloat(tuitionFee) || 0;
    if (isExamChecked) total += parseFloat(examFee) || 0;
    if (isBookChecked) total += parseFloat(bookFee) || 0;
    if (isTransportChecked) total += parseFloat(transportFee) || 0;
    return total;
  };

  const handleProceed = () => {
    const total = calculateTotalFee();
    setTotalFee(total);
  };

  return (
    <div
      className="min-h-screen flex" // Change to flex for layout
      style={{
        backgroundImage: `url(${require('../image/bg.png')})`,
        marginTop: "-15px",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
      }}
    >
      <NavBar />
      <div class="flex ">
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
                
        
        <div className="flex flex-col w-full items-center ml-64 p-5" style={{ marginRight: "250px" }}>
          <h1 className="text-4xl font-bold text-center" style={{ fontFamily: 'Roboto Serif, serif', padding: "1px", margin: "80px" }}>
            Fee Payment 
          </h1>
          <div className="flex justify-center items-center" style={{ padding: "30px" }}>
            <img src={online} alt="Online Payments" style={{ marginLeft: "250px" }} />
          </div>
          <div className="bg-purple-100 rounded-lg p-10 w-full max-w-[600px] shadow-md" style={{ marginTop: "-30px", marginLeft: "200px", }}>
            {/* Tuition Fee Section */}
            <div className="bg-purple-100 flex items-center justify-center mb-6" style={{ margin: "30px" }}>
              <input
                type="checkbox"
                id="tuition-fee"
                checked={isTuitionChecked}
                onChange={(e) => handleCheckboxChange(e, setIsTuitionChecked)}
                className="h-4 w-4 text-white border-gray-300 rounded-full"
                style={{ backgroundColor: 'rgba(225, 204, 236, 1)', marginRight: '10px' }}
              />

              <div className="bg-white rounded-full shadow-md w-full p-4" style={{ padding: "2px", boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2), 0px 8px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center space-x-2" style={{ fontFamily: "Roboto Serif" }}>
                  <img src={two} alt="Tuition Icon" className="w-6 h-6" />
                  <span className="font">Tuition Fee:</span>
                  <input
                    type="text"
                    value={tuitionFee}
                    onChange={(e) => setTuitionFee(e.target.value)}
                    className="ml-auto p-2 border border-none rounded w-32"
                  />
                </div>
              </div>
            </div>

            {/* Exam Fee Section */}
            <div className="bg-purple-100 flex items-center justify-center mb-6" style={{ margin: "30px" }}>
              <input
                type="checkbox"
                id="exam-fee"
                checked={isExamChecked}
                onChange={(e) => handleCheckboxChange(e, setIsExamChecked)}
                className="h-4 w-4 text-white border-gray-300 rounded-full"
                style={{ backgroundColor: 'rgba(225, 204, 236, 1)', marginRight: '10px' }}
              />

              <div className="bg-white rounded-full shadow-md w-full p-4" style={{ padding: "2px", boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2), 0px 8px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center space-x-2" style={{ fontFamily: "Roboto Serif" }}>
                  <img src={exam} alt="Exam Icon" className="w-6 h-6" />
                  <span className="font">Exam Fee:</span>
                  <input
                    type="text"
                    value={examFee}
                    onChange={(e) => setExamFee(e.target.value)}
                    className="ml-auto p-2 border border-none rounded w-32"
                  />
                </div>
              </div>
            </div>

            {/* Book Fee Section */}
            <div className="bg-purple-100 flex items-center justify-center mb-6" style={{ margin: "30px" }}>
              <input
                type="checkbox"
                id="book-fee"
                checked={isBookChecked}
                onChange={(e) => handleCheckboxChange(e, setIsBookChecked)}
                className="h-4 w-4 text-white border-gray-300 rounded-full"
                style={{ backgroundColor: 'rgba(225, 204, 236, 1)', marginRight: '10px' }}
              />

              <div className="bg-white rounded-full shadow-md w-full p-4" style={{ padding: "2px", boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1), 0px 8px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center space-x-2" style={{ fontFamily: "Roboto Serif" }}>
                  <img src={one} alt="Book Icon" className="w-6 h-6" />
                  <span className="font">Book Fee:</span>
                  <input
                    type="text"
                    value={bookFee}
                    onChange={(e) => setBookFee(e.target.value)}
                    className="ml-auto p-2 border border-none rounded w-32"
                  />
                </div>
              </div>
            </div>

            {/* Transport Fee Section */}
            <div className="bg-purple-100 flex items-center justify-center mb-6" style={{ margin: "30px" }}>
              <input
                type="checkbox"
                id="transport-fee"
                checked={isTransportChecked}
                onChange={(e) => handleCheckboxChange(e, setIsTransportChecked)}
                className="h-4 w-4 text-white border-gray-300 rounded-full"
                style={{ backgroundColor: 'rgba(225, 204, 236, 1)', marginRight: '10px' }}
              />

              <div className="bg-white rounded-full shadow-md w-full p-4" style={{ padding: "2px", boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2), 0px 8px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center space-x-2" style={{ fontFamily: "Roboto Serif" }}>
                  <img src={bus} alt="Transport Icon" className="w-6 h-6" />
                  <span className="font">Transport Fee:</span>
                  <input
                    type="text"
                    value={transportFee}
                    onChange={(e) => setTransportFee(e.target.value)}
                    className="ml-auto p-2 border border-none rounded w-32"
                  />
                </div>
              </div>
            </div>

            {/* Total Fee Section */}
            <div className="bg-purple-100 flex items-center justify-center mb-6" style={{ margin: "30px" }}>
              <div className="bg-white rounded-full shadow-md w-full p-4" style={{ fontFamily: "Roboto Serif", padding: "2px", marginLeft: "25px", boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2), 0px 8px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center space-x-2">
                  <img src={sum} alt="Total Fee Icon" className="w-6 h-6" />
                  <span className="font">Total Fee:</span>
                  <span className="ml-auto p-2 border border-none rounded w-32">{totalFee}</span>
                </div>
              </div>
            </div>

            {/* Proceed Button */}
            <div className="bg-purple-100 flex items-center justify-center mb-6">
              <button
                onClick={handleProceed}
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default FeePayment;
