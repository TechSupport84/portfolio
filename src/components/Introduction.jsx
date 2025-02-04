import React from 'react';

function Introduction() {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden mt-10">
      {/* Background Image */}
      <img 
        className="w-full h-full object-cover absolute top-0 left-0 opacity-30"
        src="/introduction-background.jpg" 
        alt="Introduction"
      />

      {/* Introduction Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-white text-3xl font-bold mb-4 animate-fadeIn">
          Introduction
        </h1>
        <div className="introduction-content border border-gray-500 bg-gray-800 rounded-2xl p-6 m-2 flex justify-center items-center animate-slideUp hover:scale-105 transition-transform duration-500">
          <span className="text-white text-lg">
            I am <span className="text-blue-400 font-bold">Jeancy Mpoyi</span>, a passionate software developer specializing in web and mobile applications.
            With expertise in <span className="text-yellow-400">React Native, JavaScript, and backend technologies</span> like Node.js and MySQL,
            I build efficient and scalable digital solutions. My goal is to create impactful software that enhances user experiences and solves real-world problems.
          </span>
        </div>

        {/* More Details Section */}
        <h1 className="text-white text-2xl font-bold mt-6 animate-fadeIn">
          More Detailed & Engaging
        </h1>
        <div className="more border border-gray-500 bg-gray-800 rounded-2xl p-6 m-2 flex justify-center items-center animate-slideUp hover:scale-105 transition-transform duration-500">
          <span className="text-white text-lg">
            As a dedicated software developer, I focus on creating <span className="text-green-400">high-performance applications</span> that drive innovation. My expertise spans frontend technologies like <span className="text-blue-400">React and React Native</span>, 
            as well as backend development with <span className="text-yellow-400">Node.js and MySQL</span>. Over the years, I have worked on diverse projects, from e-commerce platforms to social media applications, always aiming
            to deliver seamless user experiences. I am constantly exploring new technologies to improve my craft and contribute to the tech community.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
