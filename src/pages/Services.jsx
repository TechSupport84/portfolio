import React from 'react';

function Services() {
  return (
    <div className="relative w-full min-h-screen bg-gray-1000 overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        src="/services.jpg"
        alt="Services Background"
      />

      {/* Overlay to enhance contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto py-12 px-4">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-white mb-10 animate-fadeIn">
          Career Objectives
        </h1>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col">
            <span className="mb-3 text-xl text-white animate-fadeIn">
              Innovation &amp; Problem-Solving
            </span>
            <div className="border border-gray-500 bg-gray-800 rounded-2xl p-6 flex justify-center items-center animate-slideUp hover:scale-105 transition-transform duration-500">
              <p className="text-orange-500 text-lg">
                To develop high-quality, efficient, and scalable software solutions that{' '}
                <span className="text-red-400">solve real-world problems</span>.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <span className="mb-3 text-xl text-white animate-fadeIn">
              Continuous Learning
            </span>
            <div className="border border-gray-500 bg-gray-800 rounded-2xl p-6 flex justify-center items-center animate-slideUp hover:scale-105 transition-transform duration-500">
              <p className="text-green-500 text-lg">
                To enhance my technical skills by{' '}
                <span className="text-red-500">exploring new technologies</span> and industry best practices.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <span className="mb-3 text-xl text-white animate-fadeIn">
              Impact &amp; Contribution
            </span>
            <div className="border border-gray-500 bg-gray-800 rounded-2xl p-6 flex justify-center items-center animate-slideUp hover:scale-105 transition-transform duration-500">
              <p className="text-yellow-700 text-lg">
                To contribute to open-source projects and{' '}
                <span className="text-green-500">mentor</span> aspiring developers in the tech community.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col">
            <span className="mb-3 text-xl text-white animate-fadeIn">
              Entrepreneurial Growth
            </span>
            <div className="border border-gray-500 bg-gray-800 rounded-2xl p-6 flex justify-center items-center animate-slideUp hover:scale-105 transition-transform duration-500">
              <p className="text-yellow-700 text-lg">
                To expand Jeancytech into a leading technology firm providing cutting-edge web and mobile solutions,{' '}
                <span className="text-green-700">driving innovation</span> and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
