import type { BlogPost } from '../data/blog-posts'

interface MarkdownFrontmatter {
  title: string
  description: string
  date: string
  readingTime: string
  category: 'writing' | 'product' | 'profiles'
  slug: string
}

// Simple markdown to HTML converter for basic formatting
function markdownToHtml(markdown: string): string {
  return markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote><p>$1</p></blockquote>')
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|b|l])/gm, '<p>')
    .replace(/(?<!>)$/gm, '</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[h|u|b|l])/g, '$1')
    .replace(/(<\/[h|u|b|l]>)<\/p>/g, '$1')
}

// Parse frontmatter from markdown content
function parseFrontmatter(content: string): { frontmatter: MarkdownFrontmatter; body: string } {
  const frontmatterRegex = /^---\s*\n(.*?)\n---\s*\n(.*)$/s
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    throw new Error('Invalid markdown format: missing frontmatter')
  }
  
  const frontmatterText = match[1]
  const body = match[2]
  
  // Parse YAML-like frontmatter
  const frontmatter: any = {}
  frontmatterText.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '')
      frontmatter[key.trim()] = value
    }
  })
  
  return { frontmatter: frontmatter as MarkdownFrontmatter, body }
}

// Convert markdown file content to BlogPost
export function parseMarkdownToBlogPost(content: string, slug: string): BlogPost {
  const { frontmatter, body } = parseFrontmatter(content)
  const htmlContent = markdownToHtml(body)
  
  return {
    id: slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    readingTime: frontmatter.readingTime,
    category: frontmatter.category,
    slug: frontmatter.slug,
    content: htmlContent
  }
}

// For development: import markdown files as text
// In production, you would fetch these from a CMS or file system
export const blogMarkdownFiles: Record<string, string> = {
  'product-story-framework': `---
title: "The Product Story Framework: How to Tell Compelling Stories About Your Product"
description: "Learn the essential framework for crafting product stories that resonate with users and drive conversions."
date: "2024-12-15"
readingTime: "8 min read"
category: "product"
slug: "product-story-framework"
---

# The Product Story Framework: How to Tell Compelling Stories About Your Product

Every great product has a story. But how do you tell that story in a way that connects with your users and drives them to action?

After working with dozens of startups and established companies, we've developed a framework that helps teams craft compelling product narratives. Here's how it works:

## The Three Pillars of Product Storytelling

### 1. The Problem
Start with the pain point your product solves. This isn't just about listing features—it's about understanding the emotional and practical challenges your users face.

### 2. The Journey
Show how your product transforms the user's experience. This is where you demonstrate value through before-and-after scenarios.

### 3. The Outcome
Paint a picture of the better future your product enables. Focus on the benefits, not just the features.

## Putting It Into Practice

Let's say you're launching a new project management tool. Instead of leading with "Our tool has drag-and-drop functionality," try:

> "Remember the last time you spent 30 minutes in a meeting just trying to figure out who was responsible for what? Our tool eliminates that confusion by making project ownership crystal clear from day one."

This approach connects the feature to a real user problem and shows the emotional relief it provides.

## Key Takeaways

- Always start with the user's problem, not your solution
- Use specific, relatable scenarios
- Focus on emotional benefits alongside functional ones
- Test your stories with real users

Ready to apply this framework to your product? Start by interviewing your users to understand their biggest pain points, then craft stories that show how your product addresses them.`,

  'voice-tone-spectrum': `---
title: "Voice & Tone Spectrum: Finding Your Brand's Unique Personality"
description: "Discover how to define and implement a consistent voice and tone across all your brand communications."
date: "2024-12-10"
readingTime: "6 min read"
category: "writing"
slug: "voice-tone-spectrum"
---

# Voice & Tone Spectrum: Finding Your Brand's Unique Personality

Your brand's voice and tone are like your personality—they should be consistent, authentic, and memorable. But how do you define something as abstract as "personality" for your brand?

We use a spectrum approach that helps teams visualize and implement their brand voice across all touchpoints.

## Understanding Voice vs. Tone

**Voice** is your brand's personality—it's who you are. It should remain consistent across all communications.

**Tone** is how you express that personality—it can shift based on context, audience, and situation.

## The Voice & Tone Spectrum

Think of your brand voice as existing on a spectrum between two poles. For example:

- **Professional ↔ Approachable**
- **Formal ↔ Casual**
- **Technical ↔ Simple**
- **Serious ↔ Playful**

## Finding Your Position

To find where your brand sits on these spectrums:

1. Gather your team and stakeholders
2. Look at your existing content and identify what feels most "you"
3. Consider your audience and their expectations
4. Think about your brand values and mission

## Implementation Tips

Once you've defined your voice spectrum:

- Create a style guide with specific examples
- Train your team on the guidelines
- Regularly audit your content for consistency
- Allow for flexibility while maintaining core personality

Remember: your voice should feel authentic to your brand and resonate with your audience. Don't try to be something you're not.`,

  'startup-storytelling': `---
title: "Startup Storytelling: How Early-Stage Companies Can Build Compelling Narratives"
description: "Essential storytelling strategies for startups looking to establish their brand and connect with early customers."
date: "2024-12-05"
readingTime: "10 min read"
category: "profiles"
slug: "startup-storytelling"
---

# Startup Storytelling: How Early-Stage Companies Can Build Compelling Narratives

For startups, storytelling isn't just marketing—it's survival. With limited resources and fierce competition, your story becomes your most powerful tool for attracting customers, investors, and talent.

But how do you tell a compelling story when you're still figuring out your product-market fit?

## The Startup Story Advantage

Startups have unique storytelling advantages that established companies don't:

- **Authenticity:** You're not polished—and that's refreshing
- **Urgency:** Your story has stakes that matter
- **Innovation:** You're solving problems in new ways
- **Personal connection:** Founders' stories resonate with audiences

## Building Your Foundation Story

Every startup needs a foundation story that answers three key questions:

### 1. Why does this problem matter?
Start with the problem you're solving. Make it personal, specific, and urgent.

### 2. Why are you the right team to solve it?
Share your unique perspective, experience, or insight that led you to this solution.

### 3. What's your vision for the future?
Paint a picture of the world you're trying to create.

## Adapting Your Story as You Grow

Your story will evolve as your startup grows. Here's how to adapt:

- **Early stage:** Focus on the problem and your vision
- **Product-market fit:** Add customer success stories
- **Growth stage:** Emphasize impact and scale
- **Mature stage:** Highlight innovation and market leadership

## Common Startup Storytelling Mistakes

Avoid these pitfalls:

- Leading with features instead of benefits
- Using too much jargon or technical language
- Focusing on what you do instead of why you do it
- Forgetting to include your customers in the story

## Getting Started

Start by writing your foundation story in one paragraph. Then test it with potential customers, investors, and team members. Their feedback will help you refine and strengthen your narrative.

Remember: great startup stories aren't just about what you're building—they're about the future you're creating.`
}
