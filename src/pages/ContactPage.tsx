import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Mail, MapPin } from "lucide-react"
import { BookCallButton } from "../components/book-call-button"
import { generateFAQSchema } from "../lib/structured-data"

export default function ContactPage() {
  const faqSchema = generateFAQSchema([
    {
      question: "How quickly can you start on a new project?",
      answer:
        "We typically begin new projects within 1-2 weeks of finalizing the agreement, depending on our current workload and the scope of your project.",
    },
    {
      question: "Where are Sintaksis clients based?",
      answer:
        "We're based in Indonesia and started by serving local companies, but we've since partnered with businesses running in Europe. Our goal is to keep expanding and support clients worldwide with their copywriting and storytelling needs.",
    },
    {
      question: "What information do you need to provide a quote for a project?",
      answer:
        "To provide an accurate quote, we typically need to understand your business goals, project scope, timeline, and any specific requirements or constraints. Our initial consultation is designed to gather this information.",
    },
    {
      question: "How do you handle revisions to the work?",
      answer:
        "Our process includes dedicated revision phases. For most projects, we include two rounds of revisions in our standard pricing. Additional revisions can be accommodated at an hourly rate.",
    },
  ])

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch</title>
        <meta
          name="description"
          content="Ready to elevate your brand's story? Book a discovery call or get in touch with our team to discuss your storytelling needs."
        />
        <meta name="keywords" content="contact, discovery call, storytelling consultation, book a call, get in touch" />
        <meta property="og:title" content="Contact Us - Get in Touch | Sintaksis" />
        <meta
          property="og:description"
          content="Ready to elevate your brand's story? Book a discovery call or get in touch with our team to discuss your storytelling needs."
        />
        <meta property="og:url" content="https://sintaksis.com/contact" />
        <meta property="og:image" content="https://sintaksis.com/og-contact.jpg" />
        <meta name="twitter:title" content="Contact Us - Get in Touch | Sintaksis" />
        <meta
          name="twitter:description"
          content="Ready to elevate your brand's story? Book a discovery call or get in touch with our team to discuss your storytelling needs."
        />
        <meta name="twitter:image" content="https://sintaksis.com/og-contact.jpg" />
        <link rel="canonical" href="https://sintaksis.com/contact" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-muted/50 to-background py-24 md:py-32">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-sans mb-6">Contact Us</h1>
                <p className="text-xl text-muted-foreground font-mono">
                  Ready to elevate your business? Get in touch with us today.
                </p>
              </div>
            </div>
          </section>

          {/* Discovery Call Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4">
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl font-sans">Book a Discovery Call</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Schedule a free 30-minute discovery call. We'll discuss your project
                  needs, answer any questions, and explore how we can help your business through product storytelling.
                </p>
                <div className="flex justify-center mb-12">
                  <BookCallButton size="lg" className="mx-auto" />
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <Mail className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-medium font-sans mb-2">Email</h3>
                  <p className="text-muted-foreground font-mono">
                    <a href="mailto:lets.talk@sintaksis.com" className="hover:underline">
                      lets.talk@sintaksis.com
                    </a>
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-medium font-sans mb-2">Location</h3>
                  <p className="text-muted-foreground font-mono">Bintaro, South Tangerang, Indonesia</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/30 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-12 sm:text-4xl font-sans">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">
                      How quickly can you start on a new project?
                    </h3>
                    <p className="text-muted-foreground font-mono">
                      We typically begin new projects within 1-2 weeks of finalizing the agreement, depending on our
                      current workload and the scope of your project.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">
                      Where are Sintaksis clients based?
                    </h3>
                    <p className="text-muted-foreground font-mono">
                      We're based in Indonesia and started by serving local companies, but we've since partnered with businesses running in Europe. Our goal is to keep expanding and support clients worldwide with their copywriting and storytelling needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">
                      What information do you need to provide a quote for a project?
                    </h3>
                    <p className="text-muted-foreground font-mono">
                      To provide an accurate quote, we typically need to understand your business goals, project scope,
                      timeline, and any specific requirements or constraints. Our initial consultation is designed to
                      gather this information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">How do you handle revisions to the work?</h3>
                    <p className="text-muted-foreground font-mono">
                      Our process includes dedicated revision phases. For most projects, we include two rounds of
                      revisions in our standard pricing. Additional revisions can be accommodated at an hourly rate.
                    </p>
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
