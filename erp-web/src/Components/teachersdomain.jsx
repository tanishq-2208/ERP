import React from "react";
import Profile from '../assets/profile.png';

const Teachersdomain = () => {
    return (
        <div
        className="min-h-screen flex" // Change to flex for layout
        style={{
          backgroundImage: `url(${require('../image/bg.png')})`,
          marginTop: "-15px",
          backgroundSize: "cover",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: "fixed",
        }}
      >
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
                            <img src={Profile} alt="profile" />
                        </span>
                    </div>
                </div>
            </nav>
            <div class="h-[430px] w-[430px] bg-purple-200 mt-[220px] ml-[540px] rounded-lg flex flex-col justify-center">
                <form class="max-w-sm mx-auto">
                    <label class="block mb-2 text-1xl font-serif text-gray-900 dark:text-black flex pl-[20px] pt-[1px]">Class</label>
                    <select id="Class" class="text-sm w-[240px] p-2.5 dark:bg-purple-400 placeholder-purple-100 text-black ml-[20px]">
                        <option>1st</option>
                        <option>2nd</option>
                        <option>3rd</option>
                        <option>4th</option>
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
                        <option>Maths</option>
                        <option>Social</option>
                        <option>Science</option>
                        <option>Computer</option>
                    </select>
                </form>
            </div>
            <div class="pl-[690px] pt-[100px] pb-[100px] flex items-center">
                <button class="h-[43px] w-[166px]  bg-purple-400 font-open sans rounded-lg text-white hover:opacity-90 transition-opacity duration-[60ms] active:opacity-60">Choose</button>
            </div>
        </div>
        </div>
    );

};
export default Teachersdomain;