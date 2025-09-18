import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const head: DocumentHead = {
  title: "Home Selling Guide Las Vegas | Expert Tips - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Complete home selling guide for Las Vegas real estate. Expert tips on pricing, staging, marketing, and closing. Maximize your home's value with Dr. Jan Duffy's proven strategies.",
    },
    {
      name: "keywords",
      content: "home selling guide Las Vegas, sell home Las Vegas, real estate selling tips, home staging Las Vegas, home pricing strategy, Las Vegas home sales",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Home Selling Guide Las Vegas | Expert Tips",
    },
    {
      property: "og:description",
      content: "Complete home selling guide for Las Vegas real estate with expert tips on pricing, staging, and marketing.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/home-selling-guide",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Home Selling Guide Las Vegas | Expert Tips",
    },
    {
      name: "twitter:description",
      content: "Complete home selling guide for Las Vegas real estate with expert tips on pricing, staging, and marketing.",
    },
  ],
};

export default component$(() => {
  const sellingContent = useSignal("Loading home selling guide...");
  const isLoading = useSignal(true);

  useVisibleTask$(async () => {
    try {
      const systemPrompt = `You are a Las Vegas real estate expert specializing in home selling strategies, market timing, and maximizing property values. Generate comprehensive home selling guides with practical tips and strategies.`;
      
      const userMessage = `Create detailed home selling guide for Las Vegas real estate. Include:
1. Pre-listing preparation and home improvements
2. Pricing strategies and market analysis
3. Home staging tips and presentation
4. Marketing strategies and listing optimization
5. Showings and open house preparation
6. Negotiation strategies and offer evaluation
7. Closing process and timeline
8. Common selling mistakes to avoid
9. Market timing and seasonal considerations
10. Working with real estate agents

Format as JSON with sections: pre_listing_prep, pricing_strategies, home_staging, marketing_strategies, showings_prep, negotiation_tips, closing_process, common_mistakes, market_timing, and agent_guidance.`;

      const content = await generateAIContent(systemPrompt, userMessage);
      
      if (content) {
        try {
          const parsedContent = JSON.parse(content);
          sellingContent.value = `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏠 Pre-Listing Preparation</h2>
                <p class="text-gray-700">${parsedContent.pre_listing_prep || 'Pre-listing preparation guide in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">💰 Pricing Strategies</h2>
                <p class="text-gray-700">${parsedContent.pricing_strategies || 'Pricing strategies being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🎨 Home Staging</h2>
                <p class="text-gray-700">${parsedContent.home_staging || 'Home staging tips being compiled...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📢 Marketing Strategies</h2>
                <p class="text-gray-700">${parsedContent.marketing_strategies || 'Marketing strategies being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏡 Showings Preparation</h2>
                <p class="text-gray-700">${parsedContent.showings_prep || 'Showings preparation being outlined...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🤝 Negotiation Tips</h2>
                <p class="text-gray-700">${parsedContent.negotiation_tips || 'Negotiation tips being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📋 Closing Process</h2>
                <p class="text-gray-700">${parsedContent.closing_process || 'Closing process being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">⚠️ Common Mistakes</h2>
                <p class="text-gray-700">${parsedContent.common_mistakes || 'Common mistakes being identified...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📅 Market Timing</h2>
                <p class="text-gray-700">${parsedContent.market_timing || 'Market timing being evaluated...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🤝 Agent Guidance</h2>
                <p class="text-gray-700">${parsedContent.agent_guidance || 'Agent guidance being compiled...'}</p>
              </div>
            </div>
          `;
        } catch (e) {
          console.error("Failed to parse AI content:", e);
          sellingContent.value = `
            <div class="text-center p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Home Selling Guide</h2>
              <p class="text-gray-600">AI-powered home selling guide temporarily unavailable. Please check back soon for comprehensive selling strategies.</p>
            </div>
          `;
        }
      } else {
        sellingContent.value = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Home Selling Guide</h2>
            <p class="text-gray-600">AI-powered home selling guide temporarily unavailable. Please check back soon for comprehensive selling strategies.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error loading selling guide:", error);
      sellingContent.value = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Home Selling Guide</h2>
          <p class="text-gray-600">Unable to load home selling guide at this time. Please contact Dr. Jan Duffy directly for personalized selling strategies.</p>
        </div>
      `;
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Home Selling Guide
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-purple-100">
            Expert strategies to maximize your home's value and sell quickly
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 702-222-1964
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Selling Content */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          {isLoading.value ? (
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p class="text-gray-600">Generating home selling guide...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={sellingContent.value}></div>
          )}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Home Selling Guide Las Vegas | Expert Tips",
          "description": "Complete home selling guide for Las Vegas real estate with expert tips on pricing, staging, and marketing.",
          "url": "https://heritagestonebridge.com/home-selling-guide",
          "mainEntity": {
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy",
            "telephone": "702-222-1964",
            "email": "DrDuffySells@HeritageStonebridge.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "addressCountry": "US"
            },
            "serviceArea": [
              "Summerlin",
              "Henderson", 
              "Northwest Las Vegas",
              "Red Rock Canyon",
              "Boulder City"
            ]
          }
        })}
      />

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Home Selling Guide"
        subtitle="Call 702-222-1964"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
