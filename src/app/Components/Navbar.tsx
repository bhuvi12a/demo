'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// 3D Navbar with Sandalwood Effects
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="group relative">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0)`
                }}
              ></div>
              <div className="relative bg-white p-2 rounded-lg transform-gpu transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="https://i.imgur.com/9X8Z3Qm.png" 
                  alt="Traditional Siddha Ayurveda Clinic" 
                  className="h-10 w-auto"
                />
              </div>
            </a>
            
            <div className="hidden lg:flex items-center space-x-1">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-amber-900 hover:text-amber-700 font-medium transition-all duration-300 group"
                  style={{
                    transform: `translateZ(${index * 10}px)`
                  }}
                >
                  <span className="relative z-10">{item}</span>
                  <span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{
                      transformOrigin: 'left',
                      transform: 'scaleX(0) translateZ(0)'
                    }}
                  ></span>
                </a>
              ))}
              <a href="#contact" className="ml-4 relative group">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"
                  style={{
                    transform: 'translateZ(-10px)'
                  }}
                ></div>
                <span className="relative block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium transform-gpu transition-transform duration-300 group-hover:scale-105">
                  Book Appointment
                </span>
              </a>
            </div>
            
            <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-amber-900 focus:outline-none p-2 relative group"
              >
                <div className="absolute inset-0 bg-amber-100 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* 3D Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transition-all duration-700 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
        style={{
          transform: isOpen ? 'rotateY(0deg)' : 'rotateY(90deg)',
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-amber-900 hover:text-amber-700 transform hover:scale-110 transition-all duration-300"
              style={{
                transform: `translateZ(${index * 20}px)`,
                animationDelay: `${index * 100}ms`
              }}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="mt-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </a>
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

export default Navbar;