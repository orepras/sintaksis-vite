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
