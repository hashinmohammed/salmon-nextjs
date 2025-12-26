
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileBottomNav from "./components/client/common/MobileBottomNav";
import ChatBotWidget from "./components/client/common/ChatBotWidget";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Salmon Medical Solutions",
  description: "Salmon Medical Solutions - Delivering quality, safety, and efficiency to hospitals, labs, education, and veterinary sectors worldwide. Discover innovative healthcare, laboratory, and emergency products.",
  keywords: {
    short: [
      "medical equipment",
      "hospital supplies",
      "laboratory solutions",
      "veterinary products",
      "first aid kits",
      "pharmaceuticals",
      "surgical instruments",
      "medical devices",
      "healthcare",
      "Salmon Medical Solutions"
    ],
    moderate: [
      "UAE medical equipment",
      "Dubai hospital supplies",
      "Abu Dhabi healthcare",
      "laboratory solutions UAE",
      "veterinary products UAE",
      "first aid kits Dubai",
      "healthcare innovation UAE",
      "medical devices UAE",
      "emergency medical supplies UAE",
      "medical distributors UAE",
      "hospital furniture UAE",
      "clinic supplies Dubai",
      "healthcare technology UAE",
      "medical consumables UAE",
      "medical trading UAE",
      "medical importers UAE"
    ],
    lengthy: [
      "medical supply chain management in UAE",
      "healthcare procurement and logistics UAE",
      "advanced hospital furniture suppliers Dubai",
      "innovative laboratory solutions for UAE clinics",
      "emergency medical supplies and first aid kits Dubai",
      "veterinary products and pharmaceuticals UAE",
      "healthcare technology and consulting services UAE",
      "medical equipment rental and maintenance UAE",
      "hospital management and healthcare events UAE",
      "medical distributors and importers in UAE"
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: [
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', url: '/images/logo.png' },
  ],
  manifest: '/site.webmanifest',
  category: 'medical, healthcare, products',
  applicationName: 'Salmon Medical Solutions',
  creator: 'Salmon Medical Solutions',
  publisher: 'Salmon Medical Solutions',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: '#0a2540',
  appleWebApp: {
    capable: true,
    title: 'Salmon Medical Solutions',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Home | Salmon Medical Solutions",
    description:
      "Salmon Medical Solutions is a leading provider of medical equipment, hospital supplies, laboratory solutions, and veterinary products in the UAE. We deliver quality, safety, and efficiency to hospitals, clinics, laboratories, educational institutions, and veterinary sectors across Dubai, Abu Dhabi, and the Middle East. Our comprehensive portfolio includes first aid kits, pharmaceuticals, surgical instruments, healthcare technology, and emergency medical supplies. With a commitment to innovation and excellence, we support healthcare professionals and organizations in improving patient care and operational outcomes. Discover our advanced products, expert consulting, and reliable logistics for all your healthcare needs.",
    url: "https://www.salmonmedic.com/",
    siteName: "Salmon Medical Solutions",
    images: [
      {
        url: "/images/logo.png",
        width: 240,
        height: 96,
        alt: "Salmon Medical Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Home | Salmon Medical Solutions",
    description:
      "Salmon Medical Solutions delivers premium medical equipment, hospital and laboratory supplies, and veterinary products throughout the UAE and Middle East. Our innovative solutions empower healthcare professionals and organizations to achieve the highest standards in patient care, safety, and efficiency. Explore our wide range of products and services designed for hospitals, clinics, labs, and veterinary practices in Dubai, Abu Dhabi, and beyond.",
    site: "@salmonmedic",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://www.salmonmedic.com/",
  },
};

export default function RootLayout({ children }) {
  // JSON-LD structured data for organization
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Salmon Medical Solutions',
    url: 'https://www.salmonmedic.com/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.salmonmedic.com/images/logo.png',
    },
    sameAs: [
      'https://www.linkedin.com/company/salmonmedic/',
      'https://www.instagram.com/salmonmedic/',
      'https://twitter.com/salmonmedic',
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+971551421502',
      contactType: 'customer service',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
    }],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* LinkedIn social meta tags */}
        <meta property="og:title" content="Home | Salmon Medical Solutions" />
        <meta property="og:description" content="Delivering quality, safety, and efficiency to hospitals, labs, education, and veterinary sectors worldwide." />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://www.salmonmedic.com/" />
        <meta property="og:type" content="website" />
        {/* SEO: robots, viewport, theme-color, manifest, etc. handled by metadata */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </Script>
        {children}
        <ChatBotWidget />
        <MobileBottomNav />
      </body>
    </html>
  );
}
