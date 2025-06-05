
import React from 'react';
import { Trophy, Globe, Award, Star } from 'lucide-react';

const SecretStash: React.FC = () => {
  const achievements = [
    {
      title: 'Finalist, TCS CodeVita Season 11',
      description: 'Ranked among top performers in AI problem-solving round',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-neon-pink to-neon-purple'
    },
    {
      title: 'Awards & Recognition',
      description: 'Received commendation for AI project in Smart Fault Detection System',
      icon: <Award className="w-6 h-6" />,
      color: 'from-neon-purple to-neon-blue'
    }
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Odia', level: 'Native' },
    { name: 'German', level: 'Basic' }
  ];

  return (
    <section id="secret-stash" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-playfair">
          <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
            Secret Stash
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-neon-purple/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center font-montserrat">
              <Trophy className="w-7 h-7 mr-3 text-neon-pink" />
              Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 rounded-lg p-6 border border-gray-600/30 hover:border-neon-purple/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} flex-shrink-0`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 font-montserrat">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-poppins">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-neon-cyan/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center font-montserrat">
              <Globe className="w-7 h-7 mr-3 text-neon-cyan" />
              Languages
            </h3>
            
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index} className="bg-gray-800/30 rounded-lg p-6 border border-gray-600/30 hover:border-neon-cyan/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-neon-green" />
                      <span className="text-white font-semibold font-montserrat text-lg">
                        {language.name}
                      </span>
                    </div>
                    <span className="text-gray-400 font-poppins">
                      {language.level}
                    </span>
                  </div>
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
