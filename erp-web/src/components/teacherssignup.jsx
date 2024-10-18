import React from 'react';
import Profile from '../assets/profile.png';
import Group from '../assets/Group 1.png';

const teacherssignup = () => {
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
            <nav class="bg-purple-400 p-2 fixed top-0 left-0 right-0 z-50">
                <div class="flex items-center justify-between">
                    <div class="flex space-x-20 items-center ml-60 ">
                        <a href="#" class="text-white font-semibold">Home</a>
                        <a href="#" class="text-white font-semibold">Contact</a>
                        <a href="#" class="text-white font-semibold">About</a>
                        <a href="#" class="text-white font-semibold">Help</a>
                    </div>
                    <div>
                        <span class="inline-block bg-purple-300 rounded-full mr-4">
                            <img src={Profile} alt="profile"/>
                        </span>
                    </div>
                </div>
            </nav>
            <div class="mt-36">
                <span class="font-serif text-5xl font-medium flex justify-center">Teachers Signup</span>
            </div>
            <div class="pt-16 pb-[50px] mx-48 mb-[250px] mt-16 bg-purple-200 flex flex-col items-center rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <img class="h-64 w-64 mb-4" src={Group} alt="Group" />
                <div className="mt-16 flex flex-col gap-y-16">
                    <input type="text" className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" placeholder="Enter your ID :" required />
                    <input type="text" className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" placeholder="Name:" required />
                    <input type="text" className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" placeholder="Email:" required />
                    <input type="text" className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" placeholder="Phone No:" required />
                    <input type="password" className="h-16 w-[693px] pl-4 font-serif bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" placeholder="Password:" required />
                </div>
                <p class="font-Poppins text-lg font-normal ml-[429px] mt-[24px] mr-[135px] mb-[100px] text-fuchsia-950">If you are already Registered ? SignIn </p>
                <button type="button" class="h-[40px] w-[169px] text-[20px] shadow-[2px_2px_4px_3px_rgba(0,0,0,0.25)] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium font-serif rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700">Register</button>
            </div>
        </div>
        </div>
    );
};
export default teacherssignup;

