import React from 'react'
import "../styles/About.css"
function About() {
  return (
    <div className='mb-10 mt-5'> 
        <h1 className=' text-white text-center font-size:16 font-bold mb-3 '> About </h1>
      <div className=" border border-gray-500 bg-gray-800 rounded-2xl p-6 m-2 flex justify-center items-center animate-slideUp hover:scale-105 transition-transform duration-500">
        <span className='text-white '>
        "I am Jeancy Mpoyi, a passionate software developer specializing in web and mobile application development. With expertise in React Native, JavaScript, Node.js,
and MySQL, I create innovative and scalable solutions 
that enhance user experiences. My journey in technology 
began with a strong interest in problem-solving, which
led me to build applications that make everyday tasks more efficient. I am committed to continuous learning and 

staying up to date with the latest advancements in software development."
        </span>
      </div>
    </div>
  )
}

export default About
