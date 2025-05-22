import { useState } from "react";
import '../App.css'; 
import Profile from '../assets/profile.png';
import addmarksbackground from '../assets/addmarksbackgroundimage.png';
const students = [
  { roll: 1, name: "Yuvigna", marks: 20 },
  { roll: 2, name: "Khafa veerudu", marks: 20 },
  { roll: 3, name: "Tanigna", marks: 35 },
  { roll: 4, name: "Spoorthi", marks: 20 },
  { roll: 5, name: "Usam", marks: 30 },
  { roll: 6, name: "Thota", marks: 30 },
  { roll: 7, name: "Sankanna", marks: 30 },
  { roll: 8, name: "Anupuk", marks: 30 },
  { roll: 9, name: "Elka", marks: 30 },
  { roll: 10, name: "Gudimetla", marks: 30 },
];
//hi
export default function EnterMarks() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [marks, setMarks] = useState(
    students.map((student) => student.marks)
  );
  const [checked, setChecked] = useState(
    students.map(() => false)
  );

  const handleChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const handleCheckboxChange = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div className="font-roboto-serif">
      {/* Header */}
      <header className="bg-purple-custom w-full">
        <nav className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between h-20">
            <div className="flex justify-center space-x-24 lg:space-x-32 w-full">
              <a href="#" className="text-white font-bold">
                Home
              </a>
              <a href="#" className="text-white font-bold">
                Contact
              </a>
              <a href="#" className="text-white font-bold">
                About
              </a>
              <a href="#" className="text-white font-bold">
                Help
              </a>
            </div>
            <div>
              <img
                
                src={Profile} alt="profile" 
                className="w-12 h-12 bg-purple-custom"
                
              />
            </div>
          </div>

         
          {menuOpen && (
            <div className="pb-4 md:hidden">
              {['Home', 'Contact', 'About', 'Help'].map((item) => (
                <a key={item} href="#" className="block text-white font-bold py-2">
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Background and Main Content */}
      <div className="relative">
        <img src={addmarksbackground} className="w-full" alt="addmarksbackgroundimage" />

        <div className="absolute top-0 left-0 w-full">
          <div className="bg-purple-pt w-[1090px] h-[104px] mt-[43px] ml-[100px] rounded-[10px]">
            <p className="text-center text-[40px] font-medium pt-[27px]">
              ENTER Attendance
            </p>
          </div>

          <div className="w-[1280px] h-[40px] relative">
            <span className="absolute top-[39px] left-[170px] text-2xl font-medium">
              Class: 3A
            </span>
          </div>

          <p className="text-2xl font-medium pt-[27px] pl-[170px]">Subject: Biology</p>

          {/* Table Header */}
          <div className="w-[660px] h-[62.66px] relative bg-purple-pt ml-[283px] mt-[132px] border border-black">
            <span className="absolute pl-[20px] pt-[20px] text-xl font-open-sans">ROLL NO</span>
            <span className="absolute pl-[145px] pt-[20px] text-xl font-open-sans">STUDENT NAME</span>
            <span className="absolute pl-[547px] pt-[20px] text-xl font-open-sans">ABSENT</span>
          </div>

          {/* Student Rows */}
          {students.map((student, i) => (
            <div
              key={student.roll}
              className="w-[660px] h-[62.66px] relative bg-purple-pt ml-[283px] mt-0 border border-black"
            >
              <span className="absolute pl-[20px] pt-[20px] text-xl font-open-sans">
                {student.roll}
              </span>
              <span className="absolute pl-[148px] pt-[20px] text-xl font-open-sans">
                {student.name}
              </span>
              <div className="absolute w-[57.82px] h-[26.46px] mt-[24px] ml-[550px] flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() => handleCheckboxChange(i)}
                  className="w-5 h-5 accent-purple-medium"
                />
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="ml-[460px] mt-[130px] w-[304px] h-[47px] rounded-xl bg-purple-medium text-white text-xl font-open-sans"
          >
            Send
          </button>
          
        </div>
      </div>
    </div>
  );
}