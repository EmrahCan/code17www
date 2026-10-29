import { ServiceItem, CaseStudy, PartnerTool, Testimonial } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-engineering',
    title: 'AI Implementation & LLM Engineering',
    shortDesc: 'Move beyond chat prototypes into deterministic, fault-tolerant enterprise AI agents and production RAG pipelines.',
    fullDesc: 'We architect and ship production-grade generative AI workflows embedded directly into your core business systems. From multi-agent orchestration and contextual vector retrieval to automated guardrails, we ensure speed, accuracy, and enterprise compliance.',
    icon: 'BrainCircuit',
    accentColor: '#00BEC9',
    deliverables: [
      'Autonomous Multi-Agent Systems & Tool Calling',
      'High-Precision Enterprise RAG Architecture',
      'LLM Evaluation, Fine-Tuning & Prompt Pipelines',
      'Data Privacy, Redaction & Hallucination Guardrails',
      'Vector Database Setup (Pinecone, Qdrant, pgvector)'
    ],
    technologies: ['LangChain', 'LlamaIndex', 'OpenAI', 'Anthropic', 'Python', 'Pinecone', 'vLLM', 'FastAPI'],
    metrics: '85% reduction in manual analysis latency'
  },
  {
    id: 'systems-cloud',
    title: 'Systems & Cloud Infrastructure Engineering',
    shortDesc: 'High-throughput microservices, Kubernetes orchestration, and resilient event-driven architectures for mission-critical loads.',
    fullDesc: 'We tackle the hard backend engineering problems: distributed transactions, low-latency APIs, automated failover, and workflow orchestration. We modernize legacy codebases and migrate infrastructure to the cloud with zero downtime.',
    icon: 'ServerCog',
    accentColor: '#F5532D',
    deliverables: [
      'Temporal Workflow Orchestration & State Machines',
      'Kubernetes Cluster Architecture & GitOps CI/CD',
      'Zero-Downtime Database & Service Migrations',
      'Event-Driven Systems (Kafka, RabbitMQ, SQS)',
      'Enterprise Cloud Security & Infrastructure as Code'
    ],
    technologies: ['Temporal', 'Go', 'Node.js/TypeScript', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'Docker'],
    metrics: '99.99% uptime target under peak concurrency'
  },
  {
    id: 'frontend-architecture',
    title: 'Modern Frontend Architecture',
    shortDesc: 'Scalable React, Next.js, and Angular platforms engineered for extreme velocity, accessibility, and sub-second rendering.',
    fullDesc: 'Modern digital products demand robust component architecture, state management predictability, and impeccable web performance. We build frontend systems that scale cleanly from 5 engineers to 500 without breaking a sweat.',
    icon: 'Layers',
    accentColor: '#00BEC9',
    deliverables: [
      'Micro-Frontend & Monorepo Multi-App Architecture',
      'High-Performance Next.js & Server-Driven UI',
      'Enterprise React & Angular Refactoring',
      'Core Web Vitals & Real-Time Performance Tuning',
      'Comprehensive Automated Testing (Playwright, Jest)'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Turborepo', 'Playwright', 'GraphQL'],
    metrics: '60% boost in Lighthouse performance score'
  },
  {
    id: 'product-design',
    title: 'UX/UI & Enterprise Design Systems',
    shortDesc: 'Bridging the gap between Figma design and engineering code with production-ready tokenized component libraries.',
    fullDesc: 'Great software is both deeply functional and exceptionally intuitive. We craft systematic design systems in Figma mapped 1:1 to code tokens, eliminating designer-developer drift and accelerating feature delivery.',
    icon: 'Palette',
    accentColor: '#F5532D',
    deliverables: [
      'Scalable Figma Design Systems & Token Architectures',
      'Complex Enterprise UX Research & User Journey Maps',
      'High-Fidelity Interactive Clickable Prototypes',
      'WCAG 2.1 AA Accessibility Compliance Audits',
      'Component Library Documentation & Storybook'
    ],
    technologies: ['Figma', 'Storybook', 'Tokens Studio', 'Zeroheight', 'Radix UI', 'Tailwind'],
    metrics: '3.5x faster frontend sprint velocity'
  },
  {
    id: 'program-leadership',
    title: 'Technical Program Leadership & Advisory',
    shortDesc: 'Fractional CTO, agile delivery transformation, and architectural governance for venture-backed and enterprise teams.',
    fullDesc: 'Technology projects fail most often on communication and alignment, not syntax. We embed seasoned engineering leaders who guide architecture, streamline sprint rituals, and mentor your in-house teams to high-performing independence.',
    icon: 'Compass',
    accentColor: '#00BEC9',
    deliverables: [
      'Fractional CTO & Executive Architecture Reviews',
      'Enterprise Agile & Delivery Squad Modernization',
      'Technical Due Diligence & Tech Debt Audits',
      'Engineering Hiring, Onboarding & Mentorship',
      'Vendor & Cloud Cost Optimization Strategies'
    ],
    technologies: ['Jira / Linear', 'Confluence', 'GitHub Enterprise', 'Datadog', 'DORA Metrics'],
    metrics: '45% quicker time-to-production release'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'cloud-zero-downtime',
    client: 'OmniCommerce Global',
    category: 'Cloud & DevOps Architecture',
    title: 'Zero-Downtime Migration of Microservices to Kubernetes',
    subtitle: 'Refactoring high-traffic checkout architecture serving 40M+ monthly active buyers.',
    summary: 'OmniCommerce faced mounting technical debt and costly cloud vendor lock-in. Code17 architected a phased canary migration to hybrid Kubernetes clusters.',
    tags: ['Kubernetes', 'Golang', 'Temporal', 'Terraform', 'Kafka'],
    metrics: [
      { label: 'Uptime Maintained', value: '99.99%' },
      { label: 'Cloud Cost Cut', value: '-38%' },
      { label: 'P99 Latency', value: '<42ms' }
    ],
    challenge: 'The existing monolith and fragmented microservices experienced frequent downtime during seasonal flash sales, leading to substantial revenue loss and degraded developer velocity.',
    solution: 'Code17 designed a dual-worker routing mesh, automated canary deployments with ArgoCD, and orchestrated stateful payment processes with Temporal workflows.',
    impact: [
      'Zero customer-facing downtime during Black Friday / Cyber Week peak.',
      'Infra operational expenses reduced by 38% through automated pod auto-scaling.',
      'Deployment frequency accelerated from bi-weekly releases to multiple daily releases.'
    ],
    techStack: ['Go', 'Temporal', 'Kubernetes (EKS)', 'ArgoCD', 'Kafka', 'Terraform', 'Datadog']
  },
  {
    id: 'enterprise-design-system',
    client: 'Vanguard Health Tech',
    category: 'Frontend & UX Systems',
    title: 'Unifying Healthcare Applications into a Modern Design System',
    subtitle: 'Re-engineering frontends for clinicians with full WCAG 2.1 AA accessibility and sub-second responsiveness.',
    summary: 'A fragmented suite of legacy web portals was merged into a single cohesive, accessible design system powering both web and clinical tablet interfaces.',
    tags: ['Next.js', 'React', 'TypeScript', 'Figma Tokens', 'Storybook'],
    metrics: [
      { label: 'Feature Velocity', value: '+300%' },
      { label: 'Accessibility', value: '100% AA' },
      { label: 'Bundle Size Cut', value: '-65%' }
    ],
    challenge: 'Clinicians were navigating inconsistent UI patterns across multiple portals, causing user fatigue, high error rates, and duplicated engineering efforts across distinct product squads.',
    solution: 'Code17 developed a comprehensive token-driven design system in Figma, mirrored by a tested React component library published via private monorepo npm packages with live Storybook docs.',
    impact: [
      'New feature deployment time dropped from 6 weeks to 8 business days across teams.',
      'Clinical data entry errors decreased by 41% due to streamlined cognitive ergonomics.',
      'Full adherence to healthcare accessibility and screen-reader standards.'
    ],
    techStack: ['React 18', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Figma API', 'Playwright']
  }
];

export const PARTNERS_DATA: PartnerTool[] = [
  { name: 'Temporal', category: 'Workflow Orchestration', description: 'Fault-tolerant microservice workflows & long-running jobs', badge: 'Premier Delivery Partner' },
  { name: 'Next.js / React', category: 'Frontend Ecosystem', description: 'Server components, edge rendering, and enterprise UI', badge: 'Certified Architecture' },
  { name: 'OpenAI / Anthropic', category: 'AI Intelligence', description: 'Enterprise LLM models, function calling & reasoning', badge: 'Solutions Partner' },
  { name: 'Amazon Web Services', category: 'Cloud Infrastructure', description: 'Scalable serverless, EKS, Bedrock, and VPC security', badge: 'Cloud Solutions' },
  { name: 'Google Cloud (GCP)', category: 'Cloud & AI Platform', description: 'Vertex AI, GKE clusters, and global networking', badge: 'Ecosystem Partner' },
  { name: 'Figma', category: 'Product & Design Systems', description: 'Tokenized component architecture & interactive design', badge: 'Design System Guild' },
  { name: 'Kubernetes', category: 'Container Orchestration', description: 'Zero-downtime scaling, GitOps, and service meshes', badge: 'Cloud Native' },
  { name: 'Docker', category: 'Developer Tooling', description: 'Isolated development, containerization, and staging parity', badge: 'Standard Stack' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "Code17 is hands down the most capable engineering partner we've ever engaged. They untangled our most complex architecture bottlenecks and elevated our entire engineering posture.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "OmniCommerce Global",
    projectType: "Cloud & Kubernetes Migration"
  },
  {
    quote: "The design system and frontend architecture delivered by Code17 allowed our team to ship 3x faster. Outstanding attention to reliability, quality, and detail.",
    author: "Dr. Julian Harris",
    role: "Head of Digital Products",
    company: "Vanguard Health Tech",
    projectType: "Enterprise Design System & React Architecture"
  }
];

export const STATS_DATA = [
  { label: 'Client Retention & Expansion', value: '96%' },
  { label: 'Production Releases Delivered', value: '180+' },
  { label: 'Average Client ROI', value: '4.2x' },
  { label: 'Senior-Only Engineers', value: '100%' }
];
