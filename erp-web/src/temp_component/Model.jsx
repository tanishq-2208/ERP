import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Model = ({ role }) => {
  const inputBackgroundColor = 'rgba(225, 204, 236, 0.8)';
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignupClick = () => {
    if (role === 'Student') {
      navigate('student');
    } else if (role === 'Teacher') {
      navigate('teacher');
    } else if (role === 'Admin') {
      navigate('admin');
    } else if (role === 'Parent') {
      navigate('parent');
    } else {
      navigate(`${role.toLowerCase()}signup`);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!userId || !password) {
      setError('Please fill all fields');
      return;
    }
    try {
      let body;
      let endpoint;
      if (role === 'Teacher') {
        endpoint = 'http://localhost:8080/auth/teacher-login';
        body = JSON.stringify({ teacherId: userId, password });
      } else if (role === 'Student') {
        endpoint = 'http://localhost:8080/auth/student-login';
        body = JSON.stringify({ studentId: userId, password });
      } else {
        endpoint = 'http://localhost:8080/auth/login';
        body = JSON.stringify({ userId, password });
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
      const data = await response.json();
      if (data.success && data.token) {
        localStorage.setItem('token', data.token);
        alert(data.message || "Sign Successful!!!");
        if (role === 'Admin') {
          navigate('/admin_homescreen');
        } else if (role === 'Teacher') {
          navigate('/teacher_homescreen');
        } else if (role === 'Student') {
          navigate('/Homepage'); // Navigate to HomeScreen.jsx for students
        } else {
          navigate('/Homepage');
        }
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
};

  return (
    <div className="p-2 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(225, 204, 236, 0.5)', width: '825px' }}>
      <h2 className="text-lg font-semibold mb-2.5 text-purple-700 text-center">{role}'s Login</h2>
      <form className="flex flex-col items-center" onSubmit={handleLogin}>
        <div className="mb-2 w-10/12">
          <label htmlFor={`${role}-userId`} className="block text-gray-700 mb-0.5">Enter your ID:</label>
          <input
            type="text"
            id={`${role}-userId`}
            placeholder="User ID"
            value={userId}
            onChange={e => setUserId(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-gray-300 rounded w-full py-1 px-2 shadow-sm focus:outline-none focus:border-purple-500"
            style={{ backgroundColor: inputBackgroundColor }}
          />
        </div>
        {error && <div className="text-red-500 mb-2">{error}</div>}
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
