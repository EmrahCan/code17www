import React from 'react';
import { ArrowRight, Code2, Layers, Cpu, CheckCircle2, Rocket } from 'lucide-react';

interface SaaSSectionProps {
  onOpenContact: () => void;
}

export const SaaSSection: React.FC<SaaSSectionProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      title: 'Full-Cycle SaaS Development',
      subtitle: 'From Idea & MVP to Global Scale',
      description: 'We build end-to-end multi-tenant SaaS products: subscription billing with Stripe, role-based access control (RBAC), intuitive Next.js/React frontends, and resilient Go/Node backends.',
      icon: Rocket,
      badge: 'END-TO-END PRODUCT',
      badgeColor: 'bg-palark-purple-light text-palark-purple',
      points: ['Multi-Tenant Tenant Isolation', 'Stripe Billing & Metered Invoicing', 'Automated CI/CD from Day 1']
    },
    {
      title: 'High-Concurrency APIs & Microservices',
      subtitle: 'Engineered for Millions of Users',
      description: 'Distributed architectures crafted for sub-millisecond latencies and high throughput. Built using Go, Python, and Node.js with event-driven pipelines on Kafka and Temporal.',
      icon: Layers,
      badge: 'SCALE & PERFORMANCE',
      badgeColor: 'bg-palark-blue-light text-palark-blue',
      points: ['Event-Driven Kafka / RabbitMQ Mesh', 'Redis Distributed Caching & Rate Limiting', 'gRPC & GraphQL High-Speed APIs']
    },
    {
      title: 'AI-Native SaaS Features',
      subtitle: 'Intelligent Agents & Semantic Search',
      description: 'Transform your SaaS with native intelligence. We integrate private vector search (RAG), customized LLM workflows, and deterministic AI agents directly into your product experience.',
      icon: Cpu,
      badge: 'AI INTEGRATION',
      badgeColor: 'bg-palark-lime-light text-palark-lime',
      points: ['Private In-VPC LLM Pipelines', 'Pgvector & Qdrant Semantic Search', 'Deterministic Guardrails & Audit Logs']
    },
    {
      title: 'Legacy Refactoring & Modernization',
      subtitle: 'Zero-Downtime Code Evolution',
      description: 'Break free from brittle monolithic applications. We decouple legacy codebases into modular microservices with comprehensive automated test suites and zero downtime migrations.',
      icon: Code2,
      badge: 'CODE MODERNIZATION',
      badgeColor: 'bg-[#FFF4ED] text-[#FF5722]',
      points: ['Strangler-Fig Migration Pattern', '100% Automated Test Coverage', 'Database Schema De-coupling']
    }
  ];

  const technologies = [
    'Next.js 15', 'React', 'TypeScript', 'Go (Golang)', 'Python / FastAPI',
    'PostgreSQL', 'Redis', 'Temporal.io', 'Apache Kafka', 'GraphQL', 'Docker & K8s', 'Tailwind CSS'
  ];

  return (
    <section id="saas-development" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-palark-border">
      <div className="max-w-7xl mx-auto">
        {/* Header (Palark Editorial Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <div className="text-xs font-bold uppercase tracking-widest text-palark-purple mb-2">
              SOFTWARE & SAAS ENGINEERING
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-palark-dark tracking-tight leading-tight">
              Software Built by SREs Never Crashes at Scale
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="font-sans font-medium text-lg sm:text-xl text-palark-dark leading-relaxed">
              Most development agencies ship software that breaks the moment traffic surges or becomes an unmaintainable legacy burden. Because our DNA is rooted in 24/7 site reliability and distributed systems,{' '}
              <span className="span-purple">
                we engineer SaaS platforms with production-grade fault tolerance, auto-scaling, and clean architecture from line one.
              </span>
            </p>
            <p className="text-sm sm:text-base text-palark-gray leading-relaxed font-normal">
              Whether you are launching an ambitious B2B SaaS product, decoupling a mission-critical monolith, or supercharging your app with native AI workflows, our dedicated software squad brings senior engineering leadership to every sprint.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F9FA] border border-palark-border rounded-3xl p-8 hover:border-slate-400 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-palark-dark group-hover:bg-palark-dark group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-2xl text-palark-dark mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-palark-purple mb-4">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-palark-gray leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-200/60 pt-4">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-bold text-palark-dark group-hover:text-palark-purple inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Start building this</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Banner (Palark clean pill list) */}
        <div className="bg-[#F8F9FA] border border-palark-border rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-palark-dark mb-1">
              Engineered with Modern European & US Standards
            </div>
            <div className="text-xs text-palark-gray">
              Clean code, modular microservices, 100% test coverage, and continuous GitOps delivery.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
