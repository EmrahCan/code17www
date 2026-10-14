import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Users, Clock, ShieldAlert } from 'lucide-react';

interface ProjectEstimatorProps {
  onPrepopulateContact: (service: string, estimateInfo: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onPrepopulateContact }) => {
  const [serviceType, setServiceType] = useState('AI & LLM Systems');
  const [projectStage, setProjectStage] = useState('Architecture & Scaling');
  const [teamScale, setTeamScale] = useState('Full Squad (3-4 Engineers + Lead)');
  const [timeline, setTimeline] = useState('8 - 12 Weeks');

  const calculateEstimate = () => {
    let squadComposition = '1 Staff Architect + 2 Senior Engineers';
    let duration = '8-12 weeks';
    let budgetTier = '$35,000 - $60,000 / month';

    if (teamScale.includes('1-2')) {
      squadComposition = '1 Lead Architect + 1 Senior Engineer';
      budgetTier = '$22,000 - $35,000 / month';
    } else if (teamScale.includes('Enterprise')) {
      squadComposition = '1 Principal Architect + 4 Senior Engineers + 1 DevOps Lead';
      budgetTier = '$65,000 - $95,000 / month';
    }

    if (timeline.includes('Rapid')) {
      duration = '4-6 weeks focused MVP / Audit';
    } else if (timeline.includes('Annual')) {
      duration = 'Long-term dedicated roadmap (6+ months)';
    }

    return { squadComposition, duration, budgetTier };
  };

  const estimate = calculateEstimate();

  const handleApplyToContact = () => {
    const summary = `Estimated Scope: ${serviceType} | Stage: ${projectStage} | Squad: ${estimate.squadComposition} | Timeline: ${timeline} | Tier: ${estimate.budgetTier}`;
    onPrepopulateContact(serviceType, summary);
  };

  return (
    <section id="estimator" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#010B10] via-[#021A20] to-[#01090D] border-t border-b border-code17-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-code17-teal-deep/80 border border-code17-teal-main/30 text-xs font-mono text-code17-teal-light mb-3">
            <Calculator className="w-3.5 h-3.5 text-code17-orange" />
            <span>INTERACTIVE SCOPE & BUDGET CALCULATOR</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Estimate your engineering squad
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Select your technical parameters to calculate the recommended squad composition, sprint timeline, and estimated resource requirements.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 bg-[#031922] border border-code17-teal-main/30 rounded-3xl p-6 sm:p-8 space-y-7 shadow-xl">
            {/* 1. Service Type */}
            <div>
              <label className="block text-xs font-mono text-code17-teal-light uppercase font-bold tracking-wider mb-3">
                1. Core Engineering Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'AI & LLM Systems',
                  'Cloud & Kubernetes Architecture',
                  'Frontend & Design Systems',
                  'Full-Stack Modernization',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setServiceType(type)}
                    className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                      serviceType === type
                        ? 'bg-code17-teal-deep text-white border-code17-teal-light shadow-md'
                        : 'bg-[#021117] text-slate-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span>{type}</span>
                    {serviceType === type && <Check className="w-4 h-4 text-code17-cyan" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Project Stage */}
            <div>
              <label className="block text-xs font-mono text-code17-teal-light uppercase font-bold tracking-wider mb-3">
                2. Current Initiative Stage
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  'Greenfield Architecture',
                  'Architecture & Scaling',
                  'Audit & Refactoring',
                ].map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setProjectStage(stage)}
                    className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                      projectStage === stage
                        ? 'bg-code17-teal-deep text-white border-code17-teal-light shadow-md'
                        : 'bg-[#021117] text-slate-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span>{stage}</span>
                    {projectStage === stage && <Check className="w-4 h-4 text-code17-cyan" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Team Scale */}
            <div>
              <label className="block text-xs font-mono text-code17-teal-light uppercase font-bold tracking-wider mb-3">
                3. Recommended Squad Size
              </label>
              <div className="space-y-2">
                {[
                  'Targeted Squad (1-2 Senior Specialists)',
                  'Full Squad (3-4 Engineers + Lead)',
                  'Enterprise Scale Squad (5+ Dedicated Engineers)',
                ].map((scale) => (
                  <button
                    key={scale}
                    type="button"
                    onClick={() => setTeamScale(scale)}
                    className={`w-full p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                      teamScale === scale
                        ? 'bg-code17-teal-deep text-white border-code17-teal-light shadow-md'
                        : 'bg-[#021117] text-slate-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span>{scale}</span>
                    {teamScale === scale && <Check className="w-4 h-4 text-code17-cyan" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Timeline */}
            <div>
              <label className="block text-xs font-mono text-code17-teal-light uppercase font-bold tracking-wider mb-3">
                4. Targeted Delivery Window
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  'Rapid (4 - 6 Weeks)',
                  '8 - 12 Weeks',
                  'Annual / Ongoing Strategic',
                ].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setTimeline(time)}
                    className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                      timeline === time
                        ? 'bg-code17-teal-deep text-white border-code17-teal-light shadow-md'
                        : 'bg-[#021117] text-slate-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span>{time}</span>
                    {timeline === time && <Check className="w-4 h-4 text-code17-cyan" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Estimate Summary Output */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#042630] to-[#01141A] border border-code17-teal-main/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-code17-teal-light uppercase font-bold tracking-wider">
                  Squad Recommendation
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-code17-teal-deep text-code17-cyan border border-code17-teal-main/40">
                  REAL-TIME ESTIMATE
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-mono">SELECTED FOCUS</div>
                <div className="font-heading font-bold text-xl text-white mt-1">
                  {serviceType}
                </div>
                <div className="text-xs text-code17-orange mt-0.5">
                  Stage: {projectStage}
                </div>
              </div>

              {/* Recommended squad cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#021822]/80 border border-white/5 flex items-start gap-3">
                  <Users className="w-5 h-5 text-code17-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Recommended Squad</div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {estimate.squadComposition}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#021822]/80 border border-white/5 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-code17-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Cadence & Duration</div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {estimate.duration}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-code17-teal-deep/60 border border-code17-teal-main/40">
                  <div className="text-xs font-mono text-code17-teal-light uppercase font-bold">
                    Estimated Investment Range
                  </div>
                  <div className="font-heading font-extrabold text-2xl text-white mt-1">
                    {estimate.budgetTier}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Flexible month-to-month contracts. 100% intellectual property assignment.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <ShieldAlert className="w-3.5 h-3.5 text-code17-cyan shrink-0" />
                <span>Includes automated testing, CI/CD setup & architectural docs.</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={handleApplyToContact}
                className="w-full bg-code17-orange hover:bg-code17-orange-hover text-white font-heading font-bold text-sm py-4 rounded-xl shadow-xl shadow-code17-orange/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Discovery with this Scope</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
