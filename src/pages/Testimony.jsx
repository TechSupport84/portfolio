import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Testimony() {
  const witnesses = [
    {
      id: 1,
      pic: "/profile.png",
      name: "Christoph  Ntundu",
      testimony:
        "Jeancy is an exceptional developer! He delivered a high-quality mobile app on time and exceeded our expectations.",
    },
    {
      id: 2,
      pic: "/profile.png",
      name: "Guelord Padu",
      testimony:
        "Working with Jeancy was a great experience. His expertise in React Native and backend development helped us launch our product seamlessly.",
    },
    {
      id: 3,
      pic: "/profile.png",
      name: "KAba",
      testimony:
        "I was impressed by Jeancy’s problem-solving skills and his ability to optimize our web application for better performance.",
    },
  ];

  return (
    <div className="bg-gray-800 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Testimonials</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {witnesses.map((witness) => (
          <motion.div
            key={witness.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: witness.id * 0.2 }}
            className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-sm flex flex-col items-center text-center"
          >
            <img
              src={witness.pic}
              alt={witness.name}
              className="w-20 h-20 rounded-full mb-4 border-2 border-blue-500"
            />
            <h3 className="text-xl font-semibold text-green-500">{witness.name}</h3>
            <p className="text-gray-200 mt-2 flex items-center">
              <FaQuoteLeft className="text-blue-400 mr-2" />
              {witness.testimony}
              <FaQuoteRight className="text-blue-400 ml-2" />
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimony;
