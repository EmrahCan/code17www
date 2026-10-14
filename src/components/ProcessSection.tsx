import React from 'react';
import { Search, Compass, Rocket, GraduationCap } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Architectural Discovery & Technical Audit',
      icon: Search,
      description: 'We analyze your existing codebases, cloud infrastructure, and data flows to uncover latency bottlenecks, security risks, and architectural debt before writing a single line of code.',
      highlights: ['Deep Codebase & Schema Inspection', 'Threat Modeling & SLA Mapping', 'Deterministic Technical Roadmap']
    },
    {
      step: '02',
      title: 'Rapid PoC & Benchmark Validation',
      icon: Compass,
      description: 'We don’t rely on theory. We build high-velocity functional prototypes to stress-test throughput, validate LLM accuracy, and benchmark latency under simulated production peak.',
      highlights: ['Synthetic Load Testing', 'Prompt & Model Accuracy Evaluation', 'P99 Latency Verification']
    },
    {
      step: '03',
      title: 'Embedded Senior Production Sprints',
      icon: Rocket,
      description: 'Our senior engineers embed directly into your rituals. We ship clean, fully tested code with automated CI/CD pipelines, comprehensive observability, and daily transparent updates.',
      highlights: ['100% Senior Staff Talent', 'Automated Unit & E2E Testing', 'Continuous Delivery & Monitoring']
    },
    {
      step: '04',
      title: 'Knowledge Transfer & Team Enablement',
      icon: GraduationCap,
      description: 'We don’t believe in vendor lock-in. We mentor your internal developers, document every architecture decision, and ensure your team can confidently own and scale the system.',
      highlights: ['Complete Architecture Runbooks', '1:1 Engineering Mentorship', '100% Intellectual Property Assignment']
    }
  ];

  return (
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#01090D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-code17-teal-deep/80 border border-code17-teal-main/30 text-xs font-mono text-code17-teal-light mb-3">
            <span>THE CODE 17 STANDARD</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            How we deliver software that <span className="text-gradient-orange">never fails</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            A battle-tested 4-stage engineering delivery framework engineered for speed, rigor, and complete transparency.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#031822]/80 hover:bg-[#052330] border border-code17-teal-main/30 hover:border-code17-teal-light/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-2xl text-code17-orange">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-code17-teal-deep border border-code17-teal-main/40 flex items-center justify-center text-code17-cyan group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-code17-teal-light transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-1.5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-code17-cyan" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
