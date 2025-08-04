import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditQuizPage = () => {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState({ title: '', question: '', answer: '' });

    useEffect(() => {
        axios.get(`http://localhost:3001/quizzes/${quizId}`)
            .then((res) => setQuiz(res.data));
    }, [quizId]);

    const handleChange = (e) => {
        setQuiz({ ...quiz, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/quizzes/${quizId}`, quiz);
        alert('Quiz updated successfully!');
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Edit Quiz</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={quiz.title}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                <input
                    type="text"
                    name="question"
                    value={quiz.question}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                <input
                    type="text"
                    name="answer"
                    value={quiz.answer}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                    Update Quiz
                </button>
            </form>
        </div>
    );
};

export default EditQuizPage;
