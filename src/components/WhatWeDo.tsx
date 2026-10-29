import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WhatWeDoProps {
  onOpenContact: () => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenContact }) => {
  return (
    <section id="what-we-do" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-c17-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Bold Title */}
          <div className="lg:col-span-4">
            <h2 className="font-sans font-black text-4xl sm:text-5xl text-c17-dark tracking-tight leading-tight">
              What we do
            </h2>
            <div className="mt-4 text-sm font-semibold text-c17-purple">
              Full-Cycle SaaS &amp; 24/7 SRE Operations
            </div>
          </div>

          {/* Right: Editorial Paragraph with colored highlight span */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-sans font-medium text-xl sm:text-2xl text-c17-dark leading-relaxed">
              Accelerate time-to-market and eliminate downtime by{' '}
              <span className="span-purple">
                partnering with a dual-discipline team that engineers production software and operates 24/7 mission-critical infrastructure.
              </span>{' '}
              From zero-to-one SaaS architecture to automated Kubernetes clusters, we provide hands-on senior engineering squads with defined SLAs.
            </p>

            <p className="font-sans text-base sm:text-lg text-c17-gray leading-relaxed font-normal">
              We bring 12+ years of production engineering experience across high-load software architectures and business-critical systems. Whether you need an elite team to build your next SaaS platform or 24/7 SRE on-call engineers to guard your uptime, we deliver without excuses.
            </p>

            {/* Quick service anchor links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#saas-development"
                className="inline-flex items-center gap-2 text-sm font-bold text-c17-dark hover:text-c17-purple transition-colors bg-[#F2F4F7] hover:bg-[#EAECF0] px-4 py-2.5 rounded-full"
              >
                <span>Full-Cycle SaaS Lab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-bold text-c17-dark hover:text-c17-blue transition-colors bg-[#F2F4F7] hover:bg-[#EAECF0] px-4 py-2.5 rounded-full"
              >
                <span>24/7 SRE Maintenance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-bold text-c17-dark hover:text-c17-lime transition-colors bg-[#F2F4F7] hover:bg-[#EAECF0] px-4 py-2.5 rounded-full"
              >
                <span>DevOps as a Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenContact}
                className="text-sm font-bold text-c17-purple hover:underline ml-2 cursor-pointer"
              >
                Contact us for custom scope &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
