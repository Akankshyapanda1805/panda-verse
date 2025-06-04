
import React from 'react';
import { Trophy, Globe, Star } from 'lucide-react';

const SecretStash: React.FC = () => {
  const achievements = [
    "TCS CodeVita Finalist",
    "Commended for Fault Detection AI System"
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Hindi", level: "Fluent" },
    { name: "Odia", level: "Native" },
    { name: "German", level: "Beginner" }
  ];

  return (
    <section id="secret-stash" className="py-20 px-4 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-pink to-neon-green bg-clip-text text-transparent">
            Secret Stash
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Achievements */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-neon-pink transition-all duration-300 neon-glow">
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple mr-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <Star className="w-5 h-5 text-neon-pink mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-neon-cyan transition-all duration-300 neon-glow">
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-green mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Languages</h3>
            </div>

            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300 font-medium">{language.name}</span>
                  <span className="text-neon-cyan text-sm px-3 py-1 bg-gray-800 rounded-full border border-gray-600">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretStash;
