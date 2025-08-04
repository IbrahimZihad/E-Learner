import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CourseCard from '../components/CourseCard';
import QuizCard from '../components/QuizCard';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [courses, setCourses] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/users').then(res => setUsers(res.data));
        axios.get('http://localhost:3001/courses').then(res => setCourses(res.data));
        axios.get('http://localhost:3001/quizzes').then(res => setQuizzes(res.data));
    }, []);

    return (
        <div className="p-6 space-y-10">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            {/* Users Table */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b text-left">ID</th>
                                <th className="py-2 px-4 border-b text-left">Name</th>
                                <th className="py-2 px-4 border-b text-left">Email</th>
                                <th className="py-2 px-4 border-b text-left">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{user.id}</td>
                                    <td className="py-2 px-4 border-b">{user.name}</td>
                                    <td className="py-2 px-4 border-b">{user.email}</td>
                                    <td className="py-2 px-4 border-b capitalize">{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Courses Section */}
            <section id="courses-section">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">All Courses</h2>
                    <button
                        onClick={() => navigate('/admin/courses/add')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        + Add Course
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                    {courses.length === 0 && (
                        <p className="text-gray-500">No courses found.</p>
                    )}
                </div>
            </section>

            {/* Quizzes Section */}
            <section id="quizzes-section" className="mt-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">All Quizzes</h2>
                    <button
                        onClick={() => navigate('/admin/quizzes/add')}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    >
                        + Add Quiz
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {quizzes.map(quiz => (
                        <QuizCard key={quiz.id} quiz={quiz} />
                    ))}
                    {quizzes.length === 0 && (
                        <p className="text-gray-500">No quizzes found.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
