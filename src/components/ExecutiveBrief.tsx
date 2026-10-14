import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Shield, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import { submitLead } from '../services/leadService';

interface ExecutiveBriefProps {
  preselectedService?: string;
  prepopulatedMessage?: string;
}

export const ExecutiveBrief: React.FC<ExecutiveBriefProps> = ({
  preselectedService = '',
  prepopulatedMessage = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    domain: preselectedService || 'Distributed Systems & Cloud Architecture',
    message: prepopulatedMessage || '',
    ndaChecked: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, domain: preselectedService }));
    }
    if (prepopulatedMessage) {
      setFormData((prev) => ({ ...prev, message: prepopulatedMessage }));
    }
  }, [preselectedService, prepopulatedMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      service: formData.domain,
      message: `${formData.message}${formData.ndaChecked ? ' (Requested NDA coverage)' : ''}`,
      source: 'Executive Architectural Brief',
    });

    setIsSubmitting(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(result.error || 'Failed to transmit brief. Please try again.');
    }
  };

  return (
    <section id="brief" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#040507]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Intake Protocol */}
          <div className="lg:col-span-5 space-y-7">
            <div className="text-xs font-mono text-[#FF4F18] uppercase tracking-widest">
              04 // CONFIDENTIAL ARCHITECTURAL INTAKE
            </div>

            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.08]">
              Tell us what needs to be engineered.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              We don't take on 100 small projects. We partner with a selective roster of engineering organizations facing complex, mission-critical architectural bottlenecks.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/[0.06] font-mono text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#0A0D12] border border-white/10 flex items-center justify-center text-[#FF4F18]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">DIRECT ARCHITECT DESK:</span>
                  <a href="mailto:architects@code17.tech" className="text-white hover:text-[#FF4F18] transition-colors">
                    architects@code17.tech
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#0A0D12] border border-white/10 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">DIRECT SIP VOICE LINE:</span>
                  <button
                    type="button"
                    onClick={() => {
                      const zdrm = document.querySelector('.zdrm-phone') as HTMLElement;
                      if (zdrm) zdrm.click();
                    }}
                    className="text-white hover:text-[#00DDBA] transition-colors text-xs font-mono font-bold"
                  >
                    SIP #413063 (Click to Call)
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#0A0D12] border border-white/10 flex items-center justify-center text-[#00E5FF]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">CORPORATE ENTITY:</span>
                  <span className="text-white">Code 17 Technology LLC · Delaware, USA</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0D12] border border-white/[0.06] flex items-center gap-3 text-xs font-mono text-slate-400">
              <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Standard Mutual NDA executed automatically prior to technical architecture reviews.</span>
            </div>
          </div>

          {/* Right Column: High-End Intake Dossier Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0A0D12] border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              <div className="corner-crosshair" />

              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-white">
                    Brief Transmitted to Architecture Lead
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    A Senior Staff Architect at <strong>Code 17 Technology LLC</strong> has received your project specifications and will review your technical constraints within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        domain: 'Distributed Systems & Cloud Architecture',
                        message: '',
                        ndaChecked: true,
                      });
                    }}
                    className="mt-4 px-5 py-2 rounded bg-[#181F2A] text-white text-xs hover:bg-[#263142] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 uppercase text-[10px] mb-1.5 font-bold">
                        Lead / Executive Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-[#06080B] border border-white/10 focus:border-[#FF4F18] text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 uppercase text-[10px] mb-1.5 font-bold">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#06080B] border border-white/10 focus:border-[#FF4F18] text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 uppercase text-[10px] mb-1.5 font-bold">
                        Company Name / URL *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Stripe, Yum!, Apex"
                        className="w-full px-4 py-3 rounded-lg bg-[#06080B] border border-white/10 focus:border-[#FF4F18] text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 uppercase text-[10px] mb-1.5 font-bold">
                        Target Engagement Domain
                      </label>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#06080B] border border-white/10 focus:border-[#FF4F18] text-white text-xs focus:outline-none transition-colors"
                      >
                        <option value="Agentic AI & Deterministic LLMs">Agentic AI & Deterministic LLMs</option>
                        <option value="Distributed Workflows & Temporal Mesh">Distributed Workflows & Temporal Mesh</option>
                        <option value="Frontend Platforms & Design Systems">Frontend Platforms & Design Systems</option>
                        <option value="Cloud Native & Kubernetes Infrastructure">Cloud Native & Kubernetes Infrastructure</option>
                        <option value="Custom Engineering Strike Squad">Custom Engineering Strike Squad</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase text-[10px] mb-1.5 font-bold">
                      Technical Scope & Constraint Brief *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline current system architecture, failure states, concurrency goals, or timeline requirements..."
                      className="w-full px-4 py-3 rounded-lg bg-[#06080B] border border-white/10 focus:border-[#FF4F18] text-white text-xs placeholder:text-slate-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="ndaConfirm"
                      checked={formData.ndaChecked}
                      onChange={(e) => setFormData({ ...formData, ndaChecked: e.target.checked })}
                      className="w-4 h-4 rounded text-[#FF4F18] focus:ring-0 bg-[#06080B] border-white/20"
                    />
                    <label htmlFor="ndaConfirm" className="text-slate-400 select-none text-[11px]">
                      Execute mutual Non-Disclosure Agreement (NDA) prior to technical calls.
                    </label>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF4F18] hover:bg-[#E63D08] disabled:opacity-50 text-white font-mono text-xs uppercase tracking-wider font-bold py-4 rounded-lg shadow-xl shadow-[#FF4F18]/25 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Specification...</span>
                    ) : (
                      <>
                        <span>Submit Architecture Brief</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
