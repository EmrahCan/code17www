import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, ShieldCheck, Zap, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { submitLead } from '../services/leadService';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'Free 30-Min Infrastructure & Architecture Audit',
}) => {
  const [topic, setTopic] = useState(defaultTopic);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [cloudProvider, setCloudProvider] = useState('AWS');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    setTopic(defaultTopic);
  }, [defaultTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await submitLead({
      name: name || 'Prospective Client',
      email,
      company: company || 'Not specified',
      service: topic,
      message: `Audit/Booking Request. Cloud Provider: ${cloudProvider}. Topic: ${topic}. Lead is redirected to live calendar.`,
      source: 'Instant Calendar Booking Modal (Ad Lead Magnet)',
    });
    setIsSubmitting(false);
    setIsConfirmed(true);
  };

  const calendlyUrl = `https://calendly.com/code17-info/30min?email=${encodeURIComponent(
    email
  )}&name=${encodeURIComponent(name)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B0C14] border border-purple-500/40 rounded-3xl shadow-2xl overflow-hidden text-white">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#00DDBA]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="relative border-b border-white/10 px-6 sm:px-8 py-5 flex items-center justify-between z-10 bg-[#0B0C14]/90 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              PRIORITY DESK
            </span>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              1-on-1 Lead SRE Session
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 relative z-10 max-h-[85vh] overflow-y-auto">
          {!isConfirmed ? (
            <div>
              <div className="mb-6">
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight">
                  Free 30-Minute Architecture Audit
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-normal">
                  Reserve a direct 30-min session with our Lead SRE Architect. We audit your <strong className="text-[#00DDBA]">microservices, infrastructure, cloud spend, and system architecture</strong> — uncovering bottlenecks, reliability risks, and optimization opportunities. 100% free with zero obligation.
                </p>
              </div>

              {/* Quick Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-2 text-xs text-neutral-200">
                  <Clock className="w-4 h-4 text-[#00DDBA] shrink-0" />
                  <span>30 Min Deep Dive</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-2 text-xs text-neutral-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>NDA Protected</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-2 text-xs text-neutral-200">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>$0 Free Audit</span>
                </div>
              </div>

              <form onSubmit={handleBook} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Mitchell"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Work Email (For Calendar Invite) *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. TechCorp SaaS"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Primary Cloud Environment
                    </label>
                    <select
                      value={cloudProvider}
                      onChange={(e) => setCloudProvider(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#141624] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    >
                      <option value="AWS">Amazon Web Services (AWS)</option>
                      <option value="GCP">Google Cloud Platform (GCP)</option>
                      <option value="Azure">Microsoft Azure</option>
                      <option value="Kubernetes / Hybrid">Bare Metal / Hybrid K8s</option>
                      <option value="Multi-Cloud">Multi-Cloud / Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-neutral-950 bg-[#00DDBA] hover:bg-[#00c4a5] disabled:opacity-50 shadow-lg shadow-[#00DDBA]/20 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <span>Confirming Details...</span>
                  ) : (
                    <>
                      <span>Lock In Free Audit & Pick Calendar Slot</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-sans font-black text-2xl text-white">
                Spot Reserved for {email}
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                We have notified our Lead Architect. Please click below to select your preferred 30-minute time slot on Calendly:
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00DDBA] hover:bg-[#00c4a5] text-neutral-950 font-mono text-xs font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Calendly &amp; Choose Time</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 font-mono text-xs font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>

              <div className="pt-4 text-xs text-neutral-400 font-mono">
                A calendar confirmation invite and Zoom link will be sent to <strong>{email}</strong>.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
