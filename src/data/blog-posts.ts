import { parseMarkdownToBlogPost, blogMarkdownFiles } from '../lib/markdown-parser'

export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  readingTime: string
  category: 'writing' | 'product' | 'profiles'
  slug: string
  content: string
}

// Parse blog posts from markdown files
export const blogPosts: BlogPost[] = Object.entries(blogMarkdownFiles).map(([slug, content]) => 
  parseMarkdownToBlogPost(content, slug)
)

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
