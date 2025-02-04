import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Certification from './Certification';

const experiences = [
  {
    title: "Software Developer - LapTech (Jan 2022 – Present)",
    details: [
      "Developed web and mobile applications using React Native, Node.js, and MySQL.",
      "Built an e-commerce system with authentication, payment integration, and order management.",
      "Optimized performance for better UI/UX and faster load times.",
      "Led training sessions for junior developers in React and API development."
    ]
  },
  {
    title: "Freelance Web Developer (2020 – Present)",
    details: [
      "Designed and developed custom websites and apps for clients across various industries.",
      "Built and maintained full-stack applications using React.js, Next.js, and Firebase.",
      "Provided technical consultation and optimized existing projects for better scalability."
    ]
  },
  {
    title: "Software Development Intern – Tech Solutions (June 2021 – Dec 2021)",
    details: [
      "Assisted in backend API development using Node.js and Express.js.",
      "Integrated databases with Sequelize ORM, PostgreSQL, and MongoDB.",
      "Collaborated with senior developers on debugging and code optimization."
    ]
  }
];

function WorkPages() {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden py-12 px-6 mt-5">
      {/* Background Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/work.jpg"
        alt="Work Background"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white text-4xl font-bold mb-10"
      >
        Work & Experiences
      </motion.h1>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="border border-gray-600 bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-white font-bold text-2xl mb-4">{experience.title}</h2>
            <ul className="text-white space-y-2">
              {experience.details.map((detail, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <FaRegDotCircle className="text-blue-400 mr-3" /> {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <Certification/>
    </div>
  );
}

export default WorkPages;