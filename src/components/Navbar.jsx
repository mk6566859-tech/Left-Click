import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ShieldAlert, Cpu } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Artifacts', href: '#artifacts' },
    { label: 'Manifesto', href: '#philosophy' },
    { label: 'Protocol', href: '#protocol' },
    { label: 'Engagements', href: '#engagements' },
  ];

  return (
    <>
      <header
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-500 rounded-full ${
          scrolled
            ? 'bg-[#F5F3EE]/85 backdrop-blur-xl border border-charcoal/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-3 px-6 text-charcoal'
            : 'bg-charcoal/30 backdrop-blur-md border border-white/10 py-4 px-7 text-white'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-sans font-bold tracking-tight text-lg group"
          >
            <div className="w-7 h-7 rounded-lg bg-signal flex items-center justify-center text-white text-xs font-mono font-bold transition-transform group-hover:scale-105 group-hover:rotate-3">
              LC
            </div>
            <span className="flex items-center gap-1.5">
              LEFT CLICK
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-ping" />
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`interactive-lift relative py-1 transition-colors duration-200 ${
                  scrolled
                    ? 'text-charcoal/80 hover:text-signal'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="btn-magnetic px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-signal text-white shadow-md hover:shadow-signal/30"
            >
              <span className="btn-slide-bg bg-signal-hover" />
              <span className="btn-content">
                Growth Call
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${scrolled ? 'text-charcoal' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${scrolled ? 'text-charcoal' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 p-6 rounded-[2rem] bg-charcoal/95 backdrop-blur-2xl border border-white/10 text-white md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-mono tracking-widest text-signal uppercase border-b border-white/10 pb-2">
              Navigation Telemetry
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-sans font-medium py-2 hover:text-signal transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-white/40">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-signal text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                <span>Book 30-min Mapping Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
