import { ProjectPage } from "../components/project-page";
import { projects } from "../data/portfolio";

export default function ProjectAccessTimePage() {
  const project = projects.find(p => p.slug === 'accesstime-brand-revolution');
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectPage project={project} />;
}
