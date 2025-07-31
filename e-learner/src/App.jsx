import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { generateRoutes } from "./router/routerHelper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="min-h-screen">
                <AppRouter />
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
