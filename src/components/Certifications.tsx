import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: "Career Essentials in Data Analysis",
      provider: "Microsoft and LinkedIn",
      date: "July 2024",
      image: "https://drive.google.com/uc?export=view&id=1MA1xSCXTWT7uKtBLtTmAvYSzv1PSzHid",
      link: "https://drive.google.com/file/d/1MA1xSCXTWT7uKtBLtTmAvYSzv1PSzHid/view?usp=sharing",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      name: "Virtual Internship",
      provider: "Microsoft and AICTE",
      date: "June 2024",
      image: "https://drive.google.com/uc?export=view&id=1sc3KO-FSiSMFsaYgxtFm2EjuO7CGUXwf",
      link: "https://drive.google.com/file/d/1sc3KO-FSiSMFsaYgxtFm2EjuO7CGUXwf/view?usp=sharing",
      color: "from-neon-purple to-neon-pink"
    },
    {
      name: "Machine Learning Onramp",
      provider: "MATLAB",
      date: "April 2024",
      image: "https://drive.google.com/uc?export=view&id=1YHr7IUvJ4au-uIjhKp3gHiCAUeoODia9",
      link: "https://drive.google.com/file/d/1YHr7IUvJ4au-uIjhKp3gHiCAUeoODia9/view?usp=sharing",
      color: "from-neon-green to-neon-blue"
    },
    {
      name: "Deep Learning Onramp",
      provider: "MATLAB",
      date: "April 2024",
      image: "https://drive.google.com/uc?export=view&id=1QxKKZdB1MOC8kpzTD8o3l3JhshvWSq-q",
      link: "https://drive.google.com/file/d/1QxKKZdB1MOC8kpzTD8o3l3JhshvWSq-q/view?usp=sharing",
      color: "from-neon-cyan to-neon-purple"
    },
    {
      name: "SRM HACKATHON 8.0",
      provider: "SRM University",
      date: "April 2024",
      image: "https://drive.google.com/uc?export=view&id=1jjW8LkRIA1n11Ubj-GIVN-iX_QfoO7HO",
      link: "https://drive.google.com/file/d/1jjW8LkRIA1n11Ubj-GIVN-iX_QfoO7HO/view?usp=sharing",
      color: "from-neon-pink to-neon-blue"
    },
    {
      name: "Computer Vision Essentials",
      provider: "Great Learning",
      date: "April 2024",
      image: "https://drive.google.com/uc?export=view&id=1LRUDrD4pmfGSVJaETVy6p89mXgZU4Z-R",
      link: "https://drive.google.com/file/d/1LRUDrD4pmfGSVJaETVy6p89mXgZU4Z-R/view?usp=sharing",
      color: "from-neon-blue to-neon-green"
    },
    {
      name: "Database Structure and Management with MySQL",
      provider: "Coursera",
      date: "March 2024",
      image: "https://drive.google.com/uc?export=view&id=1PEGc0pzs684x0qzPSfINWtoFYry7LtfC",
      link: "https://drive.google.com/file/d/1PEGc0pzs684x0qzPSfINWtoFYry7LtfC/view?usp=sharing",
      color: "from-neon-purple to-neon-cyan"
    },
    {
      name: "LAYER'24 Blockchain Hackathon",
      provider: "Blockchain Community",
      date: "March 2024",
      image: "https://drive.google.com/uc?export=view&id=1RDakDP27h9biQF-FvgMVB4JffpR27myj",
      link: "https://drive.google.com/file/d/1RDakDP27h9biQF-FvgMVB4JffpR27myj/view?usp=sharing",
      color: "from-neon-green to-neon-pink"
    },
    {
      name: "Machine Learning Foundations",
      provider: "AWS Academy",
      date: "February 2024",
      image: "https://drive.google.com/uc?export=view&id=1YGs_bDXQRLCVyJtxbTV7N663hvHB3hD0",
      link: "https://drive.google.com/file/d/1YGs_bDXQRLCVyJtxbTV7N663hvHB3hD0/view?usp=sharing",
      color: "from-neon-cyan to-neon-blue"
    },
    {
      name: "Cognitive Analytics and its Application",
      provider: "Academic Institution",
      date: "September 2023",
      image: "https://drive.google.com/uc?export=view&id=1XOEsJwr45n5hGOh9PzMdDdliD4JussSc",
      link: "https://drive.google.com/file/d/1XOEsJwr45n5hGOh9PzMdDdliD4JussSc/view?usp=sharing",
      color: "from-neon-pink to-neon-purple"
    },
    {
      name: "Data Analytics with Python",
      provider: "MyCaption Academy",
      date: "March 2023",
      image: "https://drive.google.com/uc?export=view&id=1xkyAHiIYNGWaZvMzVobUy0oXHsqYXnfG",
      link: "https://drive.google.com/file/d/1xkyAHiIYNGWaZvMzVobUy0oXHsqYXnfG/view?usp=sharing",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      name: "CAD 2.0 Hackathon",
      provider: "CAD Community",
      date: "March 2023",
      image: "https://drive.google.com/uc?export=view&id=16vQi9e8yJ8F6odqnEicuto9WfWRkoMHF",
      link: "https://drive.google.com/file/d/16vQi9e8yJ8F6odqnEicuto9WfWRkoMHF/view?usp=sharing",
      color: "from-neon-purple to-neon-green"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
          <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-green transition-all duration-500 transform hover:scale-105 hover:rotate-1 neon-glow group cursor-pointer"
            >
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500 bg-white"
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-green transition-colors leading-tight font-playfair">
                {cert.name}
              </h3>

              <p className="text-neon-cyan font-semibold mb-3 font-montserrat">{cert.provider}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-400 text-sm font-montserrat">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-neon-green transition-colors text-sm font-montserrat"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
