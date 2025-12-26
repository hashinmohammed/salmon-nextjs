import Script from "next/script";

export const metadata = {
  title: "Products | Salmon Medical Solutions",
  description: "Explore our wide range of medical equipment, hospital supplies, laboratory solutions, and veterinary products. Salmon Medical Solutions delivers quality, safety, and efficiency to healthcare professionals and organizations across the UAE and Middle East.",
  keywords: [
    "medical products",
    "hospital supplies",
    "laboratory equipment",
    "veterinary products",
    "healthcare UAE",
    "medical devices",
    "first aid kits",
    "pharmaceuticals",
    "surgical instruments",
    "medical trading UAE",
    "Salmon Medical Solutions products"
  ],
  openGraph: {
    title: "Products | Salmon Medical Solutions",
    description: "Discover premium medical products, hospital and laboratory supplies, and veterinary solutions from Salmon Medical Solutions. Serving Dubai, Abu Dhabi, and the Middle East.",
    url: "https://www.salmonmedic.com/products",
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
    title: "Products | Salmon Medical Solutions",
    description: "Browse Salmon Medical Solutions' extensive product catalog for hospitals, clinics, labs, and veterinary practices in the UAE and Middle East.",
    site: "@salmonmedic",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://www.salmonmedic.com/products",
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
};

export default function ProductsLayout({ children }) {
  // JSON-LD structured data for product catalog
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Products | Salmon Medical Solutions',
    description: metadata.description,
    url: 'https://www.salmonmedic.com/products',
    publisher: {
      '@type': 'Organization',
      name: 'Salmon Medical Solutions',
      url: 'https://www.salmonmedic.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.salmonmedic.com/images/logo.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Product Categories',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Hospital', url: 'https://www.salmonmedic.com/products#hospital' },
        { '@type': 'ListItem', position: 2, name: 'Laboratory', url: 'https://www.salmonmedic.com/products#laboratory' },
        { '@type': 'ListItem', position: 3, name: 'Veterinary', url: 'https://www.salmonmedic.com/products#veterinary' },
        { '@type': 'ListItem', position: 4, name: 'Academic', url: 'https://www.salmonmedic.com/products#academic' },
      ],
    },
  };

  return (
    <>
      <Script id="product-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      {children}
    </>
  );
}
