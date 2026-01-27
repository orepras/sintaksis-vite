export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sintaksis",
    alternateName: "Sintaksis Studio",
    url: "https://sintaksis.com",
    logo: "https://sintaksis.com/logo.png",
    sameAs: [
      "https://twitter.com/sintaksis",
      "https://instagram.com/sintaksis",
      "https://linkedin.com/company/sintaksis",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "lets.talk@sintaksis.com",
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bintaro",
      addressRegion: "South Tangerang",
      addressCountry: "Indonesia",
    },
    description: "We write and make websites, helping you achieve business goals through storytelling",
  }
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Storytelling and Web Development",
    provider: {
      "@type": "Organization",
      name: "Sintaksis",
      url: "https://sintaksis.com",
    },
    description: "Comprehensive storytelling solutions including copywriting and web development services",
    offers: {
      "@type": "Offer",
      price: "50000000",
      priceCurrency: "IDR",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  }
}

export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sintaksis",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sintaksis",
    url: "https://sintaksis.com",
    description: "Professional storytelling and web development services for startups and established businesses",
    publisher: {
      "@type": "Organization",
      name: "Sintaksis",
      url: "https://sintaksis.com",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sintaksis.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateServiceSchemaDetailed(serviceName: string, description: string, price?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Sintaksis",
      url: "https://sintaksis.com",
    },
    serviceType: "Storytelling and Web Development",
    areaServed: "Indonesia",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://sintaksis.com/contact",
      serviceSmsNumber: "+62-xxx-xxx-xxxx",
    },
    ...(price && {
      offers: {
        "@type": "Offer",
        price: price,
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      },
    }),
  }
}
