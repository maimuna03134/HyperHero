import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        // errorElement: <ErrorPage></ErrorPage>,
        // hydrateFallbackElement: <p>Loading...</p>,

        // children: [
        //     {
        //         index: true,
        //         path: "/",
        //         Component: Home,
        //     },
        //     // {
        //     //     path: "/apps",
        //     //     Component: Apps,
        //     // },
        //     // {
        //     //     path: "/installation",
        //     //     Component: Installations,
        //     // },
        //     // {
        //     //     path: "/apps/:id",
        //     //     Component: AppDetails,
        //     // },
        // ],
    },
    // {
    //   path: "/footer",
    //   Component:Footer,
    // },
]);
