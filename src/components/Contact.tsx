
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-center mb-16">
          <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Let's Collaborate!</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Ready to turn data into insights and AI into reality? Let's connect and create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center mr-4 shadow-lg shadow-neon-purple/30">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Location</p>
                  <p className="text-gray-400">Chennai, India</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mr-4 shadow-lg shadow-neon-blue/30">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Phone</p>
                  <p className="text-gray-400">+91 9040016264</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-neon-cyan to-neon-green rounded-full flex items-center justify-center mr-4 shadow-lg shadow-neon-cyan/30">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Email</p>
                  <p className="text-gray-400">pandaakankshya18@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/akankshya-panda-ak180504/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 neon-glow shadow-lg"
              >
                <Linkedin className="w-7 h-7 text-white" />
              </a>
              <a
                href="https://github.com/Akankshyapanda1805"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 neon-glow shadow-lg"
              >
                <Github className="w-7 h-7 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-neon-purple transition-all duration-300 neon-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800/80 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-neon-cyan h-12 text-lg"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800/80 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-neon-cyan h-12 text-lg"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-800/80 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-neon-cyan resize-none text-lg"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 text-white font-semibold py-4 rounded-lg neon-glow transform hover:scale-105 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Collaboration Message */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent mb-4">
            Let's Collaborate!
          </h3>
          <p className="text-gray-300 text-lg">
            Stars gently pulse in the background as we connect and create the future together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
