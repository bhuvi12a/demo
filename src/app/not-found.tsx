'use client';

import React, { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft, RefreshCw, Leaf, Heart, Sparkles, Compass } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would redirect to search results
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col">
            {/* 404 Hero Section */}
            <section className="relative flex-grow flex items-center justify-center py-20 lg:py-32 overflow-hidden" style={{ background: `linear-gradient(135deg, #92400e 0%, #ea580c 100%)` }}>
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
                    <div
                        className="absolute top-1/2 left-1/4 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl transform-gpu"
                        style={{ transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0)` }}
                    />
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-32 left-20 w-16 h-16 bg-amber-200/20 rounded-full flex items-center justify-center transform-gpu"
                        style={{
                            transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`
                        }}
                    >
                        <Leaf className="w-8 h-8 text-amber-300" />
                    </div>

                    <div
                        className="absolute top-40 right-32 w-16 h-16 bg-orange-200/20 rounded-full flex items-center justify-center transform-gpu"
                        style={{
                            transform: `translate3d(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px, 0) rotateY(${mousePosition.x * -0.01}deg) rotateX(${-mousePosition.y * -0.01}deg)`
                        }}
                    >
                        <Heart className="w-8 h-8 text-orange-300" />
                    </div>

                    <div
                        className="absolute bottom-40 left-32 w-16 h-16 bg-yellow-200/20 rounded-full flex items-center justify-center transform-gpu"
                        style={{
                            transform: `translate3d(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px, 0) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`
                        }}
                    >
                        <Sparkles className="w-8 h-8 text-yellow-300" />
                    </div>
                </div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="mb-8">
                        <div className="relative inline-block">
                            <h1 className="text-9xl md:text-[200px] font-bold text-white opacity-20">404</h1>
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                style={{
                                    transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0)`
                                }}
                            >
                                <Compass className="w-32 h-32 md:w-48 md:h-48 text-yellow-300 opacity-60" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Oops! You&apos;ve ventured off the path
                    </h2>

                    <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-12">
                        The page you&apos;re looking for seems to have disappeared into the mist. Let us guide you back to balance and wellness.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mb-12">
                        <form onSubmit={handleSearch} className="flex">
                            <input
                                type="text"
                                placeholder="Search for treatments, products, or information..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-amber-400/50 text-white placeholder-amber-200 rounded-l-lg focus:outline-none focus:bg-white/30 focus:border-amber-300"
                            />
                            <button
                                type="submit"
                                className="bg-amber-600 hover:bg-amber-500 px-6 py-4 rounded-r-lg transition-colors flex items-center justify-center"
                            >
                                <Search className="w-6 h-6 text-white" />
                            </button>
                        </form>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/" className="group flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-xl">
                            <Home className="mr-2 w-5 h-5" />
                            Back to Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="group flex items-center justify-center px-8 py-4 bg-amber-800/50 backdrop-blur-sm hover:bg-amber-800/70 text-white font-bold rounded-lg transition-all duration-300"
                        >
                            <ArrowLeft className="mr-2 w-5 h-5" />
                            Previous Page
                        </button>

                        <Link href="/contact" className="group flex items-center justify-center px-8 py-4 bg-amber-800/50 backdrop-blur-sm hover:bg-amber-800/70 text-white font-bold rounded-lg transition-all duration-300">
                            <Heart className="mr-2 w-5 h-5" />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Helpful Links Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
                            Perhaps you were looking for:
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/about" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-2 p-6 text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-semibold text-amber-900 mb-2">About Us</h4>
                            <p className="text-amber-700 text-sm">Learn about our philosophy and approach to holistic healing</p>
                        </Link>

                        <Link href="/services" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-2 p-6 text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Leaf className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-semibold text-amber-900 mb-2">Our Services</h4>
                            <p className="text-amber-700 text-sm">Explore our range of traditional Ayurvedic treatments</p>
                        </Link>

                        <Link href="/shop" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-2 p-6 text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-semibold text-amber-900 mb-2">Shop</h4>
                            <p className="text-amber-700 text-sm">Browse our authentic herbal medicines and wellness products</p>
                        </Link>

                        <Link href="/contact" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-2 p-6 text-center group">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <RefreshCw className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-semibold text-amber-900 mb-2">Book Consultation</h4>
                            <p className="text-amber-700 text-sm">Schedule an appointment with our expert practitioners</p>
                        </Link>
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

export default NotFoundPage;