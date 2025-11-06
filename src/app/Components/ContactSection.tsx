'use client';
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Book Your Consultation</h2>
        <p className="text-amber-700">Reach out to begin your healing journey.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto px-4">
        <form className="space-y-4 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-amber-300 p-3 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-amber-300 p-3 rounded-lg"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-amber-300 p-3 rounded-lg h-32"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-amber-600" />
            <p className="text-amber-900">123 Wellness Avenue, Sattva City, India</p>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-amber-600" />
            <p className="text-amber-900">+91 98765 43210</p>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-amber-600" />
            <p className="text-amber-900">info@siddhaayurveda.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
