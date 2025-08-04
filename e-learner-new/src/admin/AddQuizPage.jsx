import React, { useState } from 'react';
import axios from 'axios';

const AddQuizPage = () => {
    const [quiz, setQuiz] = useState({ title: '', question: '', answer: '' });

    const handleChange = (e) => {
        setQuiz({ ...quiz, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/quizzes', quiz);
        alert('Quiz added successfully!');
        setQuiz({ title: '', question: '', answer: '' });
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Add Quiz</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={quiz.title}
                    onChange={handleChange}
                    placeholder="Quiz Title"
                    className="border p-2 w-full"
                />
                <input
                    type="text"
                    name="question"
                    value={quiz.question}
                    onChange={handleChange}
                    placeholder="Question"
                    className="border p-2 w-full"
                />
                <input
                    type="text"
                    name="answer"
                    value={quiz.answer}
                    onChange={handleChange}
                    placeholder="Correct Answer"
                    className="border p-2 w-full"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Add Quiz
                </button>
            </form>
        </div>
    );
};

export default AddQuizPage;
