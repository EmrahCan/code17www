import React from 'react';

export const TrustedBy: React.FC = () => {
  const tools = [
    { name: 'Kubernetes', label: 'Cloud Native Orchestration' },
    { name: 'AWS & GCP', label: 'Certified Infrastructure' },
    { name: 'Temporal Cloud', label: 'Workflow Engines' },
    { name: 'Docker', label: 'Containerization' },
    { name: 'Terraform', label: 'GitOps & IaC' },
    { name: 'OpenAI / Bedrock', label: 'Enterprise AI & LLM' },
    { name: 'Kafka & RabbitMQ', label: 'Event Streaming' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-palark-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 shrink-0">
            Trusted Stack & Standards
          </div>

          <div className="flex flex-wrap items-center gap-y-3 gap-x-8 text-sm font-bold text-slate-600">
            {tools.map((t, idx) => (
              <div key={idx} className="flex items-center gap-2 hover:text-palark-dark transition-colors">
                <span className="w-2 h-2 rounded-full bg-palark-lime" />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
