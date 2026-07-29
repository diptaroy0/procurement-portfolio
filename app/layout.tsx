import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import BackToTop from "@/components/common/BackToTop";
import { personStructuredData } from "@/lib/structuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://diptaroy0.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Dipta Roy Portfolio",
  generator: "Next.js",

  title: {
    default: "Dipta Roy | Procurement & Supply Chain Professional",
    template: "%s | Dipta Roy",
  },

  description:
    "Professional portfolio of Dipta Roy specializing in Procurement, Supply Chain, Strategic Sourcing, Oracle ERP, Cost Optimization, Supplier Management, and Industrial Automation.",

  keywords: [
    "Dipta Roy",
    "Procurement",
    "Supply Chain",
    "Supply Chain Management",
    "Strategic Procurement",
    "Strategic Sourcing",
    "Global Sourcing",
    "Supplier Management",
    "Vendor Management",
    "Oracle ERP",
    "Industrial Automation",
    "PLC",
    "HMI",
    "Bangladesh",
    "Procurement Portfolio",
    "Supply Chain Professional",
  ],

  authors: [
    {
      name: "Dipta Roy",
      url: siteUrl,
    },
  ],

  creator: "Dipta Roy",

  publisher: "Dipta Roy",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dipta Roy Portfolio",

    title: "Dipta Roy | Procurement & Supply Chain Professional",

    description:
      "Procurement & Supply Chain Professional specializing in Strategic Sourcing, Supplier Management, Oracle ERP, Cost Optimization, and Industrial Automation.",

    images: [
      {
        url: "/images/og-image2.png",
        width: 1200,
        height: 630,
        alt: "Dipta Roy – Procurement & Supply Chain Professional Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Dipta Roy | Procurement & Supply Chain Professional",

    description:
      "Procurement & Supply Chain Professional with expertise in Strategic Sourcing, Oracle ERP, Supplier Management, Industrial Automation, PLC, and HMI.",

    images: ["/images/og-image2.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  manifest: "/site.webmanifest",

  category: "Professional Portfolio",

  classification: "Business",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Dipta Roy Portfolio",
  },

  verification: {
    google: "qJoTykuPtpb8_dxWJDmXr-jDs54yLinhqzrLIsxIcqg",
  },

  other: {
    "color-scheme": "dark",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081120",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#081120] text-white antialiased selection:bg-cyan-400/30 selection:text-white`}
      >
        {children}

        <BackToTop />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </body>
    </html>
  );
}