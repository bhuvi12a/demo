'use client';
import React, { useState } from 'react';
import Card3D from './Card3D';
import { Activity, Zap, ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      name: 'Treatments',
      icon: <Activity className="w-5 h-5" />,
      services: [
        'Respiratory Disorders',
        'Skin Problems',
        'Joint & Ortho Pain',
        'Gynaecology Issues',
        'Paediatric Treatments',
        'Infertility & Sexual Health',
        'Lifestyle Disorders',
      ],
    },
    {
      name: 'Therapies',
      icon: <Zap className="w-5 h-5" />,
      services: [
        'Varmam & Yoga Therapy',
        'Panchakarma Detox',
        'Steam & Herbal Therapy',
        'SPA Rejuvenation',
        'Kaya Karpam Therapy',
        'Udvarthana Herbal Massage',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Services</h2>
        <p className="text-amber-700 max-w-3xl mx-auto">
          Experience authentic Ayurvedic treatments designed for balance and wellness.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-amber-100 rounded-lg p-1">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 font-medium transition-all duration-300 ${
                i === activeTab ? 'bg-white shadow-md text-amber-700' : 'text-amber-800 hover:bg-amber-200'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {categories[activeTab].services.map((srv, i) => (
          <Card3D
            key={i}
            className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center">
              <span className="text-amber-900 font-semibold">{srv}</span>
              <ChevronRight className="w-5 h-5 text-amber-600" />
            </div>
          </Card3D>
        ))}
      </div>
    </section>
  );
}
