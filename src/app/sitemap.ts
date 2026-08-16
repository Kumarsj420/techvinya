import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: site.url, changeFrequency: "monthly", priority: 1 },
      { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${site.url}/work`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.7 },
      { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.9 },
    ] satisfies MetadataRoute.Sitemap
  ).map((route) => ({ ...route, lastModified }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
