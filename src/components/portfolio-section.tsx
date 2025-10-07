import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { featuredProjects } from "../data/portfolio";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-muted/30 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl font-sans">
            Stories That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            See how we've helped businesses elevate their narrative and achieve measurable growth through strategic copywriting.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-background rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted/50 relative">
                <img
                  src={project.heroImage}
                  alt={`${project.clientName} project`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <img
                    src={project.clientLogo}
                    alt={project.clientName}
                    className="h-8 w-auto bg-white/90 p-1 rounded"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {project.clientName}
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 font-sans">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 font-mono">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.projectScope.slice(0, 3).map((scope, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted px-2 py-1 rounded font-mono"
                    >
                      {scope}
                    </span>
                  ))}
                  {project.projectScope.length > 3 && (
                    <span className="text-xs bg-muted px-2 py-1 rounded font-mono">
                      +{project.projectScope.length - 3} more
                    </span>
                  )}
                </div>
                
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to={`/projects/${project.slug}`}>
                    Read Case Study
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
