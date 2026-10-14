export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  accentColor: string;
  deliverables: string[];
  technologies: string[];
  metrics: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
  featuredImage?: string;
}

export interface PartnerTool {
  name: string;
  category: string;
  description: string;
  badge: string;
  svgPath?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  projectType: string;
}

export interface EstimatorSelection {
  serviceType: string;
  projectStage: string;
  scale: string;
  timeline: string;
}
