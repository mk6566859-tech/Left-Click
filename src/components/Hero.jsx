import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, ShieldCheck, Activity, Terminal } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-badge',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, clearProps: 'all' }
      )
      .fromTo(
        '.hero-verb',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, clearProps: 'all' },
        '-=0.3'
      )
      .fromTo(
        '.hero-noun',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, clearProps: 'all' },
        '-=0.4'
      )
      .fromTo(
        '.hero-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, clearProps: 'all' },
        '-=0.4'
      )
      .fromTo(
        '.hero-cta-group',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, clearProps: 'all' },
        '-=0.3'
      )
      .fromTo(
        '.hero-telemetry-item',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, clearProps: 'all' },
        '-=0.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-6 sm:px-12 md:px-20 flex flex-col justify-between text-white overflow-hidden"
    >
      {/* Background Image with Brutalist Texture matching Preset C */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=2070&auto=format&fit=crop"
          alt="Brutalist architectural structure representing precision engineering"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75 scale-105"
        />
        {/* Heavy Primary to Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-signal/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Grid Pattern Accent Overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Spacer to balance top navbar */}
      <div className="relative z-10 w-full h-2 pointer-events-none" />

      {/* Hero Content pushed to bottom-left third */}
      <div className="relative z-10 max-w-4xl flex flex-col items-start gap-4 sm:gap-6 my-auto">
        
        {/* Telemetry pill */}
        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono text-paper tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
          <span>OUTBOUND INFRASTRUCTURE MATRIX // V2.8 ACTIVE</span>
        </div>

        {/* Hero Line Pattern: [Direct verb] the (Bold Sans) / [System noun]. (Massive Serif Italic) */}
        <div className="leading-[0.95] select-none">
          <h1 className="hero-verb font-sans font-bold uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-paper">
            Engineer the
          </h1>
          <div className="hero-noun font-drama italic tracking-tight text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white mt-1">
            Outbound Pipeline<span className="text-signal font-sans not-italic">.</span>
          </div>
        </div>

        {/* Brand Mission & Subhead */}
        <p className="hero-desc text-base sm:text-lg md:text-xl text-[#DBD6CD] font-sans font-light max-w-2xl leading-relaxed mt-1">
          Left Click helps high-growth B2B companies scale pipeline and revenue using sovereign cold email infrastructure, predictive buying triggers, and conversion-engineered angles.
        </p>

        {/* CTA Group */}
        <div className="hero-cta-group flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
          <button
            onClick={onOpenBooking}
            className="btn-magnetic px-7 sm:px-9 py-4 rounded-full bg-signal text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xl shadow-signal/25"
          >
            <span className="btn-slide-bg bg-signal-hover" />
            <span className="btn-content">
              Book a Growth Mapping Call
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </span>
          </button>

          <span className="text-xs font-mono text-paper/70 tracking-wide flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            30-Min Strategic Audit &bull; Zero Fluff
          </span>
        </div>
      </div>

      {/* Telemetry live status bar */}
      <div className="relative z-10 pt-6 sm:pt-8 w-full border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
        <div className="hero-telemetry-item flex flex-col">
          <span className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">99.4%</span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-paper/60">Primary Inbox Placement</span>
        </div>
        <div className="hero-telemetry-item flex flex-col">
          <span className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">14,200+</span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-paper/60">ICP Leads Enriched/Wk</span>
        </div>
        <div className="hero-telemetry-item flex flex-col">
          <span className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">$48.5M</span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-paper/60">Sourced B2B Pipeline</span>
        </div>
        <div className="hero-telemetry-item flex flex-col">
          <span className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">Zero</span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-paper/60">Main Domain Risk</span>
        </div>
      </div>
    </section>
  );
}
