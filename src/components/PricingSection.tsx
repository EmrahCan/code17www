import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string, tier: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');

  const plans = [
    {
      name: 'Continuous SRE & DevOps',
      tagline: '24/7 cloud reliability, automated CI/CD & incident protection',
      price: currency === 'USD' ? '$2,000' : '€1.850',
      period: '/ month flat',
      badge: '24/7 RELIABILITY',
      badgeClass: 'badge-blue',
      features: [
        '24/7/365 On-Call SRE Shift',
        'P1 Incident Response Under 15 Minutes',
        'Continuous Prometheus / Grafana Monitoring',
        'ArgoCD GitOps & Kubernetes Multi-Cluster',
        'Automated Backup & Disaster Recovery Tests',
        'Monthly Architecture Advisory Meeting'
      ],
      cta: 'Choose Continuous SRE'
    },
    {
      name: 'Dedicated SaaS & SRE Squad',
      tagline: 'Full product engineering velocity backed by 24/7 SRE leadership',
      price: currency === 'USD' ? '$4,500' : '€4.200',
      period: '/ month flat',
      badge: 'MOST POPULAR',
      badgeClass: 'badge-purple',
      features: [
        'Full-Stack Engineers (Next.js, React, Go, Python)',
        '24/7 On-Call SRE & 15-Minute Emergency SLA',
        'Multi-Tenant Architecture & Stripe Subscriptions',
        'Continuous Automated Testing & GitOps Delivery',
        'Direct Slack / Teams Sync & Daily Standups',
        'Zero-Downtime Microservice Releases',
        '100% Intellectual Property Code Ownership'
      ],
      cta: 'Assemble SaaS Squad'
    },
    {
      name: 'SaaS MVP Launch Sprint',
      tagline: 'Fixed-scope acceleration sprint from architecture to live production',
      price: currency === 'USD' ? '$9,500' : '€8.800',
      period: '/ sprint package',
      badge: 'FIXED SCOPE',
      badgeClass: 'badge-lime',
      features: [
        'Complete Multi-Tenant SaaS Architecture',
        'Next.js Frontend + High-Speed Go/Node Backend',
        'Stripe Billing, Auth & User Role Management (RBAC)',
        'Cloud-Native Kubernetes Infrastructure Setup',
        'Native Private AI / LLM Feature Integration',
        'Full Runbooks, Automated CI/CD & Team Handover'
      ],
      cta: 'Request MVP Sprint'
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-c17-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-c17-purple mb-2">
              TRANSPARENT PRICING &amp; ENGAGEMENT MODEL
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-c17-dark tracking-tight">
              Flat Monthly Rates. Zero Surprises.
            </h2>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#F2F4F7] border border-c17-border self-start md:self-end">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currency === 'USD' ? 'bg-white text-c17-dark shadow-xs' : 'text-c17-gray hover:text-c17-dark'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currency === 'EUR' ? 'bg-white text-c17-dark shadow-xs' : 'text-c17-gray hover:text-c17-dark'
              }`}
            >
              EUR (€)
            </button>
          </div>
        </div>

        {/* Engagement Parameters Snapshot Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] border border-c17-border mb-12 shadow-xs">
          <div className="border-r border-slate-200/80 pr-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Min. Monthly Retainer</div>
            <div className="text-xl sm:text-2xl font-black text-c17-dark mt-0.5">$2,000 / mo</div>
            <div className="text-[11px] text-slate-500 font-medium">Flat predictable commitment</div>
          </div>
          <div className="lg:border-r border-slate-200/80 pr-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Trial Period</div>
            <div className="text-xl sm:text-2xl font-black text-c17-dark mt-0.5">2 Weeks Free</div>
            <div className="text-[11px] text-slate-500 font-medium">Risk-free onboarding trial</div>
          </div>
          <div className="border-r border-slate-200/80 pr-4 pt-3 sm:pt-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Uptime SLA Target</div>
            <div className="text-xl sm:text-2xl font-black text-c17-dark mt-0.5">99.99% Target</div>
            <div className="text-[11px] text-slate-500 font-medium">Defined in your SLA</div>
          </div>
          <div className="pt-3 sm:pt-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Emergency SLA</div>
            <div className="text-xl sm:text-2xl font-black text-c17-dark mt-0.5">&lt; 15 Minutes</div>
            <div className="text-[11px] text-slate-500 font-medium">P1 incident response desk</div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`border rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 ${
                idx === 1
                  ? 'border-c17-purple bg-[#FBF9FF] shadow-lg relative lg:-translate-y-2'
                  : 'border-c17-border bg-white shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${p.badgeClass}`}>
                    {p.badge}
                  </span>
                  {idx === 1 && (
                    <span className="text-xs font-bold text-c17-purple flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 fill-current" /> Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-bold text-2xl text-c17-dark mb-1">
                  {p.name}
                </h3>
                <p className="text-xs text-c17-gray mb-6">
                  {p.tagline}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="font-sans font-black text-4xl text-c17-dark">
                    {p.price}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {p.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {p.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-c17-purple shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(p.name, p.price)}
                className={`w-full py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  idx === 1
                    ? 'bg-c17-dark text-white hover:bg-black shadow-md'
                    : 'bg-[#F2F4F7] text-c17-dark hover:bg-c17-dark hover:text-white'
                }`}
              >
                <span>{p.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee and terms note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8F9FA] border border-c17-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-c17-gray font-medium">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#00DDBA] shrink-0" />
            <span>2-week free trial, then month-to-month, cancel anytime with 30 days' notice.</span>
          </div>
          <div className="flex items-center gap-2 text-c17-dark font-bold shrink-0">
            <Clock className="w-4 h-4 text-c17-purple shrink-0" />
            <span>P1 incident response under 15 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
