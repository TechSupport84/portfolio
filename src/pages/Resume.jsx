import React from "react";
import { FaDownload } from "react-icons/fa";

function ResumeSection() {
  return (
    <div className="flex justify-center items-center h-20 bg-gray-900 text-white">
      <div className="border border-gray-700 rounded-lg p-4 flex items-center space-x-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
        
        {/* Open Resume */}
        <a
          href="/jeancyResume.pdf" // Ensure this file is inside the `public` folder
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold hover:text-blue-400 transition duration-300"
        >
          CV / Resume
        </a>

        {/* Download Resume Button */}
        <a
          href="/jeancyResume.pdf" // Ensure this file is inside `public`
          download="Jeancy_Mpoyi_Resume.pdf"
          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition duration-300"
        >
          <FaDownload className="mr-2" />
          Download
        </a>
      </div>
    </div>
  );
}

export default ResumeSection;
