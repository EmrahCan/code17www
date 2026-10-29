import React from 'react';
import { ArrowUp, PhoneCall, ShieldCheck } from 'lucide-react';
import { triggerZadarmaCall } from '../utils/callTrigger';

interface FooterProps {
  onOpenCall?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCall }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-c17-border text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-c17-dark text-white font-bold flex items-center justify-center text-sm">
                17
              </div>
              <span className="font-sans font-black text-lg text-c17-dark flex items-center">
                Code17<span className="text-[#00DDBA]">.Tech</span>
              </span>
            </div>

            <p className="text-sm text-c17-gray leading-relaxed max-w-sm">
              Dedicated DevOps, SRE and Enterprise Cloud Engineering practice. All-in-one 24/7 service with 99.99% uptime target, transparent flat pricing, and security practices aligned with ISO 27001 / SOC 2 controls.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1 font-mono">
              <div>Domain: https://code17.tech</div>
              <div>Entity: Code17 Technologies LLC</div>
              <div>Support: 24/7/365 Emergency SRE Shift</div>
            </div>
          </div>

          {/* Col 2: Continuous Support */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-c17-dark">
              Continuous Support
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-c17-purple">SRE as a Service</a></li>
              <li><a href="#services" className="hover:text-c17-purple">DevOps as a Service</a></li>
              <li><a href="#services" className="hover:text-c17-purple">24/7 Kubernetes Monitoring</a></li>
              <li><a href="#services" className="hover:text-c17-purple">DevOps Insurance</a></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-c17-dark">
              Solutions &amp; Projects
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-c17-purple">Kubernetes &amp; Cloud Migration</a></li>
              <li><a href="#services" className="hover:text-c17-purple">Private, Self-Hosted LLM</a></li>
              <li><a href="#services" className="hover:text-c17-purple">Infrastructure &amp; CI/CD Audit</a></li>
              <li><a href="#services" className="hover:text-c17-purple">High-Load SaaS Optimization</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Desk */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-c17-dark">
              Direct Desk
            </div>
            <div className="space-y-2 text-xs font-medium">
              <div>
                <button
                  type="button"
                  onClick={onOpenCall || triggerZadarmaCall}
                  className="hover:text-c17-purple font-bold text-c17-dark text-left text-xs inline-flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>Click to Call</span>
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-500 animate-pulse group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div>
                <a href="mailto:contact@code17.tech" className="hover:text-c17-purple text-c17-dark font-semibold">
                  contact@code17.tech
                </a>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>24/7 Production Operations</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  99.99% uptime target &bull; P1 response under 15 min
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Imprint & Legal links */}
        <div className="pt-8 border-t border-c17-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-c17-gray">
          <div>
            &copy; {new Date().getFullYear()} Code17 Technologies LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-c17-dark font-medium">Privacy Policy</a>
            <a href="/terms" className="hover:text-c17-dark font-medium">Terms of Service</a>
            <a href="/imprint" className="hover:text-c17-dark font-medium">Imprint</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-c17-dark font-bold hover:text-c17-purple ml-4 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
