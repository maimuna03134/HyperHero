import React from 'react';
import './Navbar.css'
import logo_img from '../../assets/logo.png'
import { Link, NavLink, useLocation } from 'react-router';
import { BsGithub } from "react-icons/bs";
import Container from '../Container/Container';
import Home from '../../pages/Home/Home';
import Apps from '../../pages/Apps/Apps';
import Installations from '../../pages/Installations/Installations';


const Navbar = () => {
    const location = useLocation();
    const currPath = location.pathname;
    const isAppsActive = currPath.startsWith('/apps')

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `m-2 pb-1 ${isActive ? "border-gradient" : "text-gray-700"}`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/apps"
                className={`m-2 pb-1 ${isAppsActive ? "border-gradient" : "text-gray-700"
                    }`}
            >
                Apps
            </NavLink>
            <NavLink
                to="/installation"
                className={({ isActive }) =>
                    `m-2 pb-1 ${isActive ? "border-gradient" : "text-gray-700"}`
                }
            >
                Installation
            </NavLink>
        </>
    );

    return (
        <div className=" bg-white shadow-sm relative z-10  w-full">
            <Container>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />{" "}
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-center"
                            >
                                {links}
                            </ul>
                        </div>
                        <NavLink to="/" className=" text-lg flex items-center gap-2">
                            <img className="w-[25px]" src={logo_img} alt="" />
                            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold ">
                                HERO.IO
                            </span>
                        </NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{links}</ul>
                    </div>
                    <div className="navbar-end">
                        <a
                            href="https://github.com/maimuna03134"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open GitHub profile in new tab"
                        >
                            <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]   font-bold text-white">
                                <span>
                                    <BsGithub />
                                </span>
                                Contribute
                            </button>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;