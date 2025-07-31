import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditCoursePage = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState({ title: '', description: '' });

    useEffect(() => {
        axios.get(`http://localhost:3001/courses/${courseId}`)
            .then((res) => setCourse(res.data));
    }, [courseId]);

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/courses/${courseId}`, course);
        alert('Course updated successfully!');
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Edit Course</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={course.title}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                <textarea
                    name="description"
                    value={course.description}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                    Update Course
                </button>
            </form>
        </div>
    );
};

export default EditCoursePage;
