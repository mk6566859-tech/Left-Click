import React from 'react';
import { Check, ArrowUpRight, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export default function Pricing({ onOpenBooking }) {
  const tiers = [
    {
      name: 'Sprint Engine',
      tagline: 'Rapid ICP Validation & Pipeline Launch',
      price: '$4,500',
      period: '/month',
      isPopular: false,
      features: [
        '10 Dedicated inboxes across 5 secondary domains',
        '3,500 Verified decision-maker contacts / mo',
        'Automated SPF / DKIM / DMARC quarantine setup',
        '1 Tailored outbound angle & 3-step follow up',
        'Bi-directional peer-to-peer mailbox warmup',
        'Bi-weekly pipeline review call',
      ],
      badge: 'VALIDATION TIER',
      cta: 'Select Sprint Engine',
    },
    {
      name: 'Scale Matrix',
      tagline: 'High-Velocity Outbound Takeover',
      price: '$7,800',
      period: '/month',
      isPopular: true,
      features: [
        '30 Dedicated inboxes across 15 secondary domains',
        '10,000+ Enriched contacts with 4-layer waterfall',
        'Multi-signal trigger monitoring (funding & hiring)',
        '3 Segmented ICP angles with A/B copy optimization',
        'Live Slack channel with Chief Outbound Architect',
        'Autonomous calendar routing & positive reply triage',
        'Guarantee: 15+ Qualified meetings/mo or free service',
      ],
      badge: 'MOST POPULAR // HYPER-GROWTH',
      cta: 'Book Growth Mapping Call',
    },
    {
      name: 'Sovereign Enterprise',
      tagline: 'Multi-Market Outbound Dominance',
      price: '$14,500',
      period: '/month',
      isPopular: false,
      features: [
        '75+ Dedicated inboxes across 30+ sovereign domains',
        '25,000+ Verified contacts with custom scrapers',
        'Omnichannel intent sync (Email + LinkedIn signals)',
        'Dedicated senior copywriter & account director',
        'Custom CRM webhooks (Salesforce / HubSpot)',
        'Weekly executive pipeline attribution reporting',
        'Custom SLA & dedicated IP quarantine matrix',
      ],
      badge: 'ENTERPRISE DOMINANCE',
      cta: 'Inquire Enterprise Setup',
    },
  ];

  return (
    <section id="engagements" className="py-24 sm:py-32 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-signal uppercase tracking-widest mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>SECTION 04 // ENGAGEMENT TIERS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-charcoal mb-4">
          Predictable Pipeline. Transparent Investment.
        </h2>
        <p className="text-charcoal/70 text-sm sm:text-base font-sans leading-relaxed">
          Every partnership includes our sovereign infrastructure guarantee: zero risk to your primary domain, zero generic spam templates, and relentless focus on closed revenue.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
              tier.isPopular
                ? 'bg-charcoal text-paper shadow-2xl ring-2 ring-signal lg:-translate-y-4'
                : 'bg-[#FAF8F5] border border-charcoal/10 text-charcoal shadow-sm hover:border-charcoal/20'
            }`}
          >
            {/* Pop Badge on Middle Card */}
            {tier.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-signal text-white text-[11px] font-mono font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-md shadow-signal/30 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {tier.badge}
              </div>
            )}

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full ${
                  tier.isPopular ? 'bg-white/10 text-paper' : 'bg-black/5 text-charcoal/60'
                }`}>
                  {tier.name}
                </span>
                {!tier.isPopular && (
                  <span className="text-[10px] font-mono text-charcoal/40 uppercase">
                    {tier.badge}
                  </span>
                )}
              </div>

              <p className={`text-xs font-sans mb-6 ${
                tier.isPopular ? 'text-paper/70' : 'text-charcoal/60'
              }`}>
                {tier.tagline}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-white/10">
                <span className="text-4xl sm:text-5xl font-mono font-bold tracking-tight">
                  {tier.price}
                </span>
                <span className={`text-xs font-mono ${
                  tier.isPopular ? 'text-paper/60' : 'text-charcoal/50'
                }`}>
                  {tier.period}
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 mb-8 text-xs sm:text-sm font-sans">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      tier.isPopular ? 'bg-signal text-white' : 'bg-charcoal/10 text-charcoal'
                    }`}>
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className={tier.isPopular ? 'text-paper/90' : 'text-charcoal/80'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onOpenBooking}
                className={`w-full py-4 rounded-full font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 btn-magnetic ${
                  tier.isPopular
                    ? 'bg-signal text-white shadow-lg shadow-signal/30'
                    : 'bg-charcoal text-paper hover:bg-black'
                }`}
              >
                <span className={`btn-slide-bg ${tier.isPopular ? 'bg-signal-hover' : 'bg-signal'}`} />
                <span className="btn-content">
                  {tier.cta}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <div className="mt-4 text-center">
                <span className={`text-[10px] font-mono ${
                  tier.isPopular ? 'text-paper/40' : 'text-charcoal/40'
                }`}>
                  Zero Long-Term Lockin &bull; 30-Day Evaluation
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Guarantee Banner */}
      <div className="mt-14 bg-white border border-charcoal/10 rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-signal-subtle border border-signal/20 flex items-center justify-center text-signal shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-sans font-bold text-charcoal">
              The Left Click Zero-Risk Performance Guarantee
            </h4>
            <p className="text-xs text-charcoal/60 font-sans mt-0.5">
              If we don't deliver the contractually agreed qualified sales meetings in your first 60 days, we work completely free until we hit the threshold.
            </p>
          </div>
        </div>
        <button
          onClick={onOpenBooking}
          className="btn-magnetic px-6 py-3 rounded-full bg-charcoal text-paper hover:bg-black font-mono text-xs uppercase tracking-wider font-bold whitespace-nowrap shrink-0"
        >
          <span className="btn-slide-bg bg-signal" />
          <span className="btn-content">
            Claim Guarantee
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </section>
  );
}
