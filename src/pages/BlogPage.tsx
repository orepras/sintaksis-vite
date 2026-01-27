import { Helmet } from "react-helmet-async"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { ArrowLeft, Calendar, Clock, Tag, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { generateBreadcrumbSchema, generateFAQSchema } from "../lib/structured-data"
import { getAllBlogPosts } from "../data/blog-posts"
import { useState } from "react"

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sintaksis.com" },
    { name: "Resources", url: "https://sintaksis.com/resources" },
    { name: "Blog", url: "https://sintaksis.com/blog" }
  ])

  const faqSchema = generateFAQSchema([
    {
      question: "How often do you publish new blog posts?",
      answer: "We publish new blog posts weekly, covering topics like brand storytelling, UX writing, content strategy, and industry trends that help businesses improve their communication."
    },
    {
      question: "What topics do you cover in your blog?",
      answer: "Our blog covers three main categories: Writing (copywriting, UX writing, content creation), Product (frameworks, methodologies, product strategy), and Profiles (case studies, company insights, industry analysis)."
    },
    {
      question: "Can I suggest topics for future blog posts?",
      answer: "Absolutely! We welcome suggestions for topics that would be most valuable to our audience. Feel free to reach out with your ideas or questions about storytelling and content strategy."
    }
  ])

  const blogPosts = getAllBlogPosts()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'writing', name: 'Writing', count: blogPosts.filter(post => post.category === 'writing').length },
    { id: 'product', name: 'Product', count: blogPosts.filter(post => post.category === 'product').length },
    { id: 'profiles', name: 'Profiles', count: blogPosts.filter(post => post.category === 'profiles').length }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
        <title>Blog - Storytelling & Content Strategy Insights | Sintaksis</title>
        <meta
          name="description"
          content="Read our latest insights on storytelling, copywriting, content strategy, and brand development. Expert tips and strategies for better communication."
        />
        <meta name="keywords" content="storytelling blog, copywriting tips, content strategy, brand storytelling, UX writing, marketing insights" />
        <meta property="og:title" content="Blog - Storytelling & Content Strategy Insights | Sintaksis" />
        <meta
          property="og:description"
          content="Read our latest insights on storytelling, copywriting, content strategy, and brand development. Expert tips and strategies for better communication."
        />
        <meta property="og:url" content="https://sintaksis.com/blog" />
        <meta name="twitter:title" content="Blog - Storytelling & Content Strategy Insights | Sintaksis" />
        <meta
          name="twitter:description"
          content="Read our latest insights on storytelling, copywriting, content strategy, and brand development. Expert tips and strategies for better communication."
        />
        <link rel="canonical" href="https://sintaksis.com/blog" />
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
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-sans mb-6">Blog</h1>
                <p className="text-xl text-muted-foreground font-mono">
                  Insights, tips, and strategies for better storytelling and content creation.
                </p>
              </div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-8 border-b">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search blog posts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground font-mono">No posts found matching your criteria.</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {filteredPosts.map((post) => (
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
                        
                        <h2 className="text-2xl font-bold mb-3 font-sans hover:text-primary transition-colors">
                          <Link to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-muted-foreground mb-6 font-mono">
                          {post.description}
                        </p>
                        
                        <Button asChild variant="outline" className="gap-2">
                          <Link to={`/blog/${post.slug}`}>
                            <Tag className="h-4 w-4" />
                            Read More
                          </Link>
                        </Button>
                      </article>
                    ))}
                  </div>
                )}
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
                    <h3 className="text-xl font-semibold mb-3 font-sans">How often do you publish new blog posts?</h3>
                    <p className="text-muted-foreground font-mono">
                      We publish new blog posts monthly, covering topics like brand storytelling, UX writing, content strategy, and industry trends that help businesses improve their communication.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">What topics do you cover in your blog?</h3>
                    <p className="text-muted-foreground font-mono">
                      Our blog covers three main categories: Writing (copywriting, UX writing, content creation), Product (frameworks, methodologies, product strategy), and Profiles (case studies, company insights, industry analysis).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 font-sans">Can I suggest topics for future blog posts?</h3>
                    <p className="text-muted-foreground font-mono">
                      Absolutely! We welcome suggestions for topics that would be most valuable to our audience. Feel free to reach out with your ideas or questions about storytelling and content strategy.
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
                <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl font-sans">Ready to Improve Your Storytelling?</h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Let's work together to create compelling narratives that drive results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="flex-1 sm:flex-none">
                    <Button size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px]">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/downloadables" className="flex-1 sm:flex-none">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
                      Download Resources
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
