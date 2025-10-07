export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  clientLogo: string;
  clientName: string;
  date: string;
  projectScope: string[];
  blogContent?: string; // Markdown content
  testimonial?: Testimonial; // Optional testimonial
  slug: string;
  featured?: boolean;
}

export interface PortfolioSection {
  title: string;
  description: string;
  projects: Project[];
}
