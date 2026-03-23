import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import downloadImg from "../../assets/icon_downloads.png";
import starImg from "../../assets/icon_ratings.png";
import reviewImg from "../../assets/icon-review.png";
import Container from "../../components/Container/Container";
import RatingChart from "../RatingChart/RatingChart";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../../components/Loader/Loader";
import ErrorApps from "../ErrorApps/ErrorApps";
import { loadInstallApps, installApp } from "../../utility/localStorage";

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps();

    const [showLoader, setShowLoader] = useState(true);

    const [isInstalled, setIsInstalled] = useState(false);

    const app = apps.find((a) => a.id === Number(id));

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setShowLoader(false);
        }, 500);

        return () => clearTimeout(timeOut);
    }, []);

    useEffect(() => {
        const installed = loadInstallApps().some((a) => a.id === Number(id));
        setIsInstalled(installed);
    }, [id]);

    // check if app is already installed
    const handleInstall = () => {
        installApp(app);
        setIsInstalled(true);
    };

    if (error) {
        return <ErrorPage></ErrorPage>;
    }

    if (loading || showLoader) {
        return <Loader></Loader>;
    }

    if (!app) {
        return <ErrorApps></ErrorApps>;
    }

    const {
        image,
        title,
        shortDescription,
        companyName,
        downloads,
        ratingAvg,
        reviews,
        size,
        ratings,
        description,
    } = app || {};

    return (
        <Container>
            <div className="my-16">
                <div className="hero-content flex-col justify-center lg:flex-row gap-x-20">
                    <div className="flex-shrink-0 flex justify-center w-[200px] h-[200px]">
                        <img
                            src={image}
                            className="w-full h-full object-contain rounded-xl shadow-lg "
                        />
                    </div>
                    {/* app details */}
                    <div className="flex flex-col justify-between flex-1 text-center lg:text-left">
                        <h1 className="text-2xl text-blue-950/90 font-bold mb-1">
                            {title}:{shortDescription}
                        </h1>
                        <p className=" text-[#627382]">
                            Developed by{" "}
                            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                                {companyName}.io
                            </span>
                        </p>
                        <div className="border-t-1 border border-gray-300 my-3"></div>

                        <div className="grid grid-cols-3 gap-5 text-center lg:text-left">
                            <div>
                                <img
                                    className="w-6 md:mx-0 mx-auto lg:mx-0"
                                    src={downloadImg}
                                    alt=""
                                />
                                <p className="text-sm text-gray-600 my-1">Downloads</p>
                                <p className="font-bold text-2xl ">{downloads}</p>
                            </div>
                            <div>
                                <img
                                    className="w-6 mx-auto md:mx-0 lg:mx-0"
                                    src={starImg}
                                    alt=""
                                />
                                <p className="text-sm text-gray-600 my-1">Average Ratings</p>
                                <p className="font-bold text-2xl ">{ratingAvg}</p>
                            </div>
                            <div>
                                <img
                                    className="w-6 mx-auto md:mx-0 lg:mx-0"
                                    src={reviewImg}
                                    alt=""
                                />
                                <p className="text-sm text-gray-600 my-1">Total Reviews</p>
                                <p className="font-bold text-3xl">{reviews}</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3">
                            <button
                                onClick={handleInstall}
                                disabled={isInstalled}
                                className={`mt-3 w-fit mx-auto lg:mx-0  text-white font-semibold px-6 py-2 rounded-lg 
                  ${isInstalled
                                        ? "bg-[#00D390] cursor-not-allowed scale-100 opacity-90"
                                        : "bg-[#00D390] hover:bg-[#00b97b]"
                                    }  `}
                            >
                                {isInstalled ? "Installed" : `Install Now (${size} MB)`}
                            </button>
                            <a
                                href="/apps"
                                className="mt-3 w-fit mx-auto lg:mx-0  bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  text-white font-semibold px-6 py-2 rounded-lg"
                            >
                                Show All Apps
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t-1 border border-gray-300 my-3"></div>

                <div>
                    <RatingChart ratings={ratings}></RatingChart>
                </div>
                <div className="border-t-1 border border-gray-300 my-3"></div>
                <div className="p-3 ">
                    <h3 className="text-xl font-semibold my-4">Description:</h3>
                    <p className="text-[#627382]">{description}</p>
                </div>
            </div>
        </Container>
    );
};

export default AppDetails;
