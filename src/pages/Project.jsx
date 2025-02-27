import React from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Project() {
  // Sample projects array
  const projects = [
    { id: 1, category: "Web",git:"https://github.com/TechSupport84/serfinweb", name: "www.serfinrecycle.com", url: "https://serfinweb.netlify.app" },
    { id: 2, category: "Mobile",git:"https://github.com/TechSupport84/serfinweb", name: "Serfin", url: "Serfin" },
    { id: 3, category: "Web",git:"https://github.com/TechSupport84/dictionary", name: "www.w-language.com", url: "https://w-language.netlify.app" },
    { id: 4, category: "Web",git:"https://github.com/TechSupport84/jeancy24surBackend", name: "www.Jeancy24sur.com", url: "https://jeancy24sur.com" },
    { id: 5, category: "Mobile",git:"https://github.com/TechSupport84/serfinweb", name: "@24hts Medical", url: "Midical App" },
  ];

  // Group projects by category
  const categories = [...new Set(projects.map((project) => project.category))];

  return (
    <div className="relative w-full min-h-screen bg-gray-1000 overflow-hidden mt-5">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="/project.jpg"
        alt="Projects Background"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto py-12 px-4">
        {/* Header */}
        <h1 className="text-center text-white font-bold text-4xl mb-12 animate-fadeIn">
          Projects
        </h1>

        {/* Display Projects by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl text-white font-bold mb-4">{category} Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp"
                  >
                    <span className="text-xl text-white font-semibold">{project.name}</span>
                    {project.url && (
                      <p className="text-white mt-2 text-center">
                        Built:{' '}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          {project.url}
                        </a>
                      </p>
                    )}
                    <div className="flex flex-row justify-between items-center w-full mt-4">
                      <Link to={project.git} className="text-white hover:text-blue-400">
                        <FaGithub size={24} />
                      </Link>
                      <Link to={project.git} className="text-white hover:text-blue-400">
                      <FaCode size={24} className="text-white hover:text-gray-600" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;