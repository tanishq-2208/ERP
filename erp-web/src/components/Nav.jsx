import React from 'react';
import { Link } from 'react-router-dom';

import Profile from '../assets/undraw.svg';

function NavBar() {
    return (
        <nav className="bg-purple-400 p-2 fixed top-0 left-0 right-0 z-50 ">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-20 items-center pl-48 ml-60">
                        <Link to="/" className="text-white font-semibold">Home</Link>
                        <Link to="/contact" className="text-white font-semibold">Contact</Link>
                        <Link to="/tt" className="text-white font-semibold">About</Link> {/* Navigate to About */}
                        <Link to="/help" className="text-white font-semibold">Help</Link>
                    </div>
                    {/* Profile */}
                    <div>
                        <span className="inline-block bg-purple-300 rounded-full mr-4">
                            <img src={Profile} alt="profile" />
                        </span>
                    </div>
                </div>
            </nav>
    );
}

export default NavBar;