
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [resumeType, setResumeType] = useState<'ai-ml' | 'data-analyst'>('ai-ml');
  
  const roles = [
    'AI/ML Engineer',
    'Data Analyst', 
    'Cognitive Computing Student'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote */}
        <div className="mb-12">
          <blockquote className="text-xl md:text-2xl text-gray-300 italic font-light">
            "Every data point tells a story, AI helps to write the next chapter."
          </blockquote>
        </div>

        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full gradient-border animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-bold text-white">AP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-6">
          <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Akankshya Panda
          </span>
        </h1>

        {/* Animated Roles */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <span className="text-2xl md:text-3xl text-gray-300 mr-4">I'm a</span>
          <span className="text-2xl md:text-3xl font-semibold text-neon-cyan typewriter min-w-[300px] text-left">
            {roles[currentRole]}
          </span>
        </div>

        {/* Resume Toggle */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative bg-gray-800 rounded-full p-1 flex">
              <button
                onClick={() => setResumeType('ai-ml')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  resumeType === 'ai-ml' 
                    ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-lg neon-glow' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                AI/ML Resume
              </button>
              <button
                onClick={() => setResumeType('data-analyst')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  resumeType === 'data-analyst' 
                    ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-lg neon-glow' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Data Analyst Resume
              </button>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 text-white font-semibold py-3 px-6 rounded-lg neon-glow transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download {resumeType === 'ai-ml' ? 'AI/ML' : 'Data Analyst'} Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
