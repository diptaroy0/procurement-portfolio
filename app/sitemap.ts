import type { MetadataRoute } from "next";

const baseUrl = "https://diptaroy0.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified:"2026-07-29",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}