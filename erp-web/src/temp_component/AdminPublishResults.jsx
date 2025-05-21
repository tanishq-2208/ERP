import React, { useState } from 'react';
import '../App.css'; 
import Profile from '../assets/profile.png';
import background from '../assets/adminbackgroundpage (1) (1).png';// Keep if you have custom styles or fonts

const AdminResults = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const tableData = [
    { id: 1, subject: "Telugu", teacher: "Kasturi Lka" },
    { id: 2, subject: "Hindi", teacher: "Abdul" },
    { id: 3, subject: "English", teacher: "Daasha" },
    { id: 4, subject: "Maths", teacher: "Anup" },
    { id: 5, subject: "Physics", teacher: "Yuvan" },
    { id: 6, subject: "Biology", teacher: "Vivek N" },
    { id: 7, subject: "Chemistry", teacher: "Dheeraj" },
    { id: 8, subject: "Social", teacher: "Ananya" },
  ];

  return (
    <div className="font-roboto-serif">
      <header className="bg-purple-custom w-full">
        <nav className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-20">
            <div className="flex justify-center space-x-24 lg:space-x-32 w-full">
              <a href="#" className="text-white font-bold">Home</a>
              <a href="#" className="text-white font-bold">Contact</a>
              <a href="#" className="text-white font-bold">About</a>
              <a href="#" className="text-white font-bold">Help</a>
            </div>
            <div>
              <img src={Profile} className="w-12 h-12 bg-purple-custom" alt="Profile" />
            </div>
          </div>

          {/* Mobile Navigation */}
          

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4">
              <a href="#" className="block text-white font-bold py-2">Home</a>
              <a href="#" className="block text-white font-bold py-2">Contact</a>
              <a href="#" className="block text-white font-bold py-2">About</a>
              <a href="#" className="block text-white font-bold py-2">Help</a>
            </div>
          )}
        </nav>
      </header>

      {/* Background Section */}
      <div className="relative">
        <div className="w-full">
          <img src={background} alt="background" className="w-full" />
          
        </div>

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full">
          <div className="pl-8 md:pl-64 mt-8 w-106 font-roboto-serif text-2xl font-medium text-black">
            <p>Class: 3A</p>
          </div>

          {/* Table Header and Rows */}
          <div className="max-w-2xl mx-auto mt-8 md:mt-16 px-4 md:px-0">
            {/* Table Header */}
            <div className="flex w-full">
              <div className="w-6 h-16 invisible mr-2 md:mr-4"></div>
              <div className="w-full h-16 border border-black bg-purple-bg relative">
                <span className="absolute left-2 md:left-6 top-5 font-open-sans text-base md:text-xl font-normal text-black">S.no</span>
                <span className="absolute left-16 md:left-36 top-5 font-open-sans text-base md:text-xl font-normal text-black">Subject Name</span>
                <span className="absolute right-4 md:right-16 top-5 font-open-sans text-base md:text-xl font-normal text-black">Teacher</span>
              </div>
            </div>

            {/* Table Rows */}
            {tableData.map(row => (
              <div key={row.id} className="flex items-center mt-1">
                <input type="checkbox" className="bg-purple-dark text-white w-4 md:w-6 h-4 md:h-6 mr-2 md:mr-4" />
                <div className="w-full h-12 md:h-16 border border-black relative bg-purple-bg">
                  <span className="absolute left-2 md:left-6 top-3 md:top-5 font-open-sans text-base md:text-xl font-normal text-black">{row.id}</span>
                  <span className="absolute left-16 md:left-36 top-3 md:top-5 font-open-sans text-base md:text-xl font-normal text-black">{row.subject}</span>
                  <span className="absolute right-4 md:right-16 top-3 md:top-5 font-open-sans text-base md:text-xl font-normal text-black">{row.teacher}</span>
                </div>
              </div>
            ))}

            {/* Publish Button */}
            <div className="flex justify-center mt-8 md:mt-16">
              <button type="submit" className="text-center bg-purple-medium text-white w-32 md:w-40 h-10 md:h-12 rounded-xl border-none text-lg md:text-xl font-open-sans font-normal">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminResults;