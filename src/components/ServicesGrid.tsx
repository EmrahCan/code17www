import React from 'react';
import { ArrowRight, Activity, Server, Cpu, RefreshCw, Layers, Rocket } from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (name: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'saas-core',
      badge: 'SAAS & MVP',
      badgeClass: 'badge-purple',
      title: 'Full-Cycle SaaS Product Engineering',
      description: 'Turn ideas into production-ready software. We engineer multi-tenant SaaS products with Next.js, Go/Node.js, Stripe subscriptions, and built-in scalability.',
      icon: Rocket,
      highlights: ['Multi-Tenant Database Architecture', 'Stripe Billing & Metered Usage', 'Zero-to-Launch MVP Sprints'],
    },
    {
      id: 'devops',
      badge: 'CONTINUOUS DELIVERY',
      badgeClass: 'badge-blue',
      title: 'DevOps as a Service',
      description: 'End-to-end continuous delivery automation. We manage Kubernetes clusters, GitOps pipelines with ArgoCD, and infrastructure as code.',
      icon: Server,
      highlights: ['GitOps with ArgoCD / GitLab CI', 'Kubernetes Cluster Provisioning', 'Terraform Multi-Cloud IaC'],
    },
    {
      id: 'sre',
      badge: '24/7 SUPPORT',
      badgeClass: 'badge-lime',
      title: '24/7 SRE Maintenance & SLAs',
      description: 'Round-the-clock site reliability engineering with P1 incident response under 15 minutes, proactive monitoring, and disaster recovery.',
      icon: Activity,
      highlights: ['99.99% Uptime Target in SLA', 'Prometheus & Grafana Observability', 'Zero data-loss failover'],
    },
    {
      id: 'high-load',
      badge: 'SCALE TO MILLIONS',
      badgeClass: 'badge-blue',
      title: 'High-Concurrency APIs & Microservices',
      description: 'Architecting distributed databases, multi-region failovers, and caching topologies engineered to handle flash crowds, seasonal spikes, and high throughput.',
      icon: Layers,
      highlights: ['High-Concurrency Database Clusters', 'Kafka / RabbitMQ Event Mesh', 'Global Low-Latency Routing'],
    },
    {
      id: 'ai-llm',
      badge: 'ENTERPRISE AI',
      badgeClass: 'badge-purple',
      title: 'AI-Native SaaS & Private LLMs',
      description: 'Deploy deterministic generative AI agents and private vector retrieval (RAG) pipelines strictly within your VPC with zero third-party data leakage.',
      icon: Cpu,
      highlights: ['100% Private VPC Data Boundary', 'Temporal Agent Orchestration', 'Deterministic Output Guardrails'],
    },
    {
      id: 'migration',
      badge: 'ZERO DOWNTIME',
      badgeClass: 'badge-lime',
      title: 'Cloud Migration & Modernization',
      description: 'Move from legacy monoliths, costly SaaS vendors, or bare-metal to modern cloud-native architectures with zero customer interruption.',
      icon: RefreshCw,
      highlights: ['Dual-Worker Routing Mesh', 'Automated Canary Deployments', 'Average -38% Cloud Bill Reduction'],
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] border-b border-c17-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-c17-purple mb-2">
              OUR SERVICE CATALOG
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-c17-dark tracking-tight">
              Transparent, All-in-One Services
            </h2>
          </div>
          <p className="text-sm sm:text-base text-c17-gray max-w-md font-normal">
            Whether you need 24/7 SRE maintenance on a flat monthly rate or a dedicated project migration squad, we have you covered.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            const iconThemes: Record<string, { bg: string; text: string; hoverBg: string }> = {
              'badge-purple': { bg: 'bg-[#F4EBFF]', text: 'text-[#8438FF]', hoverBg: 'group-hover:bg-[#8438FF] group-hover:text-white' },
              'badge-blue': { bg: 'bg-[#EAF6FF]', text: 'text-[#0088FF]', hoverBg: 'group-hover:bg-[#0088FF] group-hover:text-white' },
              'badge-lime': { bg: 'bg-[#E6FBF7]', text: 'text-[#00A389]', hoverBg: 'group-hover:bg-[#00A389] group-hover:text-white' },
            };
            const theme = iconThemes[s.badgeClass] || { bg: 'bg-[#F2F4F7]', text: 'text-c17-dark', hoverBg: 'group-hover:bg-c17-dark group-hover:text-white' };

            return (
              <div
                key={s.id}
                className="bg-white border border-c17-border hover:border-slate-400 rounded-3xl p-8 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${s.badgeClass}`}>
                      {s.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl ${theme.bg} ${theme.text} flex items-center justify-center ${theme.hoverBg} transition-all duration-200`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-c17-dark mb-3">
                    {s.title}
                  </h3>

                  <p className="text-sm text-c17-gray leading-relaxed mb-6 font-normal">
                    {s.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    {s.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-c17-purple" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(s.title)}
                  className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-c17-dark hover:text-c17-purple transition-colors cursor-pointer"
                >
                  <span>Inquire about {s.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
