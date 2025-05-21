import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Model = ({ role }) => {
  const inputBackgroundColor = 'rgba(225, 204, 236, 0.8)';
  const navigate = useNavigate();
  const goToPage = (page) => {
    navigate(`/${page}`);
  };

  const handleSignupClick = () => {
    if (role === 'Student') {
      goToPage('student');
    } else if (role === 'Teacher') {
      goToPage('teacher');
    }else if (role === 'Admin') {
      goToPage('admin');
    }else if (role === 'Parent') {
      goToPage('parent');
    }
     else {
      goToPage(`${role.toLowerCase()}signup`);
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const userId = document.getElementById(`${role}-userId`).value;
    const password = document.getElementById(`${role}-password`).value;

    if (!userId || !password) {
      alert('Please fill in all fields');
      return;
    }

    switch (role) {
      case 'Student':
        goToPage('Homepage');
        break;
      case 'Teacher':
        goToPage('TeacherHome');
        break;
      case 'Admin':
        goToPage('AdminHome');
        break;
      case 'Parent':
        goToPage('ParentHome');
        break;
      default:
        goToPage('Homepage');
    }
  };

  return (
    <div className="p-2 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(225, 204, 236, 0.5)', width: '825px' }}>
      <h2 className="text-lg font-semibold mb-2.5 text-purple-700 text-center">{role}'s Login</h2>
      <form className="flex flex-col items-center" onSubmit={handleSignIn}>
        <div className="mb-2 w-10/12">
          <label htmlFor={`${role}-userId`} className="block text-gray-700 mb-0.5">Enter your ID:</label>
          <input
            type="text"
            id={`${role}-userId`}
            placeholder="User ID"
            className="border border-gray-300 rounded w-full py-1 px-2 shadow-sm focus:outline-none focus:border-purple-500"
            style={{ backgroundColor: inputBackgroundColor }}
          />
        </div>
        <div className="mb-2 w-10/12">
          <label htmlFor={`${role}-password`} className="block text-gray-700 mb-1">Password:</label>
          <input
            type="password"
            id={`${role}-password`}
            placeholder="Password"
            className="border border-gray-300 rounded w-full py-1 px-2 shadow-sm focus:outline-none focus:border-purple-500"
            style={{ backgroundColor: inputBackgroundColor }}
          />
        </div>
        <div className="mb-1.5 mt-0.5 text-gray-600">
          <p>
            New user?{' '}
            <button type="button" className="text-blue-500 underline hover:text-blue-400" onClick={handleSignupClick}>
              Sign Up
            </button>
          </p>
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white text-base rounded-md py-0.5 px-3 mb-1 font-semibold hover:bg-purple-600 focus:outline-none focus:bg-purple-600 shadow-md"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
