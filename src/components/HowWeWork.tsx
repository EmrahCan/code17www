import React from 'react';
import { Search, Compass, Cpu, Activity, ArrowRight } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Audit',
      subtitle: 'Deep-Dive Discovery',
      desc: 'We inspect your microservices, Kubernetes clusters, and cloud configurations to identify performance bottlenecks, single points of failure, and wasted cloud spend.',
      icon: Search,
      badge: 'WEEK 0',
      accent: 'border-c17-purple text-c17-purple bg-c17-purple-light',
    },
    {
      num: '02',
      title: 'Plan',
      subtitle: 'Architectural Blueprint',
      desc: 'We map out milestone-based execution roadmaps with declarative IaC specs, zero-downtime migration plans, and 99.99% uptime target SLAs defined upfront.',
      icon: Compass,
      badge: 'SPRINT 1',
      accent: 'border-c17-blue text-c17-blue bg-c17-blue-light',
    },
    {
      num: '03',
      title: 'Build',
      subtitle: 'Senior Engineering Execution',
      desc: 'Our senior engineers build or refactor your stack: declarative GitOps with ArgoCD, automated test suites, Next.js frontends, and resilient Go/Python microservices.',
      icon: Cpu,
      badge: 'CONTINUOUS',
      accent: 'border-[#00DDBA] text-emerald-600 bg-c17-lime-light',
    },
    {
      num: '04',
      title: 'Operate 24/7',
      subtitle: 'Continuous SRE Guard',
      desc: 'We safeguard your production environment 24/7/365 with active shift rotations, automated health checks, and P1 incident response under 15 minutes.',
      icon: Activity,
      badge: '24/7/365',
      accent: 'border-amber-400 text-amber-600 bg-amber-50',
    },
  ];

  return (
    <section id="how-we-work" className="py-20 px-4 sm:px-6 lg:px-8 bg-c17-bg border-t border-b border-c17-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-c17-purple mb-2">
              ENGINEERING METHODOLOGY
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-c17-dark tracking-tight">
              How We Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-c17-gray max-w-md font-normal">
            A battle-tested 4-step framework from initial technical discovery to around-the-clock site reliability.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-c17-border rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-c17-purple transition-colors">
                      {step.num}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${step.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-sans font-extrabold text-xl text-c17-dark">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {step.badge}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-c17-purple mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-c17-gray leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-400 group-hover:text-c17-dark transition-colors">
                  <span>Step {step.num} of 04</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
