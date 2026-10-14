import React, { useState } from 'react';
import { ArrowRight, Sparkles, Building2, TrendingUp } from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/siteData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface CaseStudiesSectionProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#010B10]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-code17-teal-deep/80 border border-code17-teal-main/30 text-xs font-mono text-code17-teal-light mb-3">
              <Sparkles className="w-3.5 h-3.5 text-code17-orange" />
              <span>PROVEN PRODUCTION SUCCESS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-base text-slate-300 max-w-md font-light">
            Explore how Code 17 engineers solved mission-critical problems for high-scale enterprise platforms.
          </p>
        </div>

        {/* Case Studies Cards (Bitovi full-card storytelling style) */}
        <div className="space-y-8">
          {CASE_STUDIES_DATA.map((study, idx) => (
            <div
              key={study.id}
              className="group bg-gradient-to-r from-[#031C24] via-[#042831] to-[#021820] border border-code17-teal-main/30 hover:border-code17-teal-light/60 rounded-3xl p-8 sm:p-10 lg:p-12 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-code17-teal-deep/40 relative overflow-hidden"
            >
              {/* Subtle number watermark */}
              <div className="absolute right-8 bottom-4 text-8xl font-heading font-black text-white/[0.03] select-none pointer-events-none">
                0{idx + 1}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left info */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-code17-teal-deep text-code17-teal-light border border-code17-teal-main/40 font-semibold">
                      {study.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-code17-cyan" />
                      {study.client}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-code17-teal-light transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                    {study.summary}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#021217] border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read details button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-code17-orange hover:text-white transition-colors group/btn"
                    >
                      <span>Read Full Architecture & Metrics</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Metrics Callout Box */}
                <div className="lg:col-span-4 bg-[#01141A]/90 border border-code17-teal-main/40 rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-code17-teal-light font-bold uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4 text-code17-cyan" />
                    <span>Key Outcome Metrics</span>
                  </div>

                  <div className="space-y-4">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <div className="font-heading font-extrabold text-3xl text-white">
                          {metric.value}
                        </div>
                        <div className="text-xs font-mono text-slate-400 mt-0.5 uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
