
import React, { useState, useEffect } from 'react';
import { Download, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeType, setResumeType] = useState<'ai-ml' | 'data-analyst'>('ai-ml');
  const [showQuote, setShowQuote] = useState(true);
  const [quoteText, setQuoteText] = useState('');
  const [showBinaryTransition, setShowBinaryTransition] = useState(false);
  
  const roles = [
    'AI/ML Engineer',
    'Data Analyst', 
    'Cognitive Computing Student'
  ];

  const fullQuote = "Every data point tells a story, AI helps to write the next chapter.";

  // Quote typing effect
  useEffect(() => {
    if (showQuote) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullQuote.length) {
          setQuoteText(fullQuote.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 80);
      return () => clearInterval(timer);
    }
  }, [showQuote]);

  // Enhanced typing effect for roles
  useEffect(() => {
    const typeSpeed = 120;
    const deleteSpeed = 80;
    const pauseTime = 2000;

    const currentText = roles[currentRole];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole, roles]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        if (showQuote) {
          setShowBinaryTransition(true);
          setTimeout(() => {
            setShowQuote(false);
            setShowBinaryTransition(false);
          }, 1000);
        }
      } else {
        setShowQuote(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showQuote]);

  return (
    <>
      {/* Quote Section - Full Screen */}
      <section 
        id="quote" 
        className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
          showQuote ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${showBinaryTransition ? 'binary-transition' : ''}`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 5 }}
      >
        <div className="text-center max-w-5xl mx-auto">
          <blockquote className="text-4xl md:text-6xl lg:text-7xl leading-relaxed font-playfair">
            <div className="mb-8">
              <span className="text-gray-100">Every data point tells a story,</span>
            </div>
            <div>
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent font-medium">
                AI helps to write the next chapter.
              </span>
            </div>
          </blockquote>
          
          {/* Binary numbers falling effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute text-neon-cyan opacity-20 font-mono animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center px-4 pt-16 relative"
        style={{ marginTop: '100vh' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Picture - Left Side */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl gradient-border animate-pulse-glow overflow-hidden">
                  <img 
                    src="https://i.ibb.co/bRW6fkT/image.jpg" 
                    alt="Akankshya Panda"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center hidden">
                    <span className="text-6xl md:text-8xl font-bold text-white">AP</span>
                  </div>
                </div>
                {/* Dev Logo on top */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center border-4 border-black">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 text-center lg:text-left">
              {/* Name */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-georgia mb-6">
                <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                  Akankshya Panda
                </span>
              </h1>

              {/* Animated Roles with Typing Effect */}
              <div className="mb-8 h-16 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl text-gray-300 mr-4 font-montserrat">I'm a</span>
                <div className="text-xl md:text-2xl font-semibold text-neon-cyan min-w-[280px] md:min-w-[350px] text-left relative">
                  <span className="typewriter-text">{displayedText}</span>
                  <span className="inline-block w-0.5 h-6 md:h-8 bg-neon-cyan ml-1 animate-blink"></span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-montserrat max-w-3xl">
                Turning data into intuition and algorithms into action, I build systems that learn, adapt, and evolve. 
                Where others see patterns, I see potential — the spark for something smarter. Code is my canvas, intelligence my medium. 
                I don't just develop solutions; I train them to think.
              </p>

              {/* Resume Toggle */}
              <div className="mb-12">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="relative bg-gray-800 rounded-full p-1 flex">
                    <button
                      onClick={() => setResumeType('ai-ml')}
                      className={`px-4 md:px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                        resumeType === 'ai-ml' 
                          ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-lg neon-glow' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      AI/ML Resume
                    </button>
                    <button
                      onClick={() => setResumeType('data-analyst')}
                      className={`px-4 md:px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 text-white font-semibold py-3 px-6 rounded-lg neon-glow transform hover:scale-105"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download {resumeType === 'ai-ml' ? 'AI/ML' : 'Data Analyst'} Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
