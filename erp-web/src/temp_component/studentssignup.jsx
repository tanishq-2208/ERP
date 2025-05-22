import React, { useState } from 'react';
import Profile from '../assets/profile.png';
import Student from '../assets/Vector.png';
import { useNavigate } from 'react-router-dom';

const StudentsSignup = () => {
    const navigate = useNavigate();
    // Update the form state
    const [form, setForm] = useState({
        studentId: '',
        studentName: '',
        className: '',         // Add this
        section: '',       // Add this
        dob: '',
        parentName: '',
        parentPhone: '',
        password: ''
    });

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegisterClick = async () => {
        // Validate all fields
        if (!form.studentId || !form.studentName || !form.className || !form.section || !form.dob || !form.parentName || !form.parentPhone || !form.password) {
            setMessage('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            console.log('Sending data to backend:', form);

            const response = await fetch('http://localhost:8080/signup/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, text/plain, */*'
                },
                body: JSON.stringify(form),
                signal: AbortSignal.timeout(10000)
            });

            console.log('Response status:', response.status);

            const contentType = response.headers.get('content-type');
            let result;

            if (contentType && contentType.includes('application/json')) {
                result = await response.json();
                console.log('JSON response:', result);

                if (result.success) {
                    setMessage('Signup successful! Redirecting to homepage...');
                    setTimeout(() => navigate('/Homepage'), 1500); // Navigate to HomeScreen.jsx
                } else {
                    setMessage(`Signup failed: ${result.message || 'Please try again'}`);
                }
            } else {
                result = await response.text();
                console.log('Text response:', result);

                if (response.ok && result.includes('successful')) {
                    setMessage('Signup successful! Redirecting to homepage...');
                    setTimeout(() => navigate('/Homepage'), 1500); // Navigate to HomeScreen.jsx
                } else {
                    setMessage(`Signup failed: ${result || 'Please try again'}`);
                }
            }
        } catch (error) {
            console.error('Error during signup:', error);
            if (error.name === 'AbortError') {
                setMessage('Connection timeout. Is the backend server running?');
            } else if (error.message === 'Failed to fetch') {
                setMessage('Cannot connect to server. Please make sure the backend is running at http://localhost:8080');
            } else {
                setMessage(`Error: ${error.message || 'Could not connect to server'}`);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignInClick = () => {
        navigate('/');
    };

    return (
        <div
            className="absolute min-h-screen w-full"
            style={{
                backgroundImage: `url(${require('../assets/Signin.png')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}>
        <div>
            
            <div class="mt-36">
                <span class="font-serif text-5xl font-medium flex justify-center">Student's Signup</span>
            </div>
            <div className="pt-16 pb-[50px] mx-48 mb-[250px] mt-16 bg-purple-200 flex flex-col items-center rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <img className="h-64 w-[330px] mb-4" src={Student} alt="Student's Signup" />
                <div className="mt-16 flex flex-col gap-y-16">
                    <input
                        type="text"
                        name="studentName"
                        value={form.studentName}
                        onChange={handleChange}
                        className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        placeholder="Student Name :"
                        required
                    />
                    <input
                        type="text"
                        name="className"
                        value={form.className}
                        onChange={handleChange}
                        className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        placeholder="Class :"
                        required
                    />
                    <input
                        type="text"
                        name="section"
                        value={form.section}
                        onChange={handleChange}
                        className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        placeholder="Section :"
                        required
                    />
                    <input
                        type="text"
                        name="studentId"
                        value={form.studentId}
                        onChange={handleChange}
                        className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        placeholder="Student ID :"
                        required
                    />
                    <input
                        type="text"
                        name="dob"
                        value={form.dob}
                        onChange={handleChange}
                        className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        placeholder="DOB :"
                        required
                    />
                    <input
                        type="text"
                        name="parentName"
                        value={form.parentName}
                        onChange={handleChange}
                        className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        placeholder="Parent's Name :"
                        required
                    />
                    <input
                        type="text"
                        name="parentPhone"
                        value={form.parentPhone}
                        onChange={handleChange}
                        className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        placeholder="Parent's Phone :"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        placeholder="Password :"
                        required
                    />
                </div>
                <p className="font-Poppins text-lg font-normal ml-[429px] mt-[24px] mr-[135px] mb-[100px] text-fuchsia-950">
                    If you are already Registered ? <span onClick={handleSignInClick} className="text-blue-600 hover:text-blue-800 underline cursor-pointer">SignIn</span>
                </p>
                <button
                    type="button"
                    onClick={handleRegisterClick}
                    disabled={isLoading}
                    className={`h-[40px] w-[169px] shadow-[2px_2px_4px_3px_rgba(0,0,0,0.25)] focus:outline-none text-white ${isLoading ? 'bg-purple-500' : 'bg-purple-700 hover:bg-purple-800'} focus:ring-4 focus:ring-purple-300 font-medium font-serif rounded-[15px] text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700`}
                >
                    {isLoading ? 'Processing...' : 'Register'}
                </button>
                {message && (
                    <div className="mt-4 text-center text-lg font-semibold text-purple-800">
                        {message}
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default StudentsSignup;
