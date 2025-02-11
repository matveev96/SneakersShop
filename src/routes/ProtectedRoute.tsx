import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {PATH} from "./router";

export const PrivateRoutes = () => {
    const isAuth = true
    return <> {isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>} </>
};
