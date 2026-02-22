export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Leo AI Agency',
    url: 'https://leoaiplatform.com',
    logo: 'https://leoaiplatform.com/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@leoaiplatform.com',
      contactType: 'customer service',
    },
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'C/O 389c, High Road',
        addressLocality: 'London',
        postalCode: 'N22 8JA',
        addressCountry: 'GB',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Acıbadem Mah. Çeçen Sk. No:25 Akasya AVM, No: 428',
        addressLocality: 'Istanbul',
        addressRegion: 'Üsküdar',
        addressCountry: 'TR',
      },
    ],
    sameAs: [
      'https://x.com/leoaiagency',
      'https://www.linkedin.com/company/leoaiagency/',
      'https://github.com/LeoAIAgency',
    ],
  };
}

export function getSoftwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Leo AI Smart Agent Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'AI-powered customer conversation analysis, automated responses, and multi-channel integration services with 6 specialized AI agents.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free trial available',
    },
  };
}

export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
