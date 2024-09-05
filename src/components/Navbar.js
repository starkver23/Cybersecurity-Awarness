// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Cybersecurity Awareness</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/about-us" className="text-white hover:underline">
            About Us
          </Link>
          <Link to="/threats" className="text-white hover:underline">
            Threats
          </Link>
          <Link to="/best-practices" className="text-white hover:underline">
            Best Practices
          </Link>
          <Link to="/resources" className="text-white hover:underline">
            Resources
          </Link>
          <Link to="/quizzes" className="text-white hover:underline">
            Quizzes
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Contact
          </Link>
          <Link
            to="/CybersecurityGraphs"
            className="text-white hover:underline"
          >
            Cybersecurity Graph
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
