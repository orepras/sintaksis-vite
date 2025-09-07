import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { BookCallButton } from "../components/book-call-button"
import { generateFAQSchema } from "../lib/structured-data"

export default function PricingPage() {
  const faqSchema = generateFAQSchema([
    {
      question: "How do you determine pricing for projects?",
      answer:
        "Our pricing is based on project scope, complexity, timeline, and the specific deliverables required. We provide transparent quotes after our initial consultation and discovery process.",
    },
    {
      question: "Do you offer discounts for startups or non-profits?",
      answer:
        "Yes, we offer special pricing considerations for early-stage startups and non-profit organizations. Please mention your status during our initial consultation.",
    },
    {
      question: "What's included in the post-launch support?",
      answer:
        "Our 30-day post-launch support includes minor content updates, performance monitoring, and consultation on implementation. Additional support can be arranged through our fractional team options.",
    },
    {
      question: "Can I upgrade or change my plan later?",
      answer:
        "Absolutely. Our services are designed to evolve with your business needs. You can upgrade, downgrade, or adjust your plan as your requirements change.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, for larger projects we typically structure payments in milestones: 40% upon project initiation, 30% at the midpoint, and 30% upon completion. Custom payment schedules can be arranged for specific situations.",
    },
  ])

  return (
    <>
      <Helmet>
        <title>Pricing - Flexible Options for Your Storytelling Needs</title>
        <meta
          name="description"
          content="Transparent pricing options designed to fit your storytelling needs at every stage of growth, from project-based to fractional team arrangements."
        />
        <meta name="keywords" content="pricing, storytelling services, copywriting pricing, web development cost, fractional team" />
        <meta property="og:title" content="Pricing - Flexible Options for Your Storytelling Needs | Sintaksis" />
        <meta
          property="og:description"
          content="Transparent pricing options designed to fit your storytelling needs at every stage of growth, from project-based to fractional team arrangements."
        />
        <meta property="og:url" content="https://sintaksis.com/pricing" />
        <meta property="og:image" content="https://sintaksis.com/og-pricing.jpg" />
        <meta name="twitter:title" content="Pricing - Flexible Options for Your Storytelling Needs | Sintaksis" />
        <meta
          name="twitter:description"
          content="Transparent pricing options designed to fit your storytelling needs at every stage of growth, from project-based to fractional team arrangements."
        />
        <meta name="twitter:image" content="https://sintaksis.com/og-pricing.jpg" />
        <link rel="canonical" href="https://sintaksis.com/pricing" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-muted/50 to-background py-24 md:py-32">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-sans mb-6">Pricing</h1>
                <p className="text-xl text-muted-foreground font-mono">
                  Transparent pricing options designed to fit your storytelling needs at every stage of growth.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Options */}
          <section className="py-16 md:py-24">
            <div className="container px-4">
              <div className="mx-auto max-w-3xl text-left mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans mb-6">Pricing Options</h2>
                <p className="text-lg text-muted-foreground font-mono">
                  We offer flexible pricing models to accommodate different business needs and project scopes, whether
                  you need a comprehensive project, ongoing support, or specialized expertise.
                </p>
              </div>

              <Tabs defaultValue="fractional-writing" className="w-full">
                <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2 gap-2 mb-12">
                  <TabsTrigger value="fractional-writing">🤝🏻 Fractional Team</TabsTrigger>
                  <TabsTrigger value="project">👷🏼‍♂️ Project Based</TabsTrigger>
                </TabsList>

                <TabsContent value="project" className="space-y-4">
                  <div className="max-w-md mx-auto">
                    <div className="bg-background p-8 rounded-lg shadow-sm">
                      <h3 className="font-medium text-xl mb-3 font-sans">Copywriting + Web Dev</h3>
                      <div className="text-3xl font-bold mb-6 font-sans">Start From
                        <br />$2,000 / Rp25 Juta</div>
                      <p className="text-muted-foreground mb-6 font-mono">
                        Custom pricing based on project scope for copywriting and web development
                      </p>
                      <ul className="space-y-3 font-mono">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>~4-8 weeks to launch</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Comprehensive support</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Custom website development</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>SEO + Content strategy</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Consultation in each stage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>30 days of post-launch support</span>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Link to="/contact">
                          <Button className="w-full">Hire Sintaksis for a Project</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="fractional-writing" className="space-y-4">
                  <div className="max-w-md mx-auto">
                    <div className="bg-background p-8 rounded-lg shadow-sm">
                      <h3 className="font-medium text-xl mb-3 font-sans">Storytelling Partner</h3>
                      <div className="text-3xl font-bold mb-6 font-sans">Monthly Retainer <br />$1,000 / Rp16 Juta</div>
                      <p className="text-muted-foreground mb-6 font-mono">EVERYTHING your brand needs to communicate. 3-month minimum retainer partnership</p>
                      <ul className="space-y-3 font-mono">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>DEDICATED WRITING DEPARTMENT</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>UX & Technical Writing, Marketing, PR</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Senior to Lead level writer</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Unlimited revisions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Monthly strategy sessions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>3-month minimum commitment</span>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Link to="/contact">
                          <Button className="w-full">Hire Fractional Team</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>

              </Tabs>
            </div>
          </section>

          {/* Custom Solutions */}
          <section className="py-16 bg-muted/30 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl font-sans">Custom Solutions</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Need something more tailored to your specific requirements? We offer custom packages designed to
                  address your unique storytelling challenges.
                </p>

                <div className="bg-background p-8 rounded-lg shadow-sm">
                  <h3 className="font-medium text-xl mb-4 font-sans">Tailored Storytelling Solutions</h3>
                  <p className="text-muted-foreground mb-6 font-mono">
                    Our custom solutions are designed after a thorough consultation to understand your specific needs,
                    challenges, and goals. We'll create a proposal that addresses your unique situation with transparent
                    pricing.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium font-sans">Specialized Industry Expertise</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          For businesses in complex or regulated industries
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium font-sans">Multi-Brand Storytelling</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          For companies managing multiple brands or product lines
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium font-sans">International Narrative Development</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          For brands expanding into global markets
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium font-sans">Rebranding & Repositioning</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          For established companies undergoing significant change
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button size="lg" className="gap-2">
                      Request a Custom Quote <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-12 sm:text-4xl font-sans">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">What are your fixed pricing options?</h3>
                    <p className="text-muted-foreground font-mono">
                      We offer:<br />

                      · Fractional Team: IDR 16 Mil/1.000 USD monthly, with 3-month minimum for ongoing storytelling support<br />

                      · Project-Based: Starting at IDR 25 Mil/2.000 USD for comprehensive product storytelling with web development support
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Why the 3-month minimum for fractional teams?</h3>
                    <p className="text-muted-foreground font-mono">
                      Storytelling that drives results requires consistency. This timeframe lets us deeply understand your brand and execute strategically.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">What determines project-based pricing?
                    </h3>
                    <p className="text-muted-foreground font-mono">
                      Costs vary based on:<br />
                      · Deliverables (e.g., full rebrand vs. website copy)<br />
                      · Research depth (market/audience analysis needs)<br />
                      · Revision rounds included
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">
                      Do you work with early-stage startups?
                    </h3>
                    <p className="text-muted-foreground font-mono">
                      Yes! We reserve 2 slots/month for startups at with more flexible rates. Ask about our <strong>Startup Story Sprint</strong> package.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">
                      What's included in the post-launch support?
                    </h3>
                    <p className="text-muted-foreground font-mono">
                      Our 30-day post-launch support includes minor content updates, performance monitoring, and
                      consultation on implementation. <br />Additional support can be arranged through our fractional team
                      options.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Can I upgrade or change my plan later?</h3>
                    <p className="text-muted-foreground font-mono">
                      Absolutely. Our services are designed to evolve with your business needs. You can upgrade,
                      downgrade, or adjust your plan as your requirements change.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Do you offer payment plans?</h3>
                    <p className="text-muted-foreground font-mono">
                      Yes, for larger projects we typically structure payments in milestones: 40% upon project
                      initiation, 30% at the midpoint, and 30% upon completion. Custom payment schedules can be arranged
                      for specific situations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/30 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">Ready to Hire Us?</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Let's discuss your needs over a call and how we can help your brand connect with your
                  audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="gap-2">
                      Schedule a Consultation <ArrowRight className="h-4 w-4" />
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
