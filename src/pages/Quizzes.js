import React, { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "What is the primary purpose of a firewall?",
    options: [
      "To monitor network traffic",
      "To prevent unauthorized access",
      "To encrypt data",
      "To create backups",
    ],
    answer: "To prevent unauthorized access",
  },
  {
    question: "Which of the following is a common type of malware?",
    options: ["Phishing", "Encryption", "Trojan", "VPN"],
    answer: "Trojan",
  },
  {
    question: "What does 'HTTPS' stand for?",
    options: [
      "HyperText Transfer Protocol Secure",
      "High Transfer Text Protocol Secure",
      "Hyper Transfer Text Protocol Safe",
      "HyperText Transport Protocol Secure",
    ],
    answer: "HyperText Transfer Protocol Secure",
  },
  {
    question:
      "Which attack involves intercepting communication to steal sensitive data?",
    options: [
      "Man-in-the-Middle Attack",
      "SQL Injection",
      "Cross-Site Scripting",
      "Phishing",
    ],
    answer: "Man-in-the-Middle Attack",
  },
  {
    question: "What is a zero-day vulnerability?",
    options: [
      "A newly discovered vulnerability with no fix yet",
      "A vulnerability that occurs every day",
      "A known vulnerability with a fix",
      "A vulnerability that only affects certain software",
    ],
    answer: "A newly discovered vulnerability with no fix yet",
  },
  {
    question: "Which of the following is a method for securing a network?",
    options: ["Firewall", "VPN", "Antivirus", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is social engineering?",
    options: [
      "Manipulating people into divulging confidential information",
      "Encrypting data",
      "Securing network protocols",
      "Detecting malware",
    ],
    answer: "Manipulating people into divulging confidential information",
  },
  {
    question: "What is the purpose of encryption?",
    options: [
      "To obscure data to prevent unauthorized access",
      "To speed up data transmission",
      "To store data more efficiently",
      "To backup data",
    ],
    answer: "To obscure data to prevent unauthorized access",
  },
  {
    question: "Which type of attack uses fraudulent emails to deceive users?",
    options: ["Phishing", "Ransomware", "Spyware", "Worms"],
    answer: "Phishing",
  },
  {
    question: "What does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Verified Personal Network",
      "Virtual Protected Network",
      "Verified Private Node",
    ],
    answer: "Virtual Private Network",
  },
  {
    question:
      "Which type of attack involves exploiting a vulnerability in a web application to inject malicious code?",
    options: [
      "SQL Injection",
      "Cross-Site Scripting",
      "Man-in-the-Middle Attack",
      "Phishing",
    ],
    answer: "SQL Injection",
  },
  {
    question: "What is the purpose of a CAPTCHA?",
    options: [
      "To verify that a user is human",
      "To encrypt user data",
      "To create backups",
      "To detect malware",
    ],
    answer: "To verify that a user is human",
  },
  {
    question: "Which of the following is NOT a form of social engineering?",
    options: ["Phishing", "Pretexting", "Baiting", "Ransomware"],
    answer: "Ransomware",
  },
  {
    question: "What is the main goal of a DDoS attack?",
    options: [
      "To overwhelm and disable a target system",
      "To steal sensitive data",
      "To encrypt files for ransom",
      "To spy on users",
    ],
    answer: "To overwhelm and disable a target system",
  },
  {
    question:
      "Which type of attack involves an attacker gaining unauthorized access to a network through an insecure device?",
    options: [
      "IoT Attack",
      "Phishing",
      "SQL Injection",
      "Cross-Site Scripting",
    ],
    answer: "IoT Attack",
  },
  {
    question: "What does 'BYOD' stand for in cybersecurity?",
    options: [
      "Bring Your Own Device",
      "Bring Your Own Data",
      "Bring Your Own Download",
      "Bring Your Own Domain",
    ],
    answer: "Bring Your Own Device",
  },
  {
    question: "What is the purpose of a VPN?",
    options: [
      "To create a secure connection over a public network",
      "To encrypt data at rest",
      "To monitor network traffic",
      "To backup data",
    ],
    answer: "To create a secure connection over a public network",
  },
  {
    question:
      "Which of the following is a common method for password protection?",
    options: [
      "Multi-Factor Authentication",
      "Encryption",
      "Backup",
      "Firewall",
    ],
    answer: "Multi-Factor Authentication",
  },
  {
    question: "What does 'RAT' stand for in cybersecurity?",
    options: [
      "Remote Access Trojan",
      "Random Access Token",
      "Remote Authentication Tool",
      "Rapid Attack Technique",
    ],
    answer: "Remote Access Trojan",
  },
  {
    question:
      "Which security measure involves regularly updating software to patch vulnerabilities?",
    options: [
      "Patch Management",
      "Data Encryption",
      "Access Control",
      "Intrusion Detection",
    ],
    answer: "Patch Management",
  },
  {
    question: "What is the purpose of an IDS (Intrusion Detection System)?",
    options: [
      "To monitor network traffic for suspicious activity",
      "To encrypt sensitive data",
      "To create backups",
      "To manage user access",
    ],
    answer: "To monitor network traffic for suspicious activity",
  },
  {
    question:
      "Which type of attack involves an attacker tricking users into installing malicious software disguised as legitimate applications?",
    options: ["Trojan", "Worm", "Virus", "Ransomware"],
    answer: "Trojan",
  },
  {
    question: "What does 'HTTPS' ensure when used on a website?",
    options: [
      "Secure communication between the user's browser and the web server",
      "Faster website loading times",
      "Higher search engine ranking",
      "Broader user accessibility",
    ],
    answer:
      "Secure communication between the user's browser and the web server",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(option);
    setTimeout(() => {
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Cybersecurity Quiz</h1>
      {currentQuestion < questions.length ? (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                className={`w-full p-3 rounded-lg text-white font-semibold ${
                  selectedOption === option
                    ? option === questions[currentQuestion].answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-blue-500"
                }`}
                onClick={() => handleOptionClick(option)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Quiz Complete!</h2>
          <p className="text-lg">
            Your score: {score} out of {questions.length}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Quiz;
