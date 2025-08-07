import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, role, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to section (client-side)
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    // Scroll inside Dashboard if admin
    const scrollToDashboardSection = (sectionId) => {
        navigate('/admin/dashboard');
        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // small delay to ensure component is mounted
    };

    const handleHomeClick = () => {
        if (!isAuthenticated) {
            navigate('/');
            if (location.pathname === '/') scrollTo('top');
        } else if (role === 'user') {
            navigate('/portal');
        } else if (role === 'admin') {
            navigate('/admin/dashboard');
        }
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="text-xl font-bold text-blue-600 cursor-pointer" onClick={handleHomeClick}>
                LearnMate
            </div>

            <ul className="flex space-x-6 text-gray-700 font-medium">
                {/* Not Logged In */}
                {!isAuthenticated && (
                    <>
                        <li className="cursor-pointer hover:text-blue-500" onClick={handleHomeClick}>Home</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => scrollTo('why-us')}>Why Us</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate('/login')}>Login</li>
                    </>
                )}

                {/* Logged in as USER */}
                {isAuthenticated && role === 'user' && (
                    <>
                        <li className="cursor-pointer hover:text-blue-500" onClick={handleHomeClick}>Home</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate('/courses')}>Courses</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate('/quizzes')}>Quizzes</li>
                        <li className="cursor-pointer hover:text-red-500" onClick={logout}>Logout</li>
                    </>
                )}

                {/* Logged in as ADMIN */}
                {isAuthenticated && role === 'admin' && (
                    <>
                        <li className="cursor-pointer hover:text-blue-500" onClick={handleHomeClick}>Home</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => scrollToDashboardSection('courses-section')}>Courses</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => scrollToDashboardSection('quizzes-section')}>Quizzes</li>
                        <li className="cursor-pointer hover:text-red-500" onClick={logout}>Logout</li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
