import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://baexol.dev",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
