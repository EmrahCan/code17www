import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PARTNERS_DATA } from '../data/siteData';

export const PartnerLogos: React.FC = () => {
  return (
    <section id="partners" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#02141A] border-t border-b border-code17-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-mono text-code17-teal-light uppercase tracking-widest font-semibold mb-2">
              Technology Ecosystem & Integrations
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              We work alongside world-class tools
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md font-light">
            We partner with and contribute to top-tier enterprise platforms, ensuring your stack is modern, supported, and built to scale.
          </p>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PARTNERS_DATA.map((tool, idx) => (
            <div
              key={idx}
              className="group bg-[#04262A]/60 hover:bg-[#063339] border border-white/10 hover:border-code17-teal-light/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-code17-teal-deep/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-code17-teal-light px-2.5 py-1 rounded-full bg-code17-teal-deep/80 border border-code17-teal-main/30 font-medium">
                    {tool.badge}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-code17-cyan transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-code17-teal-light transition-colors">
                  {tool.name}
                </h3>
                <div className="text-xs text-code17-orange font-medium mt-0.5 mb-2">
                  {tool.category}
                </div>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Code 17 Expert Certified</span>
                <span className="text-code17-teal-light opacity-0 group-hover:opacity-100 transition-opacity">Deploy Ready &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
