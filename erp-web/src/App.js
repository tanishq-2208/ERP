import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Schedule from './components/schedule';
function App() {
    return (
        <Router>           
            {/* Spacing for fixed navbar */}
            {/* <div className="pt-20"></div> */}
            <Routes>
                <Route path="/" element={<Schedule />} />
            </Routes>
        </Router>
    );
}

export default App;