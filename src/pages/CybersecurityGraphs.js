import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const CybersecurityGraphs = () => {
  // Data for bar chart (Example: Types of attacks)
  const barData = {
    labels: ["Malware", "Phishing", "Ransomware", "DDoS", "Insider Threat"],
    datasets: [
      {
        label: "Number of Attacks (in thousands)",
        data: [120, 200, 150, 90, 75],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  // Data for pie chart (Example: Attack Severity)
  const pieData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Data for line chart (Example: Trend of attacks over years)
  const lineData = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Malware",
        data: [80, 100, 120, 110, 130],
        fill: false,
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
      },
      {
        label: "Phishing",
        data: [90, 150, 170, 180, 200],
        fill: false,
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Cybersecurity Attack Statistics
      </h1>

      {/* Bar Chart Section */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Types of Attacks
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <Bar data={barData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Attack Severity Distribution
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <Pie data={pieData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Attack Trends Over Years
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <Line data={lineData} options={{ responsive: true }} />
        </div>
      </div>
      <div className="foot">
        <h2 className="text-sm font-semibold text-grey-900 mb-4 text-center">
          This data is not fetched data
        </h2>
      </div>
    </div>
  );
};

export default CybersecurityGraphs;
