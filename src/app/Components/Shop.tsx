'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, X, Plus, Star, Package, CheckCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';

// Mock Product Data
const products = [
    {
        id: 1,
        name: "Kashayam - Digestive Bliss",
        category: "Medicines",
        price: 450,
        image: "https://i.imgur.com/8X7Y9Z2.jpg",
        description: "A potent herbal decoction to improve digestion, relieve bloating, and enhance metabolic function.",
        benefits: ["Improves digestion", "Reduces acidity", "Detoxifies the gut"]
    },
    {
        id: 2,
        name: "Dhanwantharam Thailam",
        category: "Oils",
        price: 750,
        image: "https://i.imgur.com/7W6V5U4.jpg",
        description: "A traditional Ayurvedic oil for post-natal care and neuromuscular disorders.",
        benefits: ["Relieves joint pain", "Strengthens muscles", "Improves circulation"]
    },
    {
        id: 3,
        name: "Chyawanprash - Immunity Booster",
        category: "Supplements",
        price: 350,
        image: "https://i.imgur.com/6T4S3R1.jpg",
        description: "A classic herbal jam rich in Amla and over 40 herbs to boost immunity and vitality.",
        benefits: ["Enhances immunity", "Rejuvenates the body", "Improves respiratory health"]
    },
    {
        id: 4,
        name: "Kumkumadi Tailam - Skin Glow Oil",
        category: "Oils",
        price: 1200,
        image: "https://i.imgur.com/5Q3P2O0.jpg",
        description: "A luxurious facial oil for glowing skin, reducing blemishes and improving complexion.",
        benefits: ["Radiant skin", "Reduces acne & scars", "Anti-aging properties"]
    },
    {
        id: 5,
        name: "Ashwagandha Capsules",
        category: "Supplements",
        price: 550,
        image: "https://i.imgur.com/4R2Q1N9.jpg",
        description: "Pure Ashwagandha root extract capsules to combat stress and improve energy levels.",
        benefits: ["Reduces stress", "Boosts energy", "Enhances stamina"]
    },
    {
        id: 6,
        name: "Nasya Oil - Sinus Relief",
        category: "Oils",
        price: 400,
        image: "https://i.imgur.com/3P1O0M8.jpg",
        description: "Medicated nasal drops for clear sinuses, relief from headaches, and improved mental clarity.",
        benefits: ["Clears sinuses", "Relieves migraines", "Sharpens senses"]
    }
];

const ShopPage: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cart, setCart] = useState<typeof products[0][]>([]);
    const [activeFilter, setActiveFilter] = useState('All');

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pincode: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const openInquiryModal = (product: typeof products[0]) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
        setFormSubmitted(false);
        setFormError(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        setFormData({ name: '', email: '', phone: '', addressLine1: '', addressLine2: '', city: '', state: '', pincode: '', message: '' });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.addressLine1 || !formData.city || !formData.state || !formData.pincode || !formData.message) {
            setFormError(true);
            setTimeout(() => setFormError(false), 3000);
            return;
        }
        // Simulate form submission
        setFormSubmitted(true);
        setTimeout(() => {
            closeModal();
        }, 3000);
    };

    const addToCart = (product: typeof products[0]) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                // For simplicity, just add it again. A real cart would handle quantity.
                return [...prevCart, product];
            }
            return [...prevCart, product];
        });
    };

    const removeFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const filteredProducts = activeFilter === 'All'
        ? products
        : products.filter(p => p.category === activeFilter);

    const categories = ['All', ...new Set(products.map(p => p.category))];

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
                            <Package className="w-5 h-5 mr-2 text-yellow-300" />
                            <span className="text-sm font-medium">Authentic Ayurvedic Store</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Pure Wellness,
                            <span className="block text-yellow-300">Delivered to Your Door</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-12">
                            Explore our curated selection of authentic herbal medicines, oils, and supplements, prepared with care following ancient traditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Floating Cart Button */}
            <button
                onClick={() => setIsCartOpen(true)}
                className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform-gpu hover:scale-110 group"
            >
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-amber-900 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                        {cart.length}
                    </span>
                )}
            </button>

            {/* Shopping Cart Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 border-b border-amber-200 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-amber-900">Your Cart</h2>
                    <button onClick={() => setIsCartOpen(false)} className="text-amber-600 hover:text-amber-800">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    {cart.length === 0 ? (
                        <p className="text-amber-700 text-center">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 bg-amber-50 p-3 rounded-lg">
                                    <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-amber-900 text-sm">{item.name}</h4>
                                        <p className="text-amber-600 text-sm">₹{item.price}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="p-6 border-t border-amber-200">
                        <div className="flex justify-between mb-4">
                            <span className="font-bold text-amber-900">Total:</span>
                            <span className="font-bold text-amber-900">₹{getTotalPrice()}</span>
                        </div>
                        <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-3 rounded-lg hover:from-amber-500 hover:to-orange-500 transition-all">
                            Proceed to Inquiry
                        </button>
                    </div>
                )}
            </div>

            {/* Main Shop Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                                    : 'bg-white text-amber-700 hover:bg-amber-100 shadow'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 overflow-hidden group"
                                style={{ transform: `perspective(1000px) rotateY(${mousePosition.x * 0.005 * (product.id % 2 === 0 ? 1 : -1)}deg)` }}
                            >
                                <div className="relative overflow-hidden h-48">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {product.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
                                    <p className="text-amber-700 text-sm mb-4 line-clamp-2">{product.description}</p>

                                    <div className="flex items-center mb-4">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm text-amber-600 ml-2">(5.0)</span>
                                    </div>

                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-bold text-amber-900">₹{product.price}</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => openInquiryModal(product)}
                                            className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold py-2 rounded-lg transition-all duration-300 transform-gpu hover:scale-105"
                                        >
                                            Inquire Now
                                        </button>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="p-2 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors"
                                        >
                                            <Plus className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry Modal */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform-gpu transition-all">
                        {/* Modal Header */}
                        <div className="relative p-6 border-b border-amber-200">
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 text-amber-600 hover:text-amber-800 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="flex items-center space-x-4">
                                <Image src={selectedProduct.image} alt={selectedProduct.name} width={80} height={80} className="rounded-lg object-cover" />
                                <div>
                                    <h2 className="text-2xl font-bold text-amber-900">Inquire About: {selectedProduct.name}</h2>
                                    <p className="text-amber-700">{selectedProduct.description}</p>
                                    <p className="text-xl font-bold text-amber-900 mt-2">Price: ₹{selectedProduct.price}</p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            {formSubmitted ? (
                                <div className="text-center py-8">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Thank You for Your Inquiry!</h3>
                                    <p className="text-green-700">We have received your details and will contact you within 24 hours to complete your order.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    {formError && (
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center text-red-700">
                                            <AlertCircle className="w-5 h-5 mr-2" />
                                            <span>Please fill in all required fields.</span>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-amber-800 font-medium mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                                                className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-amber-800 font-medium mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="addressLine1" className="block text-amber-800 font-medium mb-2">Address Line 1 *</label>
                                        <input
                                            type="text"
                                            id="addressLine1"
                                            name="addressLine1"
                                            value={formData.addressLine1}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            placeholder="123 Wellness Street"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="addressLine2" className="block text-amber-800 font-medium mb-2">Address Line 2 (Optional)</label>
                                        <input
                                            type="text"
                                            id="addressLine2"
                                            name="addressLine2"
                                            value={formData.addressLine2}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            placeholder="Apartment, Suite, etc."
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label htmlFor="city" className="block text-amber-800 font-medium mb-2">City *</label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                                placeholder="Bangalore"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="state" className="block text-amber-800 font-medium mb-2">State *</label>
                                            <input
                                                type="text"
                                                id="state"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                                placeholder="Karnataka"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="pincode" className="block text-amber-800 font-medium mb-2">Pincode *</label>
                                            <input
                                                type="text"
                                                id="pincode"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                                placeholder="560001"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-amber-800 font-medium mb-2">Additional Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={3}
                                            className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                                            placeholder="Any specific questions or requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform-gpu hover:scale-105"
                                    >
                                        Submit Inquiry
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
};

export default ShopPage;