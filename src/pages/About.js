import React from "react";
import aboutImage from "./about.jpg";
import teamImage from "./aryan1.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        <img
          src={aboutImage}
          alt="Our Team"
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to our Cybersecurity Awareness initiative! We are a
            passionate team of cybersecurity professionals dedicated to
            educating individuals and organizations about the importance of
            staying secure in the digital age. Our mission is to provide
            valuable resources, best practices, and tools to help you protect
            your personal and professional information from cyber threats.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our team consists of experienced cybersecurity experts, IT
            professionals, and educators who are committed to promoting safe
            online practices. We believe that knowledge is power, and by sharing
            our expertise, we can help you stay one step ahead of
            cybercriminals.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is to empower individuals and organizations with the
            knowledge and tools needed to defend against cyber threats. We aim
            to create a safer digital environment through education, awareness,
            and proactive security measures.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team Member 1 */}
            <div className="flex justify-center items-center">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                <img
                  src={teamImage}
                  alt="Aryan Verma"
                  className="w-40 h-40 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Aryan Verma
                </h3>
                <p className="text-gray-600">SDE</p>
              </div>
            </div>
            {/* Team Member 2 */}
            {/* Uncomment and add additional team members here */}
            {/* <div className="flex justify-center items-center">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                <img
                  src="https://source.unsplash.com/featured/?person"
                  alt="Team Member 2"
                  className="w-40 h-40 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  John Smith
                </h3>
                <p className="text-gray-600">IT Specialist</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
