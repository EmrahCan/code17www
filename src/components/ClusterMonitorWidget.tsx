import React, { useState } from 'react';
import { Server, Activity, ShieldCheck, GitBranch, CheckCircle2, Zap, Layers, Database, CreditCard } from 'lucide-react';

export const ClusterMonitorWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fleet' | 'saas' | 'gitops' | 'sre'>('fleet');

  return (
    <div className="bg-white border border-[#E4E7EC] rounded-3xl p-6 shadow-xl shadow-slate-100/80 transition-all duration-300 space-y-4">
      {/* Top Bar: Live Status */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00DDBA]"></span>
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-palark-dark uppercase tracking-wider">
                Production Operations Hub
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E6FBF7] text-[#00A389] font-bold">
                99.995% SLA
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Managed 24/7 by Code17.Tech Engineering
            </div>
          </div>
        </div>

        {/* Live status badge */}
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>SYSTEMS NORMAL</span>
        </div>
      </div>

      {/* Tabs as a full-width clean segment bar */}
      <div className="grid grid-cols-4 p-1 bg-[#F2F4F7] rounded-2xl text-[11px] font-bold text-center gap-1">
        <button
          onClick={() => setActiveTab('fleet')}
          className={`py-1.5 rounded-xl transition-all ${
            activeTab === 'fleet'
              ? 'bg-white text-palark-dark shadow-xs font-extrabold'
              : 'text-slate-500 hover:text-palark-dark'
          }`}
        >
          Clusters
        </button>
        <button
          onClick={() => setActiveTab('saas')}
          className={`py-1.5 rounded-xl transition-all ${
            activeTab === 'saas'
              ? 'bg-white text-palark-purple shadow-xs font-extrabold'
              : 'text-slate-500 hover:text-palark-dark'
          }`}
        >
          SaaS Stack
        </button>
        <button
          onClick={() => setActiveTab('gitops')}
          className={`py-1.5 rounded-xl transition-all ${
            activeTab === 'gitops'
              ? 'bg-white text-palark-dark shadow-xs font-extrabold'
              : 'text-slate-500 hover:text-palark-dark'
          }`}
        >
          GitOps
        </button>
        <button
          onClick={() => setActiveTab('sre')}
          className={`py-1.5 rounded-xl transition-all ${
            activeTab === 'sre'
              ? 'bg-white text-palark-dark shadow-xs font-extrabold'
              : 'text-slate-500 hover:text-palark-dark'
          }`}
        >
          24/7 Shift
        </button>
      </div>

      {/* Dynamic Content Area based on tab */}
      <div className="pt-5 space-y-4">
        {activeTab === 'fleet' && (
          <>
            {/* Cluster Nodes Visual Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-slate-100 hover:border-palark-blue transition-colors">
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-1.5 font-bold text-palark-dark">
                    <Server className="w-3.5 h-3.5 text-palark-blue" />
                    <span>AWS EKS · us-east-1</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <div className="flex items-baseline justify-between font-mono text-[11px] text-slate-500">
                  <span>36 Nodes · 142 Pods</span>
                  <span className="font-bold text-emerald-600">Healthy</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-palark-blue h-full rounded-full w-[68%]"></div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-slate-100 hover:border-palark-purple transition-colors">
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-1.5 font-bold text-palark-dark">
                    <Server className="w-3.5 h-3.5 text-palark-purple" />
                    <span>GCP GKE · eu-west-1</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <div className="flex items-baseline justify-between font-mono text-[11px] text-slate-500">
                  <span>24 Nodes · 98 Pods</span>
                  <span className="font-bold text-emerald-600">Healthy</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-palark-purple h-full rounded-full w-[54%]"></div>
                </div>
              </div>
            </div>

            {/* Real-time Telemetry Strip */}
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#9540FF]" />
                  <span className="font-sans font-bold text-xs text-palark-dark">
                    Live Telemetry & Ingress
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="text-slate-500">p99 Latency: <strong className="text-palark-dark">11.4ms</strong></span>
                  <span className="text-slate-500">Error rate: <strong className="text-emerald-600">0.00%</strong></span>
                </div>
              </div>

              {/* Animated Sparkline SVG */}
              <div className="h-10 w-full flex items-end">
                <svg className="w-full h-full" viewBox="0 0 300 40" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="metricGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9540FF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#9540FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 30 Q 30 18, 60 22 T 120 12 T 180 25 T 240 8 T 300 15 L 300 40 L 0 40 Z"
                    fill="url(#metricGrad)"
                  />
                  <path
                    d="M0 30 Q 30 18, 60 22 T 120 12 T 180 25 T 240 8 T 300 15"
                    fill="none"
                    stroke="#9540FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </>
        )}

        {activeTab === 'saas' && (
          <div className="space-y-3">
            {/* Multi-Tenant SaaS Engine Status */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-slate-100">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-palark-dark">
                    <Database className="w-3.5 h-3.5 text-palark-purple" />
                    <span>Multi-Tenant DB</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  PostgreSQL + Row-Level Security
                </div>
                <div className="mt-1 text-[10px] font-bold text-emerald-600 font-mono">
                  100% Tenant Isolation
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-slate-100">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-palark-dark">
                    <CreditCard className="w-3.5 h-3.5 text-palark-blue" />
                    <span>Billing & Subscriptions</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  Stripe Webhook Engine
                </div>
                <div className="mt-1 text-[10px] font-bold text-palark-blue font-mono">
                  Instant Webhook Delivery
                </div>
              </div>
            </div>

            {/* Microservices & API Throughput */}
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-slate-100 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xs text-palark-dark">
                  <Layers className="w-4 h-4 text-[#00A389]" />
                  <span>SaaS API & Workflow Pipeline</span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-[#E6FBF7] text-[#00A389] text-[10px] font-mono font-bold">
                  8.2ms p99 SPEED
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                  <span className="text-slate-600">Next.js Edge SSR / GraphQL</span>
                  <span className="text-emerald-600 font-bold">52.4k req/sec</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                  <span className="text-slate-600">Temporal Workflow Jobs</span>
                  <span className="text-palark-purple font-bold">1,420 Completed (0 Failed)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gitops' && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xs text-palark-dark">
                  <GitBranch className="w-4 h-4 text-palark-blue" />
                  <span>ArgoCD Automated Continuous Sync</span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold">
                  SYNCED · HEALTHY
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                  <span className="text-slate-600">main → release-v2.4.1</span>
                  <span className="text-emerald-600 font-bold">Canary 100% Deployed</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                  <span className="text-slate-600">Config Drift Check</span>
                  <span className="text-palark-blue font-bold">0 Diffs (100% Declarative)</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#EBF7FF] border border-[#D0ECFD] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#006BB8] font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Automated rollback triggered if latency exceeds 25ms</span>
              </div>
              <span className="font-bold text-[#006BB8]">Active</span>
            </div>
          </div>
        )}

        {activeTab === 'sre' && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xs text-palark-dark">
                  <Zap className="w-4 h-4 text-[#9540FF]" />
                  <span>Active On-Call Operations Shift</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F5EDFF] text-[#9540FF] text-[10px] font-mono font-bold">
                  24/7/365
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-100">
                  <div className="text-slate-400 text-[10px] uppercase font-mono">Guaranteed SLA</div>
                  <div className="font-bold text-palark-dark text-sm mt-0.5">&lt; 15 Minutes</div>
                  <div className="text-[10px] text-emerald-600 font-medium">Average: 4.8 min</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-100">
                  <div className="text-slate-400 text-[10px] uppercase font-mono">Escalation Desk</div>
                  <div className="font-bold text-palark-dark text-sm mt-0.5">Tier 3 SRE Lead</div>
                  <div className="text-[10px] text-slate-500 font-medium">Direct Slack & Phone</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#F5EDFF] border border-[#E9D7FE] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#7A22E5] font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Zero unresolved incidents in the last 180 days</span>
              </div>
              <span className="font-bold text-[#7A22E5]">100% OK</span>
            </div>
          </div>
        )}

        {/* Footer info strip */}
        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono border-t border-slate-100">
          <span>Flat monthly rate · No hourly surprise</span>
          <span className="text-[#00DDBA] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DDBA]"></span>
            Continuous Protection
          </span>
        </div>
      </div>
    </div>
  );
};
