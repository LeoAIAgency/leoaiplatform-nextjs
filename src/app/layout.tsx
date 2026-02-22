import type { Metadata } from 'next';
import { Providers } from './providers';
import { getOrganizationSchema, getSoftwareSchema } from '@/lib/metadata';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://leoaiplatform.com'),
  title: {
    default: 'Leo AI Smart Agent Platform | AI-Powered Customer Solutions',
    template: '%s | Leo AI Platform',
  },
  description:
    'Transform customer conversations with Leo AI\'s Smart Agent Platform. 6 specialized AI agents for WhatsApp, Instagram, Web with real-time analytics.',
  keywords: [
    'AI agents',
    'customer support',
    'WhatsApp automation',
    'Instagram AI',
    'voice AI',
    'chatbot',
    'smart agent',
    'AI SaaS',
  ],
  authors: [{ name: 'Leo AI Agency' }],
  creator: 'Leo AI Agency',
  publisher: 'Leo AI Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leoaiplatform.com',
    title: 'Leo AI Smart Agent Platform | AI-Powered Customer Solutions',
    description:
      'Transform customer conversations with Leo AI\'s Smart Agent Platform. 6 specialized AI agents for WhatsApp, Instagram, Web with real-time analytics.',
    siteName: 'Leo AI Platform',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'Leo AI Platform Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leo AI Smart Agent Platform | AI-Powered Customer Solutions',
    description:
      'Transform customer conversations with Leo AI\'s Smart Agent Platform.',
    creator: '@leoaiagency',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-[#0A0A0A]">
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSoftwareSchema()),
          }}
        />
      </head>
      <body className="antialiased bg-[#0A0A0A] overscroll-none">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
