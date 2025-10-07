import type { Project } from '../types/portfolio';
import blibliLogo from '../assets/logos/blibli.svg';
import accesstimeLogo from '../assets/logos/accesstime.svg';
import tokotypeLogo from '../assets/logos/tokotype.svg';
import blibliHeroImage from '../assets/images/blibli-project/blibli_all_photos.webp';
import tokotypeHeroImage from '../assets/images/tokotype-project/tokotype-hero.png';
import accesstimeHeroImage from '../assets/images/accesstime-project/accesstime-essays.png';

export const projects: Project[] = [
  {
    id: 'tokotype-brand-voice',
    title: 'Tokotype: Finding a Voice in a World of Letters',
    description: 'Helping Indonesia\'s premier type foundry articulate their place in the design ecosystem through strategic brand voice development and website copywriting.',
    shortDescription: 'Type foundry brand voice and website transformation',
    heroImage: tokotypeHeroImage,
    clientLogo: tokotypeLogo,
    clientName: 'Tokotype',
    date: '2025',
    projectScope: ['Brand Voice Development', 'Website Copywriting'],
    slug: 'tokotype-brand-voice',
    featured: true,
    testimonial: {
      id: 'tokotype-testimonial',
      quote: "Sintaksis didn't just write copy for us—they helped us find our voice. Our message now aligns with our true identity as a partner in helping brands communicate effectively through exceptional typography.",
      author: "Gumpita Rahayu",
      role: "Founder & Creative Director",
      company: "Tokotype",
      avatar: "https://cdn.tokotype.com/storage/collaborators/1746176652_Tokotype_GumpitaRahayu.webp"
    }
  },
  {
    id: 'blibli-copy-workflow',
    title: 'Blibli: Streamlining Copy Handoff and Workflow',
    description: 'Helping Blibli\'s writers team understand better copy handoff and workflow processes through structured JSON documentation and clear communication frameworks.',
    shortDescription: 'Copy workflow optimization and team collaboration',
    heroImage: blibliHeroImage,
    clientLogo: blibliLogo,
    clientName: 'Blibli',
    date: '2025',
    projectScope: ['Workflow Documentation', 'Team Training', 'Process Optimization', 'JSON Schema Development'],
    slug: 'blibli-copy-workflow',
    featured: true,
    testimonial: {
      id: 'blibli-testimonial',
      quote: "The session was highly insightful! Really appreciate kak Pras for highlighting that copywriters are connectors of the team, not decorators. The session inspired me to be more mindful of my copy's journey, especially on how it will be rendered. I also found the use of JSON for documentation to be particularly interesting. It challenges the status quo but can streamline both copywriters and developers workflow by providing a simple, clear, and quick way to reference a copy. Overall, it was such a fun and thought-provoking session!",
      author: "Adindha Karunia",
      role: "UX Writer",
      company: "Blibli",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
    }
  },
  {
    id: 'accesstime-brand-revolution',
    title: 'AccessTime: Capturing Brand Essence in Accessibility',
    description: 'Assisting AccessTime with comprehensive content strategy including long-form essays, social media content, and web rebranding copywriting to capture their forward-thinking accessibility software house identity.',
    shortDescription: 'Accessibility software house brand transformation',
    heroImage: accesstimeHeroImage,
    clientLogo: accesstimeLogo,
    clientName: 'AccessTime',
    date: '2025',
    projectScope: ['Brand Strategy', 'Long-form Content', 'Social Media Copywriting', 'Web Rebranding'],
    slug: 'accesstime-brand-revolution',
    featured: true,
    testimonial: {
      id: 'accesstime-testimonial',
      quote: "We at Access Time have been working with Sintaksis to manage our social media and blog content on digital accessibility. The Sintaksis team consistently exceeds expectations, they conduct thorough research, take initiative, and always go the extra mile to help while ensuring everything aligns with our brand voice. We're truly happy to work with Sintaksis and excited to explore further collaboration with them!",
      author: "Michelle Neysa",
      role: "Co-Founder / CEO",
      company: "AccessTime",
      avatar: "https://www.accesstime.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmichelle.22c308b0.webp&w=640&q=75"
    }
  }
];

export const featuredProjects = projects.filter(project => project.featured);
