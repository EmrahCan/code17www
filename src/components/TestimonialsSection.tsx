import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#01090D] via-[#021822] to-[#01090D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-code17-teal-deep/80 border border-code17-teal-main/30 text-xs font-mono text-code17-teal-light mb-3">
            <span>CLIENT PERSPECTIVES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Trusted by engineering leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Hear how CTOs and VPs of Engineering rely on Code 17 Technology LLC to deliver under high stakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#031C26]/70 border border-code17-teal-main/30 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative hover:border-code17-teal-light/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-code17-orange">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-code17-teal-light/30" />
                </div>

                <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="font-heading font-bold text-base text-white">
                  {item.author}
                </div>
                <div className="text-xs text-code17-teal-light font-medium mt-0.5">
                  {item.role}, {item.company}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  Scope: {item.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
