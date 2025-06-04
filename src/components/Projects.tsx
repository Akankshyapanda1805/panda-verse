
import React from 'react';
import { ExternalLink, Github, Calendar, User, Wrench } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Smart Fault Detection – Chennai Metro",
      role: "Generative AI Engineer",
      date: "Jan 2025",
      description: "Reduced fault detection time by 30%",
      tech: ["React", "Python", "Hive", "Tableau"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      title: "Digital Twin – Mercedes-Benz",
      role: "Simulation Engineer", 
      date: "Oct 2024",
      description: "Boosted predictive performance by 25%",
      tech: ["Blender", "ANSYS", "Python"],
      color: "from-neon-purple to-neon-blue"
    },
    {
      title: "E-Farming Web Hub",
      role: "Full Stack Developer",
      date: "Apr 2024", 
      description: "Delivered market & weather dashboards for farmers",
      tech: ["Tailwind", "React", "Node.js", "Tableau"],
      color: "from-neon-cyan to-neon-green"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-cyan transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 neon-glow group cursor-pointer"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-6`}></div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>

              <div className="flex items-center text-neon-purple text-sm mb-2">
                <User className="w-4 h-4 mr-2" />
                <span>{project.role}</span>
              </div>

              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{project.date}</span>
              </div>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-800 text-neon-cyan rounded text-xs border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex items-center text-gray-400 hover:text-neon-cyan transition-colors text-sm">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </button>
                <button className="flex items-center text-gray-400 hover:text-neon-purple transition-colors text-sm">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
