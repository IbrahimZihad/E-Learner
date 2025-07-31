import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

// Auth pages
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

// Home pages
import HomePage from "../pages/Home/HomePage";

// Portal pages
import Courses from "../pages/Portal/Courses";
import LearningPortal from "../pages/Portal/LearningPortal";
import Quizzes from "../pages/Portal/Quizzes";

// Admin pages
import Dashboard from "../admin/Dashboard";
import EditCoursePage from "../admin/EditCoursePage";
import AddCoursePage from "../admin/AddCoursePage";
import EditQuizPage from "../admin/EditQuizPage";
import AddQuizPage from "../admin/AddQuizPage";

// All route definitions
export const allRoutes = [
    // Public Routes
    {
        path: "/",
        element: HomePage,
        isPrivate: false,
    },
    {
        path: "/login",
        element: Login,
        isPrivate: false,
    },
    {
        path: "/signup",
        element: Signup,
        isPrivate: false,
    },

    // Portal (User) Routes
    {
        path: "/courses",
        element: Courses,
        isPrivate: true,
        role: "user",
    },
    {
        path: "/learning",
        element: LearningPortal,
        isPrivate: true,
        role: "user",
    },
    {
        path: "/quizzes",
        element: Quizzes,
        isPrivate: true,
        role: "user",
    },

    // Admin Routes
    {
        path: "/admin/dashboard",
        element: Dashboard,
        isPrivate: true,
        role: "admin",
    },
    {
        path: "/admin/courses/add",
        element: AddCoursePage,
        isPrivate: true,
        role: "admin",
    },
    {
        path: "/admin/courses/edit/:courseId",
        element: EditCoursePage,
        isPrivate: true,
        role: "admin",
    },
    {
        path: "/admin/quizzes/add",
        element: AddQuizPage,
        isPrivate: true,
        role: "admin",
    },
    {
        path: "/admin/quizzes/edit/:quizId",
        element: EditQuizPage,
        isPrivate: true,
        role: "admin",
    },
];

// Function to wrap protected routes
export const renderRouteElement = (route) => {
    const Component = route.element;

    if (route.isPrivate) {
        return (
            <PrivateRoute role={route.role}>
                <Component />
            </PrivateRoute>
        );
    }

    return <Component />;
};

// Function to generate all <Route> elements
export const generateRoutes = () => {
    return allRoutes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            element={renderRouteElement(route)}
        />
    ));
};
