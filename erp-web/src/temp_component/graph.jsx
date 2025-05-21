import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ monthlyData }) => {
    const subjects = ['Telugu', 'Hindi', 'English', 'Math', 'Science', 'Social'];
    const attendanceData = subjects.map(subject => {
        return monthlyData.map(data => data[subject.toLowerCase()]); 
    });
    const data = {
        labels: subjects, 
        datasets: [
            {
                label: 'January',
                data: attendanceData.map(data => data[0]),
                backgroundColor: 'rgba(137, 121, 255, 1)',
                borderColor: 'rgba(137, 121, 255, 1)',
                borderWidth: 1,
            },
            {
                label: 'February',
                data: attendanceData.map(data => data[1]),
                backgroundColor: 'rgba(255, 146, 138, 1)',
                borderColor: 'rgba(255, 146, 138, 1)',
                borderWidth: 1,
            },
            {
                label: 'March',
                data: attendanceData.map(data => data[2]),
                backgroundColor: 'rgba(60, 195, 223, 1)',
                borderColor: 'rgba(60, 195, 223, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Attendance Data by Subject',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;