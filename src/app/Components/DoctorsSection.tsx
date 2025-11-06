'use client';
import React from 'react';
import Card3D from './Card3D';
import { Star } from 'lucide-react';

export default function DoctorsSection() {
  const doctors = [
    {
      name: 'Dr. B. Vikesh, MD (S)',
      specialty: 'Ortho, Skin & Respiratory Problems',
      experience: '15+ years',
    },
    {
      name: 'Dr. S. Thanikai Selvi, MD (S)',
      specialty: 'Infertility & Gynaecology Problems',
      experience: '12+ years',
    },
    {
      name: 'Dr. A. Silambarasan, MD (S)',
      specialty: 'Paediatric & Lifestyle Disorders',
      experience: '10+ years',
    },
    {
      name: 'Dr. K. Chenthil, BAMS',
      specialty: 'Specialist in Panchakarma & Ayurveda',
      experience: '8+ years',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Expert Team</h2>
        <p className="text-amber-700 max-w-3xl mx-auto">
          Meet our experienced Ayurvedic specialists who guide you toward holistic healing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
        {doctors.map((doc, i) => (
          <Card3D
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 text-center border border-amber-100"
          >
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-amber-700">{doc.name[4]}</span>
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2">{doc.name}</h3>
            <p className="text-sm text-amber-700 mb-2">{doc.specialty}</p>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-amber-600">{doc.experience}</p>
          </Card3D>
        ))}
      </div>
    </section>
  );
}
