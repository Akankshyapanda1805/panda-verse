
import React from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Toniq Retail Brand Pvt. Ltd.",
      role: "Data Analytics Intern",
      location: "Remote",
      period: "Apr 2025 – Present",
      achievements: [
        "Cleaned and structured large datasets",
        "Built Power BI dashboards",
        "Identified retail trends & improved efficiency by 35%"
      ],
      color: "from-neon-pink to-neon-purple"
    },
    {
      company: "Microsoft AICTE Virtual Internship",
      role: "AI Intern", 
      location: "Remote",
      period: "Jun 2024 – Jul 2024",
      achievements: [
        "Developed analytics platform on Azure",
        "Built ETL pipelines",
        "Enhanced data processing by 40%"
      ],
      color: "from-neon-cyan to-neon-blue"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-cyan transition-all duration-300 transform hover:scale-105 neon-glow group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} mb-4`}>
                <Briefcase className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                {exp.role}
              </h3>
              
              <h4 className="text-lg text-neon-purple font-semibold mb-3">
                {exp.company}
              </h4>

              <div className="flex items-center text-gray-400 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="mr-4">{exp.location}</span>
                <Calendar className="w-4 h-4 mr-2" />
                <span>{exp.period}</span>
              </div>

              <div className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <TrendingUp className="w-4 h-4 text-neon-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
