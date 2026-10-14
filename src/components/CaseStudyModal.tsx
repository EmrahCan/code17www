import React, { useEffect } from 'react';
import { X, CheckCircle2, TrendingUp, Cpu, Server, ShieldCheck, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#021822] border border-code17-teal-main/40 rounded-3xl shadow-2xl overflow-y-auto flex flex-col">
        {/* Header bar */}
        <div className="sticky top-0 bg-[#021822]/95 backdrop-blur-md border-b border-white/10 px-6 sm:px-8 py-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-code17-teal-deep text-code17-teal-light border border-code17-teal-main/40 font-semibold">
              {caseStudy.category}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Client: <strong className="text-white">{caseStudy.client}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              {caseStudy.title}
            </h2>
            <p className="mt-2 text-base text-code17-teal-light font-medium">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* Metric Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-code17-teal-deep/50 border border-code17-teal-main/30 text-center">
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {m.value}
                </div>
                <div className="text-xs font-mono text-slate-300 mt-1 uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Challenge & Solution Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 bg-[#031E2A]/70 p-6 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-sm font-heading font-bold text-code17-orange uppercase tracking-wider">
                <Server className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-3 bg-[#031E2A]/70 p-6 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-sm font-heading font-bold text-code17-teal-light uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Code 17 Architecture & Delivery</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Verified Business Impact */}
          <div className="space-y-4 bg-code17-teal-deep/30 p-6 rounded-2xl border border-code17-teal-main/20">
            <div className="flex items-center gap-2 text-xs font-mono text-code17-cyan uppercase font-bold tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Verified Production Impact</span>
            </div>
            <div className="space-y-2.5">
              {caseStudy.impact.map((imp, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-code17-cyan shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{imp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
              Production Architecture Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#042833] border border-code17-teal-main/40 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-code17-teal-light" />
              <span>Enterprise Case Study Verified by Code 17 Technology LLC</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto bg-code17-orange hover:bg-code17-orange-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-code17-orange/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Build a Similar Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
