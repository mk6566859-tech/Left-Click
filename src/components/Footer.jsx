import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-charcoal text-paper rounded-t-[3.5rem] sm:rounded-t-[4rem] pt-16 sm:pt-24 pb-12 px-6 sm:px-12 md:px-20 border-t border-white/10 mt-12 relative overflow-hidden">
      {/* Background Subtle Noise Texture */}
      <div className="max-w-7xl mx-auto">
        
        {/* Pre-footer Callout */}
        <div className="pb-16 mb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="text-xs font-mono text-signal uppercase tracking-widest mb-3">
              ZERO RISK &bull; MAXIMUM CONVERSION
            </div>
            <h3 className="font-drama italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Ready to engineer your sovereign pipeline?
            </h3>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-magnetic px-8 py-4 rounded-full bg-signal text-white font-mono text-xs uppercase tracking-wider font-bold shadow-xl shadow-signal/30 shrink-0"
          >
            <span className="btn-slide-bg bg-signal-hover" />
            <span className="btn-content">
              Book a Growth Mapping Call
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </span>
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 font-sans font-bold tracking-tight text-xl text-white">
              <div className="w-7 h-7 rounded-lg bg-signal flex items-center justify-center text-white text-xs font-mono font-bold">
                LC
              </div>
              <span>LEFT CLICK</span>
            </div>
            <p className="text-xs sm:text-sm text-paper/60 font-sans leading-relaxed max-w-sm">
              We help high-growth B2B companies scale pipeline and revenue using sovereign cold email infrastructure, predictive buying triggers, and conversion-engineered angles.
            </p>
            <div className="text-xs font-mono text-paper/40">
              EST. 2024 &bull; PRECISION TELEMETRY ENGINE
            </div>
          </div>

          {/* Nav Column 1: Artifacts */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-signal font-bold">
              Artifacts
            </div>
            <ul className="space-y-2 text-xs font-mono text-paper/70">
              <li><a href="#artifacts" className="hover:text-white transition-colors">Diagnostic Shuffler</a></li>
              <li><a href="#artifacts" className="hover:text-white transition-colors">Telemetry Typewriter</a></li>
              <li><a href="#artifacts" className="hover:text-white transition-colors">Cursor Protocol Scheduler</a></li>
              <li><a href="#artifacts" className="hover:text-white transition-colors">Cluster Isolation Matrix</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Protocol */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-signal font-bold">
              Architecture
            </div>
            <ul className="space-y-2 text-xs font-mono text-paper/70">
              <li><a href="#protocol" className="hover:text-white transition-colors">Sovereign Domain Pools</a></li>
              <li><a href="#protocol" className="hover:text-white transition-colors">Waterfall Enrichment</a></li>
              <li><a href="#protocol" className="hover:text-white transition-colors">DNS Quarantine Shield</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">The Manifesto</a></li>
            </ul>
          </div>

          {/* Nav Column 3: Engagements */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-signal font-bold">
              Engagements
            </div>
            <ul className="space-y-2 text-xs font-mono text-paper/70">
              <li><a href="#engagements" className="hover:text-white transition-colors">Sprint Engine</a></li>
              <li><a href="#engagements" className="hover:text-white transition-colors">Scale Matrix</a></li>
              <li><a href="#engagements" className="hover:text-white transition-colors">Sovereign Enterprise</a></li>
              <li><a href="#engagements" className="hover:text-white transition-colors">Performance Guarantee</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Required "System Operational" Status Indicator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-paper/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold">SYSTEM OPERATIONAL</span>
            <span className="text-paper/30">//</span>
            <span className="text-paper/60">REPUTATION: 99.8%</span>
            <span className="hidden md:inline text-paper/30">//</span>
            <span className="hidden md:inline text-paper/60">NODES: 1,480</span>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-6 text-xs font-mono text-paper/50">
            <span>&copy; {new Date().getFullYear()} Left Click Inc. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="text-paper/70 hover:text-signal transition-colors underline underline-offset-4"
            >
              Top of Matrix &uarr;
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
