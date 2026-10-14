import React, { useState } from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

interface SpecialistRole {
  id: string;
  title: string;
  domain: string;
  skills: string;
  impactScore: number;
}

interface SquadAssemblerProps {
  onPrepopulateContact: (service: string, summary: string) => void;
}

export const SquadAssembler: React.FC<SquadAssemblerProps> = ({ onPrepopulateContact }) => {
  const roles: SpecialistRole[] = [
    {
      id: 'staff-architect',
      title: 'Principal Distributed Systems Architect',
      domain: 'Systems & Cloud',
      skills: 'Temporal Workflows, Kubernetes, High-Concurrency Go, Event Mesh',
      impactScore: 28,
    },
    {
      id: 'ai-specialist',
      title: 'Senior Enterprise AI & RAG Engineer',
      domain: 'Artificial Intelligence',
      skills: 'Multi-Agent Tooling, Vector DBs, Model Fine-Tuning, Privacy Guardrails',
      impactScore: 26,
    },
    {
      id: 'frontend-lead',
      title: 'Lead Frontend & Monorepo Architect',
      domain: 'Web Architecture',
      skills: 'Next.js 14, React 18 Monorepo, Web Vitals Optimization, Tailwind',
      impactScore: 22,
    },
    {
      id: 'devops-lead',
      title: 'Senior Cloud & GitOps Engineer',
      domain: 'Infrastructure',
      skills: 'Terraform, ArgoCD, Zero-Downtime Canary Rollouts, Multi-Cloud VPC',
      impactScore: 20,
    },
    {
      id: 'design-systems-lead',
      title: 'Design System & Token Architect',
      domain: 'Product Design',
      skills: 'Figma Tokens Studio, Storybook, Automated Component Sync, WCAG AA',
      impactScore: 18,
    },
  ];

  // Default selected: 1st and 2nd roles
  const [selectedRoleIds, setSelectedRoleIds] = useState<string[]>([
    'staff-architect',
    'ai-specialist',
    'frontend-lead',
  ]);

  const toggleRole = (id: string) => {
    if (selectedRoleIds.includes(id)) {
      if (selectedRoleIds.length === 1) return; // Keep at least one
      setSelectedRoleIds(selectedRoleIds.filter((r) => r !== id));
    } else {
      setSelectedRoleIds([...selectedRoleIds, id]);
    }
  };

  const selectedRoles = roles.filter((r) => selectedRoleIds.includes(r.id));
  const velocityScore = Math.min(
    selectedRoles.reduce((acc, r) => acc + r.impactScore, 10),
    99
  );

  let squadTier = '$32,000 - $48,000 / mo';
  let timeline = '6 - 10 Weeks';
  if (selectedRoles.length >= 4) {
    squadTier = '$65,000 - $88,000 / mo (Dedicated Enterprise Force)';
    timeline = '10 - 16 Weeks Strategic';
  } else if (selectedRoles.length === 2) {
    squadTier = '$24,000 - $32,000 / mo (Targeted Strike)';
    timeline = '4 - 8 Weeks';
  }

  const handleApply = () => {
    const roleTitles = selectedRoles.map((r) => r.title).join(' + ');
    const summary = `Assembled Squad: [${roleTitles}] | Velocity Score: ${velocityScore}/100 | Cadence: ${timeline} | Tier: ${squadTier}`;
    onPrepopulateContact('Custom Engineering Strike Squad', summary);
  };

  return (
    <section id="assembler" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#06080B] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="text-xs font-mono text-[#FF4F18] uppercase tracking-widest mb-1.5">
              03 // SQUAD COMPOSITION BUILDER
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              Assemble Your Engineering Strike Squad
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400">
            DEDICATED FULL-TIME SENIOR ROLES · ZERO OFFSHORE CHURN
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Role Selector */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Select Specialist Roles to Interlock with Your Team:
            </div>

            {roles.map((role) => {
              const isSelected = selectedRoleIds.includes(role.id);
              return (
                <div
                  key={role.id}
                  onClick={() => toggleRole(role.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                    isSelected
                      ? 'bg-[#0F131A] border-[#FF4F18] text-white shadow-md'
                      : 'bg-[#0A0D12] border-white/[0.05] text-slate-400 hover:border-white/15'
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-bold text-sm text-white">{role.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#06080B] text-slate-400 border border-white/5">
                        {role.domain}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400">{role.skills}</p>
                  </div>

                  <div
                    className={`w-6 h-6 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-[#FF4F18] border-[#FF4F18] text-white'
                        : 'border-white/20 bg-[#06080B]'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Squad Metrics & Engagement Sheet */}
          <div className="lg:col-span-5 bg-[#0A0D12] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <span className="font-mono text-xs uppercase text-slate-400 font-semibold">
                SQUAD SPECIFICATION
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {selectedRoles.length} SENIOR ROLES CHOSEN
              </span>
            </div>

            {/* Velocity index */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FF4F18]" />
                  <span>Velocity Multiplier:</span>
                </span>
                <span className="font-bold text-white text-sm">{velocityScore} / 100</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#06080B] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF4F18] to-[#00E5FF] transition-all duration-500"
                  style={{ width: `${velocityScore}%` }}
                />
              </div>
            </div>

            {/* Config summary */}
            <div className="p-4 rounded-xl bg-[#06080B] border border-white/[0.05] space-y-3 font-mono text-xs">
              <div>
                <span className="text-slate-500 uppercase text-[10px]">Estimated Cadence:</span>
                <div className="text-white font-bold text-sm mt-0.5">{timeline}</div>
              </div>
              <div>
                <span className="text-slate-500 uppercase text-[10px]">Investment Guideline:</span>
                <div className="text-[#FF4F18] font-bold text-base mt-0.5">{squadTier}</div>
              </div>
              <div className="text-[11px] text-slate-400 font-light pt-2 border-t border-white/[0.05]">
                Includes 2-Week Risk-Free Discovery Guarantee and immediate IP transfer.
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleApply}
                className="w-full bg-[#FF4F18] hover:bg-[#E63D08] text-white font-mono text-xs uppercase tracking-wider font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FF4F18]/20"
              >
                <span>Book Discovery with this Squad</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
