import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Search, FileText, Sparkles, Rocket } from "lucide-react"
import { Link } from "react-router-dom"
import { BookCallButton } from "../components/book-call-button"

export default function ProcessPage() {
  // Process schema
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Sintaksis Storytelling Process",
    description: "Our collaborative approach to storytelling that evolves with your business needs",
    step: [
      {
        "@type": "HowToStep",
        name: "Discovery & Scoping",
        text: "We'll start with understanding your business, goals, and challenges. This phase involves in-depth discussions to establish a solid foundation for our work together.",
      },
      {
        "@type": "HowToStep",
        name: "Brief & Development",
        text: "We'll create a comprehensive brief and begin developing your strategy. You'll get diverse perspectives and regular syncs that will keep everyone aligned as your story takes shape.",
      },
      {
        "@type": "HowToStep",
        name: "Refinement & QA",
        text: "We'll refine our work based on your feedback, ensuring that every element aligns with your vision and objectives.",
      },
      {
        "@type": "HowToStep",
        name: "Launch & Support",
        text: "Once everything is approved, we'll help you launch your new narrative or digital presence. Our support doesn't end at delivery.",
      },
    ],
  }

  return (
    <>
      <Helmet>
        <title>Our Process - How We Work</title>
        <meta
          name="description"
          content="Discover our collaborative approach to storytelling that evolves with your business needs, from discovery and scoping to launch and support."
        />
        <meta name="keywords" content="storytelling process, brand development, content strategy, project phases, collaborative approach" />
        <meta property="og:title" content="Our Process - How We Work | Sintaksis" />
        <meta
          property="og:description"
          content="Discover our collaborative approach to storytelling that evolves with your business needs, from discovery and scoping to launch and support."
        />
        <meta property="og:url" content="https://sintaksis.com/process" />
        <meta property="og:image" content="https://sintaksis.com/og-process.jpg" />
        <meta name="twitter:title" content="Our Process - How We Work | Sintaksis" />
        <meta
          name="twitter:description"
          content="Discover our collaborative approach to storytelling that evolves with your business needs, from discovery and scoping to launch and support."
        />
        <meta name="twitter:image" content="https://sintaksis.com/og-process.jpg" />
        <link rel="canonical" href="https://sintaksis.com/process" />
        <script type="application/ld+json">{JSON.stringify(processSchema)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-muted/50 to-background py-24 md:py-32">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-sans mb-6">
                  Our Process
                </h1>
                <p className="text-xl text-muted-foreground font-mono">
                  A collaborative approach that evolves with your business needs.
                </p>
              </div>
            </div>
          </section>

          {/* Process Overview */}
          <section className="py-16 md:py-24">
            <div className="container px-4">
              <div className="mx-auto max-w-3xl text-left mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans mb-6">How We Work</h2>
                <p className="text-lg text-muted-foreground font-mono">
                  Our process is designed to be flexible and adaptable for specific needs, but generally takes
                  between 2 - 4 weeks and follows key phases. Our collaborative approach ensures
                  your business have authentic and compelling story that aligned with your goals.
                </p>
              </div>

              <div className="mx-auto max-w-4xl">
                <div className="space-y-20">
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-8 gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground sm:mr-6">
                        <Search className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-semibold font-sans">Phase 1: Discovery & Scoping</h3>
                    </div>
                    <div className="ml-0 sm:ml-24 space-y-6 text-lg font-mono">
                      <p>
                        Let's chat! We'll hop on a quick call to explore your business
                        needs.
                      </p>
                      <p>
                        We'll start with understanding your business, goals, and challenges. This phase involves
                        in-depth discussions, research, and analysis to establish a solid foundation for our work
                        together.
                      </p>
                      <p>
                        If we click, Sintaksis will craft a tailored proposal. Many partners join us without undertanding their needs — it's okay! We've got a vibrant network of storytellers we
                        love introducing to projects when the story calls for it.
                      </p>
                      <div className="bg-muted/30 p-6 rounded-lg mt-8">
                        <h4 className="font-sans font-medium mb-3">What to expect:</h4>
                        <ul className="space-y-2">
                          <li>• Initial consultation call (30-60 minutes)</li>
                          <li>• Business and brand questionnaire</li>
                          <li>• Competitive landscape analysis</li>
                          <li>• Audience research and insights</li>
                          <li>• Detailed project proposal and timeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Repeat the same pattern for the other phases */}
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-8 gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground sm:mr-6">
                        <FileText className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-semibold font-sans">Phase 2: Brief & Development</h3>
                    </div>
                    <div className="ml-0 sm:ml-24 space-y-6 text-lg font-mono">
                      <p>
                        After gathering data from discovery phase, we'll create a comprehensive brief and
                        begin developing your strategy. This includes outlining key narratives, messaging frameworks,
                        and content plans.
                      </p>
                      <p>
                        Our cooperative structure means you're getting diverse perspectives woven into a coherent
                        narrative. Brief weekly syncs keep everyone aligned as your product story takes shape.
                      </p>
                      <div className="bg-muted/30 p-6 rounded-lg mt-8">
                        <h4 className="font-sans font-medium mb-3">What to expect:</h4>
                        <ul className="space-y-2">
                          <li>• Comprehensive creative brief</li>
                          <li>• Brand narrative framework</li>
                          <li>• Messaging hierarchy development</li>
                          <li>• Content strategy planning</li>
                          <li>• Weekly progress updates</li>
                          <li>• Wireframe for websites if you need web development</li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-8 gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground sm:mr-6">
                        <Sparkles className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-semibold font-sans">Phase 3: Refinement & QA</h3>
                    </div>
                    <div className="ml-0 sm:ml-24 space-y-6 text-lg font-mono">
                      <p>
                        We'll refine our work based on your feedback, ensuring that every element aligns with your
                        vision and objectives. Our review process catches everything from minor
                        inconsistencies to missed opportunities for narrative impact, typically within a focused week of
                        back-and-forth.
                      </p>
                      <div className="bg-muted/30 p-6 rounded-lg mt-8">
                        <h4 className="font-sans font-medium mb-3">What to expect:</h4>
                        <ul className="space-y-2">
                          <li>• Structured feedback sessions</li>
                          <li>• Iterative refinement process</li>
                          <li>• Quality assurance review</li>
                          <li>• Final approval workflow</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-8 gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground sm:mr-6">
                        <Rocket className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-semibold font-sans">Phase 4: Launch & Support</h3>
                    </div>
                    <div className="ml-0 sm:ml-24 space-y-6 text-lg font-mono">
                      <p>
                        Once everything is approved, we'll help you launch!<br /> Our
                        support doesn't end at delivery - we'll be there to help you implement your storytelling
                        strategy and make adjustments as needed.
                      </p>
                      <p>
                        Beyond that, you can choose how we continue together: collaborative story refreshes, monthly narrative
                        partnerships, or we'll help you build storytelling capacity within your
                        own team, with our studio providing guidance until you're ready to fly solo.
                      </p>
                      <div className="bg-muted/30 p-6 rounded-lg mt-8">
                        <h4 className="font-sans font-medium mb-3">What to expect:</h4>
                        <ul className="space-y-2">
                          <li>• Launch strategy and support</li>
                          <li>• Implementation guidance</li>
                          <li>• 30-day post-launch support</li>
                          <li>• Performance monitoring</li>
                          <li>• Ongoing partnership options</li>
                        </ul>
                          
                      </div>
                      <p>
                        This system is what differentiates us from other services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">Ready to Hire Us?</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Don't worry about the process, we'll assist you to explore how we can help
                  you connect with your audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/pricing">
                    <Button variant="outline" size="lg">
                      View Pricing Options
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
