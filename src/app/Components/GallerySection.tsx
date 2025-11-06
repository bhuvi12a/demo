'use client';
import React, { useState } from 'react';
import { Layers, Grid3x3, Calendar } from 'lucide-react';
import Card3D from './Card3D';

export default function GallerySection() {
  const [view, setView] = useState<'grid' | 'carousel'>('grid');
  const [index, setIndex] = useState(0);

  const images = [
    { title: 'Reception Area', category: 'Clinic' },
    { title: 'Panchakarma Therapy', category: 'Treatment' },
    { title: 'Herbal Medicines', category: 'Herbs' },
    { title: 'Steam Therapy', category: 'Treatment' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Gallery</h2>
        <p className="text-amber-700 max-w-3xl mx-auto">
          Step into our world of healing and tranquility.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white rounded-lg shadow p-1">
          <button
            onClick={() => setView('grid')}
            className={`flex items-center px-4 py-2 rounded-lg ${view === 'grid' ? 'bg-amber-600 text-white' : 'text-amber-800 hover:bg-amber-100'}`}
          >
            <Grid3x3 className="w-5 h-5 mr-2" /> Grid
          </button>
          <button
            onClick={() => setView('carousel')}
            className={`flex items-center px-4 py-2 rounded-lg ${view === 'carousel' ? 'bg-amber-600 text-white' : 'text-amber-800 hover:bg-amber-100'}`}
          >
            <Layers className="w-5 h-5 mr-2" /> Carousel
          </button>
        </div>
      </div>

      {view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4">
          {images.map((img, i) => (
            <Card3D key={i} className="p-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl text-center shadow hover:shadow-xl">
              <Calendar className="w-10 h-10 mx-auto mb-2 text-amber-700" />
              <p className="font-semibold text-amber-900">{img.title}</p>
              <p className="text-sm text-amber-700">{img.category}</p>
            </Card3D>
          ))}
        </div>
      ) : (
        <div className="text-center max-w-2xl mx-auto">
          <Card3D className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-12">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-amber-700" />
            <h3 className="text-2xl font-bold text-amber-900 mb-2">{images[index].title}</h3>
            <p className="text-amber-700">{images[index].category}</p>
          </Card3D>

          <div className="flex justify-between mt-6">
            <button onClick={() => setIndex((index - 1 + images.length) % images.length)} className="text-amber-600 hover:text-orange-700">← Prev</button>
            <button onClick={() => setIndex((index + 1) % images.length)} className="text-amber-600 hover:text-orange-700">Next →</button>
          </div>
        </div>
      )}
    </section>
  );
}
