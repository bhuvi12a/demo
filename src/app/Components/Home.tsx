'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Calendar, Phone, Mail, MapPin, Star, ChevronRight, ArrowRight, Heart, Sparkles, Leaf, Shield, Award, Users, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const HomePage: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            name: "Priya Sharma",
            rating: 5,
            text: "The Panchakarma therapy completely transformed my health. I feel rejuvenated and more energetic than ever before.",
            image: "https://i.imgur.com/3VwXK3E.jpg"
        },
        {
            name: "Raj Patel",
            rating: 5,
            text: "After years of chronic pain, the herbal treatments and lifestyle guidance provided here have given me my life back.",
            image: "https://i.imgur.com/4GhT7Yq.jpg"
        },
        {
            name: "Anjali Desai",
            rating: 5,
            text: "The yoga and meditation sessions have helped me find inner peace. The doctors are knowledgeable and truly caring.",
            image: "https://i.imgur.com/5JhL8pN.jpg"
        }
    ];

    // Handle mouse movement for 3D effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const services = [
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Panchakarma Therapy",
            description: "Detoxify and rejuvenate your body with our traditional purification treatments."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Herbal Medicine",
            description: "Natural remedies tailored to your unique constitution and health concerns."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Yoga & Meditation",
            description: "Achieve mental clarity and physical balance through guided practices."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Lifestyle Management",
            description: "Personalized guidance for daily routines that promote lasting wellness."
        }
    ];

    const benefits = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Expert Practitioners",
            description: "Our team consists of certified Ayurvedic doctors with decades of experience."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Ancient Wisdom",
            description: "Time-tested treatments based on 5,000 years of documented healing practices."
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Personalized Care",
            description: "Customized treatment plans designed specifically for your body type."
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Natural Healing",
            description: "No harmful chemicals or side effects, only pure herbal formulations."
        }
    ];

    const galleryImages = [
        "https://i.imgur.com/8X7Y9Z2.jpg",
        "https://i.imgur.com/7W6V5U4.jpg",
        "https://i.imgur.com/6T4S3R1.jpg",
        "https://i.imgur.com/5Q3P2O0.jpg",
        "https://i.imgur.com/4R2Q1N9.jpg",
        "https://i.imgur.com/3P1O0M8.jpg"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 overflow-hidden">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, #92400e 0%, #ea580c 100%)`
                }}
            >
                {/* 3D Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute top-20 left-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl transform-gpu"
                        style={{
                            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`
                        }}
                    />
                    <div
                        className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl transform-gpu"
                        style={{
                            transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, 0)`
                        }}
                    />
                </div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <div className="inline-flex items-center bg-amber-700/30 backdrop-blur-sm rounded-full px-4 py-2 mb-6 transform-gpu hover:scale-105 transition-transform">
                                <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
                                <span className="text-sm font-medium">Ancient Wisdom for Modern Wellness</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Discover Balance Through
                                <span className="block text-yellow-300">Traditional Ayurveda</span>
                            </h1>

                            <p className="text-xl mb-8 text-amber-100">
                                Experience holistic healing that addresses the root cause of your ailments, not just the symptoms. Our time-tested treatments rejuvenate your body, mind, and spirit.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="group flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                                    Book Consultation
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="group flex items-center justify-center px-8 py-4 bg-amber-800/50 backdrop-blur-sm hover:bg-amber-800/70 text-white font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105">
                                    <Play className="mr-2 w-5 h-5" />
                                    Watch Video
                                </button>
                            </div>

                            <div className="flex items-center space-x-8">
                                <div>
                                    <p className="text-3xl font-bold text-yellow-300">5000+</p>
                                    <p className="text-amber-200">Years of Tradition</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-yellow-300">10,000+</p>
                                    <p className="text-amber-200">Happy Patients</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-yellow-300">50+</p>
                                    <p className="text-amber-200">Herbal Treatments</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div
                                className="relative z-10 transform-gpu transition-transform duration-300"
                                style={{
                                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`
                                }}
                            >
                                <Image
                                    src="https://i.imgur.com/9X8Z3Qm.png"
                                    alt="Traditional Siddha Ayurveda Clinic"
                                    width={600}
                                    height={600}
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>

                            {/* Floating Elements */}
                            <div
                                className="absolute -top-10 -right-10 w-32 h-32 bg-amber-300/20 rounded-full flex items-center justify-center transform-gpu"
                                style={{
                                    transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)`
                                }}
                            >
                                <Leaf className="w-12 h-12 text-amber-400" />
                            </div>

                            <div
                                className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-300/20 rounded-full flex items-center justify-center transform-gpu"
                                style={{
                                    transform: `translate3d(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px, 0) rotateY(${mousePosition.x * -0.02}deg) rotateX(${-mousePosition.y * -0.02}deg)`
                                }}
                            >
                                <Sparkles className="w-12 h-12 text-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronRight className="w-8 h-8 text-amber-200 rotate-90" />
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                                <Heart className="w-5 h-5 mr-2 text-amber-600" />
                                <span className="text-sm font-medium text-amber-800">Our Philosophy</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                                Healing Body, Mind & Spirit Through Ancient Wisdom
                            </h2>

                            <p className="text-lg text-amber-700 mb-6">
                                At Traditional Siddha Ayurveda Clinic, we believe in treating the person as a whole, not just the symptoms. Our approach combines centuries-old knowledge with modern understanding to create personalized treatment plans that restore your natural balance.
                            </p>

                            <p className="text-lg text-amber-700 mb-8">
                                Founded by Dr. Ravi Kumar, a third-generation Ayurvedic practitioner with over 25 years of experience, our clinic has been a sanctuary of healing for thousands of patients seeking natural alternatives to conventional medicine.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-amber-900">Authentic Treatments</h4>
                                        <p className="text-amber-700">Following traditional scriptures and methods</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-amber-900">Pure Herbs</h4>
                                        <p className="text-amber-700">Sourced directly from organic farms</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-amber-900">Personalized Care</h4>
                                        <p className="text-amber-700">Treatments tailored to your constitution</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-amber-900">Lasting Results</h4>
                                        <p className="text-amber-700">Addressing root causes for permanent relief</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://i.imgur.com/7W6V5U4.jpg"
                                    alt="About Traditional Siddha Ayurveda Clinic"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div
                                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-600 to-orange-600 text-white p-6 rounded-2xl shadow-xl transform-gpu hover:scale-105 transition-transform"
                                style={{
                                    transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`
                                }}
                            >
                                <p className="text-3xl font-bold mb-1">25+</p>
                                <p className="text-amber-100">Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-orange-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                            <Leaf className="w-5 h-5 mr-2 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">Our Services</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            Holistic Treatments for Complete Wellness
                        </h2>

                        <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                            Our comprehensive range of services addresses various health concerns using natural, time-tested methods that work in harmony with your body.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 group"
                                style={{
                                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.005 * (index % 2 === 0 ? 1 : -1)}deg) rotateX(${-mousePosition.y * 0.005}deg)`
                                }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-amber-900 mb-4">{service.title}</h3>

                                <p className="text-amber-700 mb-6">{service.description}</p>

                                <button className="flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                                    Learn More
                                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                            View All Services
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-gradient-to-br from-amber-800 to-orange-900 rounded-3xl p-12 text-white relative overflow-hidden">
                        {/* Background Elements */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl transform-gpu"
                            style={{
                                transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`
                            }}
                        />
                        <div
                            className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl transform-gpu"
                            style={{
                                transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, 0)`
                            }}
                        />

                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Traditional Siddha Ayurveda?</h2>
                                <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                                    We combine authentic practices with personalized care to deliver results that last.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-16 h-16 bg-amber-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                        <p className="text-amber-200">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-orange-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                            <Star className="w-5 h-5 mr-2 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">Patient Stories</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            Hear From Our Happy Patients
                        </h2>

                        <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                            Real experiences from people who have transformed their health through our treatments.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={testimonials[activeTestimonial].image}
                                        alt={testimonials[activeTestimonial].name}
                                        width={100}
                                        height={100}
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex justify-center md:justify-start mb-4">
                                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-lg text-amber-800 mb-6 italic">
                                        &quot;{testimonials[activeTestimonial].text}&quot;
                                    </p>

                                    <h4 className="text-xl font-semibold text-amber-900">
                                        {testimonials[activeTestimonial].name}
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-amber-600 w-8' : 'bg-amber-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-5 h-5 mr-2 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">Gallery</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            A Glimpse Into Our Healing Space
                        </h2>

                        <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                            Explore our serene clinic environment where ancient healing traditions come to life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                                style={{
                                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.005 * (index % 2 === 0 ? 1 : -1)}deg) rotateX(${-mousePosition.y * 0.005}deg)`
                                }}
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-semibold">Treatment Room {index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                            View Full Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-800 to-orange-900">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Begin Your Healing Journey Today
                        </h2>
                        <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                            Schedule a consultation with our experts and take the first step towards holistic wellness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

                            {formSubmitted ? (
                                <div className="bg-green-500/20 border border-green-400 rounded-lg p-6 text-center">
                                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <p className="text-white font-semibold">Thank you for your message!</p>
                                    <p className="text-amber-100">We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-amber-200 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-amber-600/50 rounded-lg text-white placeholder-amber-300 focus:outline-none focus:border-amber-400 focus:bg-white/30 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-amber-200 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-amber-600/50 rounded-lg text-white placeholder-amber-300 focus:outline-none focus:border-amber-400 focus:bg-white/30 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-amber-200 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-amber-600/50 rounded-lg text-white placeholder-amber-300 focus:outline-none focus:border-amber-400 focus:bg-white/30 transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-amber-200 mb-2">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-amber-600/50 rounded-lg text-white placeholder-amber-300 focus:outline-none focus:border-amber-400 focus:bg-white/30 transition-all resize-none"
                                            placeholder="Tell us about your health concerns..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-amber-700/50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-amber-200" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">Visit Us</h4>
                                            <p className="text-amber-200">123 Wellness Street, Ayurveda Nagar, Bangalore, Karnataka 560001</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-amber-700/50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-amber-200" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">Call Us</h4>
                                            <p className="text-amber-200">+91 98765 43210</p>
                                            <p className="text-amber-200">+91 87654 32109</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-amber-700/50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-amber-200" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">Email Us</h4>
                                            <p className="text-amber-200">info@traditionalsiddha.com</p>
                                            <p className="text-amber-200">appointments@traditionalsiddha.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-amber-700/50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-amber-200" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">Working Hours</h4>
                                            <p className="text-amber-200">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                            <p className="text-amber-200">Sunday: 10:00 AM - 2:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center">
                                <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Book an Appointment</h3>
                                <p className="text-amber-100 mb-6">Schedule your consultation online and save 10% on your first visit</p>
                                <button className="px-8 py-3 bg-white text-amber-800 font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
        </div>
    );
};

export default HomePage;