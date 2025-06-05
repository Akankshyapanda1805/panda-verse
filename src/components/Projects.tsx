
import React from 'react';
import { ExternalLink, Github, Calendar, User, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SMART FAULT DETECTION SYSTEM CHENNAI CENTRAL METRO STATION",
      role: "Generative AI Engineer",
      date: "January 2025",
      description: "Built AI-driven system with big data (Hadoop, Hive) and Tableau dashboards. Cut fault detection time by 30%, boosting efficiency and safety.",
      bulletPoints: [
        "Addressed limitations in traditional metro fault detection methods",
        "Built AI-driven system with big data (Hadoop, Hive) and Tableau dashboards",
        "Cut fault detection time by 30%, boosting efficiency and safety"
      ],
      tech: ["CSS", "JavaScript", "React", "Node.js", "Python", "Hadoop (Hive)", "Tableau"],
      color: "from-neon-pink to-neon-purple",
      isNDA: true
    },
    {
      title: "Digital Twin – Mercedes-Benz",
      role: "Simulation Engineer", 
      date: "October 2024",
      description: "Created ML-based digital twin for performance simulation. Improved efficiency by 25% through data-driven optimization.",
      bulletPoints: [
        "Needed predictive analytics for automotive operations",
        "Created ML-based digital twin for performance simulation",
        "Improved efficiency by 25% through data-driven optimization"
      ],
      tech: ["Blender", "Unreal Engine", "ANSYS", "Python"],
      color: "from-neon-purple to-neon-blue",
      isNDA: true
    },
    {
      title: "DermaScan: Skin-Disease-Detection",
      role: "AI/ML Engineer",
      date: "April 2025", 
      description: "Built AI web app for skin disease detection using CNN. Achieved ~89% accuracy in classification and enabled early diagnosis through real-time predictions.",
      bulletPoints: [
        "Built AI web app for skin disease detection using CNN",
        "Integrated Flask backend with user-friendly image upload UI",
        "Achieved ~89% accuracy in classification",
        "Enabled early diagnosis through real-time predictions"
      ],
      tech: ["Python", "Flask", "TensorFlow/Keras", "HTML", "CSS", "JavaScript", "SQLite"],
      color: "from-neon-cyan to-neon-green",
      githubLink: "https://github.com/Akankshyapanda1805"
    },
    {
      title: "E-Farming Web Hub",
      role: "Full Stack Developer",
      date: "April 2024", 
      description: "Built agri-analytics platform for crop and market trend insights. Deployed dashboards on pricing, weather, and yield predictions.",
      bulletPoints: [
        "Built agri-analytics platform for crop and market trend insights",
        "Identified lack of data tools for farmers",
        "Deployed dashboards on pricing, weather, and yield predictions"
      ],
      tech: ["Tailwind CSS", "JavaScript", "React", "Node.js", "Tomcat", "Netbeans"],
      color: "from-neon-green to-neon-pink",
      githubLink: "https://github.com/Akankshyapanda1805"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
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

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors leading-tight font-playfair">
                {project.title}
              </h3>

              <div className="flex items-center text-neon-purple text-sm mb-2 font-montserrat">
                <User className="w-4 h-4 mr-2" />
                <span className="font-medium">{project.role}</span>
              </div>

              <div className="flex items-center text-gray-400 text-sm mb-4 font-montserrat">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Completed on {project.date}</span>
              </div>

              <div className="mb-4">
                <ul className="space-y-2">
                  {project.bulletPoints.map((point, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start font-montserrat">
                      <span className="text-neon-cyan mr-2 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-neon-cyan text-sm font-semibold mb-2 font-montserrat">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-800 text-neon-cyan rounded text-xs border border-gray-600 hover:border-neon-cyan transition-colors font-montserrat"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.isNDA && (
                <div className="flex items-center text-orange-400 text-sm mb-4 font-montserrat">
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
                    className="flex items-center text-gray-400 hover:text-neon-cyan transition-colors text-sm font-montserrat"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub Link
                  </a>
                )}
                {!project.githubLink && !project.isNDA && (
                  <button className="flex items-center text-gray-400 hover:text-neon-purple transition-colors text-sm font-montserrat">
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
