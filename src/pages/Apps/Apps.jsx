import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import useApps from "../../hooks/useApps";
import Container from "../../components/Container/Container";
import { GoSearch } from "react-icons/go";
import Loader from "../../components/Loader/Loader";
import ErrorApps from "../ErrorApps/ErrorApps";
import ErrorPage from "../ErrorPage/ErrorPage";

const Apps = () => {
    const { apps, loading, error } = useApps();
    const [search, setSearch] = useState("");
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchedApps, setSearchedApps] = useState([]);

    useEffect(() => {
        if (!apps.length) return;

        setSearchLoading(true);

        const timeOut = setTimeout(() => {
            const term = search.trim().toLocaleLowerCase();
            const filtered = term
                ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
                : apps;
            setSearchedApps(filtered);
            setSearchLoading(false);
        }, 500);

        return () => clearTimeout(timeOut);
    }, [search, apps]);

    if (error) {
        return <ErrorPage></ErrorPage>;
    }

    if (loading) {
        return <Loader></Loader>;
    }

    return (
        <Container>
            <div className="text-center py-6 ">
                <h1 className="text-4xl font-bold text-[#001931]">
                    Our All Applications
                </h1>
                <p className="md:py-5 p-5 md:p-0 text-[#627382] text-sm">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            {/* search bar */}
            <div className="flex flex-col md:flex-row  justify-between py-5 md:px-5 items-center ">
                <span className="text-[#001931] font-semibold text-[24px]">
                    ({searchedApps.length}) Apps Found
                </span>
                <label className="input  bg-transparent my-5 md:my-0">
                    <GoSearch size={20} color="#627382" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="search Apps"
                    />
                </label>
            </div>

            {/* loader while searching */}

            <div className={`relative ${searchLoading ? "min-h-screen" : ""}`}>
                {searchLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Loader></Loader>
                    </div>
                )}
            </div>

            {!searchLoading && searchedApps.length === 0 ? (
                <div className="min-h-screen flex flex-col justify-center items-center">
                    <h1 className="text-5xl text-gray-400 text-opacity-70 font-extrabold text-center my-5 ">
                        No App Found
                    </h1>

                    <a
                        href="/apps"
                        className="mt-3 w-fit mx-auto lg:mx-0  bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  text-white font-semibold px-6 py-2 rounded-lg"
                    >
                        Show All Apps
                    </a>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {searchedApps.map((app) => (
                        <AppCard key={app.id} app={app}></AppCard>
                    ))}
                </div>
            )}
        </Container>
    );
};

export default Apps;
