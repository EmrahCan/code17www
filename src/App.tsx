import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowWeWork } from './components/HowWeWork';
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
import { CallModal } from './components/CallModal';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [prepopulatedMessage, setPrepopulatedMessage] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isCallOpen, setIsCallOpen] = useState<boolean>(false);

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
    setPrepopulatedMessage(`Hello Code17 team, I am interested in your "${serviceName}" offering. Please get in touch to discuss our infrastructure & engineering needs.`);
    scrollToContact();
  };

  const handleSelectPlan = (planName: string, tier: string) => {
    setSelectedService(planName);
    setPrepopulatedMessage(`Hello Code17 team, we would like to get started with the "${planName}" package (${tier}). Please connect us with a Lead SRE Architect.`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-white text-[#1B1F24] selection:bg-[#00DDBA] selection:text-[#1B1F24] overflow-x-hidden">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenContact={scrollToDiscuss}
        onOpenPricing={scrollToPricing}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCall={() => setIsCallOpen(true)}
      />

      <main className="overflow-x-hidden">
        {/* 2. Signature Hero */}
        <Hero
          onOpenContact={scrollToDiscuss}
          onOpenPricing={scrollToPricing}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 3. How We Work (Audit -> Plan -> Build -> Operate 24/7) */}
        <HowWeWork />

        {/* 4. Trusted Stack & Cloud Native Tools */}
        <TrustedBy />

        {/* 5. What We Do */}
        <WhatWeDo onOpenContact={scrollToDiscuss} />

        {/* 6. SaaS & Software Engineering Section */}
        <SaaSSection onOpenContact={scrollToDiscuss} />

        {/* 7. All-in-One Service Grid */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* 8. Team Experience & Lead Architect Spotlight */}
        <TeamExperience onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 9. Our Engagement (Open Source, Knowledge Sharing, Community) */}
        <EngagementSection />

        {/* 10. Transparent Flat Monthly Pricing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 11. Start with your infrastructure problem (High-Conversion Intake) */}
        <ProblemIntakeSection onOpenCall={() => setIsCallOpen(true)} />

        {/* 12. Detailed Contact & Desk Information */}
        <ContactSection
          preselectedService={selectedService}
          prepopulatedMessage={prepopulatedMessage}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* 13. Imprint & Footer */}
      <Footer onOpenCall={() => setIsCallOpen(true)} />

      {/* 14. High-Converting Instant Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* 15. Interactive WebRTC Call Modal Popup */}
      <CallModal
        isOpen={isCallOpen}
        onClose={() => setIsCallOpen(false)}
      />
    </div>
  );
}

export default App;
