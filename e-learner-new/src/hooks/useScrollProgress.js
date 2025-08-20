import { useEffect, useState } from "react";
import axios from "axios";

const useScrollProgress = (courseId, userId) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/enrollments?userId=${userId}&courseId=${courseId}`
        );
        if (res.data.length > 0) {
          setProgress(res.data[0].progress);
        }
      } catch (err) {
        console.error("Error fetching enrollment:", err);
      }
    };

    fetchEnrollment();
  }, [courseId, userId]);

  useEffect(() => {
    const handleScroll = async () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > progress) {
        setProgress(scrollPercent);

        try {
          // Get enrollment
          const res = await axios.get(
            `http://localhost:3000/enrollments?userId=${userId}&courseId=${courseId}`
          );
          if (res.data.length > 0) {
            const enrollment = res.data[0];
            await axios.patch(`http://localhost:3000/enrollments/${enrollment.id}`, {
              progress: scrollPercent
            });
          }
        } catch (err) {
          console.error("Error updating progress:", err);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [courseId, userId, progress]);

  return progress;
};

export default useScrollProgress;
