
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-playfair">
          <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-neon-purple/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 font-montserrat">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-poppins">Location</p>
                  <p className="text-white font-montserrat">Chennai, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-poppins">Phone</p>
                  <p className="text-white font-montserrat">+91 9040016264</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-poppins">Email</p>
                  <p className="text-white font-montserrat">pandaakankshya18@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-neon-cyan to-neon-green rounded-lg">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-poppins">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/akankshya-panda-ak180504/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neon-cyan hover:text-neon-blue transition-colors duration-300 font-montserrat"
                  >
                    View Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-neon-green to-neon-pink rounded-lg">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-poppins">GitHub</p>
                  <a 
                    href="https://github.com/Akankshyapanda1805" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neon-cyan hover:text-neon-blue transition-colors duration-300 font-montserrat"
                  >
                    View Repositories
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-neon-cyan/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 font-montserrat">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm mb-2 font-poppins">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors duration-300 font-poppins"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2 font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors duration-300 font-poppins"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2 font-poppins">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-full min-h-[150px] px-4 py-3 bg-gray-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors duration-300 resize-none font-poppins"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-purple transition-all duration-300 text-white font-semibold py-3 px-6 rounded-lg neon-glow transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Collaboration Message */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 font-playfair">
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Let's Collaborate!
            </span>
          </h3>
          <p className="text-gray-300 text-lg font-poppins">
            Stars gently pulse in the background as we connect and create the future together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
