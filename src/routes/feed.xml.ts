import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (requestEvent) => {
  const currentDate = new Date().toISOString();
  
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Heritage at Stonebridge - Real Estate Blog</title>
    <link>https://heritagestonebridge.com/blog/</link>
    <description>Expert insights on Las Vegas real estate, 55+ communities, and luxury living in Summerlin. Stay updated with market trends, community guides, and exclusive property listings.</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="https://heritagestonebridge.com/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://heritagestonebridge.com/images/heritage-stonebridge-logo.jpg</url>
      <title>Heritage at Stonebridge</title>
      <link>https://heritagestonebridge.com/</link>
      <width>144</width>
      <height>144</height>
    </image>
    
    <!-- AI-Powered Blog Posts -->
    <item>
      <title>Las Vegas Real Estate Market Analysis - September 2025</title>
      <link>https://heritagestonebridge.com/market-analysis/</link>
      <guid>https://heritagestonebridge.com/market-analysis/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Comprehensive analysis of the Las Vegas real estate market, including trends in 55+ communities, luxury homes, and Summerlin properties. Expert insights from Dr. Jan Duffy.</description>
      <content:encoded><![CDATA[
        <p>Discover the latest trends in Las Vegas real estate with our comprehensive market analysis. From 55+ communities to luxury homes, get expert insights on Summerlin, Henderson, and Northwest Las Vegas markets.</p>
        <p>Key highlights include rising demand for active adult communities, stable luxury home prices, and continued growth in master-planned communities like Summerlin.</p>
        <img src="https://heritagestonebridge.com/images/las-vegas-market-trends.jpg" alt="Las Vegas Real Estate Market Trends" />
      ]]></content:encoded>
      <category>Market Analysis</category>
      <category>Las Vegas Real Estate</category>
    </item>
    
    <item>
      <title>Neighborhood Insights: Red Rock Canyon Communities</title>
      <link>https://heritagestonebridge.com/neighborhood-insights/</link>
      <guid>https://heritagestonebridge.com/neighborhood-insights/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Explore the premier neighborhoods near Red Rock Canyon, including Heritage at Stonebridge and other luxury 55+ communities with stunning mountain views.</description>
      <content:encoded><![CDATA[
        <p>Red Rock Canyon offers some of Las Vegas's most desirable neighborhoods, combining natural beauty with luxury amenities. Heritage at Stonebridge leads the way in active adult living.</p>
        <p>Discover gated communities, golf course homes, and mountain view properties that define luxury living in this scenic area.</p>
        <img src="https://heritagestonebridge.com/images/red-rock-canyon-neighborhoods.jpg" alt="Red Rock Canyon Neighborhoods" />
      ]]></content:encoded>
      <category>Neighborhood Insights</category>
      <category>Red Rock Canyon</category>
    </item>
    
    <item>
      <title>Luxury Living Guide: 55+ Communities in Summerlin</title>
      <link>https://heritagestonebridge.com/luxury-living-guide/</link>
      <guid>https://heritagestonebridge.com/luxury-living-guide/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Your complete guide to luxury 55+ communities in Summerlin, featuring resort-style amenities, golf courses, and active adult lifestyle options.</description>
      <content:encoded><![CDATA[
        <p>Summerlin's 55+ communities offer unparalleled luxury living with resort-style amenities, championship golf courses, and vibrant social scenes.</p>
        <p>From Heritage at Stonebridge to other premier communities, discover what makes Summerlin the perfect destination for active adults.</p>
        <img src="https://heritagestonebridge.com/images/summerlin-luxury-communities.jpg" alt="Summerlin Luxury 55+ Communities" />
      ]]></content:encoded>
      <category>Luxury Living</category>
      <category>55+ Communities</category>
      <category>Summerlin</category>
    </item>
    
    <item>
      <title>Community Comparison: Gated vs. Non-Gated Communities</title>
      <link>https://heritagestonebridge.com/community-comparison/</link>
      <guid>https://heritagestonebridge.com/community-comparison/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Compare gated and non-gated communities in Las Vegas, including security features, amenities, and lifestyle benefits for active adults.</description>
      <content:encoded><![CDATA[
        <p>Understanding the differences between gated and non-gated communities helps you make the best choice for your lifestyle and security needs.</p>
        <p>Gated communities like Heritage at Stonebridge offer enhanced security, privacy, and exclusive amenities that justify the premium.</p>
        <img src="https://heritagestonebridge.com/images/gated-community-comparison.jpg" alt="Gated vs Non-Gated Community Comparison" />
      ]]></content:encoded>
      <category>Community Comparison</category>
      <category>Gated Communities</category>
    </item>
    
    <item>
      <title>Market Reports: Las Vegas Real Estate Trends</title>
      <link>https://heritagestonebridge.com/market-reports/</link>
      <guid>https://heritagestonebridge.com/market-reports/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Latest market reports covering Las Vegas real estate trends, including price movements, inventory levels, and market predictions for 2025.</description>
      <content:encoded><![CDATA[
        <p>Stay informed with our comprehensive market reports covering all aspects of Las Vegas real estate, from entry-level homes to luxury properties.</p>
        <p>Our reports include detailed analysis of Summerlin, Henderson, Northwest Las Vegas, and Boulder City markets.</p>
        <img src="https://heritagestonebridge.com/images/market-reports-dashboard.jpg" alt="Las Vegas Real Estate Market Reports" />
      ]]></content:encoded>
      <category>Market Reports</category>
      <category>Real Estate Trends</category>
    </item>
    
    <item>
      <title>Community Guides: Henderson Real Estate</title>
      <link>https://heritagestonebridge.com/community-guides/</link>
      <guid>https://heritagestonebridge.com/community-guides/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Complete guide to Henderson real estate, including master-planned communities, amenities, and lifestyle options for active adults.</description>
      <content:encoded><![CDATA[
        <p>Henderson offers diverse real estate options from luxury master-planned communities to established neighborhoods with mature amenities.</p>
        <p>Discover why Henderson is becoming a top choice for active adults seeking quality living in the Las Vegas area.</p>
        <img src="https://heritagestonebridge.com/images/henderson-community-guide.jpg" alt="Henderson Real Estate Community Guide" />
      ]]></content:encoded>
      <category>Community Guides</category>
      <category>Henderson</category>
    </item>
    
    <item>
      <title>Home Selling Guide: Maximize Your Property Value</title>
      <link>https://heritagestonebridge.com/home-selling-guide/</link>
      <guid>https://heritagestonebridge.com/home-selling-guide/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Expert tips for selling your home in Las Vegas, including staging, pricing strategies, and market timing for maximum value.</description>
      <content:encoded><![CDATA[
        <p>Selling your home in Las Vegas requires strategic planning and expert guidance to maximize your property's value and minimize time on market.</p>
        <p>Learn proven strategies for staging, pricing, and marketing your home to attract qualified buyers in today's competitive market.</p>
        <img src="https://heritagestonebridge.com/images/home-selling-strategies.jpg" alt="Home Selling Strategies" />
      ]]></content:encoded>
      <category>Home Selling</category>
      <category>Real Estate Tips</category>
    </item>
    
    <item>
      <title>First Time Buyers: Las Vegas Real Estate Guide</title>
      <link>https://heritagestonebridge.com/first-time-buyers/</link>
      <guid>https://heritagestonebridge.com/first-time-buyers/</guid>
      <pubDate>${currentDate}</pubDate>
      <description>Complete guide for first-time homebuyers in Las Vegas, covering financing, neighborhoods, and the home buying process.</description>
      <content:encoded><![CDATA[
        <p>First-time homebuyers in Las Vegas have unique opportunities to find quality homes in desirable neighborhoods at competitive prices.</p>
        <p>Navigate the home buying process with confidence using our comprehensive guide covering financing, inspections, and closing procedures.</p>
        <img src="https://heritagestonebridge.com/images/first-time-buyer-guide.jpg" alt="First Time Home Buyer Guide" />
      ]]></content:encoded>
      <category>First Time Buyers</category>
      <category>Home Buying</category>
    </item>
    
  </channel>
</rss>`;

  requestEvent.headers.set("Content-Type", "application/rss+xml");
  requestEvent.headers.set("Cache-Control", "public, max-age=1800"); // 30 minutes cache
  requestEvent.send(200, feed);
};
