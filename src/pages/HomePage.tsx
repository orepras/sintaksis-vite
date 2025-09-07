import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { Rocket, TrendingUp, Building2, Briefcase } from "lucide-react"
import { BookCallButton } from "../components/book-call-button"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { generateOrganizationSchema } from "../lib/structured-data"

export default function HomePage() {

  return (
    <>
      <Helmet>
        <title>Sintaksis - Copywriting & Storytelling Studio | Copy That Sells. Stories That Stick.</title>
        <meta name="description" content="Sintaksis offers premium, product-focused copywriting for businesses that value great storytelling—backed by predictable retainer pricing. Copy that sells, stories that stick." />
        <meta name="keywords" content="copywriting, storytelling, brand narrative, product copywriting, content strategy, marketing copy, business storytelling" />
        <meta property="og:title" content="Sintaksis - Copywriting & Storytelling Studio" />
        <meta property="og:description" content="Copy that sells, stories that stick. Premium copywriting and storytelling for businesses at every stage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sintaksis.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sintaksis - Copywriting & Storytelling Studio" />
        <meta name="twitter:description" content="Copy that sells, stories that stick. Premium copywriting and storytelling for businesses at every stage." />
        <link rel="canonical" href="https://sintaksis.com" />
      </Helmet>
      
      <script type="application/ld+json">
        {JSON.stringify(generateOrganizationSchema())}
      </script>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[75vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/hero-bg.webp)'}}>
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="container relative z-10">
            <div className="flex flex-col justify-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl font-sans text-center">
                Copywriting & Storytelling Studio.<br></br>
Copy That Sells. Stories That Stick.
              </h1>
              <p className="text-lg font-mono text-center">Sintaksis offers premium, product-focused copywriting for business that value great storytelling—<span className="font-bold italic">backed by predictable retainer pricing.</span>
              </p>
                <div className="text-center">
                  <Link 
                    to="/pricing" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 underline underline-offset-3"
                  >
                    View detailed pricing plans
                  </Link>
                </div>
                              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  <a
                    href="https://cal.com/sintaksis/discovery"
                    className="inline-flex items-center px-6 py-3 rounded-md text-foreground bg-background text-sm font-medium shadow-sm transition-colors hover:bg-green-500 text-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gradient-background"
                  >
                    <div className="relative mr-2 flex items-center">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 hover:bg-white animate-pulse blur-sm"></div>
                    </div>
                    Book a Free Discovery Call
                  </a>
                </div>
                
            </div>
          </div>
        </section>

        {/* Storytelling Benefits Section */}
        <section id="benefits" className="py-16 bg-muted/30 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl font-sans max-w-3xl mx-auto">
              Copywriting For Every Stage
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto font-mono">
              Launching? Scaling? Reinventing? Our copywriting and product storytelling practices build stories that stick and drives meaningful results.
            </p>

            <Tabs defaultValue="startup" className="w-full">
              <div className="sticky top-16 z-30 bg-muted/30 py-4 -mx-4 px-4 md:mx-0">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
                  <TabsTrigger value="startup" className="flex items-center gap-2">
                    <Rocket className="h-4 w-4" />
                    <span className="hidden sm:inline">Startup</span>
                    <span className="sm:hidden">Startup</span>
                  </TabsTrigger>
                  <TabsTrigger value="growth" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="hidden sm:inline">Growth</span>
                    <span className="sm:hidden">Growth</span>
                  </TabsTrigger>
                  <TabsTrigger value="established" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Established</span>
                    <span className="sm:hidden">Estab.</span>
                  </TabsTrigger>
                  <TabsTrigger value="enterprise" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="hidden sm:inline">Enterprise</span>
                    <span className="sm:hidden">Enter.</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="startup" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Identity Formation</h3>
                    <p className="text-muted-foreground font-mono">
                      Develop a compelling brand story that resonates with your target audience
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Market Entry Strategy</h3>
                    <p className="text-muted-foreground font-mono">
                      Craft narratives that help you enter the market with impact
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Founder&apos;s Story</h3>
                    <p className="text-muted-foreground font-mono">
                      Tell your founder&apos;s journey in a way that connects with customers
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Investor Communication</h3>
                    <p className="text-muted-foreground font-mono">
                      Create compelling pitches and presentations for potential investors
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Website Building</h3>
                    <p className="text-muted-foreground font-mono">
                      Develop a website that tells your story effectively
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="growth" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Brand Development</h3>
                    <p className="text-muted-foreground font-mono">Evolve your brand story as you grow and expand</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Content Strategy</h3>
                    <p className="text-muted-foreground font-mono">
                      Develop a content plan that supports your growth objectives
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Customer Testimonials</h3>
                    <p className="text-muted-foreground font-mono">
                      Showcase success stories from your early customers
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Market Expansion</h3>
                    <p className="text-muted-foreground font-mono">
                      Create narratives for entering new markets or segments
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Team Expansion</h3>
                    <p className="text-muted-foreground font-mono">Develop employer branding to attract top talent</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="established" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Legacy Development</h3>
                    <p className="text-muted-foreground font-mono">
                      Craft stories about your company&apos;s impact and heritage
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Industry Leadership</h3>
                    <p className="text-muted-foreground font-mono">
                      Position your brand as a thought leader in your industry
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Brand Refresh</h3>
                    <p className="text-muted-foreground font-mono">
                      Update your brand story to stay relevant in changing markets
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Strategic Merger</h3>
                    <p className="text-muted-foreground font-mono">
                      Create narratives around mergers, acquisitions, or partnerships
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Corporate Communication</h3>
                    <p className="text-muted-foreground font-mono">
                      Develop consistent messaging across all corporate channels
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="enterprise" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Corporate Transformation</h3>
                    <p className="text-muted-foreground font-mono">
                      Create narratives around major organizational changes
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Stakeholder Communication</h3>
                    <p className="text-muted-foreground font-mono">Develop messaging for diverse stakeholder groups</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Global Expansion</h3>
                    <p className="text-muted-foreground font-mono">Adapt your brand story for international markets</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Crisis Management</h3>
                    <p className="text-muted-foreground font-mono">
                      Prepare narrative strategies for potential challenges
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Legacy Planning</h3>
                    <p className="text-muted-foreground font-mono">
                      Develop stories about your long-term impact and vision
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Studio Profile Section */}
        <section id="profile" className="py-16 md:py-24 gradient-background">
          <div className="container">
            <div className="mx-auto max-w-3xl bg-background/90 p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight mb-8 sm:text-4xl font-sans">More than copy. Let's build story.</h2>
              <div className="space-y-6 text-lg font-mono">
                <p>
Your business should have a story worth remembering. But too often these stories get fractured, scattered across disjointed touchpoints, diluted by committee edits, lost in translation between teams. What starts as a compelling narrative becomes a whisper in the marketplace noise. Don't just depend on campaigns, build a brand that lasts.
                </p>
                
                <p>
This is where we come in.</p>
<p>Sintaksis operates as your narrative continuity team, ensuring your story holds its power whether it's:<br/>
· A three-word button in your app<br />
· The manifesto on your homepage<br />
· The press release announcing your Series B<br />
· The email that turns one-time buyers into devotees                </p>
                
                <p>
                  Our work starts with a simple premise: <strong>Your product deserves to be understood, your brand deserves to be remembered, and your customers deserve a story worth buying into.</strong>
</p>
<p>Let's tell it properly.

</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-muted/30 md:py-24">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-3xl text-center font-bold tracking-tight mb-12 sm:text-4xl font-sans">
              Sintaksis Services
            </h2>

            <Tabs defaultValue="productstory" className="w-full">
             

              <TabsContent value="productstory" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Brand Storytelling</h3>
                    <p className="text-muted-foreground font-mono">Develop your core brand narrative and messaging</p>
                    <ul className="mt-4 space-y-2 text-sm font-mono">
                      <li>• Brand narrative development</li>
                      <li>• Core messaging framework</li>
                      <li>• Value proposition refinement</li>
                    </ul>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Product Copywriting</h3>
                    <p className="text-muted-foreground font-mono">Create compelling copy that sells your products</p>
                    <ul className="mt-4 space-y-2 text-sm font-mono">
                      <li>• UX Writing</li>
                      <li>• Product descriptions</li>
                      <li>• Benefit-focused messaging</li>
                    </ul>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Content Strategy</h3>
                    <p className="text-muted-foreground font-mono">
                      Develop a comprehensive content plan for your brand
                    </p>
                    <ul className="mt-4 space-y-2 text-sm font-mono">
                      <li>• Content calendar development</li>
                      <li>• SEO-optimized copywriting</li>
                      <li>• Blog and article writing</li>
                    </ul>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 font-sans">Marketing Copy</h3>
                    <p className="text-muted-foreground font-mono">Craft persuasive copy for marketing campaigns</p>
                    <ul className="mt-4 space-y-2 text-sm font-mono">
                      <li>• Email campaign copywriting</li>
                      <li>• Social media content</li>
                      <li>• Ad copy and landing pages</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

            </Tabs>             
            <div className="flex justify-center mt-8">
              <Button asChild size="lg">
                <Link to="/pricing">View Detailed Pricing</Link>
              </Button>
            </div>

          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight mb-8 sm:text-4xl font-sans">Sintaksis Process</h2>
              <p className="text-lg mb-12 font-mono">
                Our process is designed to be flexible and adaptable to your specific needs, but{" "}
                <u>generally take between 2-4 weeks</u> and follows these key phases:
              </p>

              <div className="space-y-12">
                <div className="relative pl-10 border-l border-muted-foreground/20">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground -translate-x-1/2">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-sans">Discovery & Scoping</h3>
                  <p className="text-muted-foreground font-mono">
                    We&apos;ll start with understanding your business, goals, and challenges. This phase involves
                    in-depth discussions to establish a solid foundation for our work together.
                  </p>
                  
                </div>

                <div className="relative pl-10 border-l border-muted-foreground/20">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground -translate-x-1/2">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-sans">Brief & Development</h3>
                  <p className="text-muted-foreground font-mono">
                    We&apos;ll create a comprehensive brief and begin developing your strategy. You&apos;ll get diverse
                    perspectives and regular syncs that will keep everyone aligned as your story takes shape.
                  </p>
                </div>

                <div className="relative pl-10 border-l border-muted-foreground/20">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground -translate-x-1/2">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-sans">Refinement & QA</h3>
                  <p className="text-muted-foreground font-mono">
                    We&apos;ll refine our work based on your feedback, ensuring that every element aligns with your
                    vision and objectives. The process typically takes within a focused week of back-and-forth.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground -translate-x-1/2">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-sans">Launch & Support</h3>
                  <p className="text-muted-foreground font-mono">
                    Once everything is approved, we&apos;ll help you launch your new narrative or digital presence. Our
                    support doesn&apos;t end at delivery - we&apos;ll be there to help you implement your strategy and
                    make adjustments as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-muted/30 md:py-24">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl text-center font-bold tracking-tight mb-6 sm:text-4xl font-sans">
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-8 font-mono">
              We offer transparent pricing with options to suit businesses at every stage of growth.
            </p>

            <div className="bg-background p-8 rounded-lg shadow-sm mb-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <h3 className="font-medium mb-2 font-sans">Project Based</h3>
                  <p className="text-muted-foreground font-mono">Full-scope brand & product storytelling. Hired for focused, high-impact sprints.</p>
                </div>
                <div className="text-center">
                  <h3 className="font-medium mb-2 font-sans">Fractional Team</h3>
                  <p className="text-muted-foreground font-mono">Dedicated, ongoing storytelling support—3-month minimum retainer partnership.</p>
                </div>
                
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link to="/pricing">View Detailed Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted/30 md:py-24">
          <div className="container">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">
                Schedule a Discovery Call
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-mono">
                Ready to elevate your business with storytelling? Book a free 30-minute discovery call to discuss your
                project needs and how we can help.
              </p>
              <div className="flex justify-center">
                <BookCallButton size="lg" className="mx-auto gradient-background hover:text-black" />
              </div>
            </div>
          </div>
        </section>
      </main>

        <SiteFooter />
      </div>
    </>
  )
}
