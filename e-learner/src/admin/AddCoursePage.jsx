import React, { useState } from 'react';
import axios from 'axios';

const AddCoursePage = () => {
    const [course, setCourse] = useState({ title: '', description: '' });

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/courses', course);
        alert('Course added successfully!');
        setCourse({ title: '', description: '' });
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={course.title}
                    onChange={handleChange}
                    placeholder="Course Title"
                    className="border p-2 w-full"
                />
                <textarea
                    name="description"
                    value={course.description}
                    onChange={handleChange}
                    placeholder="Course Description"
                    className="border p-2 w-full"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Add Course
                </button>
            </form>
        </div>
    );
};

export default AddCoursePage;
