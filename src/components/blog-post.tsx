import { Helmet } from "react-helmet-async"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"
import { Button } from "./ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { generateBreadcrumbSchema } from "../lib/structured-data"

interface BlogPostProps {
  post: {
    id: string
    title: string
    description: string
    date: string
    readingTime: string
    category: string
    slug: string
    content: string
  }
}

export function BlogPost({ post }: BlogPostProps) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sintaksis.com" },
    { name: "Resources", url: "https://sintaksis.com/resources" },
    { name: "Blog", url: "https://sintaksis.com/resources#blog" },
    { name: post.title, url: `https://sintaksis.com/blog/${post.slug}` }
  ])

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
        <title>{post.title} | Sintaksis Blog</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={`${post.category}, storytelling, copywriting, content strategy, blog`} />
        <meta property="og:title" content={`${post.title} | Sintaksis Blog`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://sintaksis.com/blog/${post.slug}`} />
        <meta name="twitter:title" content={`${post.title} | Sintaksis Blog`} />
        <meta name="twitter:description" content={post.description} />
        <link rel="canonical" href={`https://sintaksis.com/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* Article Header */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/resources#blog">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Blog
                    </Link>
                  </Button>
                </div>

                <div className="mb-8">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  
                  <h1 className="text-4xl font-bold tracking-tight mb-6 sm:text-5xl font-sans">
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 font-mono">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readingTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="pb-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 font-sans">Ready to improve your storytelling?</h2>
                <p className="text-muted-foreground mb-8 font-mono">
                  Let's work together to create compelling narratives that drive results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/resources">
                      More Resources
                    </Link>
                  </Button>
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
