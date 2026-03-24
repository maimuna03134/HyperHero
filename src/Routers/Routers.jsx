import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Loader from "../components/Loader/Loader";
import AppDetails from "../pages/AppDetails/AppDetails";
import Home from "../pages/home/Home";
import Apps from "../pages/apps/Apps";
import Installations from "../pages/Installations/Installations";




export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <Loader/>,

        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path: "/apps",
                Component: Apps,
            },
            {
                path: "/installation",
                Component: Installations,
            },
            {
                path: "/apps/:id",
                Component: AppDetails,
            },
        ],
    },
    // {
    //   path: "/footer",
    //   Component:Footer,
    // },
]);
