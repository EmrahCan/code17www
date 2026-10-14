import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Star, ShieldCheck, AlertCircle, Calendar, Zap, ExternalLink, ArrowRight } from 'lucide-react';
import { submitLead } from '../services/leadService';

interface ContactSectionProps {
  preselectedService?: string;
  prepopulatedMessage?: string;
  onOpenBooking?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService = '',
  prepopulatedMessage = '',
  onOpenBooking,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || 'Free 30-Min Infrastructure & Architecture Audit',
    message: prepopulatedMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
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
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      source: 'Contact Section Form',
    });

    setIsSubmitting(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(result.error || 'Failed to send message. Please try again or contact us directly.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Palark-style Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-palark-purple mb-2">
                GET IN TOUCH
              </div>
              <h2 className="font-sans font-black text-3xl sm:text-5xl text-palark-dark tracking-tight">
                Let’s talk about your infrastructure
              </h2>
            </div>

            <p className="text-base sm:text-lg text-palark-gray leading-relaxed font-normal">
              Whether you need 24/7 SRE on-call support, a migration to Kubernetes, or private AI rollout, our lead architects are ready to assist.
            </p>

            {/* Free 30-Min Infrastructure, Microservices & Architecture Audit Card (High-Converting Ad Hook) */}
            <div className="p-6 rounded-2xl bg-[#0B0C14] text-white border border-purple-500/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[11px] font-mono font-bold">
                  <Zap className="w-3 h-3 text-amber-400" />
                  FREE 30-MIN AUDIT ($0)
                </span>
                <span className="text-[11px] font-mono text-[#00DDBA] font-semibold">Zero Obligation</span>
              </div>
              <h3 className="font-sans font-bold text-lg text-white mb-1.5 relative z-10">
                Microservices &amp; Infrastructure Audit
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4 relative z-10">
                Let our Lead SRE analyze your microservices, Kubernetes fleet, cloud infrastructure, or database &amp; system architecture. We uncover critical reliability risks and 20–35% wasted cloud spend.
              </p>
              <button
                type="button"
                onClick={onOpenBooking || (() => {
                  const elem = document.getElementById('discuss');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                })}
                className="w-full py-3 px-4 rounded-xl bg-[#00DDBA] hover:bg-[#00c4a5] text-neutral-950 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md relative z-10"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 30-Min Architecture Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct contact cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-palark-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-palark-blue-light text-palark-blue flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-palark-gray font-medium">Direct Voice Line (WebRTC)</div>
                  <button
                    type="button"
                    onClick={() => {
                      const zdrm = document.querySelector('.zdrm-phone') as HTMLElement;
                      if (zdrm) zdrm.click();
                    }}
                    className="text-sm font-bold text-palark-dark hover:text-palark-purple transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>SIP #413063 (Click to Call)</span>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-palark-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-palark-purple-light text-palark-purple flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-palark-gray font-medium">Official Inquiry Desk</div>
                  <a href="mailto:info@code17.tech" className="text-sm font-bold text-palark-dark hover:text-palark-purple">
                    info@code17.tech
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-palark-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-palark-lime-light text-[#008770] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-palark-gray font-medium">Headquarters & Domain</div>
                  <div className="text-sm font-bold text-palark-dark">
                    Code17.Tech · Delaware, USA & Europe Hub
                  </div>
                </div>
              </div>
            </div>

            {/* Hybrid Trust Banner: Clutch Client Rating + 99.99% SLA Guarantee */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F5EDFF] via-white to-[#E6FBF7] border border-palark-purple/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div>
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="font-bold text-xs text-palark-dark ml-1">4.9 / 5.0 Rating</span>
                </div>
                <div className="text-xs text-palark-gray mt-1 font-medium">
                  15+ Verified B2B Reviews on Clutch &amp; GoodFirms
                </div>
              </div>

              <div className="sm:border-l sm:border-purple-200/80 sm:pl-4 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-palark-dark">99.99% SLA Uptime</div>
                  <div className="text-[11px] text-slate-500">Production Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Form (Palark style) */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F9FA] border border-palark-border rounded-3xl p-6 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans font-black text-2xl text-palark-dark">
                    Thank You! Message Received.
                  </h3>
                  <p className="text-sm text-palark-gray max-w-md mx-auto">
                    A Senior SRE Architect from <strong>Code17.Tech</strong> will review your infrastructure details and contact you shortly.
                  </p>

                  {/* Calendly Fast Track */}
                  <div className="pt-2">
                    <a
                      href="https://calendly.com/code17-info/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0B0C14] hover:bg-black text-white font-mono text-xs font-bold px-6 py-3.5 rounded-full shadow-md transition-all"
                    >
                      <Calendar className="w-4 h-4 text-[#00DDBA]" />
                      <span>Want to talk sooner? Pick a Calendly Slot Now</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-slate-300 text-slate-600 text-xs font-semibold hover:bg-white transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Thomas Weber"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-palark-border focus:border-palark-dark text-palark-dark text-sm placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-palark-border focus:border-palark-dark text-palark-dark text-sm placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-palark-border focus:border-palark-dark text-palark-dark text-sm placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Phone / Messenger
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-palark-border focus:border-palark-dark text-palark-dark text-sm placeholder:text-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Service / Package of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-palark-border focus:border-palark-dark text-palark-dark text-sm focus:outline-none transition-colors"
                    >
                      <option value="Free 30-Min Infrastructure, Microservices & Systems Audit">🎯 Free 30-Min Microservices, Infrastructure & Systems Audit ($0 - Recommended)</option>
                      <option value="Dedicated SaaS & SRE Squad">Dedicated SaaS & SRE Squad ($4,500/mo)</option>
                      <option value="Continuous SRE & DevOps">Continuous SRE & DevOps ($2,000/mo)</option>
                      <option value="SaaS MVP Launch Sprint">SaaS MVP Launch Sprint ($9,500 package)</option>
                      <option value="Full-Cycle SaaS Product Engineering">Full-Cycle SaaS Product Engineering</option>
                      <option value="DevOps as a Service">DevOps as a Service (ArgoCD & K8s)</option>
                      <option value="24/7 SRE Maintenance & SLAs">24/7 SRE Maintenance & SLAs (15-min SLA)</option>
                      <option value="High-Concurrency APIs & Microservices">High-Concurrency APIs & Microservices</option>
                      <option value="AI-Native SaaS & Private LLMs">AI-Native SaaS & Private LLMs</option>
                      <option value="Cloud Migration & Modernization">Cloud Migration & Modernization</option>
                      <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      How can we help? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current infrastructure, cloud provider, SLA needs, or upcoming deadlines..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-palark-border focus:border-palark-dark text-palark-dark text-sm placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-palark-dark hover:bg-black disabled:opacity-50 text-white font-bold text-base py-4 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending your message via Resend...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
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
