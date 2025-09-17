import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="relative">
        <div class="max-w-7xl mx-auto px-4 py-8">
          <div class="text-center mb-8">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Heritage at Stonebridge
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Luxury 55+ Active Adult Living in the Heart of Summerlin, Las Vegas
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener"
                class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
              >
                Schedule Private Tour
              </a>
              <button
                type="button"
                class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
              >
                View Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Content Sections */}
      <section class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Luxury Living Awaits</h2>
            <p class="text-lg text-gray-600">Experience the finest in 55+ active adult living</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold mb-2">Resort-Style Pool</h3>
              <p class="text-gray-600">Luxurious pool area with cabanas</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold mb-2">Golf Course Access</h3>
              <p class="text-gray-600">Premium golf courses nearby</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold mb-2">24/7 Security</h3>
              <p class="text-gray-600">Gated community with security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Experience Luxury Living?</h2>
          <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a private tour of Heritage at Stonebridge and discover why this is the perfect
            place for your next chapter.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center"
            >
              Schedule Private Tour
            </a>
            <button
              type="button"
              class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg"
            >
              Call (702) 222-1964
            </button>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Discover luxury 55+ active adult communities near Red Rock Canyon in Summerlin, Las Vegas. Heritage at Stonebridge offers gated living, resort amenities & stunning mountain views. Dr. Jan Duffy, your 55+ specialist - Call 702-222-1964",
    },
    {
      name: "keywords",
      content:
        "Las Vegas 55+ communities, Red Rock Canyon homes, Summerlin active adult, Heritage Stonebridge, Dr Jan Duffy, 55+ realtor Las Vegas, active adult communities Nevada",
    },
    // Enhanced Meta Tags for AI & Search Engine Understanding
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "bingbot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    // Canonical URL
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/",
    },
    // AI-Friendly Content Tags
    {
      name: "content-type",
      content: "real-estate-community",
    },
    {
      name: "audience",
      content: "adults-55-plus",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      name: "community-type",
      content: "active-adult-gated-community",
    },
    // Open Graph for social sharing
    {
      property: "og:title",
      content: "Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge",
    },
    {
      property: "og:description",
      content:
        "Discover luxury 55+ active adult communities near Red Rock Canyon. Heritage at Stonebridge offers gated living, resort amenities & mountain views in Summerlin.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com",
    },
    {
      property: "og:site_name",
      content: "Heritage at Stonebridge",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    // Local SEO
    {
      name: "geo.region",
      content: "US-NV",
    },
    {
      name: "geo.placename",
      content: "Las Vegas, Nevada",
    },
    {
      name: "geo.position",
      content: "36.1699;-115.1398",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@heritage_stonebridge",
    },
    {
      name: "twitter:title",
      content: "Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge",
    },
    {
      name: "twitter:description",
      content:
        "Discover luxury 55+ active adult communities near Red Rock Canyon. Heritage at Stonebridge offers gated living, resort amenities & mountain views in Summerlin.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Dr. Jan Duffy",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com",
    },
  ],
};
