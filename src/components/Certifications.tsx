
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: "Career Essentials in Data Analysis",
      provider: "Microsoft and LinkedIn",
      date: "July 2024",
      image: "https://i.ibb.co/WpK9ZJ6/image.png",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      name: "Virtual Internship",
      provider: "Microsoft and AICTE",
      date: "June 2024",
      image: "https://i.ibb.co/SZkYbQL/image.png",
      color: "from-neon-purple to-neon-pink"
    },
    {
      name: "Machine Learning Onramp",
      provider: "MATLAB",
      date: "April 2024",
      image: "https://i.ibb.co/mV5KqDW/image.png",
      color: "from-neon-green to-neon-blue"
    },
    {
      name: "Deep Learning Onramp",
      provider: "MATLAB",
      date: "April 2024",
      image: "https://i.ibb.co/LzBkD31/image.png",
      color: "from-neon-cyan to-neon-purple"
    },
    {
      name: "SRM HACKATHON 8.0",
      provider: "SRM University",
      date: "April 2024",
      image: "https://i.ibb.co/tM76kvM/image.png",
      color: "from-neon-pink to-neon-blue"
    },
    {
      name: "Computer Vision Essentials",
      provider: "Great Learning",
      date: "April 2024",
      image: "https://i.ibb.co/LzBkD31/image.png",
      color: "from-neon-blue to-neon-green"
    },
    {
      name: "Database Structure and Management with MySQL",
      provider: "Coursera",
      date: "March 2024",
      image: "https://i.ibb.co/DPV2TyV/image.png",
      color: "from-neon-purple to-neon-cyan"
    },
    {
      name: "LAYER'24 Blockchain Hackathon",
      provider: "Blockchain Community",
      date: "March 2024",
      image: "https://i.ibb.co/YFqMHJR/image.png",
      color: "from-neon-green to-neon-pink"
    },
    {
      name: "Machine Learning Foundations",
      provider: "AWS Academy",
      date: "February 2024",
      image: "https://i.ibb.co/150JbjP/image.png",
      color: "from-neon-cyan to-neon-blue"
    },
    {
      name: "Cognitive Analytics and its Application",
      provider: "Academic Institution",
      date: "September 2023",
      image: "https://i.ibb.co/3HJTNjD/image.png",
      color: "from-neon-pink to-neon-purple"
    },
    {
      name: "Data Analytics with Python",
      provider: "MyCaption Academy",
      date: "March 2023",
      image: "https://i.ibb.co/PGbQ3k1/image.png",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      name: "CAD 2.0 Hackathon",
      provider: "CAD Community",
      date: "March 2023",
      image: "https://i.ibb.co/20cn4FQ/image.png",
      color: "from-neon-purple to-neon-green"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-green transition-all duration-500 transform hover:scale-105 hover:rotate-1 neon-glow group cursor-pointer"
            >
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className={`w-full h-48 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center hidden`}>
                  <Award className="w-16 h-16 text-white" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-green transition-colors leading-tight">
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
