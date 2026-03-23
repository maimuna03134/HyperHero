import React from 'react';
import { LuDownload } from "react-icons/lu";
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router';


const AppCard = ({ app }) => {
    const { image, title, shortDescription, downloads, ratingAvg, id } = app || {};

    return (
        <Link to={`/apps/${id}`}>
            <div className="card  bg-white  rounded-none shadow-sm h-[400px]">
                <figure className="p-3 overflow-hidden">
                    <img className="w-full h-50 rounded object-cover" src={image} alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-base ">
                        {title} - {shortDescription}
                    </h2>

                    <div className="card-actions justify-between">
                        <div className="badge p-4 bg-[#F1F5E8] text-[#00D390] font-semibold">
                            <LuDownload />
                            {downloads}
                        </div>
                        <div className="badge p-4 bg-[#FFF0E1] text-[#FF8811] font-semibold">
                            <IoStar />
                            {ratingAvg}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;