import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const LearningMaterial = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/courses?id=${courseId}`);
        if (res.data && Object.keys(res.data).length > 0) {
          setCourse(res.data);
        } else {
          setCourse(null);
        }
      } catch (err) {
        console.error("Error fetching course:", err);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) return <p className="p-6">Loading course material...</p>;
  if (!course) return <p className="p-6 text-red-500">Course not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4 text-gray-700">{course.description}</p>

      {course.materials && course.materials.length > 0 ? (
        course.materials.map((material, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{material.section}</h2>
            <div dangerouslySetInnerHTML={{ __html: material.content }} />
          </div>
        ))
      ) : (
        <p>No materials uploaded yet for this course.</p>
      )}
    </div>
  );
};

export default LearningMaterial;
