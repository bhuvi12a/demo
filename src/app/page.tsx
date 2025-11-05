"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Check,
  ChevronRight,
  Star,
  Clock,
  Award,
  Leaf,
  Calendar,
  ArrowRight,
  Play,
  Quote,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart,
  Sparkles,
  Zap,
  Activity,
} from "lucide-react";

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-green-200 opacity-20 animate-float"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

// 3D Card Component
const Card3D = ({ children, className = "" }) => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)");
  };

  return (
    <div
      className={`${className} transition-transform duration-300 transform-style-preserve-3d`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Navbar Component with 3D effects
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white p-2 rounded-lg">
              <img
                src="https://i.imgur.com/9X8Z3Qm.png"
                alt="Traditional Siddha Ayurveda Clinic"
                className="h-10 w-auto"
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {[
              "Home",
              "About",
              "Services",
              "Gallery",
              "Testimonials",
              "Contact",
            ].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-green-800 hover:text-green-600 font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
            <a href="#contact" className="ml-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-medium">
                Book Appointment
              </span>
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-800 focus:outline-none p-2 relative group"
            >
              <div className="absolute inset-0 bg-green-100 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu with 3D slide effect */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[
            "Home",
            "About",
            "Services",
            "Gallery",
            "Testimonials",
            "Contact",
          ].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-green-800 hover:text-green-600 transform hover:scale-110 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

// Hero Section with 3D animations
const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
      <AnimatedBackground />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to Traditional Siddha Ayurveda Clinic
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 font-serif leading-tight">
              <span className="block">Holistic Healing</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Through Ancient Wisdom
              </span>
            </h1>

            <p className="text-lg text-green-800 max-w-lg mx-auto lg:mx-0">
              Balancing your unique constitution (Vata, Pitta, Kapha) through
              personalized diet, lifestyle, and traditional herbal remedies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="mr-2">Book a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-green-800 transition-all duration-300 border-2 border-green-600 rounded-full hover:bg-green-600 hover:text-white"
              >
                <span className="mr-2">Explore Services</span>
                <Activity className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-900">15+</div>
                <div className="text-sm text-green-700">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-900">5000+</div>
                <div className="text-sm text-green-700">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-900">20+</div>
                <div className="text-sm text-green-700">Treatments</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 transform-gpu transition-transform duration-200"
              style={{
                transform: `perspective(1000px) rotateY(${
                  mousePosition.x * 0.01
                }deg) rotateX(${-mousePosition.y * 0.01}deg)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-green-200">
                <img
                  src="https://i.imgur.com/9X8Z3Qm.png"
                  alt="Traditional Siddha Ayurveda Clinic Logo"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-200 rounded-full flex items-center justify-center animate-bounce">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <div
                className="absolute -bottom-10 -left-10 w-20 h-20 bg-emerald-200 rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <Zap className="w-10 h-10 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Philosophy Section
const PhilosophySection: React.FC = () => {
  const principles = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural Healing",
      description:
        "Using nature's remedies to restore balance and harmony in the body",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Approach",
      description: "Treating the whole person - body, mind, and spirit",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Personalized Care",
      description: "Tailored treatments based on your unique constitution",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Ancient Wisdom",
      description: "Time-tested traditions backed by modern understanding",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 font-serif mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            At Traditional Siddha Ayurveda Clinic, we believe in the power of
            ancient wisdom combined with modern understanding to provide
            holistic healing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <Card3D
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl"
            >
              <div className="text-green-600 mb-4 flex justify-center">
                {principle.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-3 text-center">
                {principle.title}
              </h3>
              <p className="text-green-700 text-center">
                {principle.description}
              </p>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

// Doctors Section with 3D flip cards
const DoctorsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const doctors = [
    {
      name: "Dr. B. Vikesh, MD (S)",
      specialty: "Ortho, Skin & Respiratory Problems",
      experience: "15+ years",
      education: "MD in Siddha Medicine",
      achievements: "Published 10+ research papers",
    },
    {
      name: "Dr. S. Thanikai Selvi, MD (S)",
      specialty: "Infertility & Gynaecology Problems",
      experience: "12+ years",
      education: "MD in Siddha Medicine",
      achievements: "Treated 1000+ patients",
    },
    {
      name: "Dr. A. Silambarasan, MD (S)",
      specialty: "Paediatric & Lifestyle Disorders",
      experience: "10+ years",
      education: "MD in Siddha Medicine",
      achievements: "Specialized in pediatric care",
      appointment: true,
    },
    {
      name: "Dr. K. Chenthil, BAMS",
      title: "Ayurveda Consultant",
      specialty: "Specialist In: Panchakarma",
      experience: "8+ years",
      education: "Bachelor of Ayurvedic Medicine",
      achievements: "Certified Panchakarma practitioner",
      appointment: true,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 font-serif mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Meet our experienced specialists dedicated to your wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className={`relative h-96 transform-style-preserve-3d transition-all duration-700 ${
                activeIndex === index ? "rotate-y-180" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {/* Front of card */}
              <div className="absolute inset-0 backface-hidden">
                <Card3D className="bg-white h-full p-6 rounded-2xl shadow-lg hover:shadow-xl">
                  <div className="flex flex-col h-full">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-green-600 text-3xl font-bold">
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-2 text-center">
                      {doctor.name}
                    </h3>
                    {doctor.title && (
                      <p className="text-green-700 font-medium text-center mb-2">
                        {doctor.title}
                      </p>
                    )}
                    <p className="text-green-600 text-sm text-center mb-4">
                      {doctor.specialty}
                    </p>
                    <div className="mt-auto text-center">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-green-700">
                        {doctor.experience} experience
                      </p>
                      {doctor.appointment && (
                        <p className="text-amber-600 text-sm font-medium mt-2">
                          By Appointment only
                        </p>
                      )}
                    </div>
                  </div>
                </Card3D>
              </div>

              {/* Back of card */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden">
                <Card3D className="bg-gradient-to-br from-green-600 to-emerald-600 h-full p-6 rounded-2xl shadow-lg text-white">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-4 text-center">
                      {doctor.name}
                    </h3>
                    <div className="space-y-3 flex-grow">
                      <div>
                        <p className="font-semibold text-green-100">
                          Education
                        </p>
                        <p className="text-sm">{doctor.education}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-green-100">
                          Experience
                        </p>
                        <p className="text-sm">{doctor.experience}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-green-100">
                          Achievements
                        </p>
                        <p className="text-sm">{doctor.achievements}</p>
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className="mt-4 bg-white text-green-700 py-2 rounded-lg text-center font-medium hover:bg-green-50 transition-colors"
                    >
                      Book Consultation
                    </a>
                  </div>
                </Card3D>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section with 3D hover effects
const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "Treatments",
      icon: <Activity className="w-6 h-6" />,
      items: [
        "Respiratory Disorders",
        "Ortho & Joint Problems",
        "Skin Diseases",
        "Gynaecology Disorders",
        "Paediatric Problems",
        "Infertility & Sexual Problems",
        "Neurological Disorders",
        "Life Style Disorders",
        "Obesity",
      ],
    },
    {
      name: "Therapies",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Varmam & Yoga",
        "Weight Loss Program",
        "SPA Therapy",
        "Panchakarma Therapy",
        "Steam Therapy",
        "Herbal Massage",
        "Udvarthana",
        "Vasthi",
        "Acupuncture",
        "Kaya Karpam",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 font-serif mb-4">
            Our Services
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Specialized care for a balanced life through traditional healing
            methods
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-green-100 p-1">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-white text-green-700 shadow-md"
                    : "text-green-700 hover:bg-green-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories[activeCategory].items.map((item, index) => (
            <Card3D
              key={index}
              className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl border border-green-100"
            >
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 group-hover:bg-green-200 transition-colors">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    {item}
                  </h3>
                  <p className="text-green-700 text-sm">
                    Personalized treatment approach based on your unique
                    constitution and health concerns.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <ChevronRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { id: 1, category: "Clinic", title: "Reception Area" },
    { id: 2, category: "Treatment", title: "Panchakarma Therapy" },
    { id: 3, category: "Herbs", title: "Medicinal Herbs" },
    { id: 4, category: "Treatment", title: "Steam Therapy" },
    { id: 5, category: "Clinic", title: "Consultation Room" },
    { id: 6, category: "Herbs", title: "Herbal Preparation" },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 font-serif mb-4">
            Gallery
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Take a virtual tour of our clinic and treatment facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-green-200 to-emerald-200 h-64 flex items-center justify-center">
                <div className="text-green-700 text-center">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                    <Calendar className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">{image.title}</p>
                    <p className="text-sm text-green-600">{image.category}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold">{image.title}</p>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section with 3D carousel
const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rohan K.",
      duration: "Patient for 6 months",
      text: "Vaidya Sharma helped me understand my body in a way no one ever has. After years of digestive issues, her personalized diet and herbal plan have me feeling better than I have in decades.",
      rating: 5,
    },
    {
      name: "Priya S.",
      duration: "Patient for 1 year",
      text: "The Panchakarma therapy was life-changing. I came in with chronic joint pain and left feeling rejuvenated. The staff is incredibly knowledgeable and caring.",
      rating: 5,
    },
    {
      name: "Amit P.",
      duration: "Patient for 3 months",
      text: "I was skeptical about Ayurvedic treatments at first, but the results speak for themselves. My skin condition has improved dramatically, and I feel more energetic than ever.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 font-serif mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Hear from our patients about their healing journey
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card3D className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                    <div className="flex justify-center mb-4">
                      <Quote className="w-12 h-12 text-green-600" />
                    </div>
                    <p className="text-lg text-gray-700 italic mb-6 text-center">
                      "{testimonial.text}"
                    </p>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-green-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-green-700">
                        {testimonial.duration}
                      </p>
                    </div>
                  </Card3D>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "bg-green-600 w-8"
                    : "bg-green-300 hover:bg-green-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqs = [
    {
      question: "What is Siddha Ayurveda?",
      answer:
        "Siddha Ayurveda is an ancient system of medicine that originated in South India. It emphasizes the use of natural remedies, herbal medicines, and lifestyle modifications to restore balance in the body.",
    },
    {
      question: "How long does a typical treatment last?",
      answer:
        "Treatment duration varies depending on the condition and individual response. Some acute conditions may improve in a few weeks, while chronic conditions might require several months of consistent treatment.",
    },
    {
      question: "Are the herbal medicines safe?",
      answer:
        "Yes, our herbal medicines are prepared from natural ingredients following traditional methods. They are safe when taken as prescribed by our experienced practitioners.",
    },
    {
      question: "Do I need to follow a specific diet during treatment?",
      answer:
        "Diet plays a crucial role in Ayurvedic treatment. Our practitioners will provide personalized dietary recommendations based on your constitution and health condition.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 font-serif mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Find answers to common questions about our treatments and approach
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() =>
                  setActiveQuestion(index === activeQuestion ? -1 : index)
                }
                className="w-full text-left bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-green-900">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-300 ${
                      activeQuestion === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronRight className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeQuestion === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0">
                  <p className="text-green-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section with enhanced form
const ContactSection: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setShowSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    });
    setIsSubmitting(false);

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 font-serif mb-4">
            Book Your Consultation
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Begin your journey to balanced health
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card3D className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-green-900 mb-6 font-serif">
                Send Us a Message
              </h3>

              {showSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  <div>
                    <strong className="font-bold">Thank you!</strong>
                    <span className="block">
                      {" "}
                      Your consultation request has been sent. We will contact
                      you shortly.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-green-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-green-300 text-green-900 placeholder-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-green-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-green-300 text-green-900 placeholder-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-green-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-green-300 text-green-900 placeholder-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-green-900 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-green-300 text-green-900 placeholder-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-green-900 mb-2">
                      Preferred Time
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-green-300 text-green-900 placeholder-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-green-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-green-300 text-green-900 placeholder-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="What health goals would you like to discuss?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Request Consultation
                    </>
                  )}
                </button>
              </form>
            </Card3D>
          </div>

          <div className="space-y-6">
            <Card3D className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-900 mb-6 font-serif">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Address</p>
                    <p className="text-green-700">
                      123 Wellness Ln, Sattva City, 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Phone</p>
                    <p className="text-green-700">(555) 789-0123</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Email</p>
                    <p className="text-green-700">info@sattva-ayurveda.com</p>
                  </div>
                </div>
              </div>
            </Card3D>

            <Card3D className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-900 mb-6 font-serif">
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-green-200">
                  <span className="font-medium text-green-900">
                    Monday - Friday
                  </span>
                  <span className="text-green-700">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-green-200">
                  <span className="font-medium text-green-900">Saturday</span>
                  <span className="text-green-700">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-green-900">Sunday</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </div>
            </Card3D>

            <Card3D className="bg-gradient-to-br from-green-600 to-emerald-600 p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-semibold mb-4 font-serif">
                Follow Us
              </h3>
              <p className="mb-6">
                Stay connected with us for health tips and updates
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://i.imgur.com/9X8Z3Qm.png"
                alt="Traditional Siddha Ayurveda Clinic"
                className="h-12 w-auto mr-3 brightness-0 invert"
              />
              <span className="text-xl font-bold">
                Traditional Siddha Ayurveda Clinic
              </span>
            </div>
            <p className="text-green-200 text-sm">
              Holistic healing through ancient wisdom for a balanced life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-200">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-green-200">
              <li>Panchakarma Therapy</li>
              <li>Herbal Consultation</li>
              <li>Yoga & Meditation</li>
              <li>Lifestyle Management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-green-200 text-sm mb-4">
              Subscribe to get health tips and updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-green-700/50 border border-green-600 text-white placeholder-green-300 px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:bg-green-700/70"
              />
              <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-r-lg transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Traditional Siddha Ayurveda Clinic. All Rights
            Reserved.
          </p>
          <p className="text-green-300 text-sm flex items-center">
            Made with{" "}
            <Heart className="w-4 h-4 mx-1 fill-red-500 text-red-500" /> for
            your wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function AyurvedicWebsite() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-white p-4 rounded-full shadow-lg">
              <img
                src="https://i.imgur.com/9X8Z3Qm.png"
                alt="Traditional Siddha Ayurveda Clinic"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            <div
              className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <style jsx global>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(20px);
          }
        }
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

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
