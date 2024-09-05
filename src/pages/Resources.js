// src/pages/Resources.js
import React from "react";
import theImage from "./screen.webp";
const Resources = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-500 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        <img
          src={theImage}
          alt="Cybersecurity Resources"
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Cybersecurity Resources
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            To stay informed and protect yourself from cyber threats, it's
            important to leverage trusted resources and tools. Here are some
            valuable resources that can help you stay secure:
          </p>
          <ul className="list-disc pl-5 text-gray-600 leading-relaxed mb-4">
            <li>
              <a
                href="https://www.cybrary.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Cybrary
              </a>
              : Offers free and paid online courses for cybersecurity
              professionals.
            </li>
            <li>
              <a
                href="https://www.coursera.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Coursera
              </a>
              : Provides courses on cybersecurity from top universities and
              companies.
            </li>
            <li>
              <a
                href="https://haveibeenpwned.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Have I Been Pwned
              </a>
              : Allows you to check if your email has been compromised in a data
              breach.
            </li>
            <li>
              <a
                href="https://www.owasp.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                OWASP
              </a>
              : The Open Web Application Security Project provides free tools
              and resources to improve software security.
            </li>
            <li>
              <a
                href="https://www.nist.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                NIST
              </a>
              : The National Institute of Standards and Technology provides
              guidelines for cybersecurity best practices.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Use these resources to learn more about cybersecurity, enhance your
            skills, and protect yourself and your organization from cyber
            threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
