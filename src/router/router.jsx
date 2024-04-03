import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import Organisation from "@/pages/Organisation";
import { Settings } from "lucide-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
            index: true,
            element:<Dashboard />
        },
        {
            path:'organization',
            element: <Organisation />
        },
        {
            path:'settings',
            element:<Settings />
        }
    ]
    }
])