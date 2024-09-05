// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaShieldAlt,
  FaQuestionCircle,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { SiSecurityscorecard } from "react-icons/si";

const Home = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const services = [
    {
      title: "Home",
      description: "Return to the main page.",
      icon: <FaHome size={40} className="text-blue-500" />,
      link: "/",
    },
    {
      title: "About Us",
      description: "Learn more about our mission and team.",
      icon: <FaInfoCircle size={40} className="text-green-500" />,
      link: "/about-us",
    },
    {
      title: "Threats",
      description: "Understand various cybersecurity threats.",
      icon: <FaShieldAlt size={40} className="text-red-500" />,
      link: "/threats",
    },
    {
      title: "Best-Practice",
      description: "The best practices to save yourself from threats",
      icon: <FaCheckCircle size={40} className="text-red-500" />,
      link: "/BestPractices",
    },
    {
      title: "Quizzes",
      description: "Test your cybersecurity knowledge.",
      icon: <FaQuestionCircle size={40} className="text-purple-500" />,
      link: "/quizzes",
    },
    {
      title: "Contact",
      description: "Get in touch with us.",
      icon: <FaEnvelope size={40} className="text-yellow-500" />,
      link: "/contact",
    },
    {
      title: "Graphs",
      description: "Visualize the cyber attacks",
      icon: <SiSecurityscorecard size={40} className="text-teal-600" />,
      link: "/CybersecurityGraphs",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen p-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          Welcome to Cybersecurity Awareness Platform
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
              onClick={() => navigate(service.link)} // Correct navigation handling
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
