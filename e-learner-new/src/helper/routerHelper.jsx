
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

// Portal pages
import Courses from "../pages/Portal/Courses";
import Quizzes from "../pages/Portal/Quizzes";
import LearningPortal from "../pages/Portal/LearningPortal";
import NotFoundPage from "../pages/Portal/NotFoundPage";

// Admin pages
import Dashboard from "../admin/Dashboard";
import AddCoursePage from "../admin/AddCoursePage";
import EditCoursePage from "../admin/EditCoursePage";
import AddQuizPage from "../admin/AddQuizPage";
import EditQuizPage from "../admin/EditQuizPage";

// Components
import PrivateRoute from "../components/PrivateRoute";

export const allRoutes = [
  // Public Routes
  {
    path: "/",
    element: HomePage,
    isPrivate: false
  },
  {
    path: "/login",
    element: Login,
    isPrivate: false
  },
  {
    path: "/signup",
    element: Signup,
    isPrivate: false
  },

  // Portal (User) Routes
  {
    path: "/courses",
    element: Courses,
    isPrivate: true,
    role: "user"
  },
  {
    path: "/quizzes",
    element: Quizzes,
    isPrivate: true,
    role: "user"
  },
  {
    path: "/portal",
    element: LearningPortal,
    isPrivate: true,
    role: "user"
  },

  // Admin Routes
  {
    path: "/admin/dashboard",
    element: Dashboard,
    isPrivate: true,
    role: "admin"
  },
  {
    path: "/admin/add-course",
    element: AddCoursePage,
    isPrivate: true,
    role: "admin"
  },
  {
    path: "/admin/edit-course/:id",
    element: EditCoursePage,
    isPrivate: true,
    role: "admin"
  },
  {
    path: "/admin/add-quiz",
    element: AddQuizPage,
    isPrivate: true,
    role: "admin"
  },
  {
    path: "/admin/edit-quiz/:id",
    element: EditQuizPage,
    isPrivate: true,
    role: "admin"
  },

  // Fallback Route
  {
    path: "*",
    element: NotFoundPage,
    isPrivate: false
  }
];

// Helper to wrap routes with <PrivateRoute> when necessary
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
