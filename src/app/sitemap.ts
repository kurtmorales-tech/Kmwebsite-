import type { MetadataRoute } from "next";

export const revalidate = 1800; // 30 minutes

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kmwebdesign.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/portfolio",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));
}
