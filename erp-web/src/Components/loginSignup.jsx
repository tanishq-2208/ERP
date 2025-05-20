import React, { useState } from 'react';
import profileImage from '../assets/undraw.svg';
import TeacherImg from '../assets/teacherImg.png';
import StudentImg from '../assets/studentImg.png';
import ParentImg from '../assets/parentImg.png';
import AdminImg from '../assets/adminImg.png';
import Background from '../assets/background.png';
import { Model } from './Model.jsx'; // Import the LoginForm component
import { useNavigate } from 'react-router-dom';

export const LoginSignup = () => {
  const Card = ({ imageSrc, altText, index, role }) => {
    const [visibleRole, setVisibleRole] = useState(null);
    const isVisible = visibleRole === role;

    return (
      <div 
        className={`flex items-center w-full mb-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        onMouseEnter={() => setVisibleRole(role)} // Show the form on hover
        onMouseLeave={() => setVisibleRole(null)} // Hide the form on mouse leave
      >
        {/* Image Container */}
        <div className={`bg-purple-200 p-4 rounded-lg shadow-lg max-w-xs mx-4 cursor-pointer`}>
          <img 
            src={imageSrc} 
            alt={altText} 
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-cover rounded-lg" 
          />
        </div>

        {/* Form Container */}
        <div 
          className={`transition-opacity duration-500 ease-in-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} ${role === 'Student' || role === 'Admin' ? (isVisible ? 'mr-[20px]' : 'mr-4') : 'ml-4'}`}
          style={{ marginRight: (role === 'Student' || role === 'Admin') && isVisible ? '20px' : undefined }}

        >
          {isVisible && <Model role={role} />} {/* Render the form only if visible */}
        </div>
      </div>
    );
  };
  const navigate = useNavigate();
  const goToPage = (page) => {
      navigate(`/${page}`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center pt-16 flex flex-col items-center justify-center"
      style={{ 
        backgroundImage: `url(${Background})`, 
        backgroundAttachment: 'fixed', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      
      <div className="flex flex-col w-full mt-16 px-4">
        {/* Responsive Card components with alternating layout */}
        <Card imageSrc={TeacherImg} altText="Teacher" index={0} role="Teacher" />
        <Card imageSrc={StudentImg} altText="Student" index={1} role="Student" />
        <Card imageSrc={ParentImg} altText="Parent" index={2} role="Parent" />
        <Card imageSrc={AdminImg} altText="Admin" index={3} role="Admin" />
      </div>
    </div>
  );
};
