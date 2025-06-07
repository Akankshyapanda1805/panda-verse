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
  const roles = ['AI/ML Engineer', 'Data Analyst', 'Cognitive Computing Student'];
  const firstLine = "Every data point tells a story,";
  const secondLine = "AI helps to write the next chapter.";

  // Handle scroll to hide quote
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && showQuote) {
        setShowQuote(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showQuote]);

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
          setCurrentRole(prev => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole, roles]);
  return <>
      {/* Quote Section - Full Screen */}
      <section id="quote" className={`fixed inset-0 flex items-center justify-center px-4 transition-all duration-1000 z-50 ${showQuote ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} ${showBinaryTransition ? 'binary-transition' : ''}`} style={{
      background: 'radial-gradient(ellipse at center, #0f0f0f 0%, #000000 100%)'
    }}>
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed font-playfair">
            <div className="mb-6">
              <span className="text-gray-100">{quoteText1}</span>
            </div>
            {showSecondLine && <div>
                <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent font-medium">
                  {quoteText2}
                </span>
              </div>}
          </blockquote>
          
          {/* Binary numbers falling effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({
            length: 20
          }, (_, i) => <div key={i} className="absolute text-neon-cyan opacity-20 font-mono animate-pulse" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 2}s`
          }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>)}
          </div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Profile Picture - Left Side */}
            <div className="flex flex-col items-center lg:items-start flex-shrink-0">
              <div className="relative mb-8">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden relative transform hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan p-1 rounded-2xl animate-pulse-glow">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-black relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-cyan/20 animate-pulse"></div>
                      <img src="https://drive.google.com/uc?export=view&id=10YacXD6vPQWvq_beECg5cv5yeirFs1l3" alt="Akankshya Panda" className="w-full h-full object-cover rounded-xl relative z-10" onError={e => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }} />
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center hidden">
                        <span className="text-8xl md:text-9xl font-bold text-white">AP</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dev Logo on top with wobble effect */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center border-4 border-black animate-wobble">
                  <Code className="w-8 h-8 text-white animate-pulse" />
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 text-center lg:text-left lg:pl-8">
              {/* Name */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-georgia mb-8">
                <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                  Akankshya Panda
                </span>
              </h1>

              {/* Animated Roles with Typing Effect - All in one line */}
              <div className="mb-10 h-20 flex items-center justify-center lg:justify-start">
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-2xl md:text-3xl text-gray-300 font-montserrat">I'm a</span>
                  <div className="text-2xl md:text-3xl font-semibold text-neon-cyan min-w-[320px] md:min-w-[400px] text-left relative">
                    <span className="typewriter-text">{displayedText}</span>
                    <span className="inline-block w-0.5 h-8 md:h-10 bg-neon-cyan ml-1 animate-blink"></span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-poppins max-w-4xl text-justify py-0">
                Turning data into intuition and algorithms into action, I build systems that learn, adapt, and evolve. 
                Where others see patterns, I see potential — the spark for something smarter. Code is my canvas, intelligence my medium. 
                I don't just develop solutions; I train them to think.
              </p>
            </div>
          </div>

          {/* Download Button - Centered */}
          <div className="flex justify-center w-full mt-12">
            <Button className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 text-white font-semibold py-6 px-12 rounded-lg neon-glow transform hover:scale-105 text-xl" onClick={() => window.open('https://drive.google.com/file/d/1w6A8HCYfBbMMedXZMfaETk5boUgijRpg/view?usp=sharing', '_blank')}>
              <Download className="w-7 h-7 mr-3" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;
