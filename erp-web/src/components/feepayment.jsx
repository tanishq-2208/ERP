import React from 'react';
import NavBar from './Nav';
import sum from '../assets/The sum of.png';
import bus from '../assets/Bus stop.png';
import exam from '../assets/Exam.png';
import online from '../assets/onlinepayment.png';
import one from '../assets/Tuition (1).png';
import two from '../assets/Tuition.png';
function FeePayment() {
    return (
        <div>
            <NavBar />
            <div className="flex font-saira">
                <div class="flex gap-x-28">
                <div className="w-72 py-5">
                    <nav className="flex flex-col py-6 space-y-7">
                        <a href="#attendance"
                            className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Attendance</a>
                        <a href="#results"
                            className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Results</a>
                        <a href="#timetable"
                            className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Time Table</a>
                        <a href="#hallticket"
                            className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Hall Ticket</a>
                        <a href="#schedule"
                            className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Schedule</a>
                        <a href="#feepayment"
                            className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Fee Payment</a>
                        <a href="#assignments"
                            className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Assignments</a>
                        <a href="#achievements"
                            className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-110 hover:translate-x-6">Achievements</a>
                    </nav>
                </div>
                </div>

                <div>
                    <div className="flex justify-center items-center" style={{ height: "150px", width: "1350px", paddingTop: "10px" }}>
                        <div className="flex justify-center items-center">
                            <h1 className="text-4xl font-bold text-center">Fee Payment</h1>
                        </div>
                    </div>

                    <div className="flex justify-center items-center" style={{ padding: "10px", paddingLeft: "355px", paddingTop: "10px" }}>
                        <img className="justify-center items-center" src={online} alt="Online Payments" />
                    </div>

                    <div className="flex justify-center items-center" style={{ paddingLeft: "120px" }}>
                        <div className="h-[728px] w-[706px] bg-purple-100 justify-center items-center">

                            {/* Tuition Fee Section */}
                            <div className="bg-purple-100 flex items-center justify-center" style={{ padding: "2.5rem" }}>
                            <input type="checkbox" id="tuition-fee" name="tuition-fee"
                            class="h-4 w-4 bg-purple-400 text-white border-gray-300 rounded-full" style={{ marginRight: "10px" }} />

                                <div className="bg-white rounded-full shadow-md w-80" style={{ padding: "0.5rem", width: "35rem" }}>
                                    <div className="flex items-center space-x-2">
                                        <img src={two} alt="Tuition Icon" className="w-6 h-6" />
                                        <span className="font-bold">Tuition Fee:</span>
                                        <input type="text" className="ml-auto p-2 border border-none rounded w-32" />
                                    </div>
                                </div>
                            </div>

                            {/* Exam Fee Section */}
                            <div className="bg-purple-100 flex items-center justify-center" style={{ padding: "2.5rem" }}>
                                <input type="checkbox" id="exam-fee-1" name="exam-fee"
                                    className="h-4 w-4 bg-purple-600 text-white border-gray-300 rounded-full" style={{ marginRight: "10px" }} />

                                <div className="bg-white rounded-full shadow-md w-80" style={{ padding: "0.5rem", width: "35rem" }}>
                                    <div className="flex items-center space-x-2">
                                        <img src={exam} alt="Exam Icon" className="w-6 h-6" />
                                        <span className="font-bold">Exam Fee:</span>
                                        <input type="text" className="ml-auto p-2 border border-none rounded w-32" />
                                    </div>
                                </div>
                            </div>

                            {/* Book Fee Section */}
                            <div className="bg-purple-100 flex items-center justify-center" style={{ padding: "2.5rem" }}>
                                <input type="checkbox" id="book-fee" name="book-fee" 
                                    className="h-4 w-4 bg-purple-600 text-white border-gray-300 rounded-full" style={{ marginRight: "10px" }} />

                                <div className="bg-white rounded-full shadow-md w-80" style={{ padding: "0.5rem", width: "35rem" }}>
                                    <div className="flex items-center space-x-2">
                                        <img src={one} alt="Book Icon" className="w-6 h-6" />
                                        <span className="font-bold">Book Fee:</span>
                                        <input type="text" className="ml-auto p-2 border border-none rounded w-32" />
                                    </div>
                                </div>
                            </div>

                            {/* Transport Fee Section */}
                            <div className="bg-purple-100 flex items-center justify-center" style={{ padding: "2.5rem" }}>
                                <input type="checkbox" id="transport-fee" name="transport-fee"
                                    className="h-4 w-4 bg-purple-600 text-white border-gray-300 rounded-full" style={{ marginRight: "10px" }} />

                                <div className="bg-white rounded-full shadow-md w-80" style={{ padding: "0.5rem", width: "35rem" }}>
                                    <div className="flex items-center space-x-2">
                                        <img src={bus} alt="Transport Icon" className="w-6 h-6" />
                                        <span className="font-bold">Transport Fee:</span>
                                        <input type="text" className="ml-auto p-2 border border-none rounded w-32" />
                                    </div>
                                </div>
                            </div>

                            {/* Total Fee Section */}
                            <div className="bg-purple-100 flex items-center justify-center" style={{ padding: "2.5rem" }}>
                                <div className="bg-white rounded-full shadow-md w-80" style={{ padding: "1.0rem", width: "35rem" }}>
                                    <div className="flex items-center space-x-2">
                                        <img src={sum} alt="Total Icon" className="w-6 h-6" />
                                        <span className="font-bold">Total Fee:</span>
                                        <input type="number" id="total-fee" className="ml-auto p-2 border border-none rounded w-32" value="0" readOnly />
                                    </div>
                                </div>
                            </div>

                            {/* Proceed Button */}
                            <div className="flex justify-center items-center">
                                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Proceed</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeePayment;