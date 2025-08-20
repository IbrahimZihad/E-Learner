import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function LearningMaterial() {
  const { id } = useParams(); // course id from URL
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(0);
  const [enrollmentId, setEnrollmentId] = useState(null);

  // Fetch course info
  useEffect(() => {
    fetch(`http://localhost:3000/courses/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [id]);

  // Fetch enrollment info for this course (assuming userId = 1 for now)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/enrollments?courseId=${id}&userId=1`)
      .then(res => {
        if (res.data.length > 0) {
          setEnrollmentId(res.data[0].id);
          setProgress(res.data[0].progress || 0);
        }
      });
  }, [id]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = async () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrolled = Math.min(
        ((scrollTop + windowHeight) / docHeight) * 100,
        100
      );

      // Only update if progress increased
      if (scrolled > progress) {
        setProgress(scrolled);

        if (enrollmentId) {
          try {
            await axios.patch(
              `http://localhost:3000/enrollments/${enrollmentId}`,
              { progress: scrolled }
            );
          } catch (err) {
            console.error("Error updating progress", err);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [progress, enrollmentId]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>

      {/* Show progress */}
      <p className="mb-4 text-lg font-medium text-blue-600">
        Progress: {progress.toFixed(0)}%
      </p>

      {course.materials.map((m, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{m.section}</h2>
          <div dangerouslySetInnerHTML={{ __html: m.content }} />
        </div>
      ))}
    </div>
  );
}
