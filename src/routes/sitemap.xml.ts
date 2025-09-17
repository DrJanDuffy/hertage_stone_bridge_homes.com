import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (requestEvent) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Main pages sitemap -->
    <sitemap>
        <loc>https://heritagestonebridge.com/sitemap-pages.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
    
    <!-- Images sitemap -->
    <sitemap>
        <loc>https://heritagestonebridge.com/sitemap-images.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
    
    <!-- Property listings sitemap (if dynamic) -->
    <sitemap>
        <loc>https://heritagestonebridge.com/sitemap-properties.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
</sitemapindex>`;

  requestEvent.headers.set("Content-Type", "application/xml");
  requestEvent.headers.set("Cache-Control", "public, max-age=3600");
  requestEvent.send(200, sitemap);
};
