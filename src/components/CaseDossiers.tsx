import React, { useState } from 'react';
import { ShieldAlert, TrendingUp, CheckCircle, ChevronRight, FileText } from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/siteData';

interface CaseDossiersProps {
  onOpenConsultation: () => void;
}

export const CaseDossiers: React.FC<CaseDossiersProps> = ({ onOpenConsultation }) => {
  const [activeDossierIndex, setActiveDossierIndex] = useState(0);
  const currentDossier = CASE_STUDIES_DATA[activeDossierIndex];

  return (
    <section id="dossiers" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#06080B] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="text-xs font-mono text-[#FF4F18] uppercase tracking-widest mb-1.5">
              02 // CLASSIFIED CASE DOSSIERS
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              Battle-Tested Production Audits
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400">
            ENTERPRISE DEPLOYMENTS · 100% NON-DISCLOSURE COMPLIANT
          </div>
        </div>

        {/* Dossier Tabs Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {CASE_STUDIES_DATA.map((study, idx) => {
            const isSelected = idx === activeDossierIndex;
            return (
              <button
                key={study.id}
                onClick={() => setActiveDossierIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0F131A] border-[#FF4F18] text-white shadow-lg'
                    : 'bg-[#0A0D12] border-white/[0.06] text-slate-400 hover:text-white hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#FF4F18] font-bold">
                    DOSSIER 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {study.category.split('&')[0].trim()}
                  </span>
                </div>
                <div className="font-sans font-bold text-sm text-white line-clamp-1">
                  {study.client}
                </div>
                <div className="text-xs text-slate-400 mt-1 line-clamp-1 font-light">
                  {study.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Dossier Full Inspection Board */}
        <div className="bg-[#0A0D12] border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 relative">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#00E5FF] mb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>CASE FILE: {currentDossier.client.toUpperCase()} // PRODUCTION REPORT</span>
              </div>
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white">
                {currentDossier.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-3 py-1 rounded bg-[#06080B] border border-white/10 text-slate-300">
                VERIFIED ARCHITECTURE
              </span>
            </div>
          </div>

          {/* Metric KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentDossier.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#06080B] border border-white/[0.06] rounded-xl p-5 text-center">
                <div className="font-mono font-black text-3xl sm:text-4xl text-white">
                  {m.value}
                </div>
                <div className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Side by side: Challenge & Code 17 Interlock */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#06080B] border border-white/[0.06] rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-400 uppercase">
                <ShieldAlert className="w-4 h-4" />
                <span>The Engineering Bottleneck</span>
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {currentDossier.challenge}
              </p>
            </div>

            <div className="bg-[#06080B] border border-white/[0.06] rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF4F18] uppercase">
                <TrendingUp className="w-4 h-4" />
                <span>The Code 17 Interlock</span>
              </div>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {currentDossier.solution}
              </p>
            </div>
          </div>

          {/* Verified Impacts */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              Quantified Production Outcomes
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentDossier.impact.map((imp, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#0F131A] border border-white/[0.05] flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 leading-relaxed font-light">{imp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips & Action */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs font-mono text-slate-500 mr-2">STACK:</span>
              {currentDossier.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#06080B] border border-white/10 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={onOpenConsultation}
              className="bg-[#FF4F18] hover:bg-[#E63D08] text-white font-mono text-xs uppercase tracking-wider font-bold px-5 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <span>Solve a Similar Problem</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
