import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Attendance from './components/attendance';

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/attendance" element={<Attendance />} />
                </Routes>
            </Router>
    );
}

export default App;