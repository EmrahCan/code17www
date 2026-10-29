import React, { useState } from 'react';
import { Cpu, GitBranch, Layers, Server, ArrowRight } from 'lucide-react';

interface MatrixDomain {
  id: string;
  number: string;
  name: string;
  icon: any;
  summary: string;
  technologies: { name: string; role: string }[];
  tradeoffsSolved: string;
  benchmark: string;
}

export const ArchitectureRadar: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState('domain-ai');

  const domains: MatrixDomain[] = [
    {
      id: 'domain-ai',
      number: '01',
      name: 'Agentic AI & Deterministic LLM Systems',
      icon: Cpu,
      summary: 'Bridging the gap between probabilistic LLM behavior and deterministic enterprise SLA guarantees. We design private vector spaces, multi-agent evaluation loops, and custom tooling integrations.',
      technologies: [
        { name: 'Temporal Workflows', role: 'Stateful Agent Tool Orchestration' },
        { name: 'Qdrant / pgvector', role: 'Isolated High-Dimensional Embedding Stores' },
        { name: 'AWS Bedrock / Azure AI', role: 'VPC Enterprise Model Ingress' },
        { name: 'LlamaIndex / LangChain', role: 'Semantic Routing & Context Assemblers' }
      ],
      tradeoffsSolved: 'Prevents non-deterministic hallucination leakage by enforcing strict Pydantic JSON schemas and multi-step validation guardrails before any output reaches end users.',
      benchmark: 'P99 Latency: <18ms | Compliance Extraction Accuracy: 99.4%'
    },
    {
      id: 'domain-dist',
      number: '02',
      name: 'Distributed Workflows & State Machines',
      icon: GitBranch,
      summary: 'Designing mission-critical backend state machines where failures cannot be tolerated: financial ledger transactions, e-commerce checkout routing, and multi-cloud database syncs.',
      technologies: [
        { name: 'Temporal Cloud', role: 'Durable Execution & Replay Engine' },
        { name: 'Apache Kafka', role: 'High-Throughput Partitioned Event Bus' },
        { name: 'Go / TypeScript', role: 'High-Concurrency Worker Run Times' },
        { name: 'Redis Sentinel', role: 'Low-Latency Distributed Locks' }
      ],
      tradeoffsSolved: 'Eliminates orphaned transactions and manual database recovery scripts through automatic deterministic workflow resumption across infrastructure outages.',
      benchmark: 'Zero data loss across critical services | 99.99% Execution Reliability'
    },
    {
      id: 'domain-front',
      number: '03',
      name: 'Frontend Platforms & Design Token Systems',
      icon: Layers,
      summary: 'Building monorepo component architecture and server-driven web applications that maintain 60FPS fluid interactions while scaling across 40+ engineering squads.',
      technologies: [
        { name: 'Next.js 14 / React 18', role: 'Server Components & Edge Rendering' },
        { name: 'Figma Tokens Studio', role: 'Single-Source Design Token Architecture' },
        { name: 'Turborepo', role: 'Blazing Fast Monorepo Multi-Package Cache' },
        { name: 'Playwright & Jest', role: 'Visual Regression & E2E Testing Automation' }
      ],
      tradeoffsSolved: 'Bridges designer-developer drift completely. Any token update in Figma instantly generates synchronized npm design package pull requests with automated visual diffs.',
      benchmark: 'Lighthouse 99/100 | Time to ship new feature cut by 70%'
    },
    {
      id: 'domain-cloud',
      number: '04',
      name: 'Cloud Native & Kubernetes Infrastructure',
      icon: Server,
      summary: 'Infrastructure as Code and GitOps continuous delivery engineered for high-concurrency peak elasticity, compliance auditing, and instant canary rollback.',
      technologies: [
        { name: 'Kubernetes (EKS/GKE)', role: 'Container Mesh & Horizontal Pod Auto-scaling' },
        { name: 'Terraform / OpenTofu', role: 'Auditable Multi-Region Infrastructure as Code' },
        { name: 'ArgoCD', role: 'Declarative GitOps Continuous Deployment' },
        { name: 'Datadog / OpenTelemetry', role: 'Distributed Tracing & Real-Time Alerts' }
      ],
      tradeoffsSolved: 'Zero-downtime canary deployment strategy ensures zero customer interruption even during major database schema migrations and peak sales events.',
      benchmark: 'Infra cost cut by 38% | Sub-minute global rollout cycles'
    }
  ];

  const activeDomain = domains.find((d) => d.id === activeDomainId) || domains[0];
  const ActiveIcon = activeDomain.icon;

  return (
    <section id="matrix" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#040507] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="text-xs font-mono text-[#FF4F18] uppercase tracking-widest mb-1.5">
              01 // TECHNICAL CAPABILITIES MATRIX
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              Production-Verified Domains
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
            Click across our engineering practices to inspect the verified toolchain, trade-offs solved, and measured benchmarks.
          </p>
        </div>

        {/* Interactive Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Domain List */}
          <div className="lg:col-span-4 space-y-2">
            {domains.map((domain) => {
              const isSelected = domain.id === activeDomainId;
              const Icon = domain.icon;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0F131A] border-[#FF4F18] text-white shadow-lg'
                      : 'bg-[#06080B] border-white/[0.05] text-slate-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#FF4F18] font-bold">
                      {domain.number}
                    </span>
                    <div className="flex items-center gap-2 font-sans font-bold text-sm">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FF4F18]' : 'text-slate-500'}`} />
                      <span>{domain.name.split('&')[0].trim()}</span>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#FF4F18]' : 'opacity-0 group-hover:opacity-100 text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Dossier Sheet */}
          <div className="lg:col-span-8 bg-[#0A0D12] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-white/[0.06] pb-4">
              <div>
                <div className="text-xs font-mono text-slate-500">PRACTICE SPECIFICATION</div>
                <h3 className="font-sans font-bold text-2xl text-white mt-1 flex items-center gap-2.5">
                  <ActiveIcon className="w-6 h-6 text-[#FF4F18]" />
                  <span>{activeDomain.name}</span>
                </h3>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#0F131A] text-[#00E5FF] border border-white/10">
                VERIFIED IN PRODUCTION
              </span>
            </div>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {activeDomain.summary}
            </p>

            {/* Battle-tested toolchain */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Production-Tested Toolchain & Ingress
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeDomain.technologies.map((tech, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#06080B] border border-white/[0.05] flex flex-col justify-between">
                    <span className="text-xs font-mono font-bold text-white">{tech.name}</span>
                    <span className="text-[11px] font-mono text-slate-400 mt-0.5">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tradeoff Solved Callout */}
            <div className="p-4 rounded-xl bg-[#0F131A] border-l-2 border-[#FF4F18] space-y-1">
              <div className="text-xs font-mono font-bold text-[#FF4F18] uppercase">
                Critical Engineering Trade-Off Solved:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {activeDomain.tradeoffsSolved}
              </p>
            </div>

            {/* Benchmark Footer */}
            <div className="pt-2 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-white/[0.06]">
              <span>BENCHMARK: <strong className="text-white">{activeDomain.benchmark}</strong></span>
              <a href="#brief" className="text-[#FF4F18] hover:underline font-semibold flex items-center gap-1">
                Request Architecture Brief &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
