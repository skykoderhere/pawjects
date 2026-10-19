export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  isBrandIcon?: boolean;
  link: string;
  linkText: string;
  stars?: string;
  tags: string[];
  features?: string[];
  screenshot?: string;
  details?: string;
}

export interface ValuePrinciple {
  title: string;
  icon: string;
  description: string;
}
