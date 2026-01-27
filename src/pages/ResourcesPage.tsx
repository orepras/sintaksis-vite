import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { ArrowRight, Download, FileText, Calendar, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { generateBreadcrumbSchema, generateFAQSchema } from "../lib/structured-data"
import { getAllBlogPosts } from "../data/blog-posts"

export default function ResourcesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sintaksis.com" },
    { name: "Resources", url: "https://sintaksis.com/resources" }
  ])

  const faqSchema = generateFAQSchema([
    {
      question: "What resources do you provide for content creators?",
      answer: "We share insights on storytelling best practices, copywriting techniques, brand strategy, and content marketing through our blog posts, case studies, and downloadable guides."
    },
    {
      question: "How often do you publish new content?",
      answer: "We publish new insights and resources monthly, covering topics like brand storytelling, UX writing, content strategy, and industry trends that help businesses improve their communication."
    },
    {
      question: "Can I request specific topics for your resources?",
      answer: "Absolutely! We welcome suggestions for topics that would be most valuable to our audience. Feel free to reach out with your ideas or questions about storytelling and content strategy."
    }
  ])

  // Get blog posts from data file
  const blogPosts = getAllBlogPosts()

  const downloadableResources = [
    {
      id: "product-story-framework",
      title: "Product Story Framework",
      description: "A comprehensive guide to crafting compelling product stories that drive user engagement and conversions.",
      type: "PDF Guide",
      downloadUrl: "#",
      icon: "📋"
    },
    {
      id: "voice-tone-spectrum",
      title: "Voice & Tone Spectrum",
      description: "Define your brand's personality with our voice and tone spectrum tool and guidelines.",
      type: "Template",
      downloadUrl: "#",
      icon: "🎭"
    },
    {
      id: "content-audit-checklist",
      title: "Content Audit Checklist",
      description: "Systematically evaluate and improve your existing content with our comprehensive audit checklist.",
      type: "Checklist",
      downloadUrl: "#",
      icon: "✅"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'writing': return 'bg-blue-100 text-blue-800'
      case 'product': return 'bg-green-100 text-green-800'
      case 'profiles': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <Helmet>
        <title>Resources & Insights - Storytelling Best Practices | Sintaksis</title>
        <meta
          name="description"
          content="Discover storytelling best practices, copywriting insights, and content strategy resources. Learn from our experience working with startups and established businesses."
        />
        <meta name="keywords" content="storytelling resources, copywriting tips, content strategy, brand storytelling, UX writing, marketing insights" />
        <meta property="og:title" content="Resources & Insights - Storytelling Best Practices | Sintaksis" />
        <meta
          property="og:description"
          content="Discover storytelling best practices, copywriting insights, and content strategy resources. Learn from our experience working with startups and established businesses."
        />
        <meta property="og:url" content="https://sintaksis.com/resources" />
        <meta name="twitter:title" content="Resources & Insights - Storytelling Best Practices | Sintaksis" />
        <meta
          name="twitter:description"
          content="Discover storytelling best practices, copywriting insights, and content strategy resources. Learn from our experience working with startups and established businesses."
        />
        <link rel="canonical" href="https://sintaksis.com/resources" />
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
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-sans mb-6">Resources & Insights</h1>
                <p className="text-xl text-muted-foreground font-mono">
                  Learn from our experience. Discover storytelling best practices, copywriting insights, and content strategy resources.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Resources - Downloadables */}
          <section id="downloadables" className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans mb-6">Featured Resources</h2>
                <p className="text-lg text-muted-foreground font-mono">
                  Downloadable guides, templates, and frameworks to help you improve your storytelling and content strategy.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {downloadableResources.map((resource) => (
                  <div key={resource.id} className="bg-background p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer">
                    <div className="mb-4">
                      <span className="text-3xl mb-4 block">{resource.icon}</span>
                      <span className="text-sm font-mono text-muted-foreground">{resource.type}</span>
                    </div>
                    <h3 className="font-medium text-xl mb-3 font-sans">{resource.title}</h3>
                    <p className="text-muted-foreground mb-6 font-mono">
                      {resource.description}
                    </p>
                    <Button asChild variant="outline" className="w-full gap-2">
                      <Link to="/downloadables">
                        <Download className="h-4 w-4" />
                        View All
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-16 bg-muted/30 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-3xl text-left mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans mb-6">Latest Blog Posts</h2>
                <p className="text-lg text-muted-foreground font-mono">
                  Insights, tips, and strategies for better storytelling and content creation.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-background p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readingTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 font-sans hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 font-mono">
                      {post.description}
                    </p>
                    
                    <Button asChild variant="outline" className="gap-2">
                      <Link to={`/blog/${post.slug}`}>
                        <FileText className="h-4 w-4" />
                        Read More
                      </Link>
                    </Button>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to="/blog">
                    View All Posts
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
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
                    <h3 className="text-xl font-semibold mb-3 font-sans">What resources do you provide for content creators?</h3>
                    <p className="text-muted-foreground font-mono">
                      We share insights on storytelling best practices, copywriting techniques, brand strategy, and content marketing through our blog posts, case studies, and downloadable guides.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">How often do you publish new content?</h3>
                    <p className="text-muted-foreground font-mono">
                      We publish new insights and resources monthly, covering topics like brand storytelling, UX writing, content strategy, and industry trends that help businesses improve their communication.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Can I request specific topics for your resources?</h3>
                    <p className="text-muted-foreground font-mono">
                      Absolutely! We welcome suggestions for topics that would be most valuable to our audience. Feel free to reach out with your ideas or questions about storytelling and content strategy.
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
                <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">Need Custom Guidance?</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  While our resources provide general guidance, every business has unique storytelling needs. Let's discuss how we can help your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="flex-1 sm:flex-none">
                    <Button size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px]">
                      Get Custom Advice <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/services" className="flex-1 sm:flex-none">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
                      View Our Services
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
