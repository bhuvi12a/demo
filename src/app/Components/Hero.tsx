'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Activity, Leaf, Droplet, Wind, Sun, Moon, Brain, Eye } from 'lucide-react';
import Navbar from './Navbar';

// 3D Hero Section with Sandalwood Parallax Effects
const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
        
        {/* 3D Floating Sandalwood Elements */}
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-amber-200/30 rounded-full flex items-center justify-center transform-gpu"
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, ${scrollY * 0.1}px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`
          }}
        >
          <Leaf className="w-10 h-10 text-amber-700" />
        </div>
        
        <div 
          className="absolute top-40 right-20 w-20 h-20 bg-orange-200/30 rounded-full flex items-center justify-center transform-gpu"
          style={{
            transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, ${scrollY * 0.15}px) rotateY(${mousePosition.x * -0.01}deg) rotateX(${-mousePosition.y * -0.01}deg)`
          }}
        >
          <Droplet className="w-10 h-10 text-orange-700" />
        </div>
        
        <div 
          className="absolute bottom-40 left-20 w-20 h-20 bg-yellow-200/30 rounded-full flex items-center justify-center transform-gpu"
          style={{
            transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, ${scrollY * 0.2}px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`
          }}
        >
          <Wind className="w-10 h-10 text-yellow-700" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium transform-gpu hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 mr-2" />
                Welcome to Traditional Siddha Ayurveda Clinic
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 font-serif leading-tight">
                <span className="block">Holistic Healing</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Through Ancient Wisdom
                </span>
              </h1>
              
              <p className="text-lg text-amber-800 max-w-lg mx-auto lg:mx-0">
                Balancing your unique constitution (Vata, Pitta, Kapha) through personalized diet, lifestyle, and traditional herbal remedies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105">
                  <span className="mr-2">Book a Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a href="#services" className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-amber-800 transition-all duration-300 border-2 border-amber-600 rounded-full hover:bg-amber-600 hover:text-white">
                  <span className="mr-2">Explore Services</span>
                  <Activity className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
                <div className="text-center transform-gpu hover:scale-110 transition-transform">
                  <div className="text-3xl font-bold text-amber-900">15+</div>
                  <div className="text-sm text-amber-700">Years Experience</div>
                </div>
                <div className="text-center transform-gpu hover:scale-110 transition-transform">
                  <div className="text-3xl font-bold text-amber-900">5000+</div>
                  <div className="text-sm text-amber-700">Happy Patients</div>
                </div>
                <div className="text-center transform-gpu hover:scale-110 transition-transform">
                  <div className="text-3xl font-bold text-amber-900">20+</div>
                  <div className="text-sm text-amber-700">Treatments</div>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div 
                className="relative w-64 h-64 md:w-80 md:h-80 transform-gpu transition-transform duration-200"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg) translateZ(50px)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-amber-200 transform-gpu">
                  <img 
                    src="https://i.imgur.com/9X8Z3Qm.png" 
                    alt="Traditional Siddha Ayurveda Clinic Logo"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* 3D Orbiting Elements */}
                <div 
                  className="absolute top-0 left-1/2 w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center transform-gpu"
                  style={{
                    transform: 'translateX(-50%) translateY(-50%) translateZ(80px)',
                    animation: 'orbit 10s infinite linear'
                  }}
                >
                  <Sun className="w-8 h-8 text-amber-700" />
                </div>
                
                <div 
                  className="absolute bottom-0 left-1/2 w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center transform-gpu"
                  style={{
                    transform: 'translateX(-50%) translateY(50%) translateZ(80px)',
                    animation: 'orbit 10s infinite linear reverse'
                  }}
                >
                  <Moon className="w-8 h-8 text-orange-700" />
                </div>
                
                <div 
                  className="absolute left-0 top-1/2 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center transform-gpu"
                  style={{
                    transform: 'translateX(-50%) translateY(-50%) translateZ(80px)',
                    animation: 'orbit 8s infinite linear'
                  }}
                >
                  <Brain className="w-8 h-8 text-yellow-700" />
                </div>
                
                <div 
                  className="absolute right-0 top-1/2 w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center transform-gpu"
                  style={{
                    transform: 'translateX(50%) translateY(-50%) translateZ(80px)',
                    animation: 'orbit 8s infinite linear reverse'
                  }}
                >
                  <Eye className="w-8 h-8 text-amber-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3D Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center transform-gpu hover:scale-110 transition-transform">
            <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: translateX(-50%) translateY(-50%) translateZ(80px) rotate(0deg) translateX(100px) rotate(0deg);
          }
          100% {
            transform: translateX(-50%) translateY(-50%) translateZ(80px) rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;