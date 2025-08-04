// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {AuthProvider} from "./context/AuthContext";
import RouterPage from "./router/router";

function App() {
    return (
        <AuthProvider>
            <RouterPage/>
        </AuthProvider>
    );
}

export default App;
