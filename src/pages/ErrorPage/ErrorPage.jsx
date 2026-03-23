import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import errorAppImg from '../../assets/App_Error.png'

const ErrorApps = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className=" flex flex-col items-center justify-center flex-grow   p-4">
                <img
                    src={errorAppImg}
                    alt="Page Not Found"
                    className="w-64 h-64 object-contain mb-6"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    OPPS!! APP NOT FOUND
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    The App you are requesting is not found on our system. please try
                    another apps.
                </p>
                <div className='flex flex-col md:flex-row gap-3'>
                    <a
                        href="/apps"
                        className="px-5 py-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  rounded-lg font-bold text-white"
                    >
                        Show All Apps
                    </a>
                    <a
                        href="/"
                        className="px-5 py-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  rounded-lg font-bold text-white"
                    >
                        Go Back Home!
                    </a>
                </div>
            </main>
        </div>
    );
};

export default ErrorApps;