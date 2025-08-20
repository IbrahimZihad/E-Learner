import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CourseCard from "../../components/CourseCard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // ✅ import AuthContext

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // ✅ get logged-in user from context

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses", error);
    }
  };

  const handleEnroll = async (course) => {
    if (!user) {
      alert("You need to log in first!");
      navigate("/login");
      return;
    }

    const confirmed = window.confirm(`Do you want to enroll in "${course.title}"?`);
    if (!confirmed) return;

    try {
      // check if user is already enrolled in this course
      const alreadyEnrolled = await axios.get(
        `http://localhost:3000/enrollments?courseId=${course.id}&userId=${user.id}`
      );

      if (alreadyEnrolled.data.length > 0) {
        alert("You are already enrolled in this course.");
        return;
      }

      // minimal enrollment data
      const enrollmentData = {
        userId: user.id,
        courseId: course.id,
        progress: 0,
      };

      await axios.post("http://localhost:3000/enrollments", enrollmentData);
      alert("Successfully enrolled in the course!");

      navigate("/portal");
    } catch (error) {
      console.error("Enrollment failed", error);
      alert("Enrollment failed. Please try again later.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleEnroll(course)}
            className="cursor-pointer"
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
