'use client';
import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold text-amber-900 mb-4">
          Holistic Healing Through Ancient Wisdom
        </h1>
        <p className="text-lg text-amber-700 mb-6">
          Discover balance with traditional Siddha Ayurveda treatments.
        </p>
        <a 
          href="#contact" 
          className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full inline-flex items-center"
        >
          Book a Consultation
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
