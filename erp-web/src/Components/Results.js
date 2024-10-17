import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Image from '../assets/profile1.png';




function Results() {
    const [marksChart, setMarksChart] = useState(null);

    // Function to extract marks from the table
    function getMarksFromTable() {
        let marks = [];
        document.querySelectorAll('#marksTable tbody tr:not(.font-bold)').forEach(row => {
            let mark = row.cells[2].textContent.trim();
            marks.push(parseInt(mark, 10));
        });
        return marks;
    }

    useEffect(() => {
        const canvas = document.getElementById('marksChart');

        if (canvas) {
            const ctx = canvas.getContext('2d');
            const marksData = getMarksFromTable();

            // Destroy the existing chart if there is one before creating a new one
            if (marksChart) {
                marksChart.destroy(); // Destroy the old chart to avoid reusing the canvas
            }

            // Create the new chart
            const newChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Telugu', 'Hindi', 'English', 'Maths', 'Science', 'Social'],
                    datasets: [{
                        label: 'Marks',
                        data: marksData,
                        backgroundColor: [
                            '#6B46C1',
                            '#9F7AEA',
                            '#D6BCFA',
                            '#B794F4',
                            '#805AD5',
                            '#E9D8FD'
                        ],
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right',
                        },
                        tooltip: {
                            enabled: true,
                        },
                    }
                }
            });

            setMarksChart(newChart); // Store the chart instance in state

            return () => {
                // Cleanup: Destroy chart when component unmounts
                if (newChart) {
                    newChart.destroy();
                }
            };
        }
    }, []); // Empty dependency array to run only on mount

    // Effect to update chart when table data changes
    useEffect(() => {
        if (marksChart) {
            const newMarksData = getMarksFromTable();
            marksChart.data.datasets[0].data = newMarksData;
            marksChart.update();
        }
    });

    const [resultType, setResultype] = useState('FA1')
    const [resultsdata, setResultsdata] = useState(
        {
            "id": "0",
            "resultType": "FA1",
            "Telugu": 0,
            "Hindi": 0,
            "English": 0,
            "Maths": 0,
            "Science": 0,
            "Social": 0

        }

    )
    const onClickResultType = (value) => {

        setResultype(value)


        setResultsdata(
            {
                "id": "1",
                "resultType": "FA1",
                "Telugu": 10,
                "Hindi": 10,
                "English": 10,
                "Maths": 20,
                "Science": 10,
                "Social": 10


            }
        )

        // alert(JSON.stringify(resultsdata));

    };

    return (

        <div >
            <div
                className="min-h-screen" // Ensure the height is set to fit the screen
                style={{
                    backgroundImage: `url(${require("../image/background.png")}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    // backgroundattachment: 'fixed',
                }}
            >

                <nav class="bg-purple-400 p-2 fixed top-0 left-0 right-0 z-50">
                    <div class="flex items-center justify-between">
                        <div class="flex space-x-20 items-center pl-48 ml-60 ">
                            <a href="#" class="text-white font-semibold">Home</a>
                            <a href="#" class="text-white font-semibold">Contact</a>
                            <a href="#" class="text-white font-semibold">About</a>
                            <a href="#" class="text-white font-semibold">Help</a>
                        </div>
                        <div>
                            <span class="inline-block bg-purple-300 rounded-full mr-4">
                                <img src={Image} alt="" />

                            </span>
                        </div>
                    </div>
                </nav>

                <div class="part2">
                    <span class="font-serif text-[50px] font-medium leading-[58.55px] p-12  flex justify-center mt-9">Results</span>
                </div>

                
                <div class="w-72 h-screen fixed ">
                    <nav class="flex flex-col py-6 space-y-4">
                        <a href="#attendance"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Attendance</a>
                        <a href="#results"
                            class="w-80 px-5 py-2 text-2xl bg-[#7B52B4] rounded-r-full text-white">Results</a>
                        <a href="#timetable"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Time
                            Table</a>
                        <a href="#hallticket"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Hall
                            Ticket</a>
                        <a href="#schedule"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Schedule</a>
                        <a href="#feepayment"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Fee
                            Payment</a>
                        <a href="#assignments"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Assignments</a>
                        <a href="#achievements"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Achievements</a>
                    </nav>
                </div>



                <div class="part3 bg">
                    <div class="grid grid-cols-3 gap-4 gap-y-6 gap-x-10 mt-11 pl-96 pr-80 place-content-evenly  h-48 ">

                        <a href="#"
                            class="bg-[#E1CCEC] hover:bg-[#7B52B4] text-#000000-500 text-sm pl-24 pr-24 pt-4 pb-4 hover:text-white justify-centre " onClick={() => onClickResultType('FA1')}> FA1</a>
                        <a href="#"
                            class="bg-[#E1CCEC] hover:bg-[#7B52B4] text-#000000-500 text-sm pl-24 pr-24 pt-4 pb-4 justify-centre  hover:text-white" onClick={() => onClickResultType('FA2')}>FA2</a>
                        <a href="#"
                            class="bg-[#E1CCEC] hover:bg-[#7B52B4] text-#000000-500 text-sm pl-24 pr-24 pt-4 pb-4 justify-centre hover:text-white" onClick={() => onClickResultType('SA1')}>SA1</a>
                        <a href="#"
                            class="bg-[#E1CCEC] hover:bg-[#7B52B4] text-#000000-500 text-sm pl-24 pr-24 pt-4 pb-4 justify-centre hover:text-white" onClick={() => onClickResultType('FA3')}>FA3</a>
                        <a href="#"
                            class="bg-[#E1CCEC] hover:bg-[#7B52B4] text-#000000-500 text-sm pl-24 pr-24 pt-4 pb-4 justify-centre hover:text-white" onClick={() => onClickResultType('FA4')}>FA4</a>
                        <a href="#"
                            class="bg-[#E1CCEC] hover:bg-[#7B52B4] text-#000000-500 text-sm pl-24 pr-24 pt-4 pb-4 justify-centre hover:text-white" onClick={() => onClickResultType('SA2')}>SA2</a>

                    </div>


                </div>

                <div class="flex flex-col items-center justify-center p-16 min-h-793px  ">

                    <div class="bg-white rounded-lg shadow-lg max-w-2xl p-16  w-fit">
                        <div class="flex justify-center ">
                            <p class="font-poppins text-[40px] font-medium leading-[75px] text-left">{resultType}</p>
                        </div>

                        <div class=" items-center mt-16 mb-10">
                            <table id="marksTable" class="w-full bg-purple-300 border-collapse border  border-black rounded-lg">
                                <thead>
                                    <tr>
                                        <th class="border border-black py-3 px-6">S.No</th>
                                        <th class="border border-black py-3 px-6">Subjects</th>
                                        <th class="border border-black py-3 px-6">Marks</th>
                                        <th class="border border-black py-3 px-6">Grade</th>
                                    </tr>
                                </thead>
                                <tbody class="text-center">
                                    <tr>
                                        <td class="border border-black py-2 px-6">1.</td>
                                        <td class="border border-black py-2 px-6">Telugu</td>
                                        <td class="border border-black py-2 px-6">{resultsdata.Telugu}</td>
                                        <td class="border border-black py-2 px-6">F</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-black py-2 px-6">2.</td>
                                        <td class="border border-black py-2 px-6">Hindi</td>
                                        <td class="border border-black py-2 px-6">{resultsdata.Hindi}</td>
                                        <td class="border border-black py-2 px-6">F</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-black py-2 px-6">3.</td>
                                        <td class="border border-black py-2 px-6">English</td>
                                        <td class="border border-black py-2 px-6">{resultsdata.English}</td>
                                        <td class="border border-black py-2 px-6">O</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-black py-2 px-6">4.</td>
                                        <td class="border border-black py-2 px-6">Maths</td>
                                        <td class="border border-black py-2 px-6">{resultsdata.Maths}</td>
                                        <td class="border border-black py-2 px-6">O</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-black py-2 px-6">5.</td>
                                        <td class="border border-black py-2 px-6">Science</td>
                                        <td class="border border-black py-2 px-6">{resultsdata.Science}</td>
                                        <td class="border border-black py-2 px-6">A</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-black py-2 px-6">6.</td>
                                        <td class="border border-black py-2 px-6">Social</td>
                                        <td class="border border-black py-2 px-6">{resultsdata.Social}</td>
                                        <td class="border border-black py-2 px-6">B</td>
                                    </tr>
                                    <tr class="font-bold">
                                        <td colspan="2" class="border border-black py-2 px-6 text-center">Total:</td>
                                        <td class="border border-black py-2 px-6">563</td>
                                        <td class="border border-black py-2 px-6">B+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        


                        <div class="w-full flex justify-center">
                            <div class="w-64 h-64">
                                <canvas id="marksChart"></canvas>
                            </div>
                        </div>
                    </div>


                </div>



            </div>

        </div>
    );

}


export default Results;