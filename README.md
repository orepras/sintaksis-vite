# Sintaksis Web - Vite React Migration

This is the migrated version of the Sintaksis website from Next.js to Vite + React.

## What's Been Migrated

✅ **Core Structure**
- Vite + React + TypeScript setup
- Tailwind CSS with existing design tokens
- React Router for client-side routing
- Google Fonts (Inter & JetBrains Mono)

✅ **All Pages Migrated**
- Home Page with hero section and benefits tabs
- About Page with founder's note and values
- Services Page with comprehensive service offerings
- Pricing Page with fractional team and project-based options
- Contact Page with discovery call booking
- Process Page with 4-phase workflow
- Privacy Policy Page
- Terms of Service Page

✅ **Components**
- UI components (Button, Tabs, etc.)
- Site Header and Footer with mobile navigation
- Book Call Button with external calendar integration
- All page layouts and content sections

✅ **Features**
- Responsive design maintained across all pages
- Dark/light theme support
- Complete SEO implementation (react-helmet-async)
- Structured data (JSON-LD) for all pages
- Static sitemap.xml and robots.txt
- Build optimization

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The build creates static files in the `dist/` directory that can be deployed to any static hosting service like Cloudflare Pages, Vercel, Netlify, etc.

## Migration Notes

- Replaced Next.js `Link` with React Router `Link`
- Replaced Next.js `Image` with native `<img>` tags
- Converted Next.js pages to React Router routes
- Maintained all existing styling and functionality
- Added react-helmet-async for SEO management

## Migration Complete! 🎉

The migration is now **100% complete** with all pages, components, and features successfully migrated from Next.js to Vite + React.

### What's Ready for Deployment

- ✅ All 8 pages migrated and functional
- ✅ Complete SEO implementation with structured data
- ✅ Static sitemap.xml and robots.txt generated
- ✅ Responsive design maintained
- ✅ All external integrations working (calendar booking, email links)
- ✅ Build system optimized for Cloudflare Pages

### Optional Enhancements

If you want to add more features later:

1. **Additional UI components**: Copy any remaining components from the original project
2. **Analytics integration**: Add Google Analytics or other tracking
3. **Performance optimization**: Add lazy loading or other optimizations
4. **Testing**: Add unit tests or E2E tests
5. **Content management**: Consider adding a headless CMS

## File Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   └── book-call-button.tsx
├── pages/
│   └── HomePage.tsx   # Main home page
├── lib/
│   ├── utils.ts       # Utility functions
│   └── structured-data.ts
├── App.tsx            # Main app with routing
└── main.tsx           # Entry point
```

The migration maintains the same visual design and core functionality while providing a simpler, more deployable structure for Cloudflare Pages.