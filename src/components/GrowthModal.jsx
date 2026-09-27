import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Mail, Building, User } from 'lucide-react';

export default function GrowthModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM EST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    currentMonthlyRevenue: '$50k-$200k',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dates = [
    { label: 'Tomorrow', sub: 'Sep 29' },
    { label: 'Wednesday', sub: 'Sep 30' },
    { label: 'Thursday', sub: 'Oct 01' },
    { label: 'Friday', sub: 'Oct 02' },
  ];

  const timeSlots = [
    '10:00 AM EST',
    '11:00 AM EST',
    '1:30 PM EST',
    '3:00 PM EST',
    '4:30 PM EST',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={resetAndClose}
        className="fixed inset-0 bg-charcoal/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-offwhite text-charcoal rounded-[2.5rem] border border-charcoal/15 shadow-2xl p-6 sm:p-10 z-10 animate-in zoom-in-95 duration-300">
        
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-charcoal/60 hover:text-charcoal transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-signal bg-signal-subtle px-3 py-1 rounded-full border border-signal/15 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                CONFIDENTIAL 1-ON-1 SESSION
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-charcoal tracking-tight">
                Book a Growth Mapping Call
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 font-sans mt-1">
                A 30-minute tactical review of your outbound target ICP, deliverability infrastructure, and custom pipeline projections.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Date & Time Picker */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/60 mb-2">
                  1. Select Slot ({selectedDate} @ {selectedTime})
                </label>
                
                {/* Date options */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {dates.map((d) => (
                    <button
                      type="button"
                      key={d.label}
                      onClick={() => setSelectedDate(d.label)}
                      className={`p-2.5 rounded-xl text-center font-mono transition-all text-xs ${
                        selectedDate === d.label
                          ? 'bg-signal text-white font-bold shadow-md shadow-signal/20'
                          : 'bg-white border border-charcoal/10 text-charcoal/70 hover:bg-black/5'
                      }`}
                    >
                      <div className="font-medium">{d.label}</div>
                      <div className="text-[10px] opacity-75">{d.sub}</div>
                    </button>
                  ))}
                </div>

                {/* Time options */}
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        selectedTime === t
                          ? 'bg-charcoal text-paper font-bold'
                          : 'bg-white border border-charcoal/10 text-charcoal/70 hover:bg-black/5'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/60 mb-1">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-charcoal/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="text"
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-charcoal/15 text-xs font-sans text-charcoal focus:outline-none focus:border-signal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/60 mb-1">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-charcoal/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-charcoal/15 text-xs font-sans text-charcoal focus:outline-none focus:border-signal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/60 mb-1">
                    Company Website / URL
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-charcoal/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="text"
                      placeholder="company.io"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-charcoal/15 text-xs font-sans text-charcoal focus:outline-none focus:border-signal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-charcoal/60 mb-1">
                    Current Monthly Revenue
                  </label>
                  <select
                    value={formData.currentMonthlyRevenue}
                    onChange={(e) => setFormData({ ...formData, currentMonthlyRevenue: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-charcoal/15 text-xs font-sans text-charcoal focus:outline-none focus:border-signal"
                  >
                    <option>$20k - $50k MRR</option>
                    <option>$50k - $150k MRR</option>
                    <option>$150k - $500k MRR</option>
                    <option>$500k+ MRR (Enterprise)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-signal text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-signal/30 btn-magnetic flex items-center justify-center gap-2"
                >
                  <span className="btn-slide-bg bg-signal-hover" />
                  <span className="btn-content">
                    {loading ? 'Confirming Dispatch Slot...' : 'Lock In Growth Mapping Call (30 Min)'}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>

              <div className="text-center flex items-center justify-center gap-2 text-[10px] font-mono text-charcoal/50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Sales Pitch &bull; 100% Technical Architecture Review</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-in zoom-in">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs font-mono text-signal uppercase tracking-widest mb-1">
              TELEMETRY CONFIRMED // INVITE DISPATCHED
            </div>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold text-charcoal mb-2">
              You're Scheduled with Left Click
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 font-sans max-w-md mb-6 leading-relaxed">
              We have generated your custom calendar invitation for <strong>{selectedDate} at {selectedTime}</strong>. A calendar link with Google Meet coordinates has been dispatched to <strong>{formData.email}</strong>.
            </p>

            <div className="bg-white border border-charcoal/10 rounded-2xl p-4 w-full max-w-md text-left font-mono text-xs mb-6 text-charcoal/80 space-y-1">
              <div>&bull; Host: Chief Outbound Architect (Left Click)</div>
              <div>&bull; Agenda: Target ICP Audit, Deliverability Matrix, Volume Forecast</div>
              <div>&bull; Duration: 30 Minutes</div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-8 py-3 rounded-full bg-charcoal text-paper font-mono text-xs uppercase tracking-wider font-bold hover:bg-black transition-colors"
            >
              Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
