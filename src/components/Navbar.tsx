import React, { useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Zap, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenPricing: () => void;
  onOpenBooking?: () => void;
  onOpenCall?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenPricing, onOpenBooking, onOpenCall }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-c17-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-c17-dark flex items-center justify-center text-white font-bold text-base tracking-tight">
              17
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-base sm:text-lg text-c17-dark tracking-tight leading-none flex items-center">
                Code17<span className="text-[#00DDBA]">.Tech</span>
              </span>
              <span className="hidden sm:block text-[11px] font-mono text-neutral-500 font-medium tracking-wide mt-0.5">
                SaaS &amp; SRE Engineering
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
                className="flex items-center gap-1 hover:text-c17-dark transition-colors py-2 focus:outline-none cursor-pointer"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-c17-border p-3 space-y-1">
                  <a href="#saas-development" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-c17-bg transition-colors">
                    <div className="text-sm font-bold text-c17-dark flex items-center justify-between">
                      <span>SaaS Product Engineering</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-c17-purple-light text-c17-purple">NEW</span>
                    </div>
                    <div className="text-xs text-c17-gray font-normal">Full-cycle MVP to enterprise multi-tenant scale</div>
                  </a>
                  <a href="#services" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-c17-bg transition-colors">
                    <div className="text-sm font-bold text-c17-dark">DevOps as a Service</div>
                    <div className="text-xs text-c17-gray font-normal">Continuous delivery &amp; ArgoCD GitOps</div>
                  </a>
                  <a href="#services" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-c17-bg transition-colors">
                    <div className="text-sm font-bold text-c17-dark">24/7 SRE Maintenance</div>
                    <div className="text-xs text-c17-gray font-normal">P1 incident response under 15 minutes</div>
                  </a>
                  <a href="#services" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-c17-bg transition-colors">
                    <div className="text-sm font-bold text-c17-dark">High-Concurrency APIs</div>
                    <div className="text-xs text-c17-gray font-normal">Distributed Go &amp; Python microservices</div>
                  </a>
                  <a href="#services" onClick={() => setServicesDropdown(false)} className="block p-2.5 rounded-xl hover:bg-c17-bg transition-colors">
                    <div className="text-sm font-bold text-c17-dark">Enterprise AI &amp; Private LLMs</div>
                    <div className="text-xs text-c17-gray font-normal">Private in-VPC intelligent agents</div>
                  </a>
                </div>
              )}
            </div>

            <a href="#how-we-work" className="hover:text-c17-dark transition-colors whitespace-nowrap">
              How we work
            </a>
            <a href="#what-we-do" className="hover:text-c17-dark transition-colors whitespace-nowrap">
              What we do
            </a>
            <a href="#experience" className="hover:text-c17-dark transition-colors whitespace-nowrap">
              Experience
            </a>
            <a href="#pricing" onClick={onOpenPricing} className="hover:text-c17-dark transition-colors whitespace-nowrap">
              Pricing
            </a>
            <a href="#engagement" className="hover:text-c17-dark transition-colors whitespace-nowrap">
              Engagement
            </a>
          </nav>

          {/* Right Action: Click to Call + Free Audit + Discuss Project Button */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenCall}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all hover:scale-105 whitespace-nowrap shadow-2xs cursor-pointer group"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600 animate-pulse group-hover:scale-110 transition-transform" />
              <span>Click to Call</span>
            </button>

            <button
              onClick={onOpenBooking || onOpenContact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200/80 transition-all hover:scale-105 whitespace-nowrap shadow-2xs cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Free 30-Min Audit</span>
            </button>

            <button
              onClick={onOpenContact}
              className="bg-[#0B0C14] hover:bg-[#1A1128] text-white text-xs font-mono font-bold px-4 py-2 rounded-full border border-purple-500/40 hover:border-purple-400 shadow-sm hover:shadow-purple-900/30 transition-all duration-200 flex items-center gap-2 group whitespace-nowrap cursor-pointer"
            >
              <span>Discuss project</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Action Area */}
          <div className="lg:hidden flex items-center gap-1.5 shrink-0">
            <button
              onClick={onOpenCall}
              type="button"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>Call</span>
            </button>
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex bg-c17-dark text-white text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-black rounded-lg hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-c17-border px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-semibold text-base text-slate-800">
            <a href="#how-we-work" onClick={() => setMobileMenuOpen(false)} className="py-1 text-c17-purple font-bold">
              How We Work
            </a>
            <a href="#saas-development" onClick={() => setMobileMenuOpen(false)} className="py-1 flex items-center justify-between">
              <span>SaaS &amp; Software Engineering</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-c17-purple-light text-c17-purple">NEW</span>
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
              Pricing &amp; SLAs
            </a>
            <a href="#engagement" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Open Source &amp; Engagement
            </a>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full bg-c17-dark text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer"
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
