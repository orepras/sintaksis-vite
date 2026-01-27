import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectTokotypePage from './pages/ProjectTokotypePage'
import ProjectBlibliPage from './pages/ProjectBlibliPage'
import ProjectAccessTimePage from './pages/ProjectAccessTimePage'
import ResourcesPage from './pages/ResourcesPage'
import DownloadablesPage from './pages/DownloadablesPage'
import BlogPage from './pages/BlogPage'
import { BlogPost } from './components/blog-post'
import { getBlogPostBySlug } from './data/blog-posts'
import ScrollToTop from './components/ScrollToTop'
import { useParams } from 'react-router-dom'
import './index.css'

function BlogPostWrapper() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined
  
  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }
  
  return <BlogPost post={post} />
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/tokotype-brand-voice" element={<ProjectTokotypePage />} />
          <Route path="/projects/blibli-copy-workflow" element={<ProjectBlibliPage />} />
          <Route path="/projects/accesstime-brand-revolution" element={<ProjectAccessTimePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/downloadables" element={<DownloadablesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostWrapper />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App