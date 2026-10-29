import React from 'react';
import { GitPullRequest, BookOpen, Users2, ArrowUpRight } from 'lucide-react';

export const EngagementSection: React.FC = () => {
  const cards = [
    {
      title: 'Open Source engagement',
      desc: 'Our engineers actively contribute to Kubernetes, Cloud Native Computing Foundation (CNCF) projects, and open-source observability ecosystems.',
      icon: GitPullRequest,
      linkText: 'Explore our GitHub repositories',
      linkUrl: 'https://github.com/code17tech',
      isExternal: true,
      badge: 'OPEN SOURCE DEV',
      iconTheme: 'bg-c17-purple-light text-c17-purple',
    },
    {
      title: 'Knowledge sharing',
      desc: 'We write deep-dive architectural post-mortems, runbooks, and engineering guides on scaling high-traffic systems without downtime.',
      icon: BookOpen,
      linkText: 'Request engineering case studies',
      linkUrl: '#contact',
      isExternal: false,
      badge: 'TECHNICAL BRIEFINGS',
      iconTheme: 'bg-c17-blue-light text-c17-blue',
    },
    {
      title: 'Community involvement',
      desc: 'We actively engage in technical developer forums, architecture roundtables, and cloud community discussions, sharing hands-on production engineering lessons.',
      icon: Users2,
      linkText: 'Connect with our engineering team',
      linkUrl: '#contact',
      isExternal: false,
      badge: 'ENGINEERING COMMUNITY',
      iconTheme: 'bg-c17-lime-light text-c17-lime',
    }
  ];

  return (
    <section id="engagement" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] border-b border-c17-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-c17-purple mb-2">
              ECOSYSTEM &amp; OPEN SOURCE
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-c17-dark tracking-tight">
              Our Engagement
            </h2>
          </div>
          <p className="text-sm sm:text-base text-c17-gray max-w-md font-normal">
            We don’t just consume modern tech—we contribute upstream, teach best practices, and shape the future of cloud computing.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-c17-border rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-c17-light-gray text-c17-dark">
                      {card.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl ${card.iconTheme} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-c17-dark mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-c17-gray leading-relaxed font-normal mb-6">
                    {card.desc}
                  </p>
                </div>

                <a
                  href={card.linkUrl}
                  target={card.isExternal ? '_blank' : undefined}
                  rel={card.isExternal ? 'noopener noreferrer' : undefined}
                  className="pt-4 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-bold text-c17-purple hover:underline"
                >
                  <span>{card.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
