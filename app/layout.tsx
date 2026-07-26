import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { personStructuredData } from "@/lib/structuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://diptaroy0.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Dipta Roy | Procurement & Supply Chain Professional",
    template: "%s | Dipta Roy",
  },

  description:
    "Portfolio of Dipta Roy, a Procurement & Supply Chain Professional specializing in Strategic Procurement, Industrial Automation, Oracle ERP, Global Sourcing and Supplier Management.",

  keywords: [
    "Dipta Roy",
    "Procurement",
    "Supply Chain",
    "Strategic Procurement",
    "Strategic Sourcing",
    "Industrial Automation",
    "Oracle ERP",
    "PLC",
    "HMI",
    "Vendor Management",
    "Global Sourcing",
    "Bangladesh",
  ],

  authors: [
    {
      name: "Dipta Roy",
      url: siteUrl,
    },
  ],

  creator: "Dipta Roy",

  publisher: "Dipta Roy",

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
    title: "Dipta Roy | Procurement & Supply Chain Professional",
    description:
      "Engineering Precision. Procurement Excellence.",

    siteName: "Dipta Roy Portfolio",

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
    creator: "@yourusername",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081120",
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