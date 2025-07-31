import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Your Potential with Our E-Learning Platform
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Learn from experts, track your progress, and gain real-world skills—all at your own pace.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600">
            We’re not just another learning platform. Here’s what makes us stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="Expert Tutors"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry professionals with real-world experience and teaching passion.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
              alt="Flexible Learning"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">
              Study at your own pace—anytime, anywhere. All you need is an internet connection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="Progress Tracking"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
            <p className="text-gray-600">
              Monitor your quiz scores, course completion, and achievements on your personalized dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Thousands of Learners Today</h2>
          <p className="text-gray-700 mb-6">
            Whether you're a student, a professional, or just curious—our platform is designed to empower your growth.
          </p>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Start Learning Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
