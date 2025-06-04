
import React from 'react';
import { ExternalLink, Github, Calendar, User, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SMART FAULT DETECTION SYSTEM CHENNAI CENTRAL METRO STATION",
      role: "Generative AI Engineer",
      date: "January 2025",
      description: "Built AI-driven system with big data (Hadoop, Hive) and Tableau dashboards. Cut fault detection time by 30%, boosting efficiency and safety.",
      details: "Addressed limitations in traditional metro fault detection methods",
      tech: ["CSS", "JavaScript", "React", "Node.js", "Python", "Hadoop (Hive)", "Tableau"],
      color: "from-neon-pink to-neon-purple",
      isNDA: true
    },
    {
      title: "Digital Twin – Mercedes-Benz",
      role: "Simulation Engineer", 
      date: "October 2024",
      description: "Created ML-based digital twin for performance simulation. Improved efficiency by 25% through data-driven optimization.",
      details: "Needed predictive analytics for automotive operations",
      tech: ["Blender", "Unreal Engine", "ANSYS", "Python"],
      color: "from-neon-purple to-neon-blue",
      isNDA: true
    },
    {
      title: "DermaScan: Skin-Disease-Detection",
      role: "AI/ML Engineer",
      date: "April 2025", 
      description: "Built AI web app for skin disease detection using CNN. Achieved ~89% accuracy in classification and enabled early diagnosis through real-time predictions.",
      details: "Integrated Flask backend with user-friendly image upload UI",
      tech: ["Python", "Flask", "TensorFlow/Keras", "HTML", "CSS", "JavaScript", "SQLite"],
      color: "from-neon-cyan to-neon-green",
      githubLink: "https://github.com/Akankshyapanda1805"
    },
    {
      title: "E-Farming Web Hub",
      role: "Full Stack Developer",
      date: "April 2024", 
      description: "Built agri-analytics platform for crop and market trend insights. Deployed dashboards on pricing, weather, and yield predictions.",
      details: "Identified lack of data tools for farmers",
      tech: ["Tailwind CSS", "JavaScript", "React", "Node.js", "Tomcat", "Netbeans"],
      color: "from-neon-green to-neon-pink",
      githubLink: "https://github.com/Akankshyapanda1805"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-cyan transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 neon-glow group cursor-pointer"
            >
              <div className={`w-full h-3 rounded-full bg-gradient-to-r ${project.color} mb-6`}></div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors leading-tight">
                {project.title}
              </h3>

              <div className="flex items-center text-neon-purple text-sm mb-2">
                <User className="w-4 h-4 mr-2" />
                <span className="font-medium">{project.role}</span>
              </div>

              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Completed on {project.date}</span>
              </div>

              <p className="text-gray-300 mb-3 leading-relaxed">{project.description}</p>
              
              <p className="text-gray-400 mb-4 text-sm italic">{project.details}</p>

              <div className="mb-6">
                <h4 className="text-neon-cyan text-sm font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-800 text-neon-cyan rounded text-xs border border-gray-600 hover:border-neon-cyan transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.isNDA && (
                <div className="flex items-center text-orange-400 text-sm mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="italic">Project details restricted under a non-disclosure agreement.</span>
                </div>
              )}

              <div className="flex gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub Link
                  </a>
                )}
                {!project.githubLink && !project.isNDA && (
                  <button className="flex items-center text-gray-400 hover:text-neon-purple transition-colors text-sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
