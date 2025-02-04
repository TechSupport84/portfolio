import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const serviceId = "jeancy"; // Replace with your EmailJS service ID
    const templateId = "jeancyt"; // Replace with your EmailJS template ID
    const publicKey = "Py1B659gjhJ-UTk9J"; // Replace with your EmailJS public key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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

        {success && <p className="text-green-400 text-center mb-4">Message sent successfully!</p>}
        {error && <p className="text-red-400 text-center mb-4">Failed to send message. Try again.</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-white"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contacts;
