import React from "react";
import Profile from '../assets/profile.png';
import NavBar from './Nav';
import { useLocation, useNavigate } from 'react-router-dom';

const Teachersdomain = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pageType } = location.state || {};

    const handleChooseClick = () => {
        if (pageType === 'attendance') {
            navigate('/markattendance');
        } else if (pageType === 'marks') {
            navigate('/addmarks');
        }
    };

    return (
        <div
        className="min-h-screen flex"
        style={{
          backgroundImage: `url(${require('../image/bg.png')})`,
          marginTop: "-15px",
          backgroundSize: "cover",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar />
        <div>
            <div class="h-[580px] w-[430px] bg-purple-200 mt-[220px] ml-[540px] rounded-lg flex flex-col justify-center">
                <form class="max-w-sm mx-auto">
                    <label class="block mb-2 text-1xl font-serif text-gray-900 dark:text-black flex pl-[20px] pt-[1px]">Class</label>
                    <select id="Class" class="text-sm w-[240px] p-2.5 dark:bg-purple-400 placeholder-purple-100 text-black ml-[20px]">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </form>
                <form class="max-w-sm mx-auto">
                    <label class="block mb-2 text-1xl font-serif text-gray-900 dark:text-black flex pl-[20px] pt-[50px]">Section</label>
                    <select id="Section" class="text-sm w-[240px] p-2.5 dark:bg-purple-400 placeholder-purple-100 text-black ml-[20px]">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </form>
                <form class="max-w-sm mx-auto">
                    <label class="block mb-2 text-1xl font-serif text-gray-900 dark:text-black flex pl-[20px] pt-[50px]">Subject</label>
                    <select id="Subject" class="text-sm w-[240px] p-2.5 dark:bg-purple-400 placeholder-purple-100 text-black ml-[20px]">
                        <option>Telugu</option>
                        <option>Hindi</option>
                        <option>English</option>
                        <option>Maths</option>
                        <option>Physics</option>
                        <option>Biology</option>
                        <option>Chemistry</option>
                        <option>Social</option>
                    </select>
                </form>
                {pageType === 'attendance' && (
                    <form class="max-w-sm mx-auto">
                        <label class="block mb-2 text-1xl font-serif text-gray-900 dark:text-black flex pl-[20px] pt-[50px]">Date</label>
                        <input 
                            type="date" 
                            id="date" 
                            class="text-sm w-[240px] p-2.5 dark:bg-purple-400 placeholder-purple-100 text-black ml-[20px]"
                        />
                    </form>
                )}
                {pageType === 'marks' && (
                    <form class="max-w-sm mx-auto">
                        <label class="block mb-2 text-1xl font-serif text-gray-900 dark:text-black flex pl-[20px] pt-[50px]">Terminal</label>
                        <select id="Terminal" class="text-sm w-[240px] p-2.5 dark:bg-purple-400 placeholder-purple-100 text-black ml-[20px]">
                            <option>FA-1</option>
                            <option>FA-2</option>
                        </select>
                    </form>
                )}
            </div>
            <div class="pl-[690px] pt-[100px] pb-[100px] flex items-center">
                <button 
                    onClick={handleChooseClick}
                    class="h-[43px] w-[166px] bg-purple-400 font-open sans rounded-lg text-white hover:opacity-90 transition-opacity duration-[60ms] active:opacity-60"
                >
                    Choose
                </button>
            </div>
        </div>
        </div>
    );
};

export default Teachersdomain;