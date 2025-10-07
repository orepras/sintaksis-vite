import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { BookCallButton } from "../components/book-call-button";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ProjectTestimonial } from "../components/project-testimonial";
import { Calendar, Users, ArrowLeft, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import accesstimeLogo from "../assets/logos/accesstime.svg";
import accesstimeEssaysImage from "../assets/images/accesstime-project/accesstime-essays.png";
import accesstimeTitleExamplesImage from "../assets/images/accesstime-project/accesstime-title-examples.png";
import { TESTIMONIALS_VISIBLE, PROJECT_TESTIMONIALS } from "../config/testimonials";

export default function ProjectAccessTimePage() {
  const project = {
    id: 'accesstime-brand-revolution',
    title: 'AccessTime: Capturing Brand Essence in Accessibility',
    description: 'Assisting AccessTime with comprehensive content strategy including long-form essays, social media content, and web rebranding copywriting to capture their forward-thinking accessibility software house identity.',
    shortDescription: 'Accessibility software house brand transformation',
    heroImage: accesstimeEssaysImage,
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
  };

  const blogContent = `# AccessTime: Capturing Brand Essence in Accessibility

## The Vision

AccessTime approached us with a clear mission to establish themselves not just as another accessibility consultant, but as a forward-thinking, modern framework capability software house that happens to specialize in accessibility.

They needed help articulating this vision across all their content touchpoints.

## Understanding the Challenge

AccessTime's challenge was multifaceted:

- **Market positioning**: Standing out in a crowded accessibility consulting space
- **Content complexity**: Explaining technical accessibility concepts to non-technical audiences
- **Brand differentiation**: Positioning as a software house, not just consultants
- **Content consistency**: Maintaining voice across essays, social media, and web copy

## Our Comprehensive Approach
We developed a multi-pronged content strategy that included:
### 1. Brand Voice Development
We crafted a voice that balanced technical expertise with approachable communication:

- **Forward-thinking**: Always looking ahead to the next frontier of accessibility
- **Capability-focused**: Emphasizing what they can build, not just what they can fix
- **Modern**: Speaking the language of contemporary software development
- **Inclusive**: Making accessibility concepts accessible to everyone

### 2. Long-form Content Strategy

In industries crowded with recognition badges and surface-level acknowledgement, short posts alone rarely build trust. For AccessTime, long-form essays became the cornerstone of authority. They allowed the team to unpack complex ideas, connect accessibility to business impact, and show depth beyond marketing slogans.


Thought leadership isn't instant and it's must be earned. Essays like "Android 16's Transition to Adaptive Apps: A Major Victory for Accessibility" and "Why Web Accessibility Matters (For Business)" gave decision makers and developers alike a reason to see AccessTime not just as a vendor, but as an expert shaping the conversation.

### 3. Web Copy Rebranding
Completely rewrote their website copy to emphasize:

- **Modern development practices** in accessibility
- **Future-focused solutions** rather than problem-fixing
- **Framework capabilities** over traditional consulting

## The Strategic Shift

Our retainer copywriting project was a complete brand repositioning. AccessTime transformed from being seen as accessibility consultants to being recognized as innovative software architects who happen to specialize in inclusive design.

The content strategy placed them squarely at the intersection of accessibility and modern software development, __a space where few competitors could even enter__. While others remained confined to the role of consultants or tool vendors, AccessTime stood out as a true software partner, shaping a market position that was not only unique but also difficult to imitate."

## Long-term Vision

The content framework we developed continues to guide AccessTime's communication strategy, ensuring they maintain their position as forward-thinking leaders in the accessibility space while building a sustainable content ecosystem that grows with their business.

> At Sintaksis, we equip our writers to understand the industries our clients live in. For AccessTime, that meant diving deep into accessibility frameworks, software development practices, and the regulatory landscape. This collaboration ensured that every piece of content wasn't just well-written, but also precise, credible, and aligned with the client's mission. By combining storytelling craft with domain knowledge, we positioned AccessTime as both approachable and innovator with the language of software development and the heart of accessibility.`;

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
            <div className="absolute inset-0 bg-blue-900/90"></div>
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
                      
                      <div className="pt-4">
                        <Button asChild variant="outline" size="lg" className="w-half">
                          <a href="https://accesstime.co" target="_blank" rel="noopener noreferrer">
                            Visit accesstime.co
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </Button>
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
                  
                  {/* AccessTime Images */}
                  <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <img src={accesstimeEssaysImage} alt="AccessTime Essays" className="w-full h-auto rounded-lg shadow-sm" />
                      <p className="text-sm text-muted-foreground mt-2 italic text-center">Long-form essays that establish thought leadership and authority in accessibility</p>
                    </div>
                    <div className="flex flex-col">
                      <img src={accesstimeTitleExamplesImage} alt="AccessTime Title Examples" className="w-full h-auto rounded-lg shadow-sm" />
                      <p className="text-sm text-muted-foreground mt-2 italic text-center">Strategic content titles that capture attention and drive engagement</p>
                    </div>
                  </div>
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