// src/pages/BestPractices.js
import React from "react";
import {
  FaShieldAlt,
  FaUserLock,
  FaRegEnvelope,
  FaKey,
  FaFileAlt,
} from "react-icons/fa";

const BestPractices = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Best Practices for Cybersecurity
        </h1>

        <p className="text-lg text-white mb-8">
          Implementing cybersecurity best practices helps protect your systems
          and data from various threats. Here are some key practices to enhance
          your security posture:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Best Practice 1: Use Strong Passwords */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <FaKey size={40} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Use Strong Passwords
            </h2>
            <p className="text-gray-600 mb-4">
              Use complex passwords that include a mix of letters, numbers, and
              special characters. Avoid using easily guessable information and
              change your passwords regularly.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tips:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Use a password manager to generate and store passwords.</li>
              <li>Enable two-factor authentication (2FA) where possible.</li>
              <li>Avoid reusing passwords across multiple accounts.</li>
            </ul>
          </div>

          {/* Best Practice 2: Keep Software Updated */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <FaShieldAlt size={40} className="text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Keep Software Updated
            </h2>
            <p className="text-gray-600 mb-4">
              Regularly update your software, including operating systems and
              applications, to patch vulnerabilities and protect against
              exploits.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tips:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Enable automatic updates where possible.</li>
              <li>Regularly check for and apply updates manually.</li>
              <li>Keep security software updated as well.</li>
            </ul>
          </div>

          {/* Best Practice 3: Educate Users */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <FaUserLock size={40} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Educate Users
            </h2>
            <p className="text-gray-600 mb-4">
              Regularly train users on cybersecurity best practices and raise
              awareness about common threats like phishing and social
              engineering.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tips:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Conduct regular security awareness training sessions.</li>
              <li>
                Provide resources and guidelines for safe online behavior.
              </li>
              <li>Encourage reporting of suspicious activities.</li>
            </ul>
          </div>

          {/* Best Practice 4: Secure Communication */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <FaRegEnvelope size={40} className="text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Secure Communication
            </h2>
            <p className="text-gray-600 mb-4">
              Use secure methods for communication, such as encrypted email and
              secure messaging apps, to protect sensitive information from
              interception.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tips:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Use email encryption tools for sensitive communications.</li>
              <li>
                Employ secure messaging platforms with end-to-end encryption.
              </li>
              <li>
                Verify the authenticity of communications before sharing
                sensitive information.
              </li>
            </ul>
          </div>

          {/* Best Practice 5: Backup Data Regularly */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <FaFileAlt size={40} className="text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Backup Data Regularly
            </h2>
            <p className="text-gray-600 mb-4">
              Regularly back up important data to protect against data loss due
              to hardware failures, ransomware attacks, or other incidents.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tips:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Use automated backup solutions for regular backups.</li>
              <li>
                Store backups in multiple locations, including offsite or cloud
                storage.
              </li>
              <li>Test backups periodically to ensure data can be restored.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
