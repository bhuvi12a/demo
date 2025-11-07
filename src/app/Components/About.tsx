'use client';

import React, { useState, useEffect } from 'react';
import { Users, Heart, Leaf, Calendar, MapPin, Phone, Shield, Sparkles, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const timeline = [
        { year: '1998', title: 'The Beginning', description: 'Dr. Ravi Kumar establishes a small clinic with a vision to bring authentic Ayurveda to the community.' },
        { year: '2005', title: 'Expansion', description: 'Moved to a larger facility to accommodate growing demand and introduced Panchakarma therapies.' },
        { year: '2015', title: 'Recognition', description: 'Awarded "Best Ayurvedic Clinic" by the National Wellness Association.' },
        { year: '2024', title: 'Digital Presence', description: 'Launched our new website to reach and help more people on their wellness journey.' }
    ];

    const philosophies = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Holistic Healing",
            description: "We treat the person as a whole—body, mind, and spirit—not just isolated symptoms."
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Purity of Nature",
            description: "All our medicines are derived from pure, sustainably sourced herbs, free from chemicals."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Personalized Care",
            description: "Every individual is unique. We create custom treatment plans based on your specific constitution (Prakriti)."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Ancient Wisdom",
            description: "Our practices are rooted in centuries-old scriptures, ensuring time-tested and authentic treatments."
        }
    ];

    const team = [
        {
            name: "Dr. Ravi Kumar",
            title: "Founder & Chief Ayurvedic Physician",
            image: "https://i.imgur.com/9X8Z3Qm.png",
            experience: "25+ Years",
            education: "BAMS, MD (Ayurveda)"
        },
        {
            name: "Dr. Anjali Nair",
            title: "Senior Panchakarma Specialist",
            image: "https://i.imgur.com/3VwXK3E.jpg",
            experience: "15+ Years",
            education: "BAMS, Diploma in Panchakarma"
        },
        {
            name: "Dr. Vinod Patel",
            title: "Herbal Medicine Expert",
            image: "https://i.imgur.com/4GhT7Yq.jpg",
            experience: "12+ Years",
            education: "BAMS, PhD in Dravyaguna"
        },
        {
            name: "Meera Desai",
            title: "Yoga & Meditation Instructor",
            image: "https://i.imgur.com/5JhL8pN.jpg",
            experience: "10+ Years",
            education: "MA (Yoga), Certified Yoga Therapist"
        }
    ];

    const clinicImages = [
        { src: "https://i.imgur.com/8X7Y9Z2.jpg", alt: "Serene Reception Area" },
        { src: "https://i.imgur.com/7W6V5U4.jpg", alt: "Traditional Panchakarma Room" },
        { src: "https://i.imgur.com/6T4S3R1.jpg", alt: "Herbal Pharmacy" },
        { src: "https://i.imgur.com/5Q3P2O0.jpg", alt: "Meditation Hall" },
        { src: "https://i.imgur.com/4R2Q1N9.jpg", alt: "Consultation Room" },
        { src: "https://i.imgur.com/3P1O0M8.jpg", alt: "Therapeutic Garden" }
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
                            <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
                            <span className="text-sm font-medium">Get to Know Us</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Our Journey of
                            <span className="block text-yellow-300">Ancient Healing</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto mb-12">
                            For over two decades, we have been a sanctuary of wellness, dedicated to restoring balance and vitality through the profound science of Ayurveda.
                        </p>

                        <button className="group inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                            Meet Our Team
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                                <Clock className="w-5 h-5 mr-2 text-amber-600" />
                                <span className="text-sm font-medium text-amber-800">Our Legacy</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                                A Tradition of Trust and Healing
                            </h2>

                            <p className="text-lg text-amber-700 mb-6">
                                The Traditional Siddha Ayurveda Clinic was born from a deep-rooted belief in the power of nature to heal. Our founder, Dr. Ravi Kumar, a third-generation Vaidya, envisioned a place where ancient wisdom could meet modern needs without compromise.
                            </p>

                            <p className="text-lg text-amber-700 mb-8">
                                What started in a small room in 1998 has blossomed into a comprehensive wellness center, touching over 10,000 lives. Our journey is a testament to the efficacy of Ayurveda and the trust our patients place in us.
                            </p>

                            <blockquote className="border-l-4 border-amber-600 pl-6 py-2 bg-amber-50 rounded-r-lg">
                                <p className="text-amber-800 italic text-lg mb-2">
                                    &quot;We don&apos;t just treat diseases; we restore balance. The body has an incredible ability to heal itself when given the right support.&quot;
                                </p>
                                <p className="text-amber-600 font-semibold">- Dr. Ravi Kumar</p>
                            </blockquote>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://i.imgur.com/7W6V5U4.jpg"
                                    alt="Dr. Ravi Kumar with a patient"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div
                                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-600 to-orange-600 text-white p-6 rounded-2xl shadow-xl transform-gpu hover:scale-105 transition-transform"
                                style={{ transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)` }}
                            >
                                <p className="text-3xl font-bold mb-1">10,000+</p>
                                <p className="text-amber-100">Lives Transformed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-orange-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            Our Milestones
                        </h2>
                        <p className="text-xl text-amber-700">A journey of growth, learning, and healing.</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400"></div>

                        {timeline.map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="w-full md:w-5/12"></div>
                                <div className="w-full md:w-2/12 flex justify-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                    <span className="text-amber-600 font-bold">{item.year}</span>
                                    <h3 className="text-xl font-bold text-amber-900 mb-2">{item.title}</h3>
                                    <p className="text-amber-700">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Philosophy Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-gradient-to-br from-amber-800 to-orange-900 rounded-3xl p-12 text-white relative overflow-hidden">
                        {/* Background Elements */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl transform-gpu"
                            style={{ transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)` }}
                        />
                        <div
                            className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl transform-gpu"
                            style={{ transform: `translate3d(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px, 0)` }}
                        />

                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Guiding Philosophy</h2>
                                <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                                    The principles that guide every treatment, every consultation, and every interaction at our clinic.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {philosophies.map((philosophy, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-20 h-20 bg-amber-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            {philosophy.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{philosophy.title}</h3>
                                        <p className="text-amber-200">{philosophy.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-orange-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                            <Users className="w-5 h-5 mr-2 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">Our Healers</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            Meet Our Expert Team
                        </h2>

                        <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                            Our dedicated team of practitioners brings decades of combined experience in authentic Ayurvedic healing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 text-center group"
                                style={{ transform: `perspective(1000px) rotateY(${mousePosition.x * 0.005 * (index % 2 === 0 ? 1 : -1)}deg)` }}
                            >
                                <div className="relative overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-amber-900 mb-1">{member.name}</h3>
                                    <p className="text-amber-600 text-sm mb-4">{member.title}</p>

                                    <div className="text-sm text-amber-700 space-y-1">
                                        <p><span className="font-semibold">Experience:</span> {member.experience}</p>
                                        <p><span className="font-semibold">Education:</span> {member.education}</p>
                                    </div>

                                    <button className="mt-4 w-full px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium rounded-lg transition-colors">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Clinic Space Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                            <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">Our Space</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            A Sanctuary for Healing
                        </h2>

                        <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                            Step into our serene and thoughtfully designed clinic, where every element is crafted to promote peace and healing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clinicImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                                style={{ transform: `perspective(1000px) rotateY(${mousePosition.x * 0.005 * (index % 2 === 0 ? 1 : -1)}deg)` }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-semibold">{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: `linear-gradient(135deg, #92400e 0%, #ea580c 100%)` }}>
                <div className="container mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Begin Your Wellness Journey?
                    </h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                        Take the first step towards a healthier, more balanced life. Our team is here to guide you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                            <Calendar className="mr-2 w-5 h-5" />
                            Book Your First Consultation
                        </button>
                        <button className="flex items-center justify-center px-8 py-4 bg-amber-800/50 backdrop-blur-sm hover:bg-amber-800/70 text-white font-bold rounded-lg transition-all duration-300">
                            <Phone className="mr-2 w-5 h-5" />
                            Call Us Now
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

export default AboutPage;