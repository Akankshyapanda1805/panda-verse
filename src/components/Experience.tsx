
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Analytics Intern',
      company: 'Toniq Retail Brand Pvt. Ltd.',
      location: 'Remote',
      period: 'Apr 2025 – Present',
      description: [
        'Cleaned and structured large datasets',
        'Built Power BI dashboards',
        'Identified retail trends & improved efficiency by 35%'
      ],
      color: 'from-neon-pink to-neon-purple'
    },
    {
      title: 'AI Intern',
      company: 'Microsoft AICTE Virtual Internship',
      location: 'Remote',
      period: 'Jun 2024 – Jul 2024',
      description: [
        'Developed analytics platform on Azure',
        'Built ETL pipelines',
        'Enhanced data processing by 40%'
      ],
      color: 'from-neon-blue to-neon-cyan'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-playfair">
          <span className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-blue bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-neon-cyan/50 transition-all duration-300 group h-full"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} mr-3`}>
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neon-pink font-montserrat">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <h4 className="text-lg text-neon-cyan font-semibold mb-2 font-montserrat">
                    {exp.company}
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4 font-poppins">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  {exp.description.map((desc, descIndex) => (
                    <div key={descIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed font-poppins">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
