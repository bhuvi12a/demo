'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Send, ChevronDown, ChevronUp, CheckCircle, AlertCircle, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';

const ContactPage: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'general',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormError(true);
            setTimeout(() => setFormError(false), 3000);
            return;
        }

        // Simulate form submission
        setFormSubmitted(true);
        setFormError(false);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({ name: '', email: '', phone: '', service: 'general', message: '' });
        }, 5000);
    };

    const faqs = [
        {
            question: "Do I need an appointment for a consultation?",
            answer: "Yes, appointments are highly recommended to ensure our practitioners can dedicate ample time to you. However, we do accept walk-ins for urgent cases based on availability."
        },
        {
            question: "How long does a typical consultation last?",
            answer: "An initial consultation usually lasts between 45 to 60 minutes. This allows our doctors to understand your health concerns in detail and devise a personalized treatment plan."
        },
        {
            question: "Are your herbal medicines safe?",
            answer: "Absolutely. All our medicines are prepared from pure, high-quality herbs following traditional Ayurvedic formulations. They are free from harmful chemicals and have no side effects when taken as prescribed."
        },
        {
            question: "Do you accept health insurance?",
            answer: "We are in the process of getting empaneled with major health insurance providers. Currently, we accept cash and all major digital payment methods. We can provide invoices for insurance reimbursement."
        },
        {
            question: "What should I bring for my first appointment?",
            answer: "Please bring any previous medical records, a list of current medications, and your ID proof. It's best to eat a light meal before your consultation."
        }
    ];

    const services = [
        'General Consultation',
        'Panchakarma Therapy',
        'Herbal Medicine',
        'Yoga & Meditation',
        'Lifestyle Counseling',
        'Women\'s Health',
        'Chronic Pain Management'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden" style={{ background: `linear-gradient(135deg, #92400e 0%, #ea580c 100%)` }}>
                {/* 3D Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute top-20 left-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl transform-gpu"
                        style={{ transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)` }}
                    />
                    <div
                        className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl transform-gpu"
                        style={{ transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, 0)` }}
                    />
                </div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center text-white">
                        <div className="inline-flex items-center bg-amber-700/30 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <Mail className="w-5 h-5 mr-2 text-yellow-300" />
                            <span className="text-sm font-medium">We&apos;re Here to Help</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Get in Touch
                            <span className="block text-yellow-300">Start Your Healing Journey</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-12">
                            Have a question or want to book an appointment? Reach out to us, and our team will get back to you promptly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                                <h2 className="text-3xl font-bold text-amber-900 mb-8">Send Us a Message</h2>

                                {formSubmitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h3>
                                        <p className="text-green-700">Your message has been sent successfully. We will contact you within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {formError && (
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center text-red-700">
                                                <AlertCircle className="w-5 h-5 mr-2" />
                                                <span>Please fill in all required fields.</span>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-amber-800 font-medium mb-2">Your Name *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-amber-800 font-medium mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-amber-800 font-medium mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="service" className="block text-amber-800 font-medium mb-2">Service Interested In</label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                                                >
                                                    {services.map(service => (
                                                        <option key={service} value={service.toLowerCase().replace(' ', '-')}>{service}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-amber-800 font-medium mb-2">Your Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                                                placeholder="Tell us about your health concerns or questions..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl flex items-center justify-center"
                                        >
                                            <Send className="mr-2 w-5 h-5" />
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-amber-800 to-orange-900 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Visit Us</h4>
                                            <p className="text-amber-200 text-sm">123 Wellness Street, Ayurveda Nagar, Bangalore, Karnataka 560001</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Phone className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Call Us</h4>
                                            <p className="text-amber-200 text-sm">+91 98765 43210</p>
                                            <p className="text-amber-200 text-sm">+91 87654 32109</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Mail className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Email Us</h4>
                                            <p className="text-amber-200 text-sm">info@traditionalsiddha.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Clock className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Working Hours</h4>
                                            <p className="text-amber-200 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                            <p className="text-amber-200 text-sm">Sunday: 10:00 AM - 2:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                                <Calendar className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-amber-900 mb-2">Book an Appointment</h3>
                                <p className="text-amber-700 mb-6">Schedule your consultation online and save 10% on your first visit.</p>
                                <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-orange-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Find Us Here</h2>
                        <p className="text-xl text-amber-700">Conveniently located in the heart of the city.</p>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://i.imgur.com/kKfVg3C.png" // Placeholder map image
                            alt="Map Location of Traditional Siddha Ayurveda Clinic"
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent pointer-events-none"></div>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg animate-pulse"
                            style={{ transform: `translate(-50%, -50%) translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0)` }}
                        >
                            <MapPin className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                            <Users className="w-5 h-5 mr-2 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">Frequently Asked Questions</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            Your Questions, Answered
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-amber-50 transition-colors"
                                >
                                    <span className="font-semibold text-amber-900">{faq.question}</span>
                                    {activeFAQ === index ? <ChevronUp className="w-5 h-5 text-amber-600" /> : <ChevronDown className="w-5 h-5 text-amber-600" />}
                                </button>
                                {activeFAQ === index && (
                                    <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
                                        <p className="text-amber-700">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: `linear-gradient(135deg, #92400e 0%, #ea580c 100%)` }}>
                <div className="container mx-auto max-w-7xl text-center">
                    <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Your Path to Wellness Starts Here
                    </h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                        Don&apos;t wait to feel better. Contact us today and let our experts guide you back to balance and health.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                            <Calendar className="mr-2 w-5 h-5" />
                            Book an Appointment
                        </button>
                        <button className="flex items-center justify-center px-8 py-4 bg-amber-800/50 backdrop-blur-sm hover:bg-amber-800/70 text-white font-bold rounded-lg transition-all duration-300">
                            <Phone className="mr-2 w-5 h-5" />
                            Call Now
                        </button>
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

export default ContactPage;