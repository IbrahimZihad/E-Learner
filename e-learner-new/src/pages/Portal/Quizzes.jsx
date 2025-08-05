import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizCard from "../../components/QuizCard";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  const fetchQuizzes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/quizzes");
      setQuizzes(response.data);
    } catch (error) {
      console.error("Failed to fetch quizzes", error);
    }
  };

  const handleAttempt = async (quiz) => {
    const confirmed = window.confirm(`Do you want to attempt the quiz "${quiz.title}"?`);
    if (!confirmed) return;

    try {
      const alreadyAttempted = await axios.get(`http://localhost:3000/attempts?id=${quiz.id}`);
      if (alreadyAttempted.data.length > 0) {
        alert("You have already attempted this quiz.");
        return;
      }

      // Simulate a random score (replace with actual quiz logic if needed)
      const score = Math.floor(Math.random() * 100);
      const attemptData = { ...quiz, score };

      await axios.post("http://localhost:3000/attempts", attemptData);
      alert(`Quiz attempted! You scored ${score}`);
    } catch (error) {
      console.error("Attempt failed", error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Available Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <div key={quiz.id} onClick={() => handleAttempt(quiz)} className="cursor-pointer">
            <QuizCard quiz={quiz} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
