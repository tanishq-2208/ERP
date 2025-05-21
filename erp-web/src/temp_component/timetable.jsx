import React from 'react';
import NavBar from './Nav'; // Adjust import path if needed
import timetableData from '../data/timetable.json'; // Import JSON data
import { useNavigate } from 'react-router-dom';

const Timetable = () => {
  const backgroundStyle = {
    backgroundImage: `url(${require('../assets/timetablebg.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  const tableContainerStyle = {
    marginTop: '10px', // Adjust for navbar height
    marginLeft: '300px', // Move table more to the right (increased from 270px to 300px)
    padding: '50px',
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
    width: 'calc(100% + 16px)',  // Increased the width by 16px
    maxWidth: '1016px', // Increased the maxWidth by 16px
  };
  

  const cellStyle = {
    border: '1px solid black',
    padding: '2px',
    textAlign: 'center',
    wordWrap: 'break-word',
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
  };

  const renderHeader = () => (
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

  const renderRows = () => (
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
  const navigate = useNavigate();
  const goToPage = (page) => {
      navigate(`/${page}`);
    };

  return (
    <div className='pt-6' style={backgroundStyle}>
      <NavBar />
      <div style={{ margin: '50px 0', textAlign: 'center' }}>
  <span className="font-serif text-3xl font-medium leading-[58.55px]">
    Time Table
  </span>
</div>

      <div className="flex">
        {/* Sidebar */}
  <div className="flex pt-16">
    <div className="w-60 h-screen py-11 fixed top-0 left-0 z-10">
      
    </div>
  </div>

  {/* Timetable */}
  <div className="ml-24" style={{ ...tableContainerStyle, marginTop: '0' }}>
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
