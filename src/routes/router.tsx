import * as React from "react";
import {createBrowserRouter, Navigate, type RouteObject} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Model} from "../components/pages/Model";
import {Prices} from "../components/pages/Prices";
import {PrivatePage} from "../components/pages/ProtectedPage";
import Login from "../components/pages/Login";
import {PrivateRoutes} from "./ProtectedRoute";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prises',
    PROTECTED_PAGE: '/protectedPage',
    MODEL: '/:model/:id',
    ERROR: '/error',
    LOGIN: '/login'
} as const

const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.ERROR,
        element: <Error404/>,
    }
]

const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element: (
            <PrivatePage/>
        )
    },
]

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    }
]);

