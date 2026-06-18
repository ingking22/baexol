import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://baexol.dev/sitemap.xml",
    host: "https://baexol.dev",
  };
}
