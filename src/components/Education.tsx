
import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, Tamil Nadu",
      degree: "Bachelor of Technology + Master of Technology (Integrated)",
      specialization: "Computer Science and Technology, Specialization in Cognitive Computing",
      coursework: "Data Analysis, Software Engineering, Operating Systems, Data Structure and Algorithms, Artificial Intelligence, Machine Learning, Natural Language Processing, Computer Networks, Object Oriented Programming, Database Management Systems",
      gpa: "9.56",
      period: "Expected May 2027",
      icon: GraduationCap,
      color: "from-neon-purple to-neon-blue"
    },
    {
      institution: "Kendriya Vidyalaya",
      location: "Dhenkanal, Odisha",
      degree: "Higher Secondary Education - Central Board of Secondary Education",
      coursework: "Physics, Chemistry, Mathematics, Computer Science",
      gpa: "90.1%",
      period: "July 2021 - July 2022",
      icon: Award,
      color: "from-neon-cyan to-neon-green"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
          <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="relative">
          {/* Timeline Line - Fixed on Left */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-pink via-neon-purple to-neon-cyan opacity-60"></div>

          {educationData.map((edu, index) => (
            <div key={index} className="relative flex items-start mb-16">
              {/* Timeline Dot - Left Side */}
              <div className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan border-4 border-black z-10 animate-pulse-glow shadow-lg shadow-neon-purple/50"></div>

              {/* Content Card - Right Side */}
              <div className="ml-20 w-full">
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-purple transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 neon-glow group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} mb-6 shadow-lg`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors font-playfair">
                    {edu.institution}
                  </h3>
                  <p className="text-neon-cyan font-semibold mb-3 text-lg font-montserrat">{edu.location}</p>
                  <p className="text-gray-200 mb-2 font-medium font-montserrat">{edu.degree}</p>
                  
                  {edu.specialization && (
                    <p className="text-gray-300 mb-3 italic font-montserrat">{edu.specialization}</p>
                  )}
                  
                  <div className="flex items-start mb-4">
                    <BookOpen className="w-4 h-4 text-neon-green mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-400 text-sm leading-relaxed font-montserrat">
                      <span className="font-medium text-gray-300">Relevant Coursework: </span>
                      {edu.coursework}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neon-green font-bold text-lg font-montserrat">CGPA: {edu.gpa}</span>
                    <div className="flex items-center text-gray-400 font-montserrat">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
