# Content Management System

This folder contains all the content for the Sintaksis website, organized by type for easy management.

## Folder Structure

```
src/content/
├── blog/                    # Blog posts (markdown files)
│   ├── README.md           # Blog management guide
│   ├── product-story-framework.md
│   ├── voice-tone-spectrum.md
│   └── startup-storytelling.md
├── downloadables/          # Downloadable resources
│   └── README.md           # Resources management guide
└── README.md              # This file
```

## Content Types

### Blog Posts (`/blog/`)
- Written in Markdown format
- Include frontmatter metadata
- Support for categories: writing, product, profiles
- Automatic HTML conversion
- SEO optimized

### Downloadable Resources (`/downloadables/`)
- PDF guides and frameworks
- Templates and checklists
- Editable documents
- Shareable links to external resources

## Adding New Content

### For Blog Posts:
1. Create a new `.md` file in `/blog/`
2. Follow the frontmatter format (see `/blog/README.md`)
3. The system will automatically pick up new posts

### For Downloadables:
1. Add files to `/downloadables/`
2. Update the resources array in `ResourcesPage.tsx`
3. Ensure proper file access and URLs

## Content Guidelines

- **SEO**: All content is optimized for search engines
- **Accessibility**: Content follows accessibility best practices
- **Brand Voice**: Maintains consistent Sintaksis tone and style
- **Quality**: All content should provide genuine value to readers

## Technical Notes

- Blog posts are parsed from markdown to HTML automatically
- Frontmatter is used for metadata and SEO
- Content is statically generated for optimal performance
- All content is included in the sitemap for search engines

## Maintenance

- Regularly review and update existing content
- Add new blog posts monthly for fresh content
- Update downloadable resources as needed
- Monitor content performance and engagement
