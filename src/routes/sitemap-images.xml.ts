import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (requestEvent) => {
  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        
    <!-- Homepage Images -->
    <url>
        <loc>https://heritagestonebridge.com/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/heritage-stonebridge-hero.jpg</image:loc>
            <image:title>Heritage at Stonebridge - Luxury 55+ Community Entrance</image:title>
            <image:caption>Beautiful gated entrance to Heritage at Stonebridge community in Summerlin, Las Vegas</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/stonebridge-amenities.jpg</image:loc>
            <image:title>Resort-Style Amenities at Heritage at Stonebridge</image:title>
            <image:caption>Luxury amenities including clubhouse, pool, and fitness center</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/red-rock-canyon-view.jpg</image:loc>
            <image:title>Red Rock Canyon Views from Heritage at Stonebridge</image:title>
            <image:caption>Stunning mountain views of Red Rock Canyon National Conservation Area</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
    </url>
    
    <!-- 55+ Communities Images -->
    <url>
        <loc>https://heritagestonebridge.com/55-plus-communities/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/55-plus-community-lifestyle.jpg</image:loc>
            <image:title>Active Adult Lifestyle in Las Vegas 55+ Communities</image:title>
            <image:caption>Residents enjoying active lifestyle in premier 55+ communities</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/community-activities.jpg</image:loc>
            <image:title>Community Activities and Social Events</image:title>
            <image:caption>Residents participating in community activities and social events</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
    </url>
    
    <!-- Stonebridge Homes Images -->
    <url>
        <loc>https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/stonebridge-homes-exterior.jpg</image:loc>
            <image:title>Heritage at Stonebridge Homes for Sale</image:title>
            <image:caption>Luxury single-family homes in Heritage at Stonebridge community</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/home-interior.jpg</image:loc>
            <image:title>Stonebridge Home Interior Design</image:title>
            <image:caption>Modern interior design and luxury finishes in Stonebridge homes</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
    </url>
    
    <!-- Summerlin Homes Images -->
    <url>
        <loc>https://heritagestonebridge.com/summerlin-homes/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/summerlin-master-plan.jpg</image:loc>
            <image:title>Summerlin Master-Planned Community</image:title>
            <image:caption>Beautiful master-planned community with golf courses and amenities</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/summerlin-golf-course.jpg</image:loc>
            <image:title>Golf Course Living in Summerlin</image:title>
            <image:caption>Homes with golf course views in Summerlin, Las Vegas</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
    </url>
    
    <!-- Luxury Homes Images -->
    <url>
        <loc>https://heritagestonebridge.com/luxury-homes/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/luxury-home-exterior.jpg</image:loc>
            <image:title>Luxury Homes in Las Vegas</image:title>
            <image:caption>High-end luxury homes with premium finishes and features</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/luxury-kitchen.jpg</image:loc>
            <image:title>Luxury Kitchen Design</image:title>
            <image:caption>Gourmet kitchens with high-end appliances and custom finishes</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
    </url>
    
</urlset>`;

  requestEvent.headers.set("Content-Type", "application/xml");
  requestEvent.headers.set("Cache-Control", "public, max-age=1800"); // 30 minutes cache
  requestEvent.send(200, sitemap);
};
