
import React from 'react';
import { Code, Brain, MessageSquare, BarChart, Database, Settings, Cloud, TrendingUp, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "C++", "Java", "SQL"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      title: "AI/ML Tools",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      color: "from-neon-purple to-neon-blue"
    },
    {
      title: "Deep Learning",
      icon: Brain,
      skills: ["Neural Networks (CNNs, RNNs, LSTMs)", "Transfer Learning", "Autoencoders"],
      color: "from-neon-blue to-neon-cyan"
    },
    {
      title: "NLP Tools",
      icon: MessageSquare,
      skills: ["BERT", "SpaCy", "NLTK", "Hugging Face", "TextBlob"],
      color: "from-neon-cyan to-neon-green"
    },
    {
      title: "Data Analytics",
      icon: BarChart,
      skills: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib"],
      color: "from-neon-green to-neon-pink"
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      skills: ["MySQL", "PostgreSQL", "Google Cloud BigQuery", "AWS RDS", "Microsoft Azure"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: ["Jupyter Notebook", "Google Colab", "Git", "GitHub", "Docker", "VS Code", "Microsoft Azure"],
      color: "from-neon-purple to-neon-cyan"
    },
    {
      title: "Business Intelligence Tools",
      icon: TrendingUp,
      skills: ["Power BI", "Adobe Analytics"],
      color: "from-neon-cyan to-neon-blue"
    },
    {
      title: "Analytical & Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Critical Thinking", "Collaborative Debugging", "Time Management", "Team Collaboration"],
      color: "from-neon-blue to-neon-green"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-purple transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 neon-glow group cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-gray-800/80 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-neon-cyan hover:text-neon-cyan hover:bg-gray-700/80 transition-all duration-300 cursor-default"
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
