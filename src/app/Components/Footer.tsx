'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Send, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

// 3D Footer Component with Sandalwood Colors
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <>
      <footer className="bg-gradient-to-b from-amber-800 to-orange-900 text-white py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="https://i.imgur.com/9X8Z3Qm.png" 
                  alt="Traditional Siddha Ayurveda Clinic" 
                  width={160}
                  height={48}
                  className="h-12 w-auto mr-3 brightness-0 invert transform-gpu hover:scale-110 transition-transform"
                />
                <span className="text-xl font-bold">Traditional Siddha Ayurveda Clinic</span>
              </div>
              <p className="text-amber-200 text-sm">
                Holistic healing through ancient wisdom for a balanced life.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-amber-200">
                <li>
                  <a 
                    href="#about" 
                    className="hover:text-white transition-colors transform-gpu hover:translate-x-1 inline-block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="hover:text-white transition-colors transform-gpu hover:translate-x-1 inline-block"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#gallery" 
                    className="hover:text-white transition-colors transform-gpu hover:translate-x-1 inline-block"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="hover:text-white transition-colors transform-gpu hover:translate-x-1 inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-amber-200">
                <li className="transform-gpu hover:translate-x-1 inline-block">Panchakarma Therapy</li>
                <li className="transform-gpu hover:translate-x-1 inline-block">Herbal Consultation</li>
                <li className="transform-gpu hover:translate-x-1 inline-block">Yoga & Meditation</li>
                <li className="transform-gpu hover:translate-x-1 inline-block">Lifestyle Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-amber-200 text-sm mb-4">
                Subscribe to get health tips and updates
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-amber-700/50 border border-amber-600 text-white placeholder-amber-300 px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:bg-amber-700/70 transform-gpu hover:scale-[1.02] transition-transform"
                />
                <button 
                  className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded-r-lg transition-colors transform-gpu hover:scale-110"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Traditional Siddha Ayurveda Clinic. All Rights Reserved.
            </p>
            <p className="text-amber-300 text-sm flex items-center">
              Made with 
              <Heart className="w-4 h-4 mx-1 fill-red-500 text-red-500 transform-gpu hover:scale-125 transition-transform" /> 
              for your wellness
            </p>
          </div>
        </div>
      </footer>
      
      {/* 3D Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-16 h-16 bg-amber-200/20 rounded-full flex items-center justify-center transform-gpu"
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`
          }}
        >
          <MapPin className="w-6 h-6 text-amber-600" />
        </div>
        
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-orange-200/20 rounded-full flex items-center justify-center transform-gpu"
          style={{
            transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, 0) rotateY(${mousePosition.x * -0.01}deg) rotateX(${-mousePosition.y * -0.01}deg)`
          }}
        >
          <Phone className="w-6 h-6 text-orange-600" />
        </div>
        
        <div 
          className="absolute bottom-20 left-20 w-16 h-16 bg-yellow-200/20 rounded-full flex items-center justify-center transform-gpu"
          style={{
            transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`
          }}
        >
          <Mail className="w-6 h-6 text-yellow-600" />
        </div>
      </div>
      
      <style jsx global>{`
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </>
  );
};

export default Footer;