// src/pages/About.js
import React from 'react';
import NavBar from './Nav';

const AboutScreen = () => {
  return (
    <div className="bg-gray-100 ">
      <NavBar/>
      <h1 className="font-serif text-2xl pt-4 text-left ml-10 font-medium">About Us</h1>
      <p className="ml-20 mt-8">
        Learn more about the school, its history, mission, and values.
      </p>
    </div>
  );
};

export default AboutScreen;
