import React from "react";
import { motion } from "framer-motion";

function Contacts() {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Contact Me
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold transition duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contacts;
