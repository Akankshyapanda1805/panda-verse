
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: "SRM Institute of Science and Technology",
      location: "Chennai",
      degree: "Integrated B.Tech + M.Tech in Cognitive Computing",
      gpa: "9.56",
      period: "2022–2027",
      icon: GraduationCap,
      color: "from-neon-purple to-neon-blue"
    },
    {
      institution: "Kendriya Vidyalaya",
      location: "Dhenkanal",
      degree: "12th CBSE",
      gpa: "90.1%",
      period: "2021–2022",
      icon: Award,
      color: "from-neon-cyan to-neon-green"
    },
    {
      institution: "Kendriya Vidyalaya",
      location: "Dhenkanal", 
      degree: "10th CBSE",
      gpa: "Outstanding",
      period: "2019–2020",
      icon: Award,
      color: "from-neon-pink to-neon-purple"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-neon-pink via-neon-purple to-neon-cyan"></div>

          {educationData.map((edu, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan border-4 border-black z-10 animate-pulse-glow"></div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-purple transition-all duration-300 transform hover:scale-105 neon-glow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} mb-4`}>
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-neon-cyan font-semibold mb-1">{edu.location}</p>
                  <p className="text-gray-300 mb-2">{edu.degree}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neon-green font-semibold">GPA: {edu.gpa}</span>
                    <div className="flex items-center text-gray-400">
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
