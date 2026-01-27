import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Download, ArrowLeft, FileText, CheckSquare, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"
import { generateBreadcrumbSchema, generateFAQSchema } from "../lib/structured-data"

export default function DownloadablesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sintaksis.com" },
    { name: "Resources", url: "https://sintaksis.com/resources" },
    { name: "Downloadables", url: "https://sintaksis.com/downloadables" }
  ])

  const faqSchema = generateFAQSchema([
    {
      question: "What types of downloadable resources do you provide?",
      answer: "We offer comprehensive guides, templates, and checklists covering product storytelling, brand voice development, content strategy, and UX writing best practices."
    },
    {
      question: "Are these resources free to download?",
      answer: "Yes, all our downloadable resources are free. We believe in sharing knowledge to help the community improve their storytelling and content strategy."
    },
    {
      question: "Can I customize these templates for my business?",
      answer: "Absolutely! All our templates are designed to be customized for your specific needs. Feel free to adapt them to match your brand and requirements."
    }
  ])

  const downloadableResources = [
    {
      id: "product-story-framework",
      title: "Product Story Framework",
      description: "A comprehensive guide to crafting compelling product stories that drive user engagement and conversions. Includes step-by-step framework, examples, and exercises.",
      type: "PDF Guide",
      downloadUrl: "#",
      icon: "📋",
      fileSize: "2.3 MB",
      pages: "24 pages"
    },
    {
      id: "voice-tone-spectrum",
      title: "Voice & Tone Spectrum",
      description: "Define your brand's personality with our voice and tone spectrum tool and guidelines. Includes assessment framework and implementation checklist.",
      type: "Template",
      downloadUrl: "#",
      icon: "🎭",
      fileSize: "1.8 MB",
      pages: "12 pages"
    },
    {
      id: "content-audit-checklist",
      title: "Content Audit Checklist",
      description: "Systematically evaluate and improve your existing content with our comprehensive audit checklist. Covers all content types and channels.",
      type: "Checklist",
      downloadUrl: "#",
      icon: "✅",
      fileSize: "0.9 MB",
      pages: "8 pages"
    },
    {
      id: "ux-writing-guide",
      title: "UX Writing Best Practices",
      description: "Master the art of writing user-friendly copy that guides users and improves product usability. Includes microcopy examples and error message guidelines.",
      type: "PDF Guide",
      downloadUrl: "#",
      icon: "✍️",
      fileSize: "3.1 MB",
      pages: "32 pages"
    },
    {
      id: "brand-storytelling-playbook",
      title: "Brand Storytelling Playbook",
      description: "Complete playbook for developing and implementing brand storytelling strategies. Includes frameworks, case studies, and measurement tools.",
      type: "PDF Guide",
      downloadUrl: "#",
      icon: "📖",
      fileSize: "4.2 MB",
      pages: "45 pages"
    },
    {
      id: "content-calendar-template",
      title: "Content Calendar Template",
      description: "Plan and organize your content strategy with our comprehensive calendar template. Includes editorial planning and performance tracking.",
      type: "Template",
      downloadUrl: "#",
      icon: "📅",
      fileSize: "1.2 MB",
      pages: "6 pages"
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF Guide': return <BookOpen className="h-5 w-5" />
      case 'Template': return <FileText className="h-5 w-5" />
      case 'Checklist': return <CheckSquare className="h-5 w-5" />
      default: return <FileText className="h-5 w-5" />
    }
  }

  return (
    <>
      <Helmet>
        <title>Downloadable Resources - Free Guides & Templates | Sintaksis</title>
        <meta
          name="description"
          content="Download free guides, templates, and checklists for product storytelling, brand voice development, content strategy, and UX writing best practices."
        />
        <meta name="keywords" content="downloadable resources, storytelling guides, brand templates, content strategy, UX writing, free downloads" />
        <meta property="og:title" content="Downloadable Resources - Free Guides & Templates | Sintaksis" />
        <meta
          property="og:description"
          content="Download free guides, templates, and checklists for product storytelling, brand voice development, content strategy, and UX writing best practices."
        />
        <meta property="og:url" content="https://sintaksis.com/downloadables" />
        <meta name="twitter:title" content="Downloadable Resources - Free Guides & Templates | Sintaksis" />
        <meta
          name="twitter:description"
          content="Download free guides, templates, and checklists for product storytelling, brand voice development, content strategy, and UX writing best practices."
        />
        <link rel="canonical" href="https://sintaksis.com/downloadables" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-muted/50 to-background py-24 md:py-32">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <div className="mb-6">
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/resources">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Resources
                    </Link>
                  </Button>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-sans mb-6">Downloadable Resources</h1>
                <p className="text-xl text-muted-foreground font-mono">
                  Free guides, templates, and checklists to help you improve your storytelling and content strategy.
                </p>
              </div>
            </div>
          </section>

          {/* Resources Grid */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans mb-6">Featured Resources</h2>
                <p className="text-lg text-muted-foreground font-mono">
                  Comprehensive guides and practical templates designed to help you create better content and tell more compelling stories.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {downloadableResources.map((resource) => (
                  <div key={resource.id} className="bg-background p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer">
                    <div className="mb-4">
                      <span className="text-3xl mb-4 block">{resource.icon}</span>
                      <div className="flex items-center gap-2 mb-2">
                        {getTypeIcon(resource.type)}
                        <span className="text-sm font-mono text-muted-foreground">{resource.type}</span>
                      </div>
                    </div>
                    <h3 className="font-medium text-xl mb-3 font-sans">{resource.title}</h3>
                    <p className="text-muted-foreground mb-6 font-mono text-sm">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between mb-6 text-xs text-muted-foreground">
                      <span>{resource.fileSize}</span>
                      <span>{resource.pages}</span>
                    </div>
                    <Button variant="outline" className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
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
                    <h3 className="text-xl font-semibold mb-3 font-sans">What types of downloadable resources do you provide?</h3>
                    <p className="text-muted-foreground font-mono">
                      We offer comprehensive guides, templates, and checklists covering product storytelling, brand voice development, content strategy, and UX writing best practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Are these resources free to download?</h3>
                    <p className="text-muted-foreground font-mono">
                      Yes, all our downloadable resources are free. We believe in sharing knowledge to help the community improve their storytelling and content strategy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Can I customize these templates for my business?</h3>
                    <p className="text-muted-foreground font-mono">
                      Absolutely! All our templates are designed to be customized for your specific needs. Feel free to adapt them to match your brand and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">Need Custom Resources?</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  While our free resources provide great starting points, we can create custom guides and templates tailored to your specific business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="flex-1 sm:flex-none">
                    <Button size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px]">
                      Get Custom Resources
                    </Button>
                  </Link>
                  <Link to="/blog" className="flex-1 sm:flex-none">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
                      Read Our Blog
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
