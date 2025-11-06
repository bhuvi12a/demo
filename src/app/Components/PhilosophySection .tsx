'use client';
import React, { useState } from 'react';
import { Leaf, Heart, Activity, Award } from 'lucide-react';
import Card3D from './Card3D';

export default function PhilosophySection() {
  const [active, setActive] = useState(0);

  const principles = [
    {
      icon: <Leaf className="w-8 h-8 text-amber-700" />,
      title: 'Natural Healing',
      desc: 'We rely on the pure energy of herbs and natural ingredients to restore balance.',
    },
    {
      icon: <Heart className="w-8 h-8 text-amber-700" />,
      title: 'Holistic Approach',
      desc: 'Our treatments target body, mind, and soul for complete wellness.',
    },
    {
      icon: <Activity className="w-8 h-8 text-amber-700" />,
      title: 'Personalized Care',
      desc: 'We design therapies based on your unique body type (Vata, Pitta, Kapha).',
    },
    {
      icon: <Award className="w-8 h-8 text-amber-700" />,
      title: 'Ancient Wisdom',
      desc: 'Rooted in centuries-old Siddha & Ayurvedic knowledge, refined for modern life.',
    },
  ];

  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold font-serif text-amber-900 mb-4">
          Our Philosophy
        </h2>
        <p className="text-amber-700 max-w-3xl mx-auto">
          At Traditional Siddha Ayurveda Clinic, we blend ancient healing with
          modern understanding to promote inner balance and long-term well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
        {principles.map((p, i) => (
          <Card3D
            key={i}
            className={`p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 text-center shadow-lg hover:shadow-xl border border-amber-100 cursor-pointer transition-all duration-300 ${
              active === i ? 'ring-2 ring-amber-500' : ''
            }`}
            onClick={() => setActive(i)}
          >
            <div className="flex justify-center mb-4">{p.icon}</div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              {p.title}
            </h3>
            <p className="text-amber-700 text-sm">{p.desc}</p>
          </Card3D>
        ))}
      </div>

      {/* 3D Cube Display */}
      <div className="flex justify-center mt-16 perspective-[1000px]">
        <div
          className="relative w-48 h-48 transform-gpu"
          style={{ transformStyle: 'preserve-3d', animation: 'rotateCube 8s infinite linear' }}
        >
          {principles.map((p, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white"
              style={{
                transform: `rotateY(${i * 90}deg) translateZ(96px)`,
              }}
            >
              <div className="mb-2">{p.icon}</div>
              <p className="font-semibold text-center text-sm px-2">{p.title}</p>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes rotateCube {
            from {
              transform: rotateY(0deg);
            }
            to {
              transform: rotateY(360deg);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
