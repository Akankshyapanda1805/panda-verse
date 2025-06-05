
import React from 'react';
import { Code, Brain, Search, BarChart3, Cloud, Wrench, TrendingUp, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'C', 'C++', 'Java', 'SQL'],
      color: 'from-neon-pink to-neon-purple'
    },
    {
      title: 'AI/ML Tools',
      icon: <Brain className="w-6 h-6" />,
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn'],
      color: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'Deep Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Neural Networks (CNNs, RNNs, LSTMs)', 'Transfer Learning', 'Autoencoders'],
      color: 'from-neon-blue to-neon-cyan'
    },
    {
      title: 'NLP Tools',
      icon: <Search className="w-6 h-6" />,
      skills: ['BERT', 'SpaCy', 'NLTK', 'Hugging Face', 'TextBlob'],
      color: 'from-neon-cyan to-neon-green'
    },
    {
      title: 'Data Analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib'],
      color: 'from-neon-green to-neon-pink'
    },
    {
      title: 'Cloud & Databases',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['MySQL', 'PostgreSQL', 'Google Cloud BigQuery', 'AWS RDS', 'Microsoft Azure'],
      color: 'from-neon-pink to-neon-purple'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Jupyter Notebook', 'Google Colab', 'Git', 'GitHub', 'Docker', 'VS Code', 'Microsoft Azure'],
      color: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'Business Intelligence Tools',
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ['Power BI', 'Adobe Analytics'],
      color: 'from-neon-blue to-neon-cyan'
    },
    {
      title: 'Analytical & Problem Solving',
      icon: <Users className="w-6 h-6" />,
      skills: ['Skills', 'Critical Thinking', 'Problem Solving', 'Time Management', 'Team Collaboration'],
      color: 'from-neon-cyan to-neon-green'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-playfair">
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-neon-purple/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white font-montserrat">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-gray-700/60 transition-colors duration-200 font-poppins"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
