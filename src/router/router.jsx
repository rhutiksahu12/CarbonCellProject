import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Organisation from './../pages/Organisation';
import Settings from './../pages/Settings';
import Dashboard from './../pages/Dashboard';
import Layout from './../components/layout/Layout';
import App from './../App';
import Assets from "@/pages/Assets";
import Trade from "@/pages/Trade";
import History from "@/pages/History";
import Wallet from './../pages/Wallet';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                path: '/',
                element: <Dashboard />
            },
            {
                path: 'organization',
                element: <Organisation />
            },
            {
                path: 'assets',
                element: <Assets />

            },
            {
                path: 'trade',
                element: <Trade />
            },
            {
                path: 'history',
                element: <History />
            },
            {
                path: 'wallet',
                element: <Wallet />
            }
        ]
    }

])