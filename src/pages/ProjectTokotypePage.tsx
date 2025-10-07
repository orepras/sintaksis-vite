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
import tokotypeLogo from "../assets/logos/tokotype.svg";
import tokotypeHeroImage from "../assets/images/tokotype-project/tokotype-hero.png";
import tokotypeHeroCopyImage from "../assets/images/tokotype-project/tokotype-herocopy.png";
import tokotypeFontsImage from "../assets/images/tokotype-project/tokotype-fonts.png";
import tokotypeLicensingImage from "../assets/images/tokotype-project/tokotype-licensing.png";
import tokotypeNewsletterImage from "../assets/images/tokotype-project/tokotype-newsletter.png";
import tokotypeStatementImage from "../assets/images/tokotype-project/tokotype-statement.png";
import { TESTIMONIALS_VISIBLE, PROJECT_TESTIMONIALS } from "../config/testimonials";

export default function ProjectTokotypePage() {
  const project = {
    id: 'tokotype-brand-voice',
    title: 'Tokotype: Finding a Voice in a World of Letters',
    description: 'Helping Indonesia\'s premier type foundry articulate their place in the design ecosystem through strategic brand voice development and website copywriting.',
    shortDescription: 'Type foundry brand voice and website transformation',
    heroImage: tokotypeFontsImage,
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
  };

  const blogContent = `# Tokotype: A Story About Finding a Voice in a World of Letters

## The Challenge

When Tokotype first approached me, they weren't just looking for sharper words. They were searching for a way to articulate their place in Indonesia's growing design ecosystem and essentially elevate their brand internationally to serve global ambitions.

For over a decade, Tokotype had been creating high-quality fonts—elegant workhorses that powered brands, websites, and creative projects. Designers and brands trusted their craft, yet themselves often blended into the background. Their question was simple, "How do we make people see us not just as a font vendor, but as a partner in shaping identity?"

## Listening First

I started by diving into their audience. The Tokotype community wasn't limited to professional designers, it included any size of business owners trying to stand out, typography students learning their first tools, and creative directors managing big-brand projects. Each faced the same pains about the frustration of 

- finding the right typeface,
- the confusion of navigating licenses, and
- the lack of a truly reliable partner in typography.

## Shaping the Brand Voice

We decided Tokotype's voice needed to do more than "sell fonts." It had to inspire optimism, promise reliability, and showcase craft. In a market crowded with other foundries, this clarity would become their competitive edge.

The refined brand voice sounded like a trusted friend in the design world:

- **Optimistic** about what typography can achieve
- **Reliable** in guiding designers through licensing and usage  
- **Craft-driven**, reminding everyone that each font carries a story of intention and personality

Sintaksis helped Tokotype refine their brand voice and create a clear message that resonates with their audiences utilizing product story brand framework we developed. It basically positioned the brand and product as an expert and helping customers understand what they need and guiding them in the way and expertise that the brand and product have.

## From Strategy to Copy

The website became the canvas to bring this voice alive.

**Hero section:**  
"Fonts that scale with you. From commercial fonts to custom typefaces for brands."  
→ Anchored Tokotype as adaptable and forward-looking.

**Custom Fonts CTA:**  
"Your brand is one-of-a-kind. Your typography should be too."  
→ Spoke directly to clients searching for distinctiveness in saturated markets.

**Clear actions:**  
- Discover License Plans (for quick buyers)
- See How It Works (for custom-seekers)

The CTAs weren't just button and actually act as invitations to a smoother, more confident design journey.

## Results & Impact

Tokotype deployed their website with more than polished words. They gained a cohesive narrative, a type foundry rooted in creativity and great aspiration, ready to serve global ambitions. Their message now aligned with their true identity, as a partner in helping brands and designers communicate effectively through exceptional typography.

And that shift matters.

Because in typography, as in branding, precision is everything.`;

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
            <div className="absolute inset-0 bg-black/90"></div>
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
                          <a href="https://tokotype.com" target="_blank" rel="noopener noreferrer">
                            Visit tokotype.com
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
                  
                  {/* Tokotype Images */}
                  <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <img src={tokotypeHeroImage} alt="Tokotype Hero Section" className="w-full h-auto rounded-lg shadow-sm" />
                      <p className="text-sm text-muted-foreground mt-2 italic text-center">The new hero section positioning Tokotype as adaptable and forward-looking</p>
                    </div>
                    <div className="flex flex-col">
                      <img src={tokotypeHeroCopyImage} alt="Tokotype Hero Copy" className="w-full h-auto rounded-lg shadow-sm" />
                      <p className="text-sm text-muted-foreground mt-2 italic text-center">Refined messaging that speaks directly to clients seeking distinctiveness</p>
                    </div>
                    <div className="flex flex-col">
                      <img src={tokotypeLicensingImage} alt="Tokotype Licensing Page" className="w-full h-auto rounded-lg shadow-sm" />
                      <p className="text-sm text-muted-foreground mt-2 italic text-center">Clear licensing information with improved user experience</p>
                    </div>
                    <div className="flex flex-col">
                      <img src={tokotypeNewsletterImage} alt="Tokotype Newsletter" className="w-full h-auto rounded-lg shadow-sm" />
                      <p className="text-sm text-muted-foreground mt-2 italic text-center">Newsletter signup with compelling copy that builds community</p>
                    </div>
                    <div className="flex flex-col md:col-span-2">
                      <img src={tokotypeStatementImage} alt="Tokotype Statement" className="w-full h-auto rounded-lg shadow-sm" />
                      <p className="text-sm text-muted-foreground mt-2 italic text-center">Brand statement that reinforces Tokotype's position in the design ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          {project.testimonial && (
            <div className="hidden"><ProjectTestimonial 
              testimonial={project.testimonial} 
              visible={TESTIMONIALS_VISIBLE && PROJECT_TESTIMONIALS[project.slug as keyof typeof PROJECT_TESTIMONIALS]} 
            /></div>
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