import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Sparkles, Send, ArrowUpRight, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol({ onOpenBooking }) {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stacking scroll animations: scale to 0.9, blur to 20px, fade to 0.5
      // Card 1 reacts when Card 2 scrolls over it
      ScrollTrigger.create({
        trigger: card2Ref.current,
        start: 'top 80%',
        end: 'top 10%',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (card1Ref.current) {
            gsap.set(card1Ref.current, {
              scale: 1 - progress * 0.1,
              filter: `blur(${progress * 18}px)`,
              opacity: 1 - progress * 0.5,
            });
          }
        },
      });

      // Card 2 reacts when Card 3 scrolls over it
      ScrollTrigger.create({
        trigger: card3Ref.current,
        start: 'top 80%',
        end: 'top 10%',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (card2Ref.current) {
            gsap.set(card2Ref.current, {
              scale: 1 - progress * 0.1,
              filter: `blur(${progress * 18}px)`,
              opacity: 1 - progress * 0.5,
            });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-offwhite py-24 sm:py-32">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-signal uppercase tracking-widest mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>SECTION 03 // THE PROTOCOL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-charcoal">
          Sticky Stacking Archive.
        </h2>
        <p className="max-w-xl text-charcoal/70 text-sm font-sans mt-3">
          The three-phase sovereign outbound deployment methodology built to systematically generate qualified enterprise pipeline.
        </p>
      </div>

      {/* 3 Stacking Full-Screen Cards */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* CARD 01: SOVEREIGN DOMAIN INFRASTRUCTURE */}
        <div
          ref={card1Ref}
          className="sticky top-20 min-h-[580px] sm:min-h-[640px] rounded-[3rem] bg-charcoal text-paper p-8 sm:p-14 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.18)] flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden will-change-transform"
        >
          {/* Left Text Column */}
          <div className="flex-1 max-w-lg">
            <div className="text-xs font-mono text-signal tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal" />
              <span>STEP 01 // SOVEREIGN ARCHITECTURE</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight mb-6">
              Sovereign Domain Infrastructure & Isolation.
            </h3>

            <p className="text-sm sm:text-base font-sans text-paper/70 leading-relaxed mb-8">
              We deploy 20–50 dedicated secondary domains with multi-tenant SPF, DKIM, and DMARC cryptographic alignment. Complete domain quarantine prevents your primary company domain from ever experiencing deliverability risks.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-xs font-mono">
              <div>
                <span className="text-paper/40 block">ISOLATION FACTOR</span>
                <span className="text-white font-bold">100% AIR-GAPPED</span>
              </div>
              <div>
                <span className="text-paper/40 block">WARMUP NETWORK</span>
                <span className="text-signal font-bold">1,480 SEED NODES</span>
              </div>
            </div>
          </div>

          {/* Right Column: Unique Animation 1 — Rotating Geometric Radar Motif */}
          <div className="flex-1 w-full max-w-md flex items-center justify-center p-6 bg-charcoal-card rounded-[2.5rem] border border-white/10 relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer Rotating Concentric Ring */}
              <div 
                className="absolute inset-0 rounded-full border border-dashed border-signal/40 animate-[spin_24s_linear_infinite]"
              />
              {/* Middle Rotating Geometry */}
              <div 
                className="absolute inset-8 rounded-full border border-paper/20 animate-[spin_16s_linear_infinite_reverse]"
              />
              {/* Inner Crosshair / Reticle */}
              <div className="absolute inset-16 rounded-full border border-signal/60 flex items-center justify-center">
                <div className="w-full h-px bg-white/20 absolute" />
                <div className="h-full w-px bg-white/20 absolute" />
                {/* Center Core Node */}
                <div className="w-10 h-10 rounded-full bg-signal flex items-center justify-center text-white shadow-[0_0_25px_rgba(230,59,46,0.6)]">
                  <Shield className="w-5 h-5" />
                </div>
              </div>

              {/* Orbiting Satellite Data Indicators */}
              <div className="absolute top-2 left-6 text-[9px] font-mono text-paper/60 bg-black/40 px-2 py-1 rounded border border-white/10">
                SPF: PASS 100%
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-signal bg-black/40 px-2 py-1 rounded border border-signal/30">
                DKIM: ALIGNED
              </div>
              <div className="absolute bottom-6 left-4 text-[9px] font-mono text-emerald-400 bg-black/40 px-2 py-1 rounded border border-emerald-500/30">
                DMARC: REJECT_ENABLED
              </div>
            </div>
          </div>
        </div>


        {/* CARD 02: WATERFALL INTENT & BUYING SIGNAL GRID */}
        <div
          ref={card2Ref}
          className="sticky top-24 min-h-[580px] sm:min-h-[640px] rounded-[3rem] bg-[#161616] text-paper p-8 sm:p-14 border border-white/15 shadow-[0_25px_55px_rgba(0,0,0,0.22)] flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden will-change-transform"
        >
          {/* Left Text Column */}
          <div className="flex-1 max-w-lg">
            <div className="text-xs font-mono text-signal tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal" />
              <span>STEP 02 // INTENT ENRICHMENT</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight mb-6">
              Waterfall Intent & Buying Signal Grid.
            </h3>

            <p className="text-sm sm:text-base font-sans text-paper/70 leading-relaxed mb-8">
              We triangulate 4 real-time data providers to capture live buying signals: Series funding rounds, VP-level hiring surges, and CRM tech migrations. Every mailbox is multi-verified to guarantee sub-0.5% bounce rates.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-xs font-mono">
              <div>
                <span className="text-paper/40 block">WATERFALL LAYERS</span>
                <span className="text-white font-bold">4 ENGINES LINKED</span>
              </div>
              <div>
                <span className="text-paper/40 block">LEAD ACCURACY</span>
                <span className="text-emerald-400 font-bold">99.6% VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Right Column: Unique Animation 2 — Scanning Laser Line over Dot Matrix */}
          <div className="flex-1 w-full max-w-md flex items-center justify-center p-6 bg-charcoal rounded-[2.5rem] border border-white/10 relative overflow-hidden h-72 sm:h-80">
            {/* Dot Matrix Grid */}
            <div className="grid grid-cols-8 gap-4 w-full h-full p-4 relative z-0 items-center justify-items-center">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                    i % 7 === 0 
                      ? 'bg-signal shadow-[0_0_8px_#E63B2E]' 
                      : i % 5 === 0 
                      ? 'bg-emerald-400/80 shadow-[0_0_6px_#34D399]'
                      : 'bg-white/15'
                  }`} 
                />
              ))}
            </div>

            {/* Horizontal Scanning Laser Bar */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-signal to-transparent animate-[bounce_3.2s_ease-in-out_infinite] shadow-[0_0_15px_#E63B2E] z-10 pointer-events-none" />

            {/* Signal Scan Telemetry Overlay */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-paper/60 bg-charcoal-card/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 z-20">
              <span className="flex items-center gap-1.5 text-signal">
                <span className="w-1.5 h-1.5 rounded-full bg-signal animate-ping" />
                SCANNING // ICP-TRIGGER-MATRIX
              </span>
              <span>48 NODES VALIDATED</span>
            </div>
          </div>
        </div>


        {/* CARD 03: CONVERSION ANGLES & AUTONOMOUS ROUTING */}
        <div
          ref={card3Ref}
          className="sticky top-28 min-h-[580px] sm:min-h-[640px] rounded-[3rem] bg-[#1E1E1E] text-paper p-8 sm:p-14 border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.26)] flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden will-change-transform"
        >
          {/* Left Text Column */}
          <div className="flex-1 max-w-lg">
            <div className="text-xs font-mono text-signal tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal" />
              <span>STEP 03 // CONVERSION EXECUTION</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight mb-6">
              Conversion-Engineered Angles & Autonomous Routing.
            </h3>

            <p className="text-sm sm:text-base font-sans text-paper/70 leading-relaxed mb-8">
              Bespoke, brevity-driven copy written to command attention from executive decision-makers. Inbound replies are auto-qualified and routed directly onto your sales leadership's calendar with zero friction.
            </p>

            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="btn-magnetic px-6 py-3 rounded-full bg-signal text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-signal/30"
              >
                <span className="btn-slide-bg bg-signal-hover" />
                <span className="btn-content">
                  Book 30-min Mapping Call
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </span>
              </button>
              <span className="text-xs font-mono text-paper/50">
                AVERAGE SETUP: 7 DAYS
              </span>
            </div>
          </div>

          {/* Right Column: Unique Animation 3 — Pulsing SVG Waveform (EKG Path) */}
          <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center p-6 bg-charcoal rounded-[2.5rem] border border-white/10 relative h-72 sm:h-80">
            <div className="w-full flex items-center justify-between text-[10px] font-mono text-paper/50 mb-4 px-2">
              <span>REPLY FREQUENCY MONITOR</span>
              <span className="text-emerald-400">STATUS: CONVERTING</span>
            </div>

            {/* SVG Waveform Path */}
            <svg 
              className="w-full h-36" 
              viewBox="0 0 500 150" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background faint grid lines */}
              <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
              <line x1="0" y1="35" x2="500" y2="35" stroke="rgba(255,255,255,0.05)" />
              <line x1="0" y1="115" x2="500" y2="115" stroke="rgba(255,255,255,0.05)" />

              {/* Pulsing EKG Waveform Path with CSS stroke-dashoffset animation */}
              <path
                d="M0,75 L100,75 L130,20 L150,130 L170,40 L190,95 L210,75 L300,75 L330,15 L350,135 L370,50 L390,85 L410,75 L500,75"
                stroke="#E63B2E"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-[dash_3s_linear_infinite]"
                style={{
                  strokeDasharray: 600,
                  strokeDashoffset: 600,
                  filter: 'drop-shadow(0 0 8px #E63B2E)',
                  animation: 'ekgWave 2.8s linear infinite',
                }}
              />
            </svg>

            {/* Keyframe animation in inline style tag */}
            <style>{`
              @keyframes ekgWave {
                0% { stroke-dashoffset: 600; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>

            <div className="w-full mt-4 flex items-center justify-between text-[11px] font-mono pt-3 border-t border-white/10">
              <span className="text-paper/60">CONVERSION VELOCITY:</span>
              <span className="text-signal font-bold">+18 QUALIFIED OPPS / MO</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
