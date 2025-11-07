'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown, Leaf, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for 3D effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Panchakarma', href: '/services/panchakarma' },
        { name: 'Herbal Medicine', href: '/services/herbal' },
        { name: 'Yoga & Meditation', href: '/services/yoga' },
        { name: 'Lifestyle Counseling', href: '/services/lifestyle' }
      ]
    },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav 
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gradient-to-r from-amber-900/95 to-orange-900/95 backdrop-blur-md shadow-2xl' 
            : 'bg-gradient-to-r from-amber-800/90 to-orange-800/90 backdrop-blur-sm'
        }`}
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x * 0.002}deg) rotateX(${-mousePosition.y * 0.002}deg)`
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={handleNavClick}
            >
              <div className="relative">
                <Image
                  src="https://i.imgur.com/9X8Z3Qm.png" 
                  alt="Traditional Siddha Ayurveda Clinic" 
                  width={160}
                  height={48}
                  className="h-10 lg:h-12 w-auto brightness-0 invert transform-gpu group-hover:scale-110 transition-transform duration-300"
                />
                <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                          pathname === link.href
                            ? 'bg-amber-700/50 text-white'
                            : 'text-amber-200 hover:text-white hover:bg-amber-700/30'
                        } transform-gpu hover:scale-105`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-gradient-to-b from-amber-800 to-orange-900 rounded-xl shadow-2xl overflow-hidden transform-gpu transition-all duration-300">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={handleNavClick}
                              className="block px-4 py-3 text-amber-200 hover:text-white hover:bg-amber-700/50 transition-all duration-200 transform-gpu hover:translate-x-2"
                            >
                              <div className="flex items-center space-x-2">
                                <Leaf className="w-4 h-4" />
                                <span>{item.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => handleNavClick()}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        pathname === link.href
                          ? 'bg-amber-700/50 text-white'
                          : 'text-amber-200 hover:text-white hover:bg-amber-700/30'
                      } transform-gpu hover:scale-105`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 text-amber-200 hover:text-white transition-colors transform-gpu hover:scale-105">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 98765 43210</span>
              </button>
              <Link href="/contact">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 px-6 py-2.5 rounded-lg text-white font-medium transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-amber-200 hover:text-white hover:bg-amber-700/30 transition-all duration-300 transform-gpu hover:scale-110"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="px-4 py-4 space-y-2 bg-gradient-to-b from-amber-800/95 to-orange-900/95">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full text-left px-4 py-3 rounded-lg text-amber-200 hover:text-white hover:bg-amber-700/30 transition-all duration-200 flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleNavClick}
                            className="block px-4 py-2 text-amber-300 hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                      pathname === link.href
                        ? 'bg-amber-700/50 text-white'
                        : 'text-amber-200 hover:text-white hover:bg-amber-700/30'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-amber-700/50 space-y-2">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-amber-200 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+91 98765 43210</span>
              </button>
              <Link href="/contact">
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 px-6 py-2.5 rounded-lg text-white font-medium transition-all duration-300">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 3D Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
        <div 
          className="absolute top-24 left-8 w-12 h-12 bg-amber-300/10 rounded-full flex items-center justify-center transform-gpu"
          style={{
            transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)`
          }}
        >
          <Leaf className="w-5 h-5 text-amber-500 animate-pulse" />
        </div>
        
        <div 
          className="absolute top-32 right-12 w-12 h-12 bg-orange-300/10 rounded-full flex items-center justify-center transform-gpu"
          style={{
            transform: `translate3d(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px, 0) rotateY(${mousePosition.x * -0.02}deg) rotateX(${-mousePosition.y * -0.02}deg)`
          }}
        >
          <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" />
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