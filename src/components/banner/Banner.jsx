import React from 'react';
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/Group.png'
import hero_img from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className="">
            <div className="">
                <div className="flex flex-col items-center text-center pt-16 px-4 sm:px-6 md:px-10">
                    <h1 className="text-5xl text-[#001931] font-bold">
                        We Build{" "}
                        <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
                            <br />
                            Productive
                        </span>{" "}
                        Apps
                    </h1>
                    <p className="py-6">
                        At HERO.IO , we craft innovative apps designed to make everyday
                        life simpler, smarter, and more exciting. <br />
                        Our goal is to turn your ideas into digital experiences that truly
                        make an impact.
                    </p>
                    {/* banner button */}
                    <div className="flex justify-center items-center gap-2">
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open GitHub profile in new tab"
                        >
                            <button className="btn border-2">
                                <img className="w-5" src={playstore} alt="" />
                                <span>Google Play</span>
                            </button>
                        </a>

                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open GitHub profile in new tab"
                        >
                            <button className="btn border-2">
                                <img className="w-5" src={appstore} alt="" />
                                <span>App Store</span>
                            </button>
                        </a>
                    </div>
                    {/* hero image */}
                    <div className="mt-5 flex justify-center">
                        <img
                            className="w-[260px] md:w-[350px] drop-shadow-2xl"
                            src={hero_img}
                            alt=""
                        />
                    </div>
                </div>
                {/* star section */}
                <div className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  py-6 sm:py-8 md:py-10  ">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 text-center">
                        <h2 className="text-2xl font-semibold mb-6">
                            Trusted by Millions, Built for You
                        </h2>
                        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                            <div className="flex-1 bg-gradient-to-r from-purple-600 to-green-300 py-5 px-2 rounded-md">
                                <p className="text-sm opacity-90">Total Downloads</p>
                                <h3 className="text-3xl font-bold my-3">29.6M</h3>
                                <p className="text-sm opacity-90">21% more than last month</p>
                            </div>
                            <div className="flex-1 bg-gradient-to-r from-rose-600 to-fuchsia-200 py-5 px-2 rounded-md">
                                <p className="text-sm opacity-90">Total Reviews</p>
                                <h3 className="text-3xl font-bold my-3">906K</h3>
                                <p className="text-sm opacity-90">46% more than last month</p>
                            </div>
                            <div className="flex-1 bg-gradient-to-r from-orange-300 to-purple-600 py-5 px-7 md:px-2 lg:px-2  rounded-md">
                                <p className="text-sm opacity-90">Active Apps</p>
                                <h3 className="text-3xl font-bold my-3">132+</h3>
                                <p className="text-sm opacity-90">31 more will Launch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;