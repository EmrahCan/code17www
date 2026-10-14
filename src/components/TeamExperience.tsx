import React from 'react';
import { ShieldCheck, Calendar, ArrowRight, CheckCircle2, Award } from 'lucide-react';

interface TeamExperienceProps {
  onOpenBooking?: () => void;
}

export const TeamExperience: React.FC<TeamExperienceProps> = ({ onOpenBooking }) => {
  const stats = [
    {
      number: '17+',
      label: 'Years of collective SRE & DevOps leadership',
      highlightColor: 'text-[#9540FF]',
      bgColor: 'bg-[#F5EDFF]',
    },
    {
      number: '24/7',
      label: 'Maintenance with guaranteed 15-min SLA response',
      highlightColor: 'text-[#00A1FC]',
      bgColor: 'bg-[#EBF7FF]',
    },
    {
      number: '150+',
      label: 'Satisfied enterprise clients across US & Europe',
      highlightColor: 'text-[#008770]',
      bgColor: 'bg-[#E6FBF7]',
    },
    {
      number: '1,200+',
      label: 'Production microservices maintained with 0 downtime',
      highlightColor: 'text-[#FF5722]',
      bgColor: 'bg-[#FFF0EB]',
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-palark-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-palark-purple mb-2">
            TRACK RECORD
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-palark-dark tracking-tight">
            Our team’s current experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-palark-gray font-normal">
            Battle-tested engineering metrics accumulated across hundreds of mission-critical cloud deployments.
          </p>
        </div>

        {/* 4 Big Numbers Grid (Palark signature layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] border border-palark-border rounded-3xl p-8 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className={`font-sans font-black text-5xl sm:text-6xl ${item.highlightColor} tracking-tight`}>
                {item.number}
              </div>
              <p className="font-sans font-semibold text-sm sm:text-base text-palark-dark mt-6 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Lead SRE Architect & Technical Leadership Spotlight Card */}
        <div className="mt-12 rounded-3xl bg-[#0B0C14] text-white border border-purple-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00DDBA]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00DDBA]" />
                  ENGINEERING LEADERSHIP
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-mono font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  Senior-Only Squad · Zero Outsourcing
                </span>
              </div>

              <div>
                <h3 className="font-sans font-black text-2xl sm:text-4xl text-white tracking-tight">
                  Meet Your Lead SRE Architect
                </h3>
                <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  Your mission-critical infrastructure is never handed over to junior ticket-handlers or outsourced offshore desks. At <strong>Code17</strong>, every cloud migration, Kubernetes fleet, and Terraform module is architected, verified, and continuously monitored directly by senior engineering leadership with 12+ years of production experience.
                </p>
              </div>

              {/* Badges / Competencies */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                  <div className="text-[11px] font-mono text-[#00DDBA] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Multi-Cloud &amp; K8s
                  </div>
                  <div className="text-xs text-neutral-300 font-medium">AWS Solutions Architect &amp; CKA Kubernetes Specialist</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                  <div className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    FinOps Bill Auditing
                  </div>
                  <div className="text-xs text-neutral-300 font-medium">Proven 20–38% monthly cloud cost reduction</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                  <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Direct On-Call Line
                  </div>
                  <div className="text-xs text-neutral-300 font-medium">Direct Slack/Teams channel with 15-min emergency SLA</div>
                </div>
              </div>
            </div>

            {/* Right CTA Area */}
            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-start lg:items-center text-center lg:text-left justify-center bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
              <div className="text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">
                1-on-1 Session
              </div>
              <div className="text-lg font-bold text-white mb-2">
                Talk directly with our Lead Architect
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-normal">
                No salespeople. No slide decks. Just an open technical deep-dive into your infrastructure bottlenecks.
              </p>
              <button
                type="button"
                onClick={onOpenBooking || (() => {
                  const elem = document.getElementById('discuss');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                })}
                className="w-full py-3.5 px-6 rounded-xl bg-[#00DDBA] hover:bg-[#00c4a5] text-neutral-950 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00DDBA]/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 30-Min Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] font-mono text-neutral-500 mt-3 text-center w-full">
                100% Free · NDA Protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
