
import React from 'react';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import SecretStash from '@/components/SecretStash';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <StarField />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <SecretStash />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">
          © 2024 Akankshya Panda. Crafted with 💜 and cosmic energy.
        </p>
      </footer>
    </div>
  );
};

export default Index;
