import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import GrowthModal from './components/GrowthModal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative min-h-screen bg-offwhite text-charcoal font-sans selection:bg-signal selection:text-white">
      {/* Global CSS Noise Overlay via SVG filter at 0.05 opacity */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Floating Island Navbar */}
      <Navbar onOpenBooking={openBooking} />

      {/* Main Page Flow */}
      <main>
        {/* Section A: Hero */}
        <Hero onOpenBooking={openBooking} />

        {/* Section B: Features / Interactive Functional Artifacts */}
        <Features onOpenBooking={openBooking} />

        {/* Section C: Philosophy / The Manifesto */}
        <Philosophy onOpenBooking={openBooking} />

        {/* Section D: Protocol / Sticky Stacking Archive */}
        <Protocol onOpenBooking={openBooking} />

        {/* Section E: Engagements & Pricing */}
        <Pricing onOpenBooking={openBooking} />
      </main>

      {/* Section F: Footer with System Operational status */}
      <Footer onOpenBooking={openBooking} />

      {/* Interactive Growth Consultation Booking Modal */}
      <GrowthModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
