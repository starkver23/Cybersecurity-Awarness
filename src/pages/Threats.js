import React from "react";

const threatsData = [
  {
    title: "Phishing",
    description:
      "Phishing is a type of social engineering attack where attackers impersonate legitimate institutions to steal sensitive information, such as usernames, passwords, and credit card numbers.",
    image: "https://via.placeholder.com/150?text=Phishing",
  },
  {
    title: "Malware",
    description:
      "Malware is malicious software designed to disrupt, damage, or gain unauthorized access to computer systems. Common types include viruses, worms, trojans, and ransomware.",
    image: "https://via.placeholder.com/150?text=Malware",
  },
  {
    title: "Ransomware",
    description:
      "Ransomware is a type of malware that encrypts a user's data, rendering it inaccessible until a ransom is paid to the attacker. It often spreads through phishing emails or malicious websites.",
    image: "https://via.placeholder.com/150?text=Ransomware",
  },
  {
    title: "Man-in-the-Middle (MitM) Attack",
    description:
      "In a MitM attack, attackers intercept and alter communications between two parties without their knowledge. This can lead to unauthorized access to sensitive information.",
    image: "https://via.placeholder.com/150?text=MitM+Attack",
  },
  {
    title: "SQL Injection",
    description:
      "SQL Injection is a code injection technique that exploits vulnerabilities in an application's software by inserting malicious SQL queries into input fields, allowing attackers to manipulate the database.",
    image: "https://via.placeholder.com/150?text=SQL+Injection",
  },
  {
    title: "Cross-Site Scripting (XSS)",
    description:
      "XSS is a vulnerability that allows attackers to inject malicious scripts into webpages viewed by other users. This can lead to the theft of session cookies or other sensitive data.",
    image: "https://via.placeholder.com/150?text=XSS",
  },
  {
    title: "Denial of Service (DoS) Attack",
    description:
      "DoS attacks aim to overwhelm a network, server, or application with excessive traffic, rendering it unavailable to legitimate users. Distributed Denial of Service (DDoS) attacks use multiple systems to amplify the attack.",
    image: "https://via.placeholder.com/150?text=DoS",
  },
  {
    title: "Credential Stuffing",
    description:
      "Credential stuffing involves using previously stolen usernames and passwords to gain unauthorized access to user accounts on different platforms. This attack relies on the reuse of login credentials across multiple sites.",
    image: "https://via.placeholder.com/150?text=Credential+Stuffing",
  },
  {
    title: "Insider Threats",
    description:
      "Insider threats occur when employees or other trusted individuals misuse their access to compromise security. This can be intentional or accidental, such as through negligence or poor security practices.",
    image: "https://via.placeholder.com/150?text=Insider+Threats",
  },
  {
    title: "Zero-Day Exploits",
    description:
      "A zero-day exploit targets vulnerabilities that are unknown to the software vendor or the public. These vulnerabilities can be exploited by attackers before a fix or patch is available.",
    image: "https://via.placeholder.com/150?text=Zero-Day",
  },
];

const Threats = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Cybersecurity Threats
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Cybersecurity threats are constantly evolving, and it is crucial to
            stay informed about potential risks to safeguard your digital
            assets. Here are some of the most common and dangerous cybersecurity
            threats:
          </p>
          {threatsData.map((threat, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center">
                <img
                  src={threat.image}
                  alt={threat.title}
                  className="w-32 h-32 object-cover rounded-lg shadow-lg mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {threat.title}
                  </h2>
                  <p className="text-gray-600">{threat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Threats;
