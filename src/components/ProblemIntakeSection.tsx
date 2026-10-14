import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { submitLead } from '../services/leadService';

interface ProblemIntakeSectionProps {
  onSuccess?: () => void;
}

export const ProblemIntakeSection: React.FC<ProblemIntakeSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'meet' | 'contact'>('meet');
  const [email, setEmail] = useState('');
  const [isSubmittingMeet, setIsSubmittingMeet] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleMeetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmittingMeet(true);
    await submitLead({
      email,
      name: 'Prospective Client (Audit & Calendar Request)',
      service: 'Free 30-Min Infrastructure & Architecture Audit',
      message: `Prospective client requested a Free 30-Min Architecture Audit (microservices, infrastructure, systems) and live calendar slot with email: ${email}`,
      source: 'Problem Intake (Audit Lead Magnet)',
    });
    setIsSubmittingMeet(false);
    setIsSubmitted(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.email || !contactForm.name) return;
    setIsSubmittingContact(true);
    await submitLead({
      name: contactForm.name,
      email: contactForm.email,
      company: contactForm.company,
      message: contactForm.message,
      service: 'Architecture Brief & RFP',
      source: 'Problem Intake (Contact Tab)',
    });
    setIsSubmittingContact(false);
    setContactSubmitted(true);
  };

  return (
    <section id="discuss" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07080E] text-white overflow-hidden border-t border-white/[0.08]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[250px] bg-[#00DDBA]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Giant Purple Banner Headline */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00DDBA] animate-pulse" />
            FREE 30-MIN INFRASTRUCTURE, MICROSERVICES &amp; SYSTEMS AUDIT ($0)
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-[52px] tracking-tight leading-[1.15]">
            <span className="bg-[#6B21A8]/70 text-[#FAF5FF] px-4 py-1.5 rounded-xl inline-block shadow-lg shadow-purple-950/50 border border-purple-500/30 backdrop-blur-sm">
              Start with your infrastructure problem
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-mono">
            Get a live 30-min audit on Calendly or describe your bottlenecks across microservices, cloud infrastructure, or database &amp; system architecture.
          </p>
        </div>

        {/* Tab Switcher Header (Meet / Contact) */}
        <div className="flex items-center justify-end mb-4">
          <div className="flex items-center gap-6 border-b border-white/10 pb-2 font-mono text-xs uppercase tracking-wider">
            <button
              onClick={() => { setActiveTab('meet'); setIsSubmitted(false); }}
              className={`relative pb-2 transition-colors font-bold ${
                activeTab === 'meet' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <span>Instant Calendar Meet</span>
              {activeTab === 'meet' && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#00DDBA] rounded-full" />
              )}
            </button>
            <button
              onClick={() => { setActiveTab('contact'); setContactSubmitted(false); }}
              className={`relative pb-2 transition-colors font-bold ${
                activeTab === 'contact' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <span>Written RFP Brief</span>
              {activeTab === 'contact' && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#00DDBA] rounded-full" />
              )}
            </button>
          </div>
        </div>

        {/* Main Grid: Left Value Bullets & Right Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: What we'll cover */}
          <div className="lg:col-span-6 space-y-8 pt-4">
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#00DDBA]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00DDBA]" />
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-medium">
                  <strong>Microservices &amp; Infrastructure Audit:</strong> Identify distributed bottlenecks, container scaling limits, Kubernetes configurations, and 20–35% wasted cloud spend.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#00DDBA]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00DDBA]" />
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-medium">
                  <strong>High-Availability &amp; SLA Check:</strong> Uncover single points of failure, failover bottlenecks, and latency issues before they trigger a P1 incident.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#00DDBA]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00DDBA]" />
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-medium">
                  <strong>Actionable Roadmap Delivered:</strong> Walk away with a concrete architecture diagram and priority fix checklist — even if you don't hire us.
                </p>
              </div>
            </div>

            {/* Need immediate assistance */}
            <div className="pt-6 border-t border-white/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Need immediate assistance?
              </div>
              <a
                href="tel:+18005550170"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-300 hover:text-white transition-colors"
              >
                <span>Contact 24/7 SRE support desk</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Conversion Intake Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#12131F] border border-white/[0.12] rounded-2xl p-7 sm:p-9 shadow-2xl relative backdrop-blur-md">
              
              {activeTab === 'meet' && (
                <>
                  {!isSubmitted ? (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-bold text-[#00DDBA] uppercase tracking-wider">
                          Instant Calendly Sync
                        </span>
                        <span className="text-[11px] font-mono text-amber-400 font-semibold">
                          100% Free · Zero Commitment
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-2xl text-white mb-2 tracking-tight">
                        Claim Your 30-Min Audit
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 mb-6 font-normal">
                        Enter your work email to lock in your spot and choose a live time slot directly on Calendly with a Lead SRE Architect.
                      </p>

                      <form onSubmit={handleMeetSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                            Work Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="cto@yourcompany.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-[#0B0C14] border border-white/[0.14] text-white placeholder:text-neutral-600 text-sm focus:outline-none focus:border-[#00DDBA] focus:ring-1 focus:ring-[#00DDBA] transition-all font-mono"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmittingMeet}
                          className="w-full py-4 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-neutral-950 bg-[#00DDBA] hover:bg-[#00c4a5] disabled:opacity-50 shadow-lg shadow-[#00DDBA]/25 transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                        >
                          <span>{isSubmittingMeet ? 'Reserving Slot...' : 'Claim Free Audit & Pick Calendar Slot'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="py-6 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-[#00DDBA]/20 text-[#00DDBA] flex items-center justify-center mx-auto">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <h3 className="font-sans font-bold text-xl text-white">
                        Free Audit Reserved for {email}
                      </h3>
                      <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
                        We have logged your request. Now choose your preferred 30-minute slot on our Lead SRE's live Calendly schedule:
                      </p>
                      <a
                        href={`https://calendly.com/code17-info/30min?email=${encodeURIComponent(email)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#00DDBA] hover:bg-[#00c4a5] text-neutral-950 font-mono text-xs font-bold px-6 py-3.5 rounded-xl shadow-md transition-all"
                      >
                        <span>Open Calendly &amp; Select Time</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <div className="pt-2">
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="text-[11px] text-neutral-500 hover:text-neutral-300 font-mono underline"
                        >
                          Use a different email
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {activeTab === 'contact' && (
                <>
                  {!contactSubmitted ? (
                    <div>
                      <h3 className="font-sans font-bold text-2xl text-white mb-2 tracking-tight">
                        Send Architecture Brief
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 mb-6 font-normal">
                        Share your technical specifications or RFP directly with our engineering squad.
                      </p>

                      <form onSubmit={handleContactSubmit} className="space-y-3.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-mono text-neutral-400 mb-1 uppercase">Name</label>
                            <input
                              type="text"
                              required
                              value={contactForm.name}
                              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                              placeholder="Alex Morgan"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C14] border border-white/[0.14] text-white placeholder:text-neutral-600 text-xs focus:outline-none focus:border-purple-500 font-mono"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-mono text-neutral-400 mb-1 uppercase">Work Email</label>
                            <input
                              type="email"
                              required
                              value={contactForm.email}
                              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                              placeholder="alex@company.com"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C14] border border-white/[0.14] text-white placeholder:text-neutral-600 text-xs focus:outline-none focus:border-purple-500 font-mono"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono text-neutral-400 mb-1 uppercase">Technical Challenge / Scope</label>
                          <textarea
                            rows={3}
                            required
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            placeholder="Briefly describe what needs to change (e.g. K8s migration, SaaS MVP, 24/7 SRE on-call)..."
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C14] border border-white/[0.14] text-white placeholder:text-neutral-600 text-xs focus:outline-none focus:border-purple-500 resize-none font-mono"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmittingContact}
                          className="w-full py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#7E22CE] to-[#9333EA] hover:from-[#6B21A8] hover:to-[#7E22CE] disabled:opacity-50 shadow-lg transition-all"
                        >
                          <span>{isSubmittingContact ? 'Transmitting Brief...' : 'Send Engineering Inquiry'}</span>
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="py-6 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-sans font-bold text-xl text-white">
                        Inquiry Dispatched
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        A Senior SRE & Software Architect from Code17.Tech will review your scope and respond within 4 business hours.
                      </p>
                      <button
                        onClick={() => setContactSubmitted(false)}
                        className="text-[11px] text-neutral-500 hover:text-neutral-300 font-mono underline"
                      >
                        Submit another brief
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* Direct email fallback */}
              <div className="mt-5 pt-4 border-t border-white/[0.08] text-center">
                <span className="text-xs text-neutral-400 font-mono">
                  You can also email us at{' '}
                  <a href="mailto:info@code17.tech" className="text-neutral-200 hover:text-purple-300 underline font-semibold">
                    info@code17.tech
                  </a>
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Professional Scope Disclaimer (as seen in Cloud Posse reference) */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] text-center max-w-3xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
            This conversation establishes fit and the next step; it is not a comprehensive infrastructure audit.
          </p>
          <p className="text-xs text-neutral-500 font-normal leading-relaxed">
            Any deeper assessment has its own agreed scope and terms. Implementation follows a defined proposal.
          </p>
        </div>

      </div>
    </section>
  );
};
