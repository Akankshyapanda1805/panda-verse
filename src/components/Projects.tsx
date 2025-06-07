import React from 'react';
import { ExternalLink, Github, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SMART FAULT DETECTION SYSTEM',
      subtitle: 'CHENNAI CENTRAL METRO STATION',
      role: 'Generative AI Engineer',
      date: 'January 2025',
      technologies: ['CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Hadoop (Hive)', 'Tableau'],
      description: [
        'Addressed limitations in traditional metro fault detection methods',
        'Built AI-driven system with big data (Hadoop, Hive) and Tableau dashboards',
        'Cut fault detection time by 30%, boosting efficiency and safety'
      ],
      note: 'Project details restricted under a non-disclosure agreement.',
      githubLink: null,
      color: 'from-neon-pink to-neon-purple'
    },
    {
      title: 'DIGITAL TWIN',
      subtitle: 'MERCEDES-BENZ',
      role: 'Simulation Engineer',
      date: 'October 2024',
      technologies: ['Blender', 'Unreal Engine', 'ANSYS', 'Python'],
      description: [
        'Needed predictive analytics for automotive operations',
        'Created ML-based digital twin for performance simulation',
        'Improved efficiency by 25% through data-driven optimization'
      ],
      note: 'Project details restricted under a non-disclosure agreement.',
      githubLink: null,
      color: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'DermaScan: Skin-Disease-Detection',
      subtitle: '',
      role: 'AI/ML Engineer',
      date: 'April 2025',
      technologies: ['Python', 'Flask', 'TensorFlow/Keras', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
      description: [
        'Built AI web app for skin disease detection using CNN',
        'Integrated Flask backend with user-friendly image upload UI',
        'Achieved ~89% accuracy in classification',
        'Enabled early diagnosis through real-time predictions'
      ],
      note: null,
      githubLink: 'https://github.com/Akankshyapanda1805',
      color: 'from-neon-blue to-neon-cyan'
    },
    {
      title: 'E-Farming Web Hub',
      subtitle: '',
      role: 'Full Stack Dev',
      date: 'April 2024',
      technologies: ['Tailwind CSS', 'JavaScript', 'React', 'Node.js', 'Tomcat', 'Netbeans'],
      description: [
        'Built agri-analytics platform for crop and market trend insights',
        'Identified lack of data tools for farmers',
        'Deployed dashboards on pricing, weather, and yield predictions'
      ],
      note: null,
      githubLink: 'https://github.com/Akankshyapanda1805',
      color: 'from-neon-cyan to-neon-green'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-playfair">
          <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-neon-cyan/50 transition-all duration-300 group hover:transform hover:scale-105 h-full flex flex-col"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neon-cyan mb-2 font-montserrat">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <h4 className="text-lg text-neon-purple font-semibold mb-3 font-montserrat">
                    {project.subtitle}
                  </h4>
                )}
                
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4 mb-4 font-poppins">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {project.role}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full text-xs font-poppins"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 mb-6">
                <div className="space-y-3">
                  {project.description.map((desc, descIndex) => (
                    <div key={descIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed font-poppins text-sm">{desc}</p>
                    </div>
                  ))}
                </div>

                {project.note && (
                  <p className="text-gray-400 text-sm mt-4 italic font-poppins">
                    Note: {project.note}
                  </p>
                )}
              </div>

              {/* Footer */}
              {project.githubLink && (
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
