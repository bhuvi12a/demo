'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import DoctorsSection from './Components/DoctorsSection';
import ServicesSection from './Components/ServicesSection';
import GallerySection from './Components/GallerySection';
import TestimonialsSection from './Components/TestimonialsSection';
import FAQSection from './Components/FAQSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';
import PhilosophySection from './Components/PhilosophySection ';
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <DoctorsSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
