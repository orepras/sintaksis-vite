import { ProjectPage } from "../components/project-page";
import { projects } from "../data/portfolio";

export default function ProjectTokotypePage() {
  const project = projects.find(p => p.slug === 'tokotype-brand-voice');
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectPage project={project} />;
}
