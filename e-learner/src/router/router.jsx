import React from "react";
import { Routes } from "react-router-dom";
import { generateRoutes } from "../helper/routerHelper";

const AppRouter = () => {
    return (
        <Routes>
            {generateRoutes()}
        </Routes>
    );
};

export default AppRouter;
