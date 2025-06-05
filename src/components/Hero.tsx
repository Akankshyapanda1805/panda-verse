
import React, { useState, useEffect } from 'react';
import { Download, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showQuote, setShowQuote] = useState(true);
  const [quoteText1, setQuoteText1] = useState('');
  const [quoteText2, setQuoteText2] = useState('');
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showBinaryTransition, setShowBinaryTransition] = useState(false);
  
  const roles = [
    'AI/ML Engineer',
    'Data Analyst', 
    'Cognitive Computing Student'
  ];

  const firstLine = "Every data point tells a story,";
  const secondLine = "AI helps to write the next chapter.";

  // Quote typing effect with auto-transition
  useEffect(() => {
    if (showQuote) {
      let index1 = 0;
      const timer1 = setInterval(() => {
        if (index1 < firstLine.length) {
          setQuoteText1(firstLine.slice(0, index1 + 1));
          index1++;
        } else {
          clearInterval(timer1);
          setShowSecondLine(true);
          
          let index2 = 0;
          const timer2 = setInterval(() => {
            if (index2 < secondLine.length) {
              setQuoteText2(secondLine.slice(0, index2 + 1));
              index2++;
            } else {
              clearInterval(timer2);
              // Auto-transition after 5 seconds
              setTimeout(() => {
                setShowBinaryTransition(true);
                setTimeout(() => {
                  setShowQuote(false);
                  setShowBinaryTransition(false);
                }, 1000);
              }, 5000);
            }
          }, 80);
        }
      }, 80);
      return () => clearInterval(timer1);
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
          <blockquote className="text-3xl md:text-5xl lg:text-6xl leading-relaxed font-playfair">
            <div className="mb-6">
              <span className="text-gray-100">{quoteText1}</span>
            </div>
            {showSecondLine && (
              <div>
                <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent font-medium">
                  {quoteText2}
                </span>
              </div>
            )}
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
        style={{ marginTop: showQuote ? '100vh' : '0', transition: 'margin-top 1s ease-in-out' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Profile Picture - Left Side */}
            <div className="flex justify-center lg:justify-start flex-shrink-0">
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl gradient-border animate-pulse-glow overflow-hidden">
                  <img 
                    src="https://drive.google.com/uc?export=view&id=10YacXD6vPQWvq_beECg5cv5yeirFs1l3" 
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
            <div className="flex-1 text-center lg:text-left lg:pl-8">
              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-georgia mb-4">
                <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                  Akankshya Panda
                </span>
              </h1>

              {/* Animated Roles with Typing Effect */}
              <div className="mb-6 h-12 flex items-center justify-center lg:justify-start">
                <span className="text-lg md:text-xl text-gray-300 mr-3 font-montserrat">I'm a</span>
                <div className="text-lg md:text-xl font-semibold text-neon-cyan min-w-[250px] md:min-w-[300px] text-left relative">
                  <span className="typewriter-text">{displayedText}</span>
                  <span className="inline-block w-0.5 h-5 md:h-6 bg-neon-cyan ml-1 animate-blink"></span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed font-montserrat max-w-3xl text-justify">
                Turning data into intuition and algorithms into action, I build systems that learn, adapt, and evolve. 
                Where others see patterns, I see potential — the spark for something smarter. Code is my canvas, intelligence my medium. 
                I don't just develop solutions; I train them to think.
              </p>

              {/* Download Button */}
              <div className="flex justify-center lg:justify-start">
                <Button
                  className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 text-white font-semibold py-3 px-6 rounded-lg neon-glow transform hover:scale-105"
                  onClick={() => window.open('https://drive.google.com/file/d/1w6A8HCYfBbMMedXZMfaETk5boUgijRpg/view?usp=sharing', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
