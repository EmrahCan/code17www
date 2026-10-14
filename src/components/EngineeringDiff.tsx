import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const EngineeringDiff: React.FC = () => {
  const comparisons = [
    {
      domain: 'Squad Composition',
      traditional: 'Junior offshore engineers with high turnover and hidden middle-management layers.',
      code17: '100% Senior Staff Architects & Distributed Systems Veterans who have built at scale.'
    },
    {
      domain: 'Intellectual Property & Code',
      traditional: 'Proprietary scaffolding creating indefinite vendor lock-in and opaque dependencies.',
      code17: '100% Direct IP Assignment on day one. Clean, auditable, standard open-source toolchains.'
    },
    {
      domain: 'Engineering Guarantees',
      traditional: 'Hourly time-and-materials billing with zero accountability for deadline slippage.',
      code17: '2-Week Risk-Free Discovery Sprint. If our architecture fails to impress, you owe $0.'
    },
    {
      domain: 'Testing & Reliability',
      traditional: 'Manual QA after release; frequent regression bugs in production environments.',
      code17: 'Automated CI/CD, unit, and Playwright E2E suites with verified P99 latency SLAs.'
    },
    {
      domain: 'Team Mentorship & Handover',
      traditional: 'They hold keys to the kingdom so you never leave their recurring retainers.',
      code17: 'Complete runbooks, 1:1 engineering mentorship, and empowerment of your in-house team.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#040507] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="text-xs font-mono text-[#FF4F18] uppercase tracking-widest mb-1.5">
              THE CODE 17 STANDARD
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              Why Leaders Fire Their Agencies for Us
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            The contrast between traditional IT staff augmentation and Code 17's elite engineering interlock.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="space-y-3">
          {comparisons.map((c, idx) => (
            <div
              key={idx}
              className="bg-[#0A0D12] border border-white/[0.06] rounded-xl p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-3 font-mono text-xs uppercase font-bold text-white tracking-wider">
                {c.domain}
              </div>

              <div className="lg:col-span-4 flex items-start gap-2.5 text-xs text-slate-400 font-light leading-relaxed">
                <XCircle className="w-4 h-4 text-red-500/80 shrink-0 mt-0.5" />
                <span>{c.traditional}</span>
              </div>

              <div className="hidden lg:block lg:col-span-1 text-center font-mono text-xs text-slate-600">
                &rarr;
              </div>

              <div className="lg:col-span-4 flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{c.code17}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
