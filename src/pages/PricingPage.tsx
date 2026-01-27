import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
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
                  you need ongoing support, a comprehensive project, or bespoke boutique solutions.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {/* Fractional Team */}
                <div className="bg-background p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer">
                  <div className="mb-4">
                    <span className="text-2xl mr-2">🤝🏻</span>
                    <span className="text-sm font-mono text-muted-foreground">FRACTIONAL TEAM</span>
                  </div>
                  <h3 className="font-medium text-xl mb-3 font-sans">Storytelling Partner</h3>
                  <div className="text-3xl font-bold mb-6 font-sans">Monthly Retainer <br />$1,200 / Rp20 Juta</div>
                  <p className="text-muted-foreground mb-6 font-mono">EVERYTHING your brand needs to communicate. 3-month minimum retainer partnership.</p>
                  <ul className="space-y-3 font-mono mb-8">
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
                      <span>Fully remote collaboration, unlimited revisions</span>
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
                  <Link to="/contact">
                    <Button className="w-full">Ask for Fractional Team</Button>
                  </Link>
                </div>

                {/* Project Based */}
                <div className="bg-background p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer">
                  <div className="mb-4">
                    <span className="text-2xl mr-2">👷🏼‍♂️</span>
                    <span className="text-sm font-mono text-muted-foreground">PROJECT BASED</span>
                  </div>
                  <h3 className="font-medium text-xl mb-3 font-sans">Copywriting + Web Dev</h3>
                  <div className="text-3xl font-bold mb-6 font-sans">Start From
                    <br />$3,000 / Rp50 Juta</div>
                  <p className="text-muted-foreground mb-6 font-mono">
                    Custom pricing based on project scope for copywriting and web development.
                  </p>
                  <ul className="space-y-3 font-mono mb-8">
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
                  <Link to="/contact">
                    <Button className="w-full">Ask for Project Based</Button>
                  </Link>
                </div>

                {/* Custom/Boutique Solutions */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-lg shadow-lg border-2 border-emerald-200 transition-all duration-900 hover:shadow-xl hover:scale-105 hover:-translate-y-1 hover:border-emerald-300 cursor-pointer group animate-pulse">
                  <div className="mb-4">
                    <span className="text-2xl mr-2">✨</span>
                    <span className="text-sm font-mono text-emerald-700">BOUTIQUE SOLUTIONS</span>
                  </div>
                  <h3 className="font-medium text-xl mb-3 font-sans text-gray-900">Custom Storytelling</h3>
                  <div className="text-3xl font-bold mb-6 font-sans text-gray-900">Custom Quote,
                    <br />Contact for Pricing</div>
                  <p className="text-emerald-800 mb-6 font-mono">
                    Bespoke copywriting and storytelling solutions tailored to your unique brand challenges and goals.
                  </p>
                  <ul className="space-y-3 font-mono mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800">Comprehensive brand strategy & positioning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800">Multi-channel content ecosystem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800">Executive & thought leadership content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800">Industry-specific expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800">Dedicated project management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800">Extended post-launch support</span>
                    </li>
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Get Custom Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Startup Solutions */}
          <section className="py-16 bg-muted/30 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl font-sans">Building a Startup?</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Don't worry, we've got you covered. We also have this pricing plan for startups who need clear, comprehensive storytelling that adapts as you grow. We provide 
                  end-to-end support with flexible payment options, including equity partnerships for the right fit.
                </p>

                <div className="bg-background p-8 rounded-lg shadow-sm">
                  <h3 className="font-medium text-xl mb-4 font-sans">End-to-End Startup Support</h3>
                  <p className="text-muted-foreground mb-6 font-mono">
                    We understand that startup storytelling isn't just about one product or service—it's about building 
                    a narrative that evolves with your company. Our approach combines strategic thinking with experimental 
                    storytelling to discover what resonates with your audience.
                    <br/>
                    <br/>
                    We might also assign writers who have deep expertise in your industry.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium font-sans">Comprehensive Brand Foundation</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          From mission statements to investor decks—we cover all your communication needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium font-sans">Flexible Payment Options</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          Cash, equity, or hybrid arrangements—we work with your startup's financial reality
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium font-sans">Experimental Storytelling</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          We test different narrative approaches to find what connects with your specific audience
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium font-sans">Growth-Ready Content Strategy</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          Content that scales from MVP to market leader, adapting to your evolving product portfolio
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="mailto:lets.talk@sintaksis.com?subject=Partnership Inquiry with [Startup Name]">
                    <Button size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px]">
                      Send Partnership Inquiry <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
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

                      · Fractional Team: IDR 20 Mil/1.200 USD monthly, with 3-month minimum for ongoing storytelling support<br />

                      · Project-Based: Starting at IDR 50 Mil/3.000 USD for comprehensive product storytelling with web development support
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
                  <Link to="/contact" className="flex-1 sm:flex-none">
                    <Button size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px]">
                      Schedule a Consultation <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="flex-1 sm:flex-none">
                    <BookCallButton variant="secondary" size="lg" className="w-full sm:w-auto sm:min-w-[200px]" />
                  </div>
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
