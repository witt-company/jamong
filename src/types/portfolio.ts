export interface TechStack {
  name: string;
  color: string;
}

export interface PortfolioProject {
  category: string;
  title: string;
  src: string;
  description: string;
  features: string[];
  techStack: TechStack[];
  isReady?: boolean;
}