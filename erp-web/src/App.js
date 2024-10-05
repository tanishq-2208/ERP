import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen'; // Importing HomeScreen component
import AboutScreen from './components/AboutScreen'; // Importing AboutScreen component
import Contact from './components/Contact'; // Importing Contact component

function App() {
    return (
        <Router>           

            {/* Spacing for fixed navbar */}
            <div className="pt-20"></div>

            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
