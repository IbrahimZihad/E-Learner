import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../../components/CourseCard";
import QuizCard from "../../components/QuizCard";
import { useNavigate } from "react-router-dom";

const LearningPortal = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [attemptedQuizzes, setAttemptedQuizzes] = useState([]);
  const navigate = useNavigate();

  // Fetch enrolled courses
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/enrollments");
      setEnrolledCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses", error);
    }
  };

  // Fetch attempted quizzes
  const fetchQuizzes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/attempts");
      setAttemptedQuizzes(response.data);
    } catch (error) {
      console.error("Failed to fetch quizzes", error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchQuizzes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Learning Portal</h1>

      {/* Enrolled Courses */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-semibold">Your Enrolled Courses</h2>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={() => navigate("/courses")}
          >
            Enroll in New Courses
          </button>
        </div>
        {enrolledCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enrolledCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p>No enrolled courses yet.</p>
        )}
      </div>

      {/* Attempted Quizzes */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-semibold">Your Attempted Quizzes</h2>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            onClick={() => navigate("/quizzes")}
          >
            Attempt New Quizzes
          </button>
        </div>
        {attemptedQuizzes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {attemptedQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        ) : (
          <p>No quizzes attempted yet.</p>
        )}
      </div>
    </div>
  );
};

export default LearningPortal;
