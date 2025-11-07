'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Leaf, Sparkles, Shield, Clock, ChevronRight, CheckCircle, ArrowRight, Calendar, Star, Activity, Brain, Baby, Users, Weight, Droplets } from 'lucide-react';
import Image from 'next/image';

const ServicesPage: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeService, setActiveService] = useState<number | null>(null);
    const [activeTreatment, setActiveTreatment] = useState<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const healthConditions = [
        {
            id: 1,
            title: "Respiratory Disorders",
            icon: <Activity className="w-8 h-8" />,
            description: "Natural treatments for asthma, bronchitis, allergies, and other respiratory conditions using herbal formulations and breathing techniques.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Ortho & Joint Problems",
            icon: <Shield className="w-8 h-8" />,
            description: "Effective remedies for arthritis, back pain, joint stiffness, and musculoskeletal disorders through herbal medicines and therapies.",
            color: "from-amber-500 to-orange-500"
        },
        {
            id: 3,
            title: "Skin Diseases",
            icon: <Sparkles className="w-8 h-8" />,
            description: "Holistic approach to eczema, psoriasis, acne, and other skin conditions using internal medications and external applications.",
            color: "from-pink-500 to-rose-500"
        },
        {
            id: 4,
            title: "Gynaecology Disorders",
            icon: <Heart className="w-8 h-8" />,
            description: "Specialized treatments for menstrual problems, PCOS, fibroids, and other women's health issues with personalized care.",
            color: "from-purple-500 to-indigo-500"
        },
        {
            id: 5,
            title: "Paediatric Problems",
            icon: <Baby className="w-8 h-8" />,
            description: "Gentle and effective remedies for common childhood ailments, immunity building, and overall development using safe herbal preparations.",
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 6,
            title: "Infertility & Sexual Problems",
            icon: <Users className="w-8 h-8" />,
            description: "Confidential and effective treatments for reproductive health issues, enhancing fertility and addressing sexual wellness concerns.",
            color: "from-red-500 to-pink-500"
        },
        {
            id: 7,
            title: "Neurological Disorders",
            icon: <Brain className="w-8 h-8" />,
            description: "Comprehensive care for paralysis, migraine, neuropathy, and other neurological conditions through specialized therapies.",
            color: "from-violet-500 to-purple-500"
        },
        {
            id: 8,
            title: "Life Style Disorders",
            icon: <Clock className="w-8 h-8" />,
            description: "Management of diabetes, hypertension, thyroid issues, and other modern lifestyle diseases through diet, herbs, and therapies.",
            color: "from-teal-500 to-cyan-500"
        },
        {
            id: 9,
            title: "Obesity",
            icon: <Weight className="w-8 h-8" />,
            description: "Scientifically-proven weight management programs combining diet, exercise, herbal medicines, and specialized treatments.",
            color: "from-orange-500 to-red-500"
        }
    ];

    const treatmentMethods = [
        {
            id: 1,
            title: "Varmam & Yoga",
            icon: <Activity className="w-8 h-8" />,
            description: "Ancient healing art that stimulates vital points combined with therapeutic yoga postures for holistic wellness.",
            isSpecial: true,
            color: "from-indigo-500 to-purple-500"
        },
        {
            id: 2,
            title: "Weight Loss Program",
            icon: <Weight className="w-8 h-8" />,
            description: "Comprehensive 3-month program including personalized diet, herbal medicines, and specialized therapies for sustainable weight loss.",
            isSpecial: true,
            color: "from-orange-500 to-red-500"
        },
        {
            id: 3,
            title: "SPA Therapy",
            icon: <Droplets className="w-8 h-8" />,
            description: "Relaxing and rejuvenating treatments using herbal oils and natural ingredients to refresh your body and mind.",
            isSpecial: true,
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 4,
            title: "Panchakarma Therapy",
            icon: <Leaf className="w-8 h-8" />,
            description: "Detoxification program that eliminates toxins from the body through five primary purification procedures.",
            isSpecial: false,
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 5,
            title: "Steam Therapy",
            icon: <Droplets className="w-8 h-8" />,
            description: "Therapeutic steam treatment that opens pores, improves circulation, and helps eliminate toxins through sweat.",
            isSpecial: false,
            color: "from-teal-500 to-cyan-500"
        },
        {
            id: 6,
            title: "Herbal Massage",
            icon: <Heart className="w-8 h-8" />,
            description: "Therapeutic massage using medicated oils tailored to your body type to relieve pain, improve circulation, and relax muscles.",
            isSpecial: false,
            color: "from-amber-500 to-orange-500"
        },
        {
            id: 7,
            title: "Udwarthana",
            icon: <Activity className="w-8 h-8" />,
            description: "Specialized dry powder massage that reduces excess fat, improves skin complexion, and strengthens the body.",
            isSpecial: false,
            color: "from-yellow-500 to-amber-500"
        },
        {
            id: 8,
            title: "Vasthi",
            icon: <Droplets className="w-8 h-8" />,
            description: "Medicated enema therapy that cleanses the colon, nourishes the body, and treats various chronic conditions.",
            isSpecial: false,
            color: "from-blue-500 to-indigo-500"
        },
        {
            id: 9,
            title: "Acupuncture",
            icon: <Sparkles className="w-8 h-8" />,
            description: "Ancient Chinese therapy that stimulates specific points on the body to balance energy flow and promote healing.",
            isSpecial: false,
            color: "from-red-500 to-pink-500"
        },
        {
            id: 10,
            title: "Kaya Karpam",
            icon: <Shield className="w-8 h-8" />,
            description: "Rejuvenation therapy that slows down the aging process, enhances immunity, and promotes longevity.",
            isSpecial: false,
            color: "from-purple-500 to-indigo-500"
        }
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
                            <Leaf className="w-5 h-5 mr-2 text-yellow-300" />
                            <span className="text-sm font-medium">Our Healing Services</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Ancient Wisdom for
                            <span className="block text-yellow-300">Modern Wellness</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-12">
                            Experience the power of traditional healing through our comprehensive range of Ayurvedic treatments and therapies.
                        </p>

                        <button className="group inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                            Book Consultation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Health Conditions Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                            <Heart className="w-5 h-5 mr-2 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">Health Conditions We Treat</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            Holistic Care for Various Health Concerns
                        </h2>

                        <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                            Our experienced practitioners provide personalized treatments for a wide range of health conditions using authentic Ayurvedic approaches.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {healthConditions.map((condition) => (
                            <div
                                key={condition.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 overflow-hidden cursor-pointer"
                                onClick={() => setActiveService(activeService === condition.id ? null : condition.id)}
                                style={{ transform: `perspective(1000px) rotateY(${mousePosition.x * 0.005 * (condition.id % 2 === 0 ? 1 : -1)}deg)` }}
                            >
                                <div className={`h-2 bg-gradient-to-r ${condition.color}`}></div>
                                <div className="p-8">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${condition.color} rounded-full flex items-center justify-center text-white mb-6`}>
                                        {condition.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-amber-900 mb-4">{condition.title}</h3>

                                    <p className={`text-amber-700 transition-all duration-300 ${activeService === condition.id ? '' : 'line-clamp-3'}`}>
                                        {condition.description}
                                    </p>

                                    <div className={`mt-4 flex items-center text-amber-600 font-medium transition-all duration-300 ${activeService === condition.id ? 'rotate-180' : ''}`}>
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Treatment Methods Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-orange-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-5 h-5 mr-2 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">Our Special Treatment Methods</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            Authentic Therapies for Complete Healing
                        </h2>

                        <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                            Discover our specialized treatment methods that combine ancient wisdom with modern understanding for optimal health benefits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {treatmentMethods.map((treatment) => (
                            <div
                                key={treatment.id}
                                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 overflow-hidden cursor-pointer relative ${treatment.isSpecial ? 'ring-2 ring-amber-400' : ''}`}
                                onClick={() => setActiveTreatment(activeTreatment === treatment.id ? null : treatment.id)}
                                style={{ transform: `perspective(1000px) rotateY(${mousePosition.x * 0.005 * (treatment.id % 2 === 0 ? 1 : -1)}deg)` }}
                            >
                                {treatment.isSpecial && (
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                        SPECIAL
                                    </div>
                                )}

                                <div className={`h-2 bg-gradient-to-r ${treatment.color}`}></div>
                                <div className="p-8">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${treatment.color} rounded-full flex items-center justify-center text-white mb-6`}>
                                        {treatment.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-amber-900 mb-4">{treatment.title}</h3>

                                    <p className={`text-amber-700 transition-all duration-300 ${activeTreatment === treatment.id ? '' : 'line-clamp-3'}`}>
                                        {treatment.description}
                                    </p>

                                    <div className={`mt-4 flex items-center text-amber-600 font-medium transition-all duration-300 ${activeTreatment === treatment.id ? 'rotate-180' : ''}`}>
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatment Process Section */}
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Treatment Process</h2>
                                <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                                    Experience a systematic approach to healing that addresses the root cause of your health concerns.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold">1</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                                    <p className="text-amber-200">Detailed assessment of your health concerns and body constitution</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold">2</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Diagnosis</h3>
                                    <p className="text-amber-200">Identifying the root cause through traditional diagnostic methods</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold">3</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Treatment</h3>
                                    <p className="text-amber-200">Personalized therapy plan with herbal medicines and treatments</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold">4</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Follow-up</h3>
                                    <p className="text-amber-200">Regular monitoring and adjustments to ensure lasting results</p>
                                </div>
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
                            <span className="text-sm font-medium text-amber-800">Patient Success Stories</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                            Hear From Our Patients
                        </h2>

                        <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                            Real experiences from people who have found relief and healing through our treatments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-amber-800 mb-6 italic">
                                &quot;The Panchakarma therapy completely transformed my health. After years of joint pain, I can now move freely without discomfort.&quot;
                            </p>
                            <div className="flex items-center">
                                <Image
                                    src="https://i.imgur.com/3VwXK3E.jpg"
                                    alt="Patient"
                                    width={50}
                                    height={50}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-amber-900">Rajesh Kumar</h4>
                                    <p className="text-amber-600 text-sm">Ortho & Joint Treatment</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-amber-800 mb-6 italic">
                                &quot;The weight loss program helped me shed 15 kg in 3 months. I feel more energetic and confident than ever before.&quot;
                            </p>
                            <div className="flex items-center">
                                <Image
                                    src="https://i.imgur.com/4GhT7Yq.jpg"
                                    alt="Patient"
                                    width={50}
                                    height={50}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-amber-900">Anjali Patel</h4>
                                    <p className="text-amber-600 text-sm">Weight Loss Program</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-amber-800 mb-6 italic">
                                &quot;After trying various treatments for my skin condition, the herbal remedies here finally gave me lasting relief.&quot;
                            </p>
                            <div className="flex items-center">
                                <Image
                                    src="https://i.imgur.com/5JhL8pN.jpg"
                                    alt="Patient"
                                    width={50}
                                    height={50}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-amber-900">Priya Sharma</h4>
                                    <p className="text-amber-600 text-sm">Skin Disease Treatment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: `linear-gradient(135deg, #92400e 0%, #ea580c 100%)` }}>
                <div className="container mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Begin Your Healing Journey Today
                    </h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                        Take the first step towards better health. Book a consultation with our experts and experience the transformative power of Ayurveda.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                            <Calendar className="mr-2 w-5 h-5" />
                            Book Your First Consultation
                        </button>
                        <button className="flex items-center justify-center px-8 py-4 bg-amber-800/50 backdrop-blur-sm hover:bg-amber-800/70 text-white font-bold rounded-lg transition-all duration-300">
                            <CheckCircle className="mr-2 w-5 h-5" />
                            View Treatment Plans
                        </button>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
};

export default ServicesPage;