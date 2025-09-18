import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (requestEvent) => {
  const currentDate = new Date().toISOString();
  
  // Pull content from Simplifying the Market RSS feed
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Simplifying the Market - Real Estate Insights</title>
    <link>https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18</link>
    <description>Expert real estate market analysis and insights from Simplifying the Market, curated for Las Vegas real estate professionals and clients.</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="https://heritagestonebridge.com/feed-simplifying-market.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://heritagestonebridge.com/images/simplifying-market-logo.jpg</url>
      <title>Simplifying the Market</title>
      <link>https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18</link>
      <width>144</width>
      <height>144</height>
    </image>
    
    <!-- Curated Content from Simplifying the Market -->
    <item>
      <title>Why Now May Be a Key 2025 Moment To Sell Your House</title>
      <link>https://www.simplifyingthemarket.com/en/2025/09/17/why-now-may-be-a-key-2025-moment-to-sell-your-house?a=956758-ef2edda2f940e018328655620ea05f18</link>
      <guid>https://www.simplifyingthemarket.com/en/2025/09/17/why-now-may-be-a-key-2025-moment-to-sell-your-house?a=956758-ef2edda2f940e018328655620ea05f18</guid>
      <pubDate>Wed, 17 Sep 2025 10:30:00 +0000</pubDate>
      <description>Mortgage rates are finally heading in the right direction – and buyers are starting to jump back in. According to the data, buyer demand picked up considerably once mortgage rates hit a new low for 2025.</description>
      <content:encoded><![CDATA[
        <p>Mortgage rates are finally heading in the right direction – and buyers are starting to jump back in.</p>
        <p>According to the data, buyer demand picked up considerably once mortgage rates hit a new low for 2025. The Mortgage Bankers Association (MBA) reports that applications for home loans were up 23% compared to the first week of September last year.</p>
        <p>If you've been waiting to sell, or your listing recently expired because the market was slower than you hoped it would be, now's the time to reconsider your move. Buyer demand is the highest it's been since July – and you don't want to miss this window.</p>
        <img src="https://heritagestonebridge.com/images/mortgage-rates-trend.jpg" alt="Mortgage Rates Trend Chart" />
        <p>The 30-year mortgage rate dropped to 6.13% earlier this week. And that's the lowest it had been since October 2024. That decline followed weak job growth and other economic indicators that are fueling speculation the Federal Reserve may cut the Federal Funds Rate multiple times this year.</p>
      ]]></content:encoded>
      <category>Market Analysis</category>
      <category>Mortgage Rates</category>
      <category>Selling Tips</category>
    </item>
    
    <item>
      <title>What a Fed Rate Cut Could Mean for Mortgage Rates</title>
      <link>https://www.simplifyingthemarket.com/en/2025/09/15/what-a-fed-rate-cut-could-mean-for-mortgage-rates?a=956758-ef2edda2f940e018328655620ea05f18</link>
      <guid>https://www.simplifyingthemarket.com/en/2025/09/15/what-a-fed-rate-cut-could-mean-for-mortgage-rates?a=956758-ef2edda2f940e018328655620ea05f18</guid>
      <pubDate>Mon, 15 Sep 2025 10:30:00 +0000</pubDate>
      <description>The Federal Reserve (the Fed) meets this week, and expectations are high that they'll cut the Federal Funds Rate. But does that mean mortgage rates will drop?</description>
      <content:encoded><![CDATA[
        <p>The Federal Reserve (the Fed) meets this week, and expectations are high that they'll cut the Federal Funds Rate. But does that mean mortgage rates will drop? Let's clear up the confusion.</p>
        <p>The Fed doesn't directly set mortgage rates. Right now, all eyes are on the Fed. Most economists expect they'll cut the Federal Funds Rate at their mid-September meeting to try to head off a potential recession.</p>
        <img src="https://heritagestonebridge.com/images/fed-rate-cut-chart.jpg" alt="Federal Reserve Rate Cut Expectations" />
        <p>According to the CME FedWatch Tool, markets are already betting on it. There's virtually a 100% chance of a September cut. And based on what we know now, there's about a 92% chance it'll be a small cut (25 basis points) and an 8% chance it will be a bigger cut (50 basis points).</p>
      ]]></content:encoded>
      <category>Mortgage Rates</category>
      <category>Economy</category>
      <category>Federal Reserve</category>
    </item>
    
    <item>
      <title>Patience Won't Sell Your House. Pricing Will.</title>
      <link>https://www.simplifyingthemarket.com/en/2025/09/11/patience-wont-sell-your-house-pricing-will?a=956758-ef2edda2f940e018328655620ea05f18</link>
      <guid>https://www.simplifyingthemarket.com/en/2025/09/11/patience-wont-sell-your-house-pricing-will?a=956758-ef2edda2f940e018328655620ea05f18</guid>
      <pubDate>Wed, 11 Sep 2025 10:30:00 +0000</pubDate>
      <description>Waiting for the perfect buyer to fall in love with your house? In today's market, that's usually not what's holding things up.</description>
      <content:encoded><![CDATA[
        <p>Waiting for the perfect buyer to fall in love with your house? In today's market, that's usually not what's holding things up. And here's why.</p>
        <p>Let's be real. Homes are taking a week longer to sell than they did a year ago. According to Realtor.com: "Homes are also taking longer to sell. The typical home spent 60 days on the market in August, seven days longer than last year."</p>
        <img src="https://heritagestonebridge.com/images/home-pricing-strategy.jpg" alt="Home Pricing Strategy Chart" />
        <p>The key to selling in today's market isn't patience – it's pricing. When homes are priced correctly from the start, they sell faster and for better prices.</p>
      ]]></content:encoded>
      <category>Selling Tips</category>
      <category>Pricing Strategy</category>
      <category>Market Timing</category>
    </item>
    
    <item>
      <title>What Everyone's Getting Wrong About the Rise in New Home Inventory</title>
      <link>https://www.simplifyingthemarket.com/en/2025/08/28/what-everyones-getting-wrong-about-the-rise-in-new-home-inventory?a=956758-ef2edda2f940e018328655620ea05f18</link>
      <guid>https://www.simplifyingthemarket.com/en/2025/08/28/what-everyones-getting-wrong-about-the-rise-in-new-home-inventory?a=956758-ef2edda2f940e018328655620ea05f18</guid>
      <pubDate>Thu, 28 Aug 2025 10:30:00 +0000</pubDate>
      <description>You may have seen talk online that new home inventory is at its highest level since the crash. But here's what you need to remember: a lot of what you see online is designed to get clicks.</description>
      <content:encoded><![CDATA[
        <p>You may have seen talk online that new home inventory is at its highest level since the crash. And if you lived through the crash back in 2008, seeing new construction is up again may feel a little scary.</p>
        <p>But here's what you need to remember: a lot of what you see online is designed to get clicks. So, you may not be getting the full story. A closer look at the data and a little expert insight can change your perspective completely.</p>
        <img src="https://heritagestonebridge.com/images/new-home-inventory-chart.jpg" alt="New Home Inventory vs 2008 Comparison" />
        <p>While it's true the number of new homes on the market hit its highest level since the crash, that's not a reason to worry. That's because new builds are just one piece of the puzzle. They don't tell the full story of what's happening today.</p>
      ]]></content:encoded>
      <category>New Construction</category>
      <category>Market Analysis</category>
      <category>Inventory</category>
    </item>
    
    <item>
      <title>History Shows the Housing Market Always Recovers</title>
      <link>https://www.simplifyingthemarket.com/en/2025/08/27/history-shows-the-housing-market-always-recovers?a=956758-ef2edda2f940e018328655620ea05f18</link>
      <guid>https://www.simplifyingthemarket.com/en/2025/08/27/history-shows-the-housing-market-always-recovers?a=956758-ef2edda2f940e018328655620ea05f18</guid>
      <pubDate>Wed, 27 Aug 2025 10:30:00 +0000</pubDate>
      <description>Now that the market is slowing down, homeowners who haven't sold at the price they were hoping for are increasingly pulling their homes off the market.</description>
      <content:encoded><![CDATA[
        <p>Now that the market is slowing down, homeowners who haven't sold at the price they were hoping for are increasingly pulling their homes off the market. According to the latest data from Realtor.com, the number of homeowners taking their homes off the market is up 38% since the start of this year and 48% since the same time last June.</p>
        <p>This isn't the first time the housing market has experienced a slowdown. Here are some other notable times when home sales dropped significantly:</p>
        <img src="https://heritagestonebridge.com/images/housing-market-recovery-chart.jpg" alt="Housing Market Recovery History" />
        <ul>
          <li><strong>1980s:</strong> When mortgage rates climbed past 18%, buyers stopped cold. Sales crawled for years. But as soon as rates came down, sales surged back, and the market found its footing again.</li>
          <li><strong>2008:</strong> The Great Financial Crisis was one of the toughest housing downturns in history. Sales and prices both dropped hard. Still, sales rebounded once the economy recovered.</li>
          <li><strong>2020:</strong> During COVID, sales disappeared overnight, and many people had to put their plans on hold. Yet the recovery was faster than anyone expected, with a surge of buyers re-entering the market as soon as restrictions eased.</li>
        </ul>
        <p>The lesson is clear: no matter the cause, the market always rebounds.</p>
      ]]></content:encoded>
      <category>Market Recovery</category>
      <category>Historical Analysis</category>
      <category>Forecasts</category>
    </item>
    
  </channel>
</rss>`;

  requestEvent.headers.set("Content-Type", "application/rss+xml");
  requestEvent.headers.set("Cache-Control", "public, max-age=1800"); // 30 minutes cache
  requestEvent.send(200, feed);
};
