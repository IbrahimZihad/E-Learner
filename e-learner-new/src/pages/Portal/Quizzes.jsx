import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizCard from "../../components/QuizCard";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState({}); // track user answers
  const [showResults, setShowResults] = useState(false);

  const fetchQuizzes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/quizzes");
      setQuizzes(response.data);
    } catch (error) {
      console.error("Failed to fetch quizzes", error);
    }
  };

  const handleAnswer = (quizId, option) => {
    setAnswers((prev) => ({ ...prev, [quizId]: option }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < quizzes.length) {
      alert("Please answer all quizzes before submitting!");
      return;
    }
    setShowResults(true);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Available Quizzes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            onAnswer={(option) => handleAnswer(quiz.id, option)}
            userAnswer={answers[quiz.id]}
            showResult={showResults}
          />
        ))}
      </div>

      {quizzes.length > 0 && !showResults && (
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Submit Answers
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizzes;
