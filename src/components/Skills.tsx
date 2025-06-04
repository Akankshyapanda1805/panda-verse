
import React from 'react';
import { Code, Brain, MessageSquare, BarChart, Database, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C++", "Java", "SQL"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      title: "AI/ML Tools",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      color: "from-neon-purple to-neon-blue"
    },
    {
      title: "NLP Tools",
      icon: MessageSquare,
      skills: ["BERT", "SpaCy", "NLTK", "Hugging Face", "TextBlob"],
      color: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Data Analytics",
      icon: BarChart,
      skills: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib"],
      color: "from-neon-cyan to-neon-green"
    },
    {
      title: "Cloud & DB",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Google BigQuery", "AWS RDS", "Microsoft Azure"],
      color: "from-neon-green to-neon-pink"
    },
    {
      title: "Developer Tools",
      icon: Settings,
      skills: ["GitHub", "Docker", "Jupyter", "VS Code", "Google Colab"],
      color: "from-neon-purple to-neon-cyan"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-neon-purple transition-all duration-300 transform hover:scale-105 neon-glow group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 cursor-default"
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
