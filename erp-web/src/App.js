import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Feepayment from './components/feepayment';
import NavBar from './components/Nav';
function App() {
    return (
        <Router>           

            {/* Spacing for fixed navbar */}
            <div className="pt-20"></div>

            <Routes>
                <Route path="/feepayment" element={<Feepayment/>} />
                <Route path="/about" element={<NavBar />} />
            </Routes>
        </Router>
    );
}

export default App;