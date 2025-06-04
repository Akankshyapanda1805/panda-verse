
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: "Career Essentials in Data Analysis",
      provider: "Microsoft",
      date: "Jul 2024",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      name: "Computer Vision",
      provider: "Great Learning",
      date: "Mar 2024", 
      color: "from-neon-purple to-neon-pink"
    },
    {
      name: "ML Foundations",
      provider: "AWS",
      date: "Feb 2024",
      color: "from-neon-green to-neon-blue"
    },
    {
      name: "MySQL",
      provider: "Coursera",
      date: "Mar 2024",
      color: "from-neon-cyan to-neon-purple"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-green transition-all duration-300 transform hover:scale-105 hover:rotate-1 neon-glow group cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} mb-4`}>
                <Award className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                {cert.name}
              </h3>

              <p className="text-neon-cyan font-semibold mb-3">{cert.provider}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
                
                <button className="flex items-center text-gray-400 hover:text-neon-green transition-colors text-sm">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
