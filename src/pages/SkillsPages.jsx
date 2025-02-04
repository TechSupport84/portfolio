import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaTools } from 'react-icons/fa';

function SkillsPages() {
  return (
    <div className="relative w-full min-h-screen bg-gray-1000 overflow-hidden mt-5">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="/skills.jpg"
        alt="Skills Background"
      />
      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto py-12 px-4">
        <h1 className="text-center text-4xl font-bold text-white mb-12 animate-fadeIn">
          Skills Section
        </h1>

        {/* Technical Skills Header */}
        <div className="mb-12">
          <h2 className="text-center text-3xl font-bold text-white mb-6 animate-fadeIn">
            Technical Skills
          </h2>

          {/* FrontEnd Development Section */}
          <div className="mb-12">
            <h3 className="text-2xl text-white font-semibold mb-4 animate-fadeIn">
              FrontEnd Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* React */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <FaReact className="text-blue-400 text-5xl mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">React</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
                {/* React */}
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <FaReact className="text-blue-400 text-5xl mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">React-Native</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              {/* HTML5 */}
              
                {/* Express & MongoDB cards could be added here with similar structure */}
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/TailwindCSS.svg" alt="Tailwind CSS" className="w-16 h-16 mb-4 text-white " />
                <h4 className="text-white text-xl font-bold mb-2">Tailwind CSS</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <FaHtml5 className="text-orange-500 text-5xl mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">HTML5</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              {/* CSS3 */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <FaCss3Alt className="text-blue-500 text-5xl mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">CSS3</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* BackEnd Development Section */}
          <div className="mb-12">
            <h3 className="text-2xl text-white font-semibold mb-4 animate-fadeIn">
              BackEnd Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Node.js */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <FaNodeJs className="text-green-500 text-5xl mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">Node.js</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              {/* Express & MongoDB cards could be added here with similar structure */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/Express.svg" alt="Express" className="w-16 h-16 mb-4 text-white " />
                <h4 className="text-white text-xl font-bold mb-2">Express</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>


              
              {/*  & Mysql cards could be added here with similar structure */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/MySQL.svg" alt="Msyql" className="w-16 h-16 mb-4 text-white " />
                <h4 className="text-white text-xl font-bold mb-2">Mysql</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              {/*  & Sqlcards could be added here with similar structure */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/SQLite.svg" alt="SQlite" className="w-16 h-16 mb-4 text-white " />
                <h4 className="text-white text-xl font-bold mb-2">SQLite</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/mongodb.svg" alt="MongoDB" className="w-16 h-16 mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">MongoDB</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Technologies Section */}
          <div className="mb-12">
            <h3 className="text-2xl text-white font-semibold mb-4 animate-fadeIn">
              Tools &amp; Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Git */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <FaTools className="text-purple-500 text-5xl mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">Git</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

             {/* APi*/}
             <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/api.png" alt="Api" className="w-16 h-16 mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">API </h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              {/* Docker */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/docker.png" alt="Docker" className="w-16 h-16 mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">Docker</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              {/* Webpack */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/Webpack.svg" alt="Webpack" className="w-16 h-16 mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">Webpack</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/Heroku.svg" alt="Heroku" className="w-16 h-16 mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">Heroku </h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gray-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              {/* VS Code */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slideUp">
                <img src="/visualcode.svg" alt="VS Code" className="w-16 h-16 mb-4" />
                <h4 className="text-white text-xl font-bold mb-2">VS Code</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPages;
