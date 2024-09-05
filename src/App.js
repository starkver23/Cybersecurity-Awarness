import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/About"; // Ensure the component name matches
import Threats from "./pages/Threats";
import BestPractices from "./pages/BestPractices";
import Resources from "./pages/Resources";
import Quizzes from "./pages/Quizzes";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CybersecurityGraphs from "./pages/CybersecurityGraphs";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />{" "}
          {/* Updated path to match the Home.js */}
          <Route path="/threats" element={<Threats />} />
          <Route path="/BestPractices" element={<BestPractices />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route
            path="/CybersecurityGraphs"
            element={<CybersecurityGraphs />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
