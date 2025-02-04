import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import ResumeSection from "./Resume";

function Certification() {
  const education = [
    {
      category: "School",
      Major: "🎓 Bachelor’s Degree in Business Management",
      school: "Mpokolo Institute",
      details: [
        "Key Skills: Business strategy, project management, leadership",
      ],
      year: 2019,
    },
    {
      category: "School",
      Major: "🎓 Software Development",
      school: "BYU-Idaho",
      details: ["Key Skills: Python, JavaScript, HTML, CSS, Git, C# .NET"],
      year:  2026,
      status:"Leaning"
    },
    {
      category: "Training",
      Major: "📜 Web & Mobile App Development Training",
      school: "Harvard Online",
      details: [
        "Skills Learned: React.js, React Native, Node.js, MySQL, Firebase",
      ],
      year: 2021,
    },
    {
      category: "Training",
      Major: "🏆 Full-Stack Developer Certification",
      school: "Coursera",
      details: ["API development, database design, authentication, security"],
      year: 2023,
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gray-1000 overflow-hidden p-8">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="/education.jpg"
        alt="Education Background"
      />

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <motion.h1
        className="relative z-10 text-center text-white font-bold text-4xl mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education & Certifications
      </motion.h1>

      {/* Certifications List */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg flex flex-col hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon & Major */}
            <div className="flex items-center mb-4">
              {edu.category === "School" ? (
                <FaGraduationCap size={28} className="text-blue-400 mr-3" />
              ) : (
                <FaCertificate size={28} className="text-yellow-400 mr-3" />
              )}
              <h2 className="text-xl font-semibold text-white">{edu.Major}</h2>
            </div>

            {/* School Name */}
            <p className="text-green-500">{edu.status}</p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Institution:</span>{" "}
              {edu.school}
            </p>
        

            {/* Details */}
            <ul className="text-gray-400 list-disc list-inside">
              {edu.details.map((detail, i) => (
                <li key={i} className="mb-1">
                  {detail}
                </li>
              ))}
            </ul>

            {/* Year */}
            <p className="text-gray-400 mt-4">
              <span className="font-semibold text-white">Year:</span> {edu.year}
            </p>
          </motion.div>
        ))}

       <ResumeSection/>
  
      </div>
    </div>
  );
}

export default Certification;
