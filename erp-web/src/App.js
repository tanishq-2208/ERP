import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen'; // Importing AboutScreen component
import Contact from './components/Contact'; // Importing Contact component
import Help from './components/Help';



function App() {
    return (
        <Router>           


            <Routes>
                <Route path="/homescreen" element={<HomeScreen/>} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/contact" element={<Contact />} />
                <Route path ="/Help" element={<Help/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;