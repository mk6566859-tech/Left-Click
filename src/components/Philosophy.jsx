import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, ShieldCheck, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy({ onOpenBooking }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal timeline triggered by scroll
      gsap.fromTo(
        '.manifesto-intro',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.manifesto-intro',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      gsap.fromTo(
        '.manifesto-line-1',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.manifesto-line-1',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      gsap.fromTo(
        '.manifesto-line-2',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.manifesto-line-2',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      gsap.fromTo(
        '.manifesto-card',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.manifesto-card-grid',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative w-full bg-charcoal text-paper py-28 sm:py-36 px-6 sm:px-12 md:px-20 overflow-hidden"
    >
      {/* Background Texture Image with Parallax & Low Opacity matching imageMood */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
          alt="Brutalist textured concrete surface"
          className="w-full h-full object-cover filter contrast-150"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Label */}
        <div className="manifesto-intro inline-flex items-center gap-2 text-xs font-mono text-signal uppercase tracking-widest mb-10 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Flame className="w-3.5 h-3.5" />
          <span>SECTION 02 // THE PHILOSOPHY</span>
        </div>

        {/* The Two Contrasting Statements */}
        <div className="space-y-12 mb-20 sm:mb-28">
          
          {/* Statement 1: The Common Trap */}
          <div className="manifesto-line-1 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-paper/40 block mb-3">
              The Industry Flaw
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-sans font-normal text-paper/60 leading-relaxed">
              Most outbound agencies focus on: <span className="text-paper/90 font-medium">scraping recycled lead databases, blasting robotic AI templates from unshielded company domains, and hoping for a 1% response rate before getting blacklisted.</span>
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Statement 2: The Left Click Sovereign Approach */}
          <div className="manifesto-line-2 max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-widest text-signal block mb-3">
              The Sovereign Axiom
            </span>
            <h3 className="font-drama italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight">
              We focus on: sovereign infrastructure, multi-signal buying triggers, and relentless <span className="text-signal underline decoration-signal/40 underline-offset-8">conversion engineering</span> that books real enterprise pipeline.
            </h3>
          </div>

        </div>

        {/* High-Contrast Paradigm Comparison Grid */}
        <div className="manifesto-card-grid grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          
          {/* Legacy Card */}
          <div className="manifesto-card bg-[#181818] border border-white/10 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-6">
                <XCircle className="w-4 h-4" />
                <span>THE STATUS QUO // HIGH FRICTION</span>
              </div>
              <h4 className="text-2xl font-sans font-bold text-white mb-6">
                Generic Spray & Pray
              </h4>
              <ul className="space-y-4 text-sm font-sans text-paper/60">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Main corporate domain used, risking Google Workspace and Outlook blacklisting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Static Apollo or ZoomInfo lists sent without verifying trigger intent or active hiring.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>50% spam folder drop rate with zero proactive DNS quarantine.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Canned AI copy that decision-makers delete in 2 seconds.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-paper/40">
              <span>AVERAGE BENCHMARK</span>
              <span className="text-red-400 font-bold">&lt; 1.2% POSITIVE REPLY</span>
            </div>
          </div>

          {/* Left Click Sovereign Card */}
          <div className="manifesto-card bg-paper text-charcoal border-2 border-signal rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-signal text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
              PRECISION MATRIX
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-signal font-bold mb-6">
                <CheckCircle2 className="w-4 h-4" />
                <span>LEFT CLICK // SOVEREIGN ENGINE</span>
              </div>
              <h4 className="text-2xl font-sans font-bold text-charcoal mb-6">
                Engineered Inbound via Outbound
              </h4>
              <ul className="space-y-4 text-sm font-sans text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal mt-2 shrink-0" />
                  <span><strong>Dedicated secondary domain matrix</strong> with isolated DNS, SPF, DKIM, and DMARC alignment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal mt-2 shrink-0" />
                  <span><strong>Multi-source waterfall enrichment</strong> tracking funding, hiring, technology shifts, and executive changes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal mt-2 shrink-0" />
                  <span><strong>99.4% Primary inbox placement</strong> backed by dynamic throttle sentinels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal mt-2 shrink-0" />
                  <span><strong>Bespoke high-conviction angles</strong> written to resonate with executive buyers.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-center justify-between text-xs font-mono text-charcoal/70">
              <span>LEFT CLICK BENCHMARK</span>
              <span className="text-signal font-bold text-sm">8.4% - 14.8% REPLIES</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
