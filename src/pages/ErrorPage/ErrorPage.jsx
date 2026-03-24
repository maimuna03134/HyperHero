import React from 'react';

import errorImg from '../../assets/error_404.png'
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <main className=" flex flex-col items-center justify-center flex-grow   p-4">
                <img
                    src={errorImg}
                    alt="Page Not Found"
                    className="w-64 h-64 object-contain mb-6"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Oops, page not found!
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    The page you are looking for is not available.
                </p>
                <a
                    href="/"
                    className="px-5 py-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  rounded-lg font-bold text-white"
                >
                    Go Back!
                </a>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;