import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { BookCallButton } from "../components/book-call-button";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ProjectTestimonials } from "../components/project-testimonials";
import { Calendar, Users, ArrowLeft, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blibliLogo from "../assets/logos/blibli.svg";
import blibliHeroImage from "../assets/images/blibli-project/blibli_all_photos.webp";
import blibliWorkshopImage from "../assets/images/blibli-project/blibli-workshop.webp";
import blibliWorkshop2Image from "../assets/images/blibli-project/blibli-workshop2.webp";
import blibliAdindhaImage from "../assets/images/blibli-project/blibli-adindha.webp";
import blibliAndrewImage from "../assets/images/blibli-project/blibli-andrew.webp";
import { TESTIMONIALS_VISIBLE, PROJECT_TESTIMONIALS } from "../config/testimonials";

export default function ProjectBlibliPage() {
  const project = {
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
    testimonials: [
      {
        id: 'blibli-testimonial-adindha',
        quote: "The session was highly insightful! Really appreciate kak Pras for highlighting that copywriters are connectors of the team, not decorators. The session inspired me to be more mindful of my copy's journey, especially on how it will be rendered. I also found the use of JSON for documentation to be particularly interesting. It challenges the status quo but can streamline both copywriters and developers workflow by providing a simple, clear, and quick way to reference a copy. Overall, it was such a fun and thought-provoking session!",
        author: "Adindha Karunia",
        role: "UX Writer",
        company: "Blibli",
        avatar: blibliAdindhaImage
      },
      {
        id: 'blibli-testimonial-andrew',
        quote: "I wanter to learn how to get more insight into collaborating with the Tech team. Prasaja's presentation gives me step-by-step instructions on how to organize the copy document with JSON. Plus, the example layouts for different kinds of projects are valuable. The presentation sectioned into digestible parts that kept me curious to learn more. My perspective on how to build a better collaboration with the Tech team has improved, and I've taken up a new interest in the world of UX writing. Thank you, Pras!",
        author: "Andrew Carlos",
        role: "Senior UX Writer",
        company: "Blibli",
        avatar: blibliAndrewImage
      }
    ]
  };

  const blogContent = `# Blibli: Streamlining Copy Handoff and Workflow

## Context & Positioning

Blibli is one of Indonesia's major e-commerce ecosystems, it has built its reputation around reliability, quality, and strong customer service. 

In a market where many platforms compete on discounts and volume, Blibli continues to differentiate itself through user experience, transparent communication, and customer trust. This makes clarity in content and seamless handoffs not just nice-to-have, but essential to maintaining their brand promise.

## The Challenge

Even within a top-tier e-commerce platform like Blibli which prides itself on clarity, service excellence, and trust, the content workflow wasn't always smooth. The team often struggled with copy handoffs between UX writers, and developers. Without a shared structure, context sometimes got lost, tone was interpreted differently, and important details didn't always carry through. This made launches slower and made it harder to deliver the consistent experience Blibli is known for.

## Our Role & Approach
Prasaja, our principal writer was brought in to lead workshops and documentation initiatives that empowered UX writers to truly own the copy, instead of treating it as just a handoff artifact. The goal is to make copy handoff and cross-team communication as clear, structured, and frictionless as the customer experience Blibli aspired to.

### What we did in those sessions:

- Introduced JSON-based content schemas for major content types (product pages, banners, emails, etc.)
- Taught writers how to embed contextual metadata, how to handover to developers, and how to use the JSON schema to create copy.
- Simulated handoff exercises to sharpen cross-team coordination

## Impact & Outcomes

- Writers assumed end-to-end ownership of copy rather than viewing it as a handoff
- Designers and devs got clear, unambiguous specs to work from — reducing guesswork

## Long-Term Value

This transformed process didn't just fix short-term pain points because it embedded a culture of clarity. Today, Blibli's content, design, and development teams understand the structured workflow to align quickly and confidently. The UX writers are seen as full collaborators in product, not just content providers. And that clarity—*internal and external*—helps reinforce Blibli's positioning as a leading e-commerce platform in Indonesia that cares about both efficiency and customer trust.

The success of this workshop and workflow transformation project demonstrated how proper documentation and structured workflows can dramatically improve team collaboration and content quality.`;

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
            <div className="absolute inset-0 bg-black/80"></div>
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
                
                <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl font-sans opacity-90">
                  {project.title}
                </h1>
                
                <p className="text-xl text-white/90 mb-8 font-mono opacity-80">
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
                    {blogContent}
                  </ReactMarkdown>
                  
                  {/* Workshop Images */}
                  <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <img src={blibliWorkshopImage} alt="Blibli Workshop Session" className="w-full h-auto rounded-lg shadow-sm" />
                      <p className="text-sm text-muted-foreground mt-2 italic text-center">Workshop session with Blibli's UX writing team</p>
                    </div>
                    <div className="flex flex-col">
                      <img src={blibliWorkshop2Image} alt="Blibli Workshop Session 2" className="w-full h-auto rounded-lg shadow-sm" />
                      <p className="text-sm text-muted-foreground mt-2 italic text-center">Interactive workshop exercises and team collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          {project.testimonials && (
            <ProjectTestimonials 
              testimonials={project.testimonials} 
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