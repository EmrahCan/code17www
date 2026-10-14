import React, { useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenPricing: () => void;
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenPricing, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-palark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Palark clean style) */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-palark-dark flex items-center justify-center text-white font-bold text-base tracking-tight">
              17
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-lg text-palark-dark tracking-tight leading-none flex items-center">
                Code17<span className="text-[#00DDBA]">.Tech</span>
              </span>
              <span className="text-[11px] font-mono text-neutral-500 font-medium tracking-wide mt-0.5">
                SaaS & SRE Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-semibold text-[#344054]">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-palark-dark transition-colors py-2 focus:outline-none"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-palark-border p-3 space-y-1">
                  <a href="#saas-development" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-palark-bg transition-colors">
                    <div className="text-sm font-bold text-palark-dark flex items-center justify-between">
                      <span>SaaS Product Engineering</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-palark-purple-light text-palark-purple">NEW</span>
                    </div>
                    <div className="text-xs text-palark-gray font-normal">Full-cycle MVP to enterprise multi-tenant scale</div>
                  </a>
                  <a href="#services" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-palark-bg transition-colors">
                    <div className="text-sm font-bold text-palark-dark">DevOps as a Service</div>
                    <div className="text-xs text-palark-gray font-normal">Continuous delivery & ArgoCD GitOps</div>
                  </a>
                  <a href="#services" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-palark-bg transition-colors">
                    <div className="text-sm font-bold text-palark-dark">24/7 SRE Maintenance</div>
                    <div className="text-xs text-palark-gray font-normal">Guaranteed 15-minute emergency SLA</div>
                  </a>
                  <a href="#services" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-palark-bg transition-colors">
                    <div className="text-sm font-bold text-palark-dark">High-Concurrency APIs</div>
                    <div className="text-xs text-palark-gray font-normal">Distributed Go & Python microservices</div>
                  </a>
                  <a href="#services" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-palark-bg transition-colors">
                    <div className="text-sm font-bold text-palark-dark">Enterprise AI & Private LLMs</div>
                    <div className="text-xs text-palark-gray font-normal">Private in-VPC intelligent agents</div>
                  </a>
                </div>
              )}
            </div>

            <a href="#what-we-do" className="hover:text-palark-dark transition-colors whitespace-nowrap">
              What we do
            </a>
            <a href="#experience" className="hover:text-palark-dark transition-colors whitespace-nowrap">
              Experience
            </a>
            <a href="#pricing" onClick={onOpenPricing} className="hover:text-palark-dark transition-colors whitespace-nowrap">
              Pricing
            </a>
            <a href="#engagement" className="hover:text-palark-dark transition-colors whitespace-nowrap">
              Engagement
            </a>
          </nav>

          {/* Right Action: Free Audit + Discuss Project Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking || onOpenContact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200/80 transition-all hover:scale-105 whitespace-nowrap shadow-2xs"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Free 30-Min Audit</span>
            </button>

            <button
              onClick={onOpenContact}
              className="bg-[#0B0C14] hover:bg-[#1A1128] text-white text-xs font-mono font-bold px-5 py-2.5 rounded-full border border-purple-500/40 hover:border-purple-400 shadow-sm hover:shadow-purple-900/30 transition-all duration-200 flex items-center gap-2 group whitespace-nowrap"
            >
              <span>Discuss project</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="bg-palark-dark text-white text-xs font-bold px-4 py-2 rounded-full"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-black"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-palark-border px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-semibold text-base text-slate-800">
            <a href="#saas-development" onClick={() => setMobileMenuOpen(false)} className="py-1 text-palark-purple font-bold flex items-center justify-between">
              <span>SaaS & Software Engineering</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-palark-purple-light text-palark-purple">NEW</span>
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Services Catalog
            </a>
            <a href="#what-we-do" onClick={() => setMobileMenuOpen(false)} className="py-1">
              What we do
            </a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Our Experience
            </a>
            <a href="#pricing" onClick={() => { setMobileMenuOpen(false); onOpenPricing(); }} className="py-1">
              Pricing & SLAs
            </a>
            <a href="#engagement" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Open Source & Engagement
            </a>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full bg-palark-dark text-white font-bold py-3 rounded-full flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
