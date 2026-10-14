import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Clock, Zap, Star } from 'lucide-react';

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
        'Guaranteed 15-Minute Emergency Response SLA',
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
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-palark-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-palark-purple mb-2">
              TRANSPARENT PRICING &amp; CLUTCH BENCHMARK
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-palark-dark tracking-tight">
              Flat Monthly Rates. Zero Surprises.
            </h2>
          </div>

          {/* Currency Toggle (Palark European/US style) */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#F2F4F7] border border-palark-border self-start md:self-end">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                currency === 'USD' ? 'bg-white text-palark-dark shadow-sm' : 'text-palark-gray hover:text-palark-dark'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                currency === 'EUR' ? 'bg-white text-palark-dark shadow-sm' : 'text-palark-gray hover:text-palark-dark'
              }`}
            >
              EUR (€)
            </button>
          </div>
        </div>

        {/* Clutch Industry Benchmark Snapshot Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] border border-palark-border mb-12 shadow-xs">
          <div className="border-r border-slate-200/80 pr-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Min. Project Size</div>
            <div className="text-xl sm:text-2xl font-black text-palark-dark mt-0.5">$2,000+</div>
            <div className="text-[11px] text-slate-500 font-medium">Clutch Verified Threshold</div>
          </div>
          <div className="lg:border-r border-slate-200/80 pr-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Avg. Hourly Bracket</div>
            <div className="text-xl sm:text-2xl font-black text-palark-dark mt-0.5">$35 – $65 / hr</div>
            <div className="text-[11px] text-slate-500 font-medium">High-Efficiency SRE &amp; Dev</div>
          </div>
          <div className="border-r border-slate-200/80 pr-4 pt-3 sm:pt-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Client Rating</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xl sm:text-2xl font-black text-palark-dark">4.9 / 5.0</span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">15+ Verified B2B Reviews</div>
          </div>
          <div className="pt-3 sm:pt-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Engagement Models</div>
            <div className="text-xl sm:text-2xl font-black text-palark-dark mt-0.5">Retainer &amp; Fixed</div>
            <div className="text-[11px] text-slate-500 font-medium">99.99% SLA &amp; 15-min Response</div>
          </div>
        </div>

        {/* 3 Pricing Cards (Palark style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`border rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 ${
                idx === 1
                  ? 'border-palark-purple bg-[#FBF9FF] shadow-lg relative lg:-translate-y-2'
                  : 'border-palark-border bg-white shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${p.badgeClass}`}>
                    {p.badge}
                  </span>
                  {idx === 1 && (
                    <span className="text-xs font-bold text-palark-purple flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 fill-current" /> Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-bold text-2xl text-palark-dark mb-1">
                  {p.name}
                </h3>
                <p className="text-xs text-palark-gray mb-6">
                  {p.tagline}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="font-sans font-black text-4xl text-palark-dark">
                    {p.price}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {p.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {p.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-palark-purple shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(p.name, p.price)}
                className={`w-full py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  idx === 1
                    ? 'bg-palark-dark text-white hover:bg-black shadow-md'
                    : 'bg-[#F2F4F7] text-palark-dark hover:bg-palark-dark hover:text-white'
                }`}
              >
                <span>{p.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Palark Guarantee note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8F9FA] border border-palark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-palark-gray font-medium">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#00DDBA]" />
            <span>All monthly packages include a 2-week risk-free trial. Cancel anytime with 30 days notice.</span>
          </div>
          <div className="flex items-center gap-2 text-palark-dark font-bold">
            <Clock className="w-4 h-4 text-palark-purple" />
            <span>Guaranteed 15-min SLA for P1 emergencies</span>
          </div>
        </div>
      </div>
    </section>
  );
};
