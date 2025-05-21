import React from 'react';

function Sidebar() {
    return (
    
        <><div class="part2">
            <span class="font-serif text-[50px] font-medium leading-[58.55px] p-6 flex justify-center m-20">Results</span>
        </div><div class="flex gap-x-28 ">
                <div class="w-72 h-screen py-5">
                    <nav class="flex flex-col py-6 space-y-4">
                        <a href="#attendance"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Attendance</a>
                        <a href="#results"
                            class="w-80 px-5 py-2 text-2xl bg-[#7B52B4] rounded-r-full text-white">Results</a>
                        <a href="#timetable"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Time
                            Table</a>
                        <a href="#hallticket"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Hall
                            Ticket</a>
                        <a href="#schedule"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Schedule</a>
                        <a href="#feepayment"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Fee
                            Payment</a>
                        <a href="#assignments"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Assignments</a>
                        <a href="#achievements"
                            class="px-4 py-2 text-2xl bg-[#BE9FE1] rounded-r-full text-white hover:bg-[#7B52B4] transform motion-safe hover:scale-100 hover:translate-x-2">Achievements</a>
                    </nav>
                </div>

            </div></>
       );
    }
    
    export default Sidebar;
    