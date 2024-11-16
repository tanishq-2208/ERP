import React from 'react';
import NavBar from './Nav'; // Adjust import path if needed
import timetableData from '../data/timetable.json'; // Import JSON data

const Timetable = () => {
  const backgroundStyle = {
    backgroundImage: `url(${require('../assets/timetable.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    margin: '20px',
  };

  const sidebarStyle = {
    width: '250px',
  };

  const tableContainerStyle = {
    marginTop: '180px',
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    marginLeft: '70px',
    tableLayout: 'fixed',
    maxHeight: '500px',
  };

  const cellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
    wordWrap: 'break-word',
    verticalAlign: 'middle',
    fontWeight: 'normal',
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: '#BE9FE1',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const verticalTextStyle = {
    ...cellStyle,
    writingMode: 'vertical-rl',
    textOrientation: 'downright',
    fontWeight: 'bold',
    color: '#5B28A2F7',
    fontSize: '15px',
    verticalAlign: 'middle',
    height: '40px',
    lineHeight: '1',
  };

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {timetableData.headers.map((header, index) => (
            <th
              key={index}
              style={
                header === '10:15-10:30' || header === '12:00-12:45'
                  ? { ...headerStyle, width: '10%' }
                  : { ...headerStyle, width: '5%' }
              }
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderRows = () => {
    return (
      <tbody>
        {timetableData.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th style={headerStyle}>{row.day}</th>
            {row.subjects.map((subject, colIndex) => {
              if (subject === 'SHORT BREAK' || subject === 'LUNCH BREAK') {
                return (
                  <td
                    key={colIndex}
                    style={verticalTextStyle}
                    rowSpan="6" // Assuming breaks span all days
                  >
                    {subject}
                  </td>
                );
              } else {
                return (
                  <td key={colIndex} style={cellStyle}>
                    {subject}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div style={backgroundStyle}>
      <NavBar />
      <div className="part2" style={{ margin: '50px' }}>
        <span className="font-serif text-[50px] font-medium leading-[58.55px] p-6 flex justify-center">
          Time Table
        </span>
      </div>
      <div style={mainContainerStyle}>
        {/* Sidebar */}
        <div style={sidebarStyle} className="w-72 h-screen py-5">
          <nav className="flex flex-col py-6 space-y-4">
            <a
              href="#attendance"
              className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2"
            >
              Attendance
            </a>
            <a
              href="#results"
              className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2"
            >
              Results
            </a>
            <a
              href="#timetable"
              className="w-80 px-5 py-2 text-2xl bg-[#7B52B4] rounded-r-full text-white"
            >
              Time Table
            </a>
            <a
              href="#hallticket"
              className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2"
            >
              Hall Ticket
            </a>
            <a
              href="#schedule"
              className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2"
            >
              Schedule
            </a>
            <a
              href="#feepayment"
              className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2"
            >
              Fee Payment
            </a>
            <a
              href="#assignments"
              className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2"
            >
              Assignments
            </a>
            <a
              href="#achievements"
              className="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2"
            >
              Achievements
            </a>
          </nav>
        </div>
        {/* Timetable */}
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            {renderHeader()}
            {renderRows()}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
