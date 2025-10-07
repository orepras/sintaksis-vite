import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { BookCallButton } from "../components/book-call-button";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { projects } from "../data/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Our Projects - Sintaksis Portfolio</title>
        <meta name="description" content="Explore our portfolio of successful copywriting and storytelling projects. See how we've helped businesses transform their narrative and achieve measurable growth." />
        <meta property="og:title" content="Our Projects - Sintaksis Portfolio" />
        <meta property="og:description" content="Explore our portfolio of successful copywriting and storytelling projects." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects - Sintaksis Portfolio" />
        <meta name="twitter:description" content="Explore our portfolio of successful copywriting and storytelling projects." />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 bg-muted/30 md:py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-6 sm:text-5xl font-sans">
                  Our Projects
                </h1>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Real stories, real results. Explore how we've helped businesses transform their narrative and achieve measurable growth through strategic copywriting.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16">
            <div className="container">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
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
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded font-mono">
                            Featured
                          </span>
                        </div>
                      )}
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
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Let's work together to create compelling narratives that drive results for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <BookCallButton size="lg" className="gradient-background hover:text-black" />
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
