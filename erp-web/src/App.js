import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Results from './Components/Results.js';
import FeePayment from './Components/feepayment.jsx';



function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/hello')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((data) => setMessage(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const [name, setName] = useState("Default")

    return (
        <Router>


            <Routes>
                <Route path="/Results" element={<Results />} />
                <Route path="/feepayment" element={<FeePayment/>} />
            </Routes>
        </Router>

    );
}

export default App;
