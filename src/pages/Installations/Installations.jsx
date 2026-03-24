import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { IoIosArrowDown } from "react-icons/io";
import { loadInstallApps, unInstallApp } from "../../utility/localStorage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../../components/Loader/Loader";

import { IoStar } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";


const Installations = () => {

    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('high-low');
    const [showLoader, setShowLoader] = useState(true);
    const [error, setError] = useState(false);

    // load installed apps
    useEffect(() => {
        try {
            const timeOut = setTimeout(() => {
                const apps = loadInstallApps();
                setInstalledApps(apps);
                setShowLoader(false);
            }, 500);
            return () => clearTimeout(timeOut);
        } catch (err) {
            console.log(err);
            setError(true);
            setShowLoader(false);
        }
    }, []);

    if (error) return <ErrorPage></ErrorPage>;
    if (showLoader) return <Loader></Loader>;
    if (!showLoader && installedApps.length === 0) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h2 className="text-center text-2xl font-bold mt-10">No Installed Apps Yet!</h2>
            </div>


        );
    }

    const parseDownloads = (value) => {
        if (!value) return 0;
        const num = parseFloat(value);
        if (value.toLowerCase().includes('m')) return num * 1_000_000;
        if (value.toLowerCase().includes('k')) return num * 1_000;
        return num;
    }

    // sorting
    const sortedApps = [...installedApps].sort((a, b) => {
        const downA = parseDownloads(a.downloads);
        const downB = parseDownloads(b.downloads);
        return sortOrder === 'high-low' ? downB - downA : downA - downB;
    });

    // handle uninstall
    const handleUninstall = (id) => {
        unInstallApp(id);
        setInstalledApps((prev) => prev.filter((app) => app.id !== id));
    };

    return (
        <div>
            <Container>
                <div className="py-12">
                    <div className="text-center py-6 mb-5">
                        <h1 className="text-3xl font-bold text-[#001931]">
                            Your Installed Apps
                        </h1>
                        <p className="text-gray-500 mt-3">
                            {" "}
                            Explore All Trending Apps on the Market developed by us
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 p-4 lg:p-0">
                        <div className="flex justify-between items-center px-3  lg:px-0">
                            <p className="text-lg  font-semibold ">
                                {installedApps.length} Apps Found
                            </p>
                            <div className="dropdown dropdown-start">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn md:mr-3 m-1 flex justify-center gap-3 text-gray-600 border-gray-300"
                                >
                                    Sort by : <IoIosArrowDown className="text-lg" />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                                >
                                    <li>
                                        <a
                                            onClick={() => setSortOrder("high-low")}
                                            className={
                                                sortOrder === "high-low"
                                                    ? "font-bold text-[#632EE3]"
                                                    : ""
                                            }
                                        >
                                            High-Low
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => setSortOrder("low-high")}
                                            className={
                                                sortOrder === "low-high"
                                                    ? "font-bold text-[#632EE3]"
                                                    : ""
                                            }
                                        >
                                            Low-High
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {sortedApps.map((app) => (
                            <div
                                key={app.id}
                                className="flex justify-between items-center bg-white rounded-lg shadow-sm border border-gray-100 py-3 px-4 hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-16 h-16 object-cover rounded-md "
                                    />
                                    <div>
                                        <h2 className="font-semibold text-lg text-[#001931]">
                                            {app.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm">
                                            {app.shortDescription}
                                        </p>
                                        <div className="flex items-center gap-4 mt-2 text-sm font-medium">
                                            <span className="flex items-center gap-1 text-[#00D390]">
                                                <LuDownload /> {app.downloads}
                                            </span>
                                            <span className="flex items-center gap-1 text-[#FF8811]">
                                                <IoStar /> {app.ratingAvg}
                                            </span>
                                            <span className="text-gray-600">{app.size} MB</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className=" bg-[#00D390]  hover:bg-red-600 text-white px-2 py-1  rounded-md font-medium hover:opacity-80 transition-all"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Installations;
