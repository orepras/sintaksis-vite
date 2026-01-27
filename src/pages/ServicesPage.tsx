import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { Pen, Globe, Lightbulb } from "lucide-react"
import { Link } from "react-router-dom"
import { BookCallButton } from "../components/book-call-button"
import { generateServiceSchema } from "../lib/structured-data"

export default function ServicesPage() {
  const serviceSchema = generateServiceSchema()

  return (
    <>
      <Helmet>
        <title>Our Services - Copywriting and Web Development</title>
        <meta
          name="description"
          content="Explore our comprehensive storytelling services including brand narrative development, copywriting, web development, and specialized solutions for businesses at every stage."
        />
        <meta name="keywords" content="copywriting services, web development, brand storytelling, content strategy, UX/UI design" />
        <meta property="og:title" content="Our Services - Copywriting and Web Development | Sintaksis" />
        <meta
          property="og:description"
          content="Explore our comprehensive storytelling services including brand narrative development, copywriting, web development, and specialized solutions for businesses at every stage."
        />
        <meta property="og:url" content="https://sintaksis.com/services" />
        <meta property="og:image" content="https://sintaksis.com/og-services.jpg" />
        <meta name="twitter:title" content="Our Services - Copywriting and Web Development | Sintaksis" />
        <meta
          name="twitter:description"
          content="Explore our comprehensive storytelling services including brand narrative development, copywriting, web development, and specialized solutions for businesses at every stage."
        />
        <meta name="twitter:image" content="https://sintaksis.com/og-services.jpg" />
        <link rel="canonical" href="https://sintaksis.com/services" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-muted/50 to-background py-24 md:py-32">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-sans mb-6">
                  Our Services
                </h1>
                <p className="text-xl text-muted-foreground font-mono">
                  We offer a storytelling services to help your brand connect with your audience
                  and achieve your business goals.
                </p>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 md:py-24">
            <div className="container px-4">
              <div className="mx-auto max-w-3xl text-left mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans mb-6">
                  Comprehensive Storytelling Solutions
                </h2>
                <p className="text-lg text-muted-foreground font-mono">
                  We provide end-to-end storytelling services that help brands articulate their unique
                  value proposition and connect with their audience. Our services are designed to evolve with your
                  business, from startup through maturity.
                </p>
              </div>

              <Tabs defaultValue="brand" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mb-8">
                  <TabsTrigger value="brand" className="flex items-center gap-2">
                    <Pen className="h-4 w-4" />
                    <span>Brand Foundation</span>
                  </TabsTrigger>
                  <TabsTrigger value="digital" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Digital Presence</span>
                  </TabsTrigger>
                  <TabsTrigger value="specialized" className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    <span>Specialized</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="brand" className="space-y-4">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Brand Storytelling</h3>
                      <p className="text-muted-foreground font-mono">Develop your core brand narrative and messaging</p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Brand narrative development</li>
                        <li>• Core messaging framework</li>
                        <li>• Value proposition refinement</li>
                        <li>• Brand story documentation</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Brand Voice & Tone</h3>
                      <p className="text-muted-foreground font-mono">
                        Create a distinctive communication style for your brand
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Voice & tone guidelines</li>
                        <li>• Communication principles</li>
                        <li>• Writing style development</li>
                        <li>• Brand language documentation</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Naming Services</h3>
                      <p className="text-muted-foreground font-mono">
                        Develop memorable and strategic names for your business or products
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Company naming</li>
                        <li>• Product naming</li>
                        <li>• Tagline development</li>
                        <li>• Naming architecture</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Visual Storytelling</h3>
                      <p className="text-muted-foreground font-mono">
                        Create visual elements that enhance your brand narrative
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Visual identity guidance</li>
                        <li>• Brand imagery strategy</li>
                        <li>• Visual storytelling principles</li>
                        <li>• Brand presentation templates</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="digital" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Website</h3>
                      <p className="text-muted-foreground font-mono">
                        Design and develop websites that tell your story effectively
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Website strategy & planning</li>
                        <li>• Content architecture</li>
                        <li>• UX/UI design</li>
                        <li>• Development & implementation</li>
                        <li>• Content creation</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">SEO Content Strategy</h3>
                      <p className="text-muted-foreground font-mono">
                        Develop a comprehensive plan for your digital content
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Keyword research & analysis</li>
                        <li>• Content calendar development</li>
                        <li>• SEO-optimized copywriting</li>
                        <li>• Content performance tracking</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">UX/UI Storytelling</h3>
                      <p className="text-muted-foreground font-mono">
                        Create user experiences that communicate your brand story
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• User journey mapping</li>
                        <li>• Narrative-driven UX design</li>
                        <li>• Microcopy development</li>
                        <li>• Interactive storytelling elements</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Localization & Internationalization</h3>
                      <p className="text-muted-foreground font-mono">
                        Adapt your digital presence for new markets with a structured GILT approach
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Localization of content and UX for target market</li>
                        <li>• GILT-based strategy for market expansion</li>
                        <li>• Guidelines for ongoing globalization and localization</li>
                        <li>• Translation workflows and quality standards</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Email Marketing</h3>
                      <p className="text-muted-foreground font-mono">
                        Craft compelling email campaigns that engage your audience
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Email strategy development</li>
                        <li>• Campaign copywriting</li>
                        <li>• Sequence development</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Social Storytelling</h3>
                      <p className="text-muted-foreground font-mono">Develop narratives for social media platforms</p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Platform-specific strategies</li>
                        <li>• Content calendar creation</li>
                        <li>• Copywriting for social posts</li>
                        <li>• Community engagement planning</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specialized" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Investor Communication</h3>
                      <p className="text-muted-foreground font-mono">
                        Create compelling pitches and presentations for investors
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Pitch deck development</li>
                        <li>• Investor narrative creation</li>
                        <li>• Presentation coaching</li>
                        <li>• Financial storytelling</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Storytelling Workshops</h3>
                      <p className="text-muted-foreground font-mono">
                        Train your team in effective storytelling techniques
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Customized workshop development</li>
                        <li>• Hands-on storytelling exercises</li>
                        <li>• Brand storytelling training</li>
                        <li>• Ongoing coaching</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Crisis Narratives</h3>
                      <p className="text-muted-foreground font-mono">
                        Develop communication strategies for challenging situations
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• Crisis communication planning</li>
                        <li>• Narrative response frameworks</li>
                        <li>• Spokesperson preparation</li>
                        <li>• Post-crisis storytelling</li>
                      </ul>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 font-sans">Technical Documentation</h3>
                      <p className="text-muted-foreground font-mono">
                        Create comprehensive documentation for your product or brands
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-mono">
                        <li>• User guides & manuals</li>
                        <li>• API documentation</li>
                        <li>• Technical content strategy</li>
                        <li>• Knowledge base development</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/30 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Let's discuss how our services can help your brand tell a more compelling story and achieve your
                  business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/process">
                    <Button variant="outline" size="lg">
                      Learn About Our Process
                    </Button>
                  </Link>
                  <BookCallButton variant="secondary" size="lg" />
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
