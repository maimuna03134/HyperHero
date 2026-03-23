import React from 'react';
import logo from '../../assets/logo.png'
import './Loader.css'

const Loader = () => {
    return (
        <div className="loading-container">
            <img src={logo} alt="Loading..." className=" loading-logo" />
            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold text-xl">
                Loading...
            </span>
        </div>
    );
};

export default Loader;