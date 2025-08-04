import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {allRoutes, renderRouteElement} from "../helper/routerHelper";

export default function RouterPage() {
    return (
        <Router>
            <Routes>
                {allRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={renderRouteElement(route)}
                    />
                ))}
            </Routes>
        </Router>
    );
}