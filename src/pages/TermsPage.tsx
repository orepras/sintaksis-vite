import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service</title>
        <meta name="description" content="Read the terms and conditions that govern the use of Sintaksis's website and services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal agreement, intellectual property, payment terms" />
        <meta property="og:title" content="Terms of Service | Sintaksis" />
        <meta property="og:description" content="Read the terms and conditions that govern the use of Sintaksis's website and services." />
        <meta property="og:url" content="https://sintaksis.com/terms" />
        <meta property="og:image" content="https://sintaksis.com/og-terms.jpg" />
        <meta name="twitter:title" content="Terms of Service | Sintaksis" />
        <meta name="twitter:description" content="Read the terms and conditions that govern the use of Sintaksis's website and services." />
        <meta name="twitter:image" content="https://sintaksis.com/og-terms.jpg" />
        <link rel="canonical" href="https://sintaksis.com/terms" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans mb-6">Terms of Service</h1>
                <p className="text-lg text-muted-foreground font-mono">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-12 md:py-16">
            <div className="container px-4">
              <div className="mx-auto max-w-3xl space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Introduction</h2>
                  <p className="text-muted-foreground font-mono">
                    These terms and conditions outline the rules and regulations for the use of Sintaksis's website and
                    services. By accessing this website and using our services, we assume you accept these terms and
                    conditions in full. Do not continue to use Sintaksis's website or services if you do not accept all of
                    the terms and conditions stated on this page.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Services</h2>
                  <p className="text-muted-foreground font-mono mb-4">
                    Sintaksis provides copywriting and web development services as described on our website. The specific
                    details, deliverables, timelines, and payment terms for each project will be outlined in a separate
                    agreement or statement of work.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Intellectual Property</h2>
                  <p className="text-muted-foreground font-mono mb-4">
                    Unless otherwise stated, Sintaksis and/or its licensors own the intellectual property rights for all
                    material on this website. All intellectual property rights are reserved.
                  </p>
                  <p className="text-muted-foreground font-mono mb-4">
                    For client projects, the ownership of intellectual property rights will be specified in the project
                    agreement. Typically:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-mono">
                    <li>
                      Upon full payment, clients receive ownership rights to the final deliverables created specifically
                      for their project.
                    </li>
                    <li>
                      Sintaksis retains ownership of any pre-existing materials, tools, systems, and processes used in
                      creating the deliverables.
                    </li>
                    <li>
                      Sintaksis reserves the right to display and link to completed client projects as part of our
                      portfolio unless otherwise agreed upon.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Payment Terms</h2>
                  <p className="text-muted-foreground font-mono mb-4">Our standard payment terms are as follows:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-mono">
                    <li>40% deposit upon project initiation</li>
                    <li>30% at project midpoint</li>
                    <li>30% upon project completion</li>
                    <li>For ongoing services, monthly payments are typically required in advance</li>
                    <li>All invoices are due within 14 days of issuance</li>
                  </ul>
                  <p className="text-muted-foreground font-mono mt-4">
                    Specific payment terms for your project will be outlined in your project agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Revisions and Approval Process</h2>
                  <p className="text-muted-foreground font-mono mb-4">Our standard process includes:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-mono">
                    <li>Two rounds of revisions included in the project fee</li>
                    <li>Additional revisions charged at an hourly rate</li>
                    <li>Client approval required at key project milestones</li>
                    <li>Final approval required before project completion</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Limitation of Liability</h2>
                  <p className="text-muted-foreground font-mono">
                    In no event shall Sintaksis, nor any of its officers, directors, and employees, be liable for anything
                    arising out of or in any way connected with your use of this website or our services, whether such
                    liability is under contract, tort or otherwise. Sintaksis, including its officers, directors, and
                    employees shall not be liable for any indirect, consequential, or special liability arising out of or
                    in any way related to your use of this website or our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Termination</h2>
                  <p className="text-muted-foreground font-mono">
                    Either party may terminate a project with written notice if the other party breaches any material term
                    of the project agreement and fails to remedy the breach within 14 days. In case of termination, the
                    client shall pay for all services performed up to the date of termination.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Governing Law</h2>
                  <p className="text-muted-foreground font-mono">
                    These terms and conditions are governed by and construed in accordance with the laws of Indonesia, and
                    you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Changes to Terms</h2>
                  <p className="text-muted-foreground font-mono">
                    Sintaksis reserves the right to modify these terms at any time. We will notify clients of any changes
                    by posting the new terms on our website. Your continued use of our services after any changes to these
                    terms constitutes your acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Contact Us</h2>
                  <p className="text-muted-foreground font-mono">
                    If you have any questions about these Terms of Service, please contact us at lets.talk@sintaksis.com.
                  </p>
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
