import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Terminal, 
  Calendar, 
  RotateCw, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Database,
  Radio
} from 'lucide-react';

export default function Features({ onOpenBooking }) {
  // ==========================================
  // CARD 1: DIAGNOSTIC SHUFFLER LOGIC
  // ==========================================
  const initialCards = [
    {
      id: 'cluster-01',
      title: 'Matrix Cluster 01: Cryptographic Shield',
      metric: '99.8% INBOX RATE',
      metricColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      description: 'Secondary domain isolation with automated SPF, DKIM, and DMARC quarantine defense. Zero exposure to your primary corporate domain.',
      status: 'Active Isolation',
      tag: 'INFRASTRUCTURE'
    },
    {
      id: 'cluster-02',
      title: 'Matrix Cluster 02: P2P AI Warmup Network',
      metric: '1,480 ACTIVE INBOXES',
      metricColor: 'text-signal bg-signal-subtle border-signal/20',
      description: 'Bi-directional organic conversational warm-up with realistic typing velocity, thread depth, and spam-filter immune cadence.',
      status: 'Warming & Rotated',
      tag: 'DELIVERABILITY'
    },
    {
      id: 'cluster-03',
      title: 'Matrix Cluster 03: Circuit-Breaker Sentinel',
      metric: '<0.3% BOUNCE THRESHOLD',
      metricColor: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'Real-time telemetry continuously monitors ISP threshold limits. Automatically throttles or switches inboxes at the first anomaly.',
      status: 'Zero Burn Protocol',
      tag: 'FAILSAFE'
    },
  ];

  const [shufflerCards, setShufflerCards] = useState(initialCards);
  const [shufflerPaused, setShufflerPaused] = useState(false);

  // 3-second cycle using array.unshift(array.pop())
  useEffect(() => {
    if (shufflerPaused) return;
    const interval = setInterval(() => {
      setShufflerCards((prev) => {
        const next = [...prev];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [shufflerPaused]);

  const handleManualShuffle = () => {
    setShufflerCards((prev) => {
      const next = [...prev];
      const last = next.pop();
      if (last) next.unshift(last);
      return next;
    });
  };

  // ==========================================
  // CARD 2: TELEMETRY TYPEWRITER LOGIC
  // ==========================================
  const telemetryLogs = [
    '[04:14:02] SIGNAL: Series-B FinTech closes $35M round -> ICP trigger tripped',
    '[04:14:04] WATERFALL: Apollo + Crustdata + Clay multi-source enrichment',
    '[04:14:06] VERIFIED: 14 VP Sales & RevOps mailboxes validated (0 catch-all)',
    '[04:14:08] COPY: Generated dynamic angle based on hiring 5 SDRs this week',
    '[04:14:10] DISPATCH: Queued to Secondary Domain Pool LC-Cluster-07',
    '[04:14:12] INBOX: Primary placement verified on Google & Microsoft 365',
    '[04:14:15] POSITIVE_REPLY: "Hey, timely email. Can we chat this Thursday?"',
    '[04:14:17] ROUTING: Booked onto Sales calendar via Left Click auto-concierge'
  ];

  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [completedLogs, setCompletedLogs] = useState([]);

  useEffect(() => {
    let charIndex = 0;
    const currentLine = telemetryLogs[currentLogIndex];
    setDisplayedText('');

    const typingInterval = setInterval(() => {
      if (charIndex < currentLine.length) {
        setDisplayedText(currentLine.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCompletedLogs((prev) => {
            const updated = [...prev, currentLine];
            return updated.slice(-3); // keep last 3 completed logs visible
          });
          setCurrentLogIndex((prev) => (prev + 1) % telemetryLogs.length);
        }, 1200);
      }
    }, 32);

    return () => clearInterval(typingInterval);
  }, [currentLogIndex]);

  // ==========================================
  // CARD 3: CURSOR PROTOCOL SCHEDULER LOGIC
  // ==========================================
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [activeDays, setActiveDays] = useState([1, 2, 4]); // M, T, T initially active
  const [cursorPos, setCursorPos] = useState({ x: 30, y: 40 });
  const [isPressing, setIsPressing] = useState(false);
  const [buttonSaved, setButtonSaved] = useState(false);
  const schedulerRef = useRef(null);

  // Loop the cursor choreography
  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % 6;
      if (step === 0) {
        // Move to Wednesday (index 3)
        setCursorPos({ x: 135, y: 72 });
        setIsPressing(false);
        setButtonSaved(false);
      } else if (step === 1) {
        // Click Wednesday
        setIsPressing(true);
        setActiveDays((prev) => prev.includes(3) ? prev.filter(d => d !== 3) : [...prev, 3]);
      } else if (step === 2) {
        // Release press
        setIsPressing(false);
      } else if (step === 3) {
        // Move to "Deploy Outbound Sprint" button
        setCursorPos({ x: 180, y: 148 });
      } else if (step === 4) {
        // Click Save button
        setIsPressing(true);
        setButtonSaved(true);
      } else if (step === 5) {
        // Release and pause
        setIsPressing(false);
      }
    }, 1100);

    return () => clearInterval(interval);
  }, []);

  const toggleDayManual = (idx) => {
    setActiveDays((prev) => 
      prev.includes(idx) ? prev.filter((d) => d !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="artifacts" className="py-24 sm:py-32 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-signal uppercase tracking-widest mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            ARTIFACTS & MICRO-SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-charcoal">
            Engineered Outbound Machinery.
          </h2>
        </div>
        <p className="max-w-md text-charcoal/70 text-sm font-sans leading-relaxed">
          Not static templates or generic email tools. Left Click constructs sovereign software micro-systems tailored exclusively to your pipeline targets.
        </p>
      </div>

      {/* Grid of 3 Interactive Functional Artifact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CARD 1: DIAGNOSTIC SHUFFLER */}
        <div 
          onMouseEnter={() => setShufflerPaused(true)}
          onMouseLeave={() => setShufflerPaused(false)}
          className="bg-[#FAF8F5] border border-charcoal/10 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-charcoal/25 transition-all duration-300 min-h-[540px] relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal/50 bg-black/5 px-3 py-1 rounded-full">
                Artifact 01 // Deliverability
              </span>
              <button 
                onClick={handleManualShuffle}
                className="text-xs font-mono text-signal hover:text-signal-dark flex items-center gap-1 transition-colors"
                title="Shuffle card layer"
              >
                <RotateCw className="w-3 h-3" />
                Cycle
              </button>
            </div>

            <h3 className="text-2xl font-sans font-bold text-charcoal tracking-tight mb-2">
              Diagnostic Shuffler
            </h3>
            <p className="text-xs text-charcoal/70 font-sans leading-relaxed mb-6">
              Autonomous multi-tenant DNS & deliverability clusters rotating at 3-second cycle intervals.
            </p>

            {/* Overlapping Stacking Cards Container */}
            <div className="relative h-64 w-full mt-4">
              {shufflerCards.map((card, index) => {
                // Calculate visual stacking scale and offsets
                const yOffset = index * 16;
                const scale = 1 - index * 0.05;
                const opacity = 1 - index * 0.2;
                const zIndex = 30 - index * 10;

                return (
                  <div
                    key={card.id}
                    style={{
                      transform: `translateY(${yOffset}px) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                      transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                    className={`absolute inset-x-0 top-0 p-5 rounded-[1.8rem] bg-white border border-charcoal/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)]`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-signal">
                        {card.tag}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${card.metricColor}`}>
                        {card.metric}
                      </span>
                    </div>

                    <h4 className="text-sm font-sans font-bold text-charcoal mb-2 leading-snug">
                      {card.title}
                    </h4>

                    <p className="text-[11px] text-charcoal/70 leading-relaxed font-sans line-clamp-3">
                      {card.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-charcoal/5 flex items-center justify-between text-[10px] font-mono text-charcoal/50">
                      <span>STATUS: {card.status}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-charcoal/5 flex items-center justify-between text-xs font-mono text-charcoal/60">
            <span>Dynamic Spring Cadence: 3000ms</span>
            <span className="text-signal font-bold">100% HEALTH</span>
          </div>
        </div>


        {/* CARD 2: TELEMETRY TYPEWRITER */}
        <div className="bg-[#FAF8F5] border border-charcoal/10 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-charcoal/25 transition-all duration-300 min-h-[540px]">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal/50 bg-black/5 px-3 py-1 rounded-full">
                Artifact 02 // Signals
              </span>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-signal bg-signal-subtle px-2.5 py-0.5 rounded-full border border-signal/15">
                <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
                LIVE FEED
              </div>
            </div>

            <h3 className="text-2xl font-sans font-bold text-charcoal tracking-tight mb-2">
              Telemetry Typewriter
            </h3>
            <p className="text-xs text-charcoal/70 font-sans leading-relaxed mb-6">
              Real-time multi-channel waterfall enrichment typing out buying intent and live mailbox verification.
            </p>

            {/* Terminal Window Box */}
            <div className="bg-charcoal rounded-[1.8rem] p-5 border border-charcoal-border shadow-inner text-paper font-mono text-xs overflow-hidden flex flex-col justify-between h-64">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] text-paper/50">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span>STREAM: //cluster-node-04</span>
              </div>

              {/* Log Feed */}
              <div className="flex-1 py-3 flex flex-col justify-end space-y-2 overflow-hidden text-[11px] leading-snug">
                {completedLogs.map((log, idx) => (
                  <div key={idx} className="text-paper/40 truncate font-mono">
                    {log}
                  </div>
                ))}
                <div className="text-signal-light font-bold flex items-start">
                  <span className="text-white break-all">{displayedText}</span>
                  <span className="inline-block w-2 h-3.5 bg-signal ml-1 animate-pulse" />
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-paper/50">
                <span>BUFFER: 2,400 events/sec</span>
                <span className="text-emerald-400">99.6% ACCURACY</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-charcoal/5 flex items-center justify-between text-xs font-mono text-charcoal/60">
            <span>Enrichment Engine: 4 Waterfall Layers</span>
            <span className="text-signal font-bold">ZERO BOUNCE</span>
          </div>
        </div>


        {/* CARD 3: CURSOR PROTOCOL SCHEDULER */}
        <div 
          ref={schedulerRef}
          className="bg-[#FAF8F5] border border-charcoal/10 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-charcoal/25 transition-all duration-300 min-h-[540px] relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal/50 bg-black/5 px-3 py-1 rounded-full">
                Artifact 03 // Execution
              </span>
              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                ACTIVE CADENCE
              </span>
            </div>

            <h3 className="text-2xl font-sans font-bold text-charcoal tracking-tight mb-2">
              Cursor Protocol Scheduler
            </h3>
            <p className="text-xs text-charcoal/70 font-sans leading-relaxed mb-6">
              Simulated automated bot selecting optimal executive engagement windows for hyper-response rates.
            </p>

            {/* Interactive Scheduler Surface with Simulated Mouse */}
            <div className="relative bg-white rounded-[1.8rem] p-5 border border-charcoal/10 shadow-sm h-64 flex flex-col justify-between">
              
              {/* Animated SVG Cursor */}
              <div 
                style={{
                  transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) ${isPressing ? 'scale(0.9)' : 'scale(1)'}`,
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-md text-charcoal"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4L11 20L14 13L21 10L4 4Z" fill="#E63B2E" stroke="#111111" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                {isPressing && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-signal/60 animate-ping" />
                )}
              </div>

              <div>
                <div className="text-[11px] font-mono text-charcoal/50 uppercase tracking-wider mb-3">
                  Outbound Dispatch Windows (Weekly Matrix)
                </div>

                {/* Day selector grid */}
                <div className="grid grid-cols-7 gap-2">
                  {days.map((letter, idx) => {
                    const isActive = activeDays.includes(idx);
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleDayManual(idx)}
                        className={`h-11 rounded-xl flex flex-col items-center justify-center transition-all duration-300 font-mono text-xs font-bold ${
                          isActive
                            ? 'bg-signal text-white shadow-md shadow-signal/20 scale-105'
                            : 'bg-offwhite text-charcoal/60 hover:bg-black/5'
                        }`}
                      >
                        <span>{letter}</span>
                        <span className="text-[9px] font-normal opacity-80">{dayNames[idx]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Button that the cursor clicks */}
              <div className="pt-2">
                <button
                  onClick={() => setButtonSaved(!buttonSaved)}
                  className={`w-full py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    buttonSaved
                      ? 'bg-charcoal text-emerald-400 border border-emerald-400/40'
                      : 'bg-charcoal text-paper hover:bg-black'
                  }`}
                >
                  {buttonSaved ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Cadence Deployed to Grid</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-signal" />
                      <span>Deploy Outbound Sprint</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-charcoal/5 flex items-center justify-between text-xs font-mono text-charcoal/60">
            <span>Selected Dispatch Days: {activeDays.length}/7</span>
            <span className="text-signal font-bold">PEAK ICP ENGAGEMENT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
