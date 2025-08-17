import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../../components/CourseCard";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // ✅ initialize navigate

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
      const alreadyEnrolled = await axios.get(`http://localhost:3000/enrollments?id=${course.id}`);
      if (alreadyEnrolled.data.length > 0) {
        alert("You are already enrolled in this course.");
        return;
      }

      const enrollmentData = { ...course, progress: 0 };
      await axios.post("http://localhost:3000/enrollments", enrollmentData);
      alert("Successfully enrolled in the course!");

      navigate("/portal"); // ✅ navigate to portal after success
    } catch (error) {
      console.error("Enrollment failed", error);
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
          <div key={course.id} onClick={() => handleEnroll(course)} className="cursor-pointer">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
