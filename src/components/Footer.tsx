import React from 'react';
import { ArrowUp, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-palark-border text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-palark-dark text-white font-bold flex items-center justify-center text-sm">
                17
              </div>
              <span className="font-sans font-black text-lg text-palark-dark flex items-center">
                Code17<span className="text-[#00DDBA]">.Tech</span>
              </span>
            </div>

            <p className="text-sm text-palark-gray leading-relaxed max-w-sm">
              Dedicated DevOps, SRE and Enterprise Cloud Engineering agency. All-in-one 24/7 service with guaranteed SLAs, transparent flat pricing, and ISO 27001-ready standards.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1 font-mono">
              <div>Domain: https://code17.tech</div>
              <div>Entity: Code 17 Technology LLC (Delaware)</div>
              <div>Support: 24/7/365 Emergency SRE Shift</div>
            </div>
          </div>

          {/* Col 2: Continuous Support */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-palark-dark">
              Continuous Support
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-palark-purple">SRE as a Service</a></li>
              <li><a href="#services" className="hover:text-palark-purple">DevOps as a Service</a></li>
              <li><a href="#services" className="hover:text-palark-purple">24/7 Kubernetes Monitoring</a></li>
              <li><a href="#services" className="hover:text-palark-purple">DevOps Insurance</a></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-palark-dark">
              Solutions & Projects
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-palark-purple">Kubernetes & Cloud Migration</a></li>
              <li><a href="#services" className="hover:text-palark-purple">Private, Self-Hosted LLM</a></li>
              <li><a href="#services" className="hover:text-palark-purple">Infrastructure & CI/CD Audit</a></li>
              <li><a href="#services" className="hover:text-palark-purple">High-Load SaaS Optimization</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts & Reviews */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-palark-dark">
              Direct Desk
            </div>
            <div className="space-y-2 text-xs font-medium">
              <div>
                <button
                  type="button"
                  onClick={() => {
                    const zdrm = (document.querySelector('#myZadarmaCallmeWidget19992 div, #myZadarmaCallmeWidget19992') || document.querySelector('.zdrm-phone')) as HTMLElement;
                    if (zdrm) zdrm.click();
                  }}
                  className="hover:text-palark-purple font-bold text-palark-dark text-left text-xs"
                >
                  SIP Line #413063 (Voice Call)
                </button>
              </div>
              <div><a href="mailto:info@code17.tech" className="hover:text-palark-purple text-palark-dark font-semibold">info@code17.tech</a></div>
              <div className="pt-2">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="font-bold text-slate-800 ml-1">4.9 / 5.0 Rating</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  15+ Verified B2B Reviews &bull; 99.99% SLA Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Imprint & Language bar */}
        <div className="pt-8 border-t border-palark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-palark-gray">
          <div>
            © {new Date().getFullYear()} Code17.Tech (Code 17 Technology LLC). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-palark-dark">Privacy policy</a>
            <a href="#contact" className="hover:text-palark-dark">Imprint</a>
            <a href="#pricing" className="hover:text-palark-dark">Terms of SLA</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-palark-dark font-bold hover:text-palark-purple ml-4"
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
