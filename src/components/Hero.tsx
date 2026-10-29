import React, { useState } from 'react';
import { ArrowUpRight, Terminal, ShieldCheck, Activity, Layers, Zap } from 'lucide-react';
import { ClusterMonitorWidget } from './ClusterMonitorWidget';

interface HeroProps {
  onOpenContact: () => void;
  onOpenPricing: () => void;
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenPricing, onOpenBooking }) => {
  const [focusMode, setFocusMode] = useState<'unified' | 'saas' | 'sre'>('unified');

  return (
    <section className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FBFBFD] border-b border-neutral-200/80 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Top Architectural Metadata Rail */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-neutral-200/80 font-mono text-[11px] text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-900 text-white font-semibold">
              <Terminal className="w-3 h-3 text-[#00DDBA]" />
              CODE17.TECH // SPEC-2026
            </span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span className="hidden sm:inline tracking-wider">DUAL-DISCIPLINE LAB: SAAS × PRODUCTION SRE</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-neutral-900">SYSTEMS ACTIVE</span> // 99.99% UPTIME TARGET
            </span>
            <span className="hidden md:inline text-neutral-400">GLOBAL NODE: US-WEST / EU-CENTRAL</span>
          </div>
        </div>

        {/* Main Grid: Left Typographic Lockup + Right Operations Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Bespoke Architectural Typography */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Free Audit High-Intent Callout */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-900/10 via-purple-500/10 to-[#00DDBA]/10 border border-purple-500/25 text-xs font-mono font-medium text-purple-950 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-bold text-neutral-900">FREE AUDIT:</span>
              <span className="truncate">30-Min Systems &amp; Infra Review ($0)</span>
            </div>

            {/* Interactive Discipline Mode Filter */}
            <div className="flex items-center p-1 rounded-lg bg-neutral-200/70 border border-neutral-300/80 font-mono text-xs w-full sm:w-fit overflow-x-auto max-w-full">
              <button
                onClick={() => setFocusMode('unified')}
                className={`px-3 py-1.5 rounded-md transition-all font-medium shrink-0 cursor-pointer ${
                  focusMode === 'unified'
                    ? 'bg-white text-neutral-950 shadow-xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                // ALL CAPABILITIES
              </button>
              <button
                onClick={() => setFocusMode('saas')}
                className={`px-3 py-1.5 rounded-md transition-all font-medium shrink-0 cursor-pointer ${
                  focusMode === 'saas'
                    ? 'bg-white text-neutral-950 shadow-xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                01 SAAS LAB
              </button>
              <button
                onClick={() => setFocusMode('sre')}
                className={`px-3 py-1.5 rounded-md transition-all font-medium shrink-0 cursor-pointer ${
                  focusMode === 'sre'
                    ? 'bg-white text-neutral-950 shadow-xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                02 SRE COMMAND
              </button>
            </div>

            {/* The Main Headline - High Craft Editorial Lockup (H1 for SEO) */}
            <h1 className="space-y-1 pt-1">
              <span className="block font-sans font-black text-4xl sm:text-5xl lg:text-[62px] text-neutral-950 tracking-[-0.035em] leading-[1.04]">
                We build the software.
              </span>
              <span className="font-sans font-black text-4xl sm:text-5xl lg:text-[62px] text-neutral-950 tracking-[-0.035em] leading-[1.04] flex items-center flex-wrap gap-x-3">
                <span>We guard the uptime.</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-neutral-100 border border-neutral-300 text-neutral-800 font-semibold tracking-normal align-middle self-center">
                  24/7/365
                </span>
              </span>
            </h1>

            {/* Dynamic Content based on Discipline Filter */}
            <div className="min-h-[72px]">
              {focusMode === 'unified' && (
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl">
                  Code17 is an elite technology practice combining senior SaaS product engineering with around-the-clock Site Reliability Engineering (SRE). We turn complex distributed systems into bulletproof, zero-downtime revenue engines.
                </p>
              )}
              {focusMode === 'saas' && (
                <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal max-w-2xl bg-amber-500/10 border-l-2 border-amber-500 pl-3 py-1">
                  <strong>SaaS Discipline:</strong> Full-cycle application engineering from day-zero architecture to multi-tenant isolation, Stripe subscription engines, Next.js Edge APIs, and AI pipeline orchestration.
                </p>
              )}
              {focusMode === 'sre' && (
                <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal max-w-2xl bg-[#00DDBA]/10 border-l-2 border-[#00DDBA] pl-3 py-1">
                  <strong>SRE Discipline:</strong> 24/7/365 active shift on-call rotations, Kubernetes fleet management, ArgoCD declarative GitOps, zero-downtime migrations, and P1 incident response under 15 minutes.
                </p>
              )}
            </div>

            {/* High-Craft Architectural CTA Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking || onOpenContact}
                className="group relative inline-flex items-center gap-3 bg-[#0B0C14] hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-bold px-7 py-4 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-purple-500/30 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Book a free 30-min infrastructure audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#00DDBA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenPricing}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-950 transition-colors px-3 py-4 cursor-pointer"
              >
                <span>Pricing ↓</span>
              </button>
            </div>

            {/* Industrial Specs Matrix Strip */}
            <div className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-neutral-200 rounded-xl bg-white overflow-hidden text-left divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
                
                <div className="p-3.5 sm:p-4 hover:bg-neutral-50/60 transition-colors">
                  <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-mono uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Incident SLA</span>
                  </div>
                  <div className="mt-1 font-mono text-sm sm:text-base font-bold text-neutral-900">
                    &lt; 15 min
                  </div>
                  <div className="text-[11px] text-neutral-500 font-sans mt-0.5">
                    Defined in your SLA
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 hover:bg-neutral-50/60 transition-colors">
                  <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-mono uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Multi-Tenant</span>
                  </div>
                  <div className="mt-1 font-mono text-sm sm:text-base font-bold text-neutral-900">
                    Production K8s
                  </div>
                  <div className="text-[11px] text-neutral-500 font-sans mt-0.5">
                    Stripe & RLS isolation
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 hover:bg-neutral-50/60 transition-colors">
                  <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-mono uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Compliance</span>
                  </div>
                  <div className="mt-1 font-mono text-sm sm:text-base font-bold text-neutral-900">
                    ISO 27001 / SOC 2
                  </div>
                  <div className="text-[11px] text-neutral-500 font-sans mt-0.5">
                    Aligned security controls
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Interactive Systems Cockpit */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Corner crosshair accents for technical engineering vibe */}
              <span className="absolute -top-2 -left-2 text-neutral-300 font-mono text-xs select-none">+</span>
              <span className="absolute -top-2 -right-2 text-neutral-300 font-mono text-xs select-none">+</span>
              <span className="absolute -bottom-2 -left-2 text-neutral-300 font-mono text-xs select-none">+</span>
              <span className="absolute -bottom-2 -right-2 text-neutral-300 font-mono text-xs select-none">+</span>

              <ClusterMonitorWidget />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
