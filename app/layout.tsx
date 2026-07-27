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

  title: {
    default: "Dipta Roy | Procurement & Supply Chain Professional",
    template: "%s | Dipta Roy",
  },

  description:
    "Explore the professional portfolio of Dipta Roy, a Procurement & Supply Chain Professional with expertise in strategic sourcing, supplier management, Oracle ERP, industrial automation, and procurement process optimization.",

  keywords: [
    "Dipta Roy",
    "Procurement",
    "Supply Chain",
    "Strategic Procurement",
    "Strategic Sourcing",
    "Global Sourcing",
    "Supplier Management",
    "Vendor Management",
    "Industrial Automation",
    "Oracle ERP",
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

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
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
      "Engineering Precision. Procurement Excellence.",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dipta Roy Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Dipta Roy | Procurement & Supply Chain Professional",

    description:
      "Engineering Precision. Procurement Excellence.",

    images: ["/images/og-image.png"],

    // Replace with your real X username
    // creator: "@yourusername",
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
        className={`${inter.className} bg-[#081120] text-white antialiased`}
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