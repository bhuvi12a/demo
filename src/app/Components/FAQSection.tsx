'use client';
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);
  const faqs = [
    {
      q: 'What is Siddha Ayurveda?',
      a: 'It is an ancient South Indian healing system using natural herbs, oils, and therapies to restore balance.',
    },
    {
      q: 'Are Ayurvedic treatments safe?',
      a: 'Yes. All our herbal formulations are 100% natural and prescribed by certified doctors.',
    },
    {
      q: 'Do you provide personalized diet plans?',
      a: 'Yes, diet and lifestyle plans are tailored based on your unique body constitution.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" id="faq">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">FAQs</h2>
        <p className="text-amber-700">Get answers to common questions about our treatments.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
            <button onClick={() => setActive(active === i ? null : i)} className="flex justify-between items-center w-full">
              <h3 className="text-lg text-amber-900 font-semibold">{f.q}</h3>
              <ChevronRight className={`w-5 h-5 text-amber-600 transition-transform ${active === i ? 'rotate-90' : ''}`} />
            </button>
            {active === i && <p className="text-amber-700 mt-3">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
