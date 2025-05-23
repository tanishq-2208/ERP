import { useState, useEffect } from "react";
import '../App.css'; 
import Profile from '../assets/profile.png';
import addmarksbackground from '../assets/addmarksbackgroundimage.png';
import NavBar from './Nav';
import { useLocation } from 'react-router-dom';

export default function EnterMarks() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState([]);
  const [classInfo, setClassInfo] = useState({
    className: '',
    section: '',
    subject: ''
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedClass = searchParams.get('class');
    const selectedSection = searchParams.get('section');
    const selectedSubject = searchParams.get('subject');
    const selectedTerminal = searchParams.get('terminal'); // Add this line

    if (selectedClass && selectedSection && selectedSubject) {
      setClassInfo({
        className: selectedClass,
        section: selectedSection,
        subject: selectedSubject,
        terminal: selectedTerminal // Add this line
      });

      // Updated API endpoint to match backend
      fetch(`http://localhost:8080/api/students/${selectedClass}/${selectedSection}`)
        .then(response => response.json())
        .then(data => {
          // Check if data.students exists and use it
          if (data.students) {
            setStudents(data.students);
            setMarks(new Array(data.students.length).fill(0));
          } else {
            console.error('No students data in response');
          }
        })
        .catch(error => {
          console.error('Error fetching students:', error);
        });
    }
  }, [location]);

  const handleChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = parseInt(value) || 0;
    setMarks(newMarks);
  };

  const handleSubmit = () => {
    const marksData = students.map((student, index) => ({
      className: classInfo.className,
      section: classInfo.section,
      terminal: classInfo.terminal,
      subject: classInfo.subject,
      studentId: student.studentId,
      studentName: student.studentName,
      marks: marks[index],
    }));
    fetch('http://localhost:8080/api/marks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(marksData)
    })
    .then(response => response.json())
    .then(data => {
      alert('Marks submitted successfully!');
    })
    .catch(error => {
      console.error('Error submitting marks:', error);
      alert('Error submitting marks. Please try again.');
    });
  };

  return (
    <div className="font-roboto-serif">
      <NavBar />
      <div className="relative">
        <img src={addmarksbackground} className="w-full" alt="addmarksbackgroundimage" />

        <div className="absolute top-0 left-0 w-full">
          <div className="bg-purple-pt w-[1090px] h-[104px] mt-[43px] ml-[100px] rounded-[10px]">
            <p className="text-center text-[40px] font-medium pt-[27px]">
              ENTER Marks
            </p>
          </div>

          
          {/* Class Info Section */}
          <div className="flex justify-between w-[1090px] ml-[100px] mt-[20px]">
            <div>
              <div className="w-[640px] h-[40px] relative">
                <span className="text-2xl font-medium">
                  Class: {classInfo.className}
                </span>
              </div>
              <p className="text-2xl font-medium pt-[27px]">Subject: {classInfo.subject}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-medium">Section: {classInfo.section}</p>
              <p className="text-2xl font-medium pt-[27px]">Terminal: {classInfo.terminal}</p>
            </div>
          </div>

          {/* Table Header */}
          <div className="w-[660px] h-[62.66px] relative bg-purple-pt ml-[283px] mt-[82px] border border-black">
            <span className="absolute pl-[20px] pt-[20px] text-xl font-open-sans">STUDENT ID</span>
            <span className="absolute pl-[245px] pt-[20px] text-xl font-open-sans">STUDENT NAME</span>
            <span className="absolute pl-[547px] pt-[20px] text-xl font-open-sans">MARKS</span>
          </div>

          {/* Student Rows */}
          {students.map((student, i) => (
            <div
              key={student.studentId}
              className="w-[660px] h-[62.66px] relative bg-purple-pt ml-[283px] mt-0 border border-black"
            >
              <span className="absolute pl-[20px] pt-[20px] text-xl font-open-sans">
                {student.studentId}
              </span>
              <span className="absolute pl-[248px] pt-[20px] text-xl font-open-sans">
                {student.studentName}
              </span>
              <input
                type="number"
                value={marks[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                className="absolute w-[57.82px] h-[26.46px] mt-[24px] ml-[550px] bg-white border border-black text-center text-xl font-open-sans"
              />
            </div>
          ))}

          <button
            type="submit"
            onClick={handleSubmit}
            className="ml-[460px] mt-[130px] w-[304px] h-[47px] rounded-xl bg-purple-medium text-white text-xl font-open-sans"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}