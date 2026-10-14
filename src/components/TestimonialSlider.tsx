import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialSlider: React.FC = () => {
  const testimonials = [
    {
      quote: "Code17.Tech provided complementary expertise that enhanced our team’s capabilities, delivering a solid, scalable and audit-ready Kubernetes infrastructure across multiple cloud regions.",
      author: "Marcus Vance",
      company: "Apex Global Financial",
      badge: "Fintech & Banking",
      verified: "Verified Client on Clutch (5.0 ★)"
    },
    {
      quote: "These architectural steps, being promptly implemented and maintained with 24/7 DevOps support, resulted in a faster time to market and a 38% reduction in monthly cloud infrastructure costs.",
      author: "Elena Rostova",
      company: "OmniCommerce Global",
      badge: "High-Load E-Commerce",
      verified: "Verified Client on Clutch (5.0 ★)"
    },
    {
      quote: "Switching our DevOps and SRE operations to Code17.Tech was one of the most crucial decisions we’ve made. The infrastructure is rock-solid and incidents are resolved before our users ever notice.",
      author: "Dr. Julian Harris",
      company: "Vanguard Health Tech",
      badge: "Healthcare SaaS",
      verified: "Verified Client on Clutch (5.0 ★)"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] border-t border-b border-palark-border">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-palark-border rounded-3xl p-8 sm:p-12 shadow-sm relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Quote content */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-palark-gray ml-2">{current.verified}</span>
              </div>

              <p className="font-sans font-medium text-lg sm:text-2xl text-palark-dark leading-relaxed">
                "{current.quote}"
              </p>

              <div className="flex items-center gap-3 pt-2">
                <span className="font-bold text-sm text-palark-dark">{current.author}</span>
                <span className="text-slate-300">•</span>
                <span className="font-semibold text-sm text-palark-purple">{current.company}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-palark-light-gray text-palark-gray font-medium">
                  {current.badge}
                </span>
              </div>
            </div>

            {/* Slider navigation buttons (Palark style) */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-palark-border hover:border-palark-dark hover:bg-palark-dark hover:text-white transition-all flex items-center justify-center text-palark-dark"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-palark-border hover:border-palark-dark hover:bg-palark-dark hover:text-white transition-all flex items-center justify-center text-palark-dark"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
