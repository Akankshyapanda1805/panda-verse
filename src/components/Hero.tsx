
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [resumeType, setResumeType] = useState<'ai-ml' | 'data-analyst'>('ai-ml');
  
  const roles = [
    'AI/ML Engineer',
    'Data Analyst', 
    'Cognitive Computing Student'
  ];

  // Typing effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let currentIndex = 0;
    
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex <= currentText.length) {
          setDisplayedText(currentText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          
          // Wait before starting to delete
          setTimeout(() => {
            setIsTyping(false);
            // Start deleting after 2 seconds
            setTimeout(() => {
              let deleteIndex = currentText.length;
              const deleteInterval = setInterval(() => {
                if (deleteIndex >= 0) {
                  setDisplayedText(currentText.slice(0, deleteIndex));
                  deleteIndex--;
                } else {
                  clearInterval(deleteInterval);
                  setCurrentRole((prev) => (prev + 1) % roles.length);
                  setIsTyping(true);
                }
              }, 50);
            }, 1500);
          }, 100);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentRole, isTyping, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      {/* Quote Section - Full Screen */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote - Prominently displayed */}
          <div className="mb-16">
            <blockquote className="text-2xl md:text-4xl lg:text-5xl text-gray-200 italic font-light leading-relaxed">
              <span className="text-neon-cyan">"</span>
              Every data point tells a story, 
              <br />
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent font-semibold">
                AI helps to write the next chapter.
              </span>
              <span className="text-neon-cyan">"</span>
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

          {/* Animated Roles with Typing Effect */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <span className="text-2xl md:text-3xl text-gray-300 mr-4">I'm a</span>
            <div className="text-2xl md:text-3xl font-semibold text-neon-cyan min-w-[350px] text-left relative">
              {displayedText}
              <span className="inline-block w-0.5 h-8 bg-neon-cyan ml-1 animate-blink"></span>
            </div>
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
      </div>
    </section>
  );
};

export default Hero;
