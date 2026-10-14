import React, { useState } from 'react';
import {
  BrainCircuit,
  ServerCog,
  Layers,
  Palette,
  Compass,
  CheckCircle2,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-code17-cyan" />;
      case 'ServerCog':
        return <ServerCog className="w-6 h-6 text-code17-orange" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-code17-teal-light" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-pink-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-400" />;
      default:
        return <BrainCircuit className="w-6 h-6 text-code17-cyan" />;
    }
  };

  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#01090D] via-[#021A20] to-[#01090D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-code17-teal-deep/80 border border-code17-teal-main/30 text-xs font-mono text-code17-teal-light mb-3">
            <span>CONSULTING & ENGINEERING SERVICES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Engineered for <span className="text-gradient-teal">uncompromising</span> enterprise standards
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            We don’t just advise. We embed senior staff software engineers into your teams to architect, build, and deliver high-impact digital products.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {SERVICES_DATA.map((service) => {
            const isActive = service.id === activeTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-5 py-3 rounded-xl font-heading text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-code17-teal-deep text-white border-code17-teal-light shadow-lg shadow-code17-teal-deep/50'
                    : 'bg-[#03151D]/60 text-slate-400 border-white/5 hover:border-white/15 hover:text-white'
                }`}
              >
                <div className="shrink-0">{getIcon(service.icon)}</div>
                <span>{service.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-[#031822] border border-code17-teal-main/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-code17-teal-light/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-code17-teal-deep border border-code17-teal-main/40 flex items-center justify-center">
                  {getIcon(currentService.icon)}
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    {currentService.title}
                  </h3>
                  <div className="text-xs font-mono text-code17-orange font-semibold">
                    Code 17 Senior Squad Practice
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                {currentService.fullDesc}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-code17-teal-light uppercase font-bold tracking-wider">
                  Core Enterprise Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#052630]/60 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-code17-cyan shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA row */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectService(currentService.title)}
                  className="bg-code17-orange hover:bg-code17-orange-hover text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-code17-orange/20 transition-all flex items-center gap-2 group"
                >
                  <span>Request Squad for {currentService.title.split('&')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#case-studies"
                  className="text-sm font-medium text-slate-300 hover:text-code17-teal-light transition-colors flex items-center gap-1.5"
                >
                  <span>See Related Case Studies</span> &rarr;
                </a>
              </div>
            </div>

            {/* Right Metric & Tech Stack Box */}
            <div className="lg:col-span-5 space-y-5">
              {/* Highlight Metric Badge */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-code17-teal-deep to-[#010f15] border border-code17-teal-light/30 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-code17-teal-light font-semibold mb-2">
                  <TrendingUp className="w-4 h-4 text-code17-cyan" />
                  <span>MEASURED CLIENT OUTCOME</span>
                </div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {currentService.metrics}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Benchmarked across 12-month client production deployments.
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="p-6 rounded-2xl bg-[#042028]/80 border border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase font-semibold mb-3">
                  Production Toolchain & Frameworks
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-code17-teal-deep/80 border border-code17-teal-main/40 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code 17 Guarantee */}
              <div className="p-4 rounded-xl bg-code17-orange/10 border border-code17-orange/30 text-xs text-slate-300 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-code17-orange shrink-0" />
                <span>
                  <strong>The Code 17 Guarantee:</strong> 2-week risk-free trial sprint. If our architectural roadmap doesn’t exceed expectations, you owe nothing.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
