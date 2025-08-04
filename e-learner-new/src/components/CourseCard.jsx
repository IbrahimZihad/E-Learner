import React from "react";

const CourseCard = ({ course, onClick, progress = 0, isAdmin = false, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition relative">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
      <p className="text-gray-600 mb-2">{course.description}</p>
      <p className="text-sm text-blue-500 font-medium mb-3">
        Instructor: {course.instructor}
      </p>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mb-2">Progress: {progress}%</p>

      {/* Admin Buttons */}
      {isAdmin && (
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={() => onEdit(course)}
            className="text-yellow-500 hover:text-yellow-700"
            title="Edit"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(course.id)}
            className="text-red-500 hover:text-red-700"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
