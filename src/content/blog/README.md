# Blog Content Management

This folder contains all blog posts for the Sintaksis website. Each blog post is a markdown file with frontmatter metadata.

## Adding a New Blog Post

1. Create a new `.md` file in this folder
2. Use the filename as the slug (e.g., `my-new-post.md` becomes slug `my-new-post`)
3. Add the required frontmatter at the top of the file:

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your blog post for SEO and previews"
date: "YYYY-MM-DD"
readingTime: "X min read"
category: "writing|product|profiles"
slug: "your-post-slug"
---

# Your Blog Post Title

Your content goes here...
```

## Frontmatter Fields

- **title**: The main title of your blog post
- **description**: Brief description for SEO and social sharing
- **date**: Publication date in YYYY-MM-DD format
- **readingTime**: Estimated reading time (e.g., "5 min read")
- **category**: One of three categories:
  - `writing` - Content about writing, copywriting, UX writing
  - `product` - Product strategy, frameworks, methodologies
  - `profiles` - Case studies, company profiles, industry insights
- **slug**: URL-friendly version of the title (usually matches filename)

## Content Guidelines

- Use standard markdown syntax
- Include proper headings (H1, H2, H3)
- Add code blocks with language specification when needed
- Use blockquotes for important callouts
- Include lists for better readability

## Example Structure

```markdown
---
title: "How to Write Better Product Descriptions"
description: "Learn the essential techniques for crafting product descriptions that convert browsers into buyers."
date: "2024-12-20"
readingTime: "7 min read"
category: "writing"
slug: "better-product-descriptions"
---

# How to Write Better Product Descriptions

## Introduction
Start with the problem your post solves...

## Main Content
Break your content into logical sections...

## Conclusion
Wrap up with key takeaways...
```

## File Naming Convention

- Use lowercase letters and hyphens
- Be descriptive but concise
- Match the slug in your frontmatter
- Examples: `product-story-framework.md`, `voice-tone-spectrum.md`

## Categories and Colors

- **writing** (blue): `bg-blue-100 text-blue-800`
- **product** (green): `bg-green-100 text-green-800`  
- **profiles** (purple): `bg-purple-100 text-purple-800`

## After Adding a New Post

1. The blog system will automatically pick up new posts
2. Update the sitemap.xml to include the new post URL
3. Consider adding internal links from other posts or pages
