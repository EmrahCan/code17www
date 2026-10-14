import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TestimonialSlider } from './components/TestimonialSlider';
import { TrustedBy } from './components/TrustedBy';
import { WhatWeDo } from './components/WhatWeDo';
import { SaaSSection } from './components/SaaSSection';
import { ServicesGrid } from './components/ServicesGrid';
import { TeamExperience } from './components/TeamExperience';
import { EngagementSection } from './components/EngagementSection';
import { PricingSection } from './components/PricingSection';
import { ProblemIntakeSection } from './components/ProblemIntakeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [prepopulatedMessage, setPrepopulatedMessage] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  const scrollToDiscuss = () => {
    const elem = document.getElementById('discuss') || document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingElem = document.getElementById('pricing');
    if (pricingElem) {
      pricingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setPrepopulatedMessage(`Hello Code17.Tech team, I am interested in your "${serviceName}" offering. Please get in touch to discuss our infrastructure & engineering needs.`);
    scrollToContact();
  };

  const handleSelectPlan = (planName: string, tier: string) => {
    setSelectedService(planName);
    setPrepopulatedMessage(`Hello Code17.Tech team, we would like to get started with the "${planName}" package (${tier}). Please connect us with a Lead SRE Architect.`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-white text-[#1B1F24] selection:bg-[#00DDBA] selection:text-[#1B1F24]">
      {/* 1. Header & Navigation (Palark style + Cloud Posse action) */}
      <Navbar
        onOpenContact={scrollToDiscuss}
        onOpenPricing={scrollToPricing}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main>
        {/* 2. Palark Signature Hero */}
        <Hero
          onOpenContact={scrollToDiscuss}
          onOpenPricing={scrollToPricing}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 3. Testimonial Quote Slider */}
        <TestimonialSlider />

        {/* 4. Trusted Stack & Cloud Native Tools */}
        <TrustedBy />

        {/* 5. What We Do (Palark Editorial Section) */}
        <WhatWeDo onOpenContact={scrollToDiscuss} />

        {/* 6. SaaS & Software Engineering Section */}
        <SaaSSection onOpenContact={scrollToDiscuss} />

        {/* 7. All-in-One Service Grid */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* 7. Team Experience & Lead Architect Spotlight */}
        <TeamExperience onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 8. Our Engagement (Open Source, Knowledge Sharing, Community) */}
        <EngagementSection />

        {/* 9. Transparent Flat Monthly Pricing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 10. Start with your infrastructure problem (High-Conversion Intake) */}
        <ProblemIntakeSection />

        {/* 11. Detailed Contact & Desk Information */}
        <ContactSection
          preselectedService={selectedService}
          prepopulatedMessage={prepopulatedMessage}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* 12. Imprint & Footer */}
      <Footer />

      {/* 13. High-Converting Instant Booking Modal (Ad Lead Magnet) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;
