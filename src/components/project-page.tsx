import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { BookCallButton } from "./book-call-button";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ProjectTestimonial } from "./project-testimonial";
import { Calendar, Users, ArrowLeft, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Project } from "../types/portfolio";
import { TESTIMONIALS_VISIBLE, PROJECT_TESTIMONIALS } from "../config/testimonials";

interface ProjectPageProps {
  project: Project;
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Helmet>
        <title>{project.title} - Sintaksis Case Study</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} - Sintaksis Case Study`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} - Sintaksis Case Study`} />
        <meta name="twitter:description" content={project.description} />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[60vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat" 
                   style={{backgroundImage: `url(${project.heroImage})`}}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={project.clientLogo}
                    alt={project.clientName}
                    className="h-12 w-auto bg-white/90 p-2 rounded"
                  />
                  <div className="text-white/90">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl font-sans">
                  {project.title}
                </h1>
                
                <p className="text-xl text-white/90 mb-8 font-mono">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.projectScope.map((scope, index) => (
                    <span
                      key={index}
                      className="text-sm bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-mono"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 font-sans">Project Overview</h2>
                    <p className="text-muted-foreground font-mono mb-6">
                      {project.shortDescription}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium font-sans">Client</div>
                          <div className="text-muted-foreground font-mono">{project.clientName}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium font-sans">Project Year</div>
                          <div className="text-muted-foreground font-mono">{project.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-sans">Project Scope</h3>
                    <ul className="space-y-2">
                      {project.projectScope.map((scope, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground font-mono">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {scope}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({children}) => <h1 className="text-3xl font-bold mb-6 font-sans">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-bold mb-4 mt-8 font-sans">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-bold mb-3 mt-6 font-sans">{children}</h3>,
                      p: ({children}) => <p className="text-muted-foreground mb-4 font-mono leading-relaxed">{children}</p>,
                      ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground font-mono">{children}</ul>,
                      ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground font-mono">{children}</ol>,
                      li: ({children}) => <li className="mb-1">{children}</li>,
                      blockquote: ({children}) => (
                        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4 font-mono">
                          {children}
                        </blockquote>
                      ),
                      strong: ({children}) => <strong className="font-semibold text-foreground">{children}</strong>,
                      em: ({children}) => <em className="italic">{children}</em>,
                    }}
                  >
                    {project.blogContent}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          {project.testimonial && (
            <ProjectTestimonial 
              testimonial={project.testimonial} 
              visible={TESTIMONIALS_VISIBLE && PROJECT_TESTIMONIALS[project.slug as keyof typeof PROJECT_TESTIMONIALS]} 
            />
          )}

          {/* Call to Action */}
          <section className="py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">
                  Ready to Tell Your Story?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Let's work together to create compelling narratives that drive results for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <BookCallButton size="lg" className="gradient-background hover:text-black" />
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">
                      Start Your Project
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="py-8 border-t">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" size="sm">
                  <Link to="/projects">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to All Projects
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
