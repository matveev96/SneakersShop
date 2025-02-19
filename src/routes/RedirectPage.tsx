import {Navigate} from "react-router-dom";
import * as React from "react";
import {PATH} from "./router";

export const RedirectPage = () => {
    return <Navigate to={PATH.ADIDAS}/>;
};