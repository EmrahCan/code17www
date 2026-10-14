import React, { useState } from 'react';
import { Cpu, Activity, Database, GitBranch, Terminal, RefreshCw } from 'lucide-react';

interface SystemNode {
  id: string;
  label: string;
  category: string;
  icon: any;
  status: 'healthy' | 'optimizing' | 'active';
  latency: string;
  throughput: string;
  details: string;
  tech: string[];
}

export const InteractiveSystemGraph: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState('ai-engine');

  const nodes: SystemNode[] = [
    {
      id: 'edge-gateway',
      label: 'Edge UI & Gateway',
      category: 'Client Layer',
      icon: Terminal,
      status: 'healthy',
      latency: '6.2ms',
      throughput: '42,500 req/s',
      details: 'Next.js 14 Server-Driven UI with Edge Caching & Web Application Firewall.',
      tech: ['Next.js', 'React 18', 'Cloudflare Workers', 'Tailwind']
    },
    {
      id: 'ai-engine',
      label: 'Autonomous AI Orchestrator',
      category: 'Intelligence Layer',
      icon: Cpu,
      status: 'active',
      latency: '18.4ms',
      throughput: '12,800 tokens/s',
      details: 'Deterministic Multi-Agent RAG pipeline with semantic guardrails & on-prem vectors.',
      tech: ['LangChain', 'LlamaIndex', 'Qdrant Vector', 'AWS Bedrock']
    },
    {
      id: 'temporal-mesh',
      label: 'Temporal Workflow Mesh',
      category: 'Distributed State',
      icon: GitBranch,
      status: 'healthy',
      latency: '1.2ms',
      throughput: '99.999% SLA',
      details: 'Durable execution state machines managing transactions with automated zero-loss failover.',
      tech: ['Temporal Cloud', 'Go Workers', 'Kafka', 'gRPC']
    },
    {
      id: 'cloud-cluster',
      label: 'Kubernetes Cloud Core',
      category: 'Infrastructure',
      icon: Database,
      status: 'healthy',
      latency: '0.8ms',
      throughput: '100% Zero-Loss',
      details: 'Auto-scaling multi-region Kubernetes clusters orchestrated with GitOps & ArgoCD.',
      tech: ['Kubernetes', 'Terraform', 'AWS EKS', 'Datadog']
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[1];
  const Icon = activeNode.icon;

  return (
    <div className="relative">
      {/* Background ambient neon glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-code17-teal-main via-code17-cyan to-code17-orange rounded-3xl blur-2xl opacity-25 animate-pulse-subtle" />

      {/* Main Glassmorphic Terminal Card */}
      <div className="relative bg-[#02141C]/90 border border-code17-teal-main/40 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-300 font-medium">
              code17://system-telemetry.mesh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-mono text-emerald-400 font-semibold">
              REAL-TIME INTERACTIVE
            </span>
          </div>
        </div>

        {/* Node Selector Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {nodes.map((node) => {
            const isSelected = node.id === activeNodeId;
            const NodeIcon = node.icon;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-code17-teal-deep text-white border-code17-cyan shadow-lg shadow-code17-teal-deep/50 scale-[1.02]'
                    : 'bg-[#031C26]/60 text-slate-400 border-white/5 hover:border-white/20 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <NodeIcon className={`w-4 h-4 ${isSelected ? 'text-code17-cyan' : 'text-slate-500'}`} />
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-code17-cyan animate-ping' : 'bg-slate-600'}`} />
                </div>
                <div className="text-xs font-heading font-bold line-clamp-1">
                  {node.label}
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                  {node.latency}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Node Telemetry Details Display */}
        <div className="bg-[#031F2A]/90 border border-code17-teal-main/30 rounded-2xl p-5 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-code17-teal-deep border border-code17-teal-main/50 flex items-center justify-center text-code17-cyan">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-base text-white">
                  {activeNode.label}
                </h4>
                <span className="text-xs font-mono text-code17-orange font-medium">
                  {activeNode.category}
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs font-mono text-code17-teal-light font-bold">
                P99: {activeNode.latency}
              </div>
              <div className="text-[10px] font-mono text-emerald-400">
                {activeNode.throughput}
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            {activeNode.details}
          </p>

          {/* Active node technologies */}
          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {activeNode.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded bg-[#01161E] border border-code17-teal-main/40 text-[11px] font-mono text-code17-teal-light"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 text-code17-cyan animate-spin" />
              Auto-Healing Active
            </span>
          </div>
        </div>

        {/* Live architectural metrics ticker at bottom */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-code17-orange" />
            <span>GLOBAL CLUSTER: US-EAST-1 + EU-CENTRAL</span>
          </span>
          <span className="text-code17-teal-light font-semibold">
            CODE 17 CERTIFIED
          </span>
        </div>
      </div>
    </div>
  );
};
