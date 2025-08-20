import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../../components/CourseCard";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses", error);
    }
  };

  const handleEnroll = async (course) => {
    const confirmed = window.confirm(`Do you want to enroll in "${course.title}"?`);
    if (!confirmed) return;

    try {
      // get logged-in user
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      if (!loggedInUser) {
        alert("You need to log in first!");
        return;
      }

      const userId = loggedInUser.id;

      // check if user is already enrolled in this course
      const alreadyEnrolled = await axios.get(
        `http://localhost:3000/enrollments?courseId=${course.id}&userId=${userId}`
      );

      if (alreadyEnrolled.data.length > 0) {
        alert("You are already enrolled in this course.");
        return;
      }

      // minimal enrollment data
      const enrollmentData = {
        userId,
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
