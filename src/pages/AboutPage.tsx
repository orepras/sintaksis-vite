import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { ArrowRight, Users, Lightbulb, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import { generateOrganizationSchema } from "../lib/structured-data"

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Helmet>
        <title>About Sintaksis - Our Story and Approach</title>
        <meta
          name="description"
          content="Learn about Sintaksis, a storytelling studio founded by Prasaja Mukti that helps brands shape their stories through collaborative and strategic approaches."
        />
        <meta name="keywords" content="about sintaksis, storytelling studio, prasaja mukti, brand storytelling, company values" />
        <meta property="og:title" content="About Sintaksis - Our Story and Approach" />
        <meta
          property="og:description"
          content="Learn about Sintaksis, a storytelling studio founded by Prasaja Mukti that helps brands shape their stories through collaborative and strategic approaches."
        />
        <meta property="og:url" content="https://sintaksis.com/about" />
        <meta property="og:image" content="https://sintaksis.com/og-about.jpg" />
        <meta name="twitter:title" content="About Sintaksis - Our Story and Approach" />
        <meta
          name="twitter:description"
          content="Learn about Sintaksis, a storytelling studio founded by Prasaja Mukti that helps brands shape their stories through collaborative and strategic approaches."
        />
        <meta name="twitter:image" content="https://sintaksis.com/og-about.jpg" />
        <link rel="canonical" href="https://sintaksis.com/about" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-muted/50 to-background py-24 md:py-32">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-sans mb-6">
                  About Sintaksis
                </h1>
                <p className="text-xl text-muted-foreground font-mono">
                  A product storytelling studio that grows with clients.
                </p>
              </div>
            </div>
          </section>

          {/* Studio Introduction */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-sans">
                  We build narrative systems that help businesses scale.
                </h2>
                <p className="mt-6 text-xl text-muted-foreground font-mono">
                  We're a collective of writers, designers, and developers who function as your extended storytelling team. Founded by Prasaja Mukti in South Tangerang, we specialize in strategic narrative architecture, crafting stories that evolve with your business from launch to maturity.
                </p>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="py-16 bg-muted/30 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-12 sm:text-4xl font-sans">Our Approach</h2>

                <div className="grid gap-10 md:grid-cols-3">
                  <div className="flex flex-col items-start">
                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Collaborative</h3>
                    <p className="text-muted-foreground font-mono">
                      We assemble specialist teams tailored to each project's needs, no generic agency approaches.
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Strategic</h3>
                    <p className="text-muted-foreground font-mono">
                      We help scaling brands solidify their market position through story-driven differentiation.
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <div className="rounded-full bg-primary/10 p-4 mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Passionate</h3>
                    <p className="text-muted-foreground font-mono">
                      Beyond client work, we experiment with storytelling methodologies and openly share our findings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* founder's note */}
          <section className="py-16 md:py-24 gradient-background">
            <div className="container">
              <div className="mx-auto max-w-3xl bg-background/90 p-8 rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold tracking-tight mb-8 sm:text-4xl font-sans">Founder's Note</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-64 h-64 md:w-1/3 md:h-auto aspect-square bg-muted rounded-full overflow-hidden">
                    <img
                      src="https://prasaja.com/images/prasaja-pic.jpg"
                      alt="Prasaja Mukti"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6 text-lg font-mono">
                    <p>
                      "After seeing how disconnected most brand storytelling is from business reality, we created Sintaksis as a hybrid: part strategic partner, part creative laboratory to drive growth."
                    </p>
                    <p>
                      - Prasaja Mukti
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Values */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-8 sm:text-4xl font-sans">Our Values</h2>

                <div className="space-y-8">
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="text-xl font-semibold mb-2 font-sans">Narrative Integrity</h3>
                    <p className="text-muted-foreground font-mono">
                      We believe in creating authentic stories that resonate with audiences while staying true to a
                      brand's core identity.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="text-xl font-semibold mb-2 font-sans">Collaborative Growth</h3>
                    <p className="text-muted-foreground font-mono">
                      We grow alongside our clients, adapting our approach to meet their evolving needs at each stage of
                      development.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="text-xl font-semibold mb-2 font-sans">Transparent Process</h3>
                    <p className="text-muted-foreground font-mono">
                      We document and share our methodologies, successes, and failures to contribute to a more
                      transparent creative industry.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="text-xl font-semibold mb-2 font-sans">Strategic Storytelling</h3>
                    <p className="text-muted-foreground font-mono">
                      We craft narratives with purpose, ensuring every story element supports concrete business
                      objectives.
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
                <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">Work With Us</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Ready to elevate your brand's story? Let's collaborate on crafting narratives that resonate
                  with your audience and drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="gap-2">
                      Contact Us <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg">
                      Explore Our Services
                    </Button>
                  </Link>
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
