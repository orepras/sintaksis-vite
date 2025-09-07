import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
        <meta name="description" content="Learn about how Sintaksis collects, uses, and protects your personal data when you visit our website." />
        <meta name="keywords" content="privacy policy, data protection, personal information, cookies, GDPR compliance" />
        <meta property="og:title" content="Privacy Policy | Sintaksis" />
        <meta property="og:description" content="Learn about how Sintaksis collects, uses, and protects your personal data when you visit our website." />
        <meta property="og:url" content="https://sintaksis.com/privacy-policy" />
        <meta property="og:image" content="https://sintaksis.com/og-privacy.jpg" />
        <meta name="twitter:title" content="Privacy Policy | Sintaksis" />
        <meta name="twitter:description" content="Learn about how Sintaksis collects, uses, and protects your personal data when you visit our website." />
        <meta name="twitter:image" content="https://sintaksis.com/og-privacy.jpg" />
        <link rel="canonical" href="https://sintaksis.com/privacy-policy" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans mb-6">Privacy Policy</h1>
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
                    At Sintaksis, we respect your privacy and are committed to protecting your personal data. This privacy
                    policy will inform you about how we look after your personal data when you visit our website and tell
                    you about your privacy rights and how the law protects you.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Information We Collect</h2>
                  <p className="text-muted-foreground font-mono mb-4">
                    We may collect, use, store and transfer different kinds of personal data about you which we have
                    grouped together as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-mono">
                    <li>Identity Data includes first name, last name, username or similar identifier.</li>
                    <li>Contact Data includes email address, telephone numbers, and physical address.</li>
                    <li>
                      Technical Data includes internet protocol (IP) address, browser type and version, time zone setting
                      and location, browser plug-in types and versions, operating system and platform, and other
                      technology on the devices you use to access this website.
                    </li>
                    <li>Usage Data includes information about how you use our website, products, and services.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">How We Use Your Information</h2>
                  <p className="text-muted-foreground font-mono mb-4">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your
                    personal data in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-mono">
                    <li>To provide you with the services you have requested from us.</li>
                    <li>To respond to your inquiries and communicate with you.</li>
                    <li>To improve our website and services.</li>
                    <li>To comply with legal obligations.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">AI Usage</h2>
                  <p className="text-muted-foreground font-mono mb-4">
                    As a copywriting and storytelling studio, Sintaksis sometimes uses artificial intelligence (AI) tools to support our creative process. We want to be transparent about how AI is—and is not—used in our work:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-mono">
                    <li><strong>Research and Insights:</strong> We may use AI to help us gather findings, analyze large sets of information, or identify patterns that inform our creative approach.</li>
                    <li><strong>Workflow Support:</strong> AI can assist us in structuring ideas, organizing references, or synthesizing information so we can dedicate more time and energy to the manual craft of storytelling.</li>
                    <li><strong>Not a Substitute for Creativity:</strong> We never use AI to generate copy from scratch. The words, narratives, and brand stories we deliver are always written, refined, and owned by our human team.</li>
                    <li><strong>Creative Elevation:</strong> Our use of AI is limited to elevating efficiency and sharpening our perspectives. It does not replace the originality, empathy, and creative judgment that define our work as storytellers.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Cookies</h2>
                  <p className="text-muted-foreground font-mono">
                    Our website uses cookies to distinguish you from other users of our website. This helps us to provide
                    you with a good experience when you browse our website and also allows us to improve our site. You can
                    set your browser to refuse all or some browser cookies, or to alert you when websites set or access
                    cookies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Data Security</h2>
                  <p className="text-muted-foreground font-mono">
                    We have put in place appropriate security measures to prevent your personal data from being
                    accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we
                    limit access to your personal data to those employees, agents, contractors, and other third parties
                    who have a business need to know.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Your Legal Rights</h2>
                  <p className="text-muted-foreground font-mono mb-4">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal
                    data, including the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-mono">
                    <li>Request access to your personal data.</li>
                    <li>Request correction of your personal data.</li>
                    <li>Request erasure of your personal data.</li>
                    <li>Object to processing of your personal data.</li>
                    <li>Request restriction of processing your personal data.</li>
                    <li>Request transfer of your personal data.</li>
                    <li>Right to withdraw consent.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-sans">Contact Us</h2>
                  <p className="text-muted-foreground font-mono">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at
                    hello@prasaja.com.
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
