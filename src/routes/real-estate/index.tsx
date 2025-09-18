import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutAdvancedSearch } from "~/components/real-estate/RealScoutAdvancedSearch";
import { RealScoutSimpleSearch } from "~/components/real-estate/RealScoutSimpleSearch";
import { RealScoutHomeValue } from "~/components/real-estate/RealScoutHomeValue";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Real Estate Tools & Widgets</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our comprehensive suite of RealScout widgets and property search tools designed
            for Heritage at Stonebridge and surrounding Las Vegas areas.
          </p>
        </div>
      </section>

      {/* Dynamic RealScout Content Blocks */}
      <main>
        {/* <DynamicRealScoutGrid config={realEstateContentConfig} /> */}

        {/* RealScout Widgets Grid */}
        <div class="max-w-7xl mx-auto px-4 py-12">
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            {/* Simple Search Widget */}
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Quick Property Search</h3>
              <RealScoutSimpleSearch 
                agentEncodedId="QWdlbnQtMjI1MDUw"
              />
            </div>

            {/* Advanced Search Widget */}
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Advanced Search</h3>
              <RealScoutAdvancedSearch
                agentEncodedId="QWdlbnQtMjI1MDUw"
              />
            </div>
          </div>

          {/* Home Value Widget */}
          <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Get Your Home's Value</h3>
            <RealScoutHomeValue
              agentEncodedId="QWdlbnQtMjI1MDUw"
            />
          </div>

          {/* Office Listings Widget */}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Current Listings</h3>
            <RealScoutOfficeListingsWidget
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
              listingStatus="For Sale"
              propertyTypes="SFR,MF"
              priceMin={500000}
              priceMax={1000000}
            />
          </div>
        </div>

        {/* Widget Information */}
        <div class="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">About Our Real Estate Tools</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-3">RealScout Integration</h4>
              <p class="text-gray-700 mb-4">
                Our widgets are powered by RealScout's advanced MLS integration, providing real-time
                property data, accurate valuations, and seamless lead capture.
              </p>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Real-time MLS data synchronization
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Advanced search and filtering capabilities
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Automated lead capture and CRM integration
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Performance Optimized</h4>
              <p class="text-gray-700 mb-4">
                Built with Qwik's resumable architecture for lightning-fast loading and optimal user
                experience across all devices.
              </p>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Lazy-loaded widgets for faster page loads
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Mobile-responsive design
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  SEO-optimized for better search rankings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Featured Properties"
        subtitle="Call 702-222-1964"
        priceMin="500000"
        priceMax="1000000"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Real Estate Tools & Widgets | Heritage at Stonebridge",
  meta: [
    {
      name: "description",
      content:
        "Explore our comprehensive suite of RealScout widgets, property search tools, and home valuation services for Heritage at Stonebridge and Las Vegas areas.",
    },
    {
      name: "keywords",
      content:
        "RealScout widgets, property search, home valuation, MLS integration, Las Vegas real estate, Heritage at Stonebridge, property tools",
    },
    {
      property: "og:title",
      content: "Real Estate Tools & Widgets | Heritage at Stonebridge",
    },
    {
      property: "og:description",
      content:
        "Explore our comprehensive suite of RealScout widgets, property search tools, and home valuation services for Heritage at Stonebridge and Las Vegas areas.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
};
