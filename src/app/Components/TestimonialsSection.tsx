'use client';
import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import Card3D from './Card3D';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const testimonials = [
    {
      name: 'Rohan K.',
      text: 'After years of pain, Ayurvedic therapy changed my life. I feel younger and lighter.',
    },
    {
      name: 'Priya S.',
      text: 'Panchakarma detox helped me regain balance and focus. The clinic is excellent.',
    },
    {
      name: 'Amit P.',
      text: 'My skin condition improved naturally. Thank you for the personalized treatment.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Patient Testimonials</h2>
        <p className="text-amber-700 max-w-3xl mx-auto">
          Hear from our satisfied patients who experienced true healing.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${active * 100}%)` }}>
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 px-6">
              <Card3D className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg text-center">
                <Quote className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <p className="italic text-amber-800 mb-4">"{t.text}"</p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-amber-900 font-semibold">{t.name}</p>
              </Card3D>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full ${active === i ? 'bg-amber-600 w-8' : 'bg-amber-300'} transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
