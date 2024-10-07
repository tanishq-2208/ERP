import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Results from './Components/Results/Results';
import ResultsV1 from "./Components/ResultsV1/ResultsV1";


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

    return (
        <div className="App">
            <h1>{message}</h1>
            <Router>
                <Routes>
                    <Route>
                        <Route path="/Results" element={<Results />} />
                        <Route path="/ResultsV1" element={<ResultsV1 />} />
                    </Route>
                </Routes>


            </Router>
        </div>
    );
}

export default App;
