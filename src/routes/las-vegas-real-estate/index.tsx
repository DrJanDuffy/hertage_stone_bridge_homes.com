import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
  meta: [
    {
      name: "description",
      content: "Expert Las Vegas real estate services by Dr. Jan Duffy. Specializing in 55+ communities, luxury homes, and active adult living in Summerlin, Henderson, and Northwest Las Vegas. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/las-vegas-real-estate",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "adults-55-plus, luxury-home-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
    },
    {
      property: "og:description",
      content: "Expert Las Vegas real estate services specializing in 55+ communities and luxury homes. Serving Summerlin, Henderson, and Northwest Las Vegas.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/las-vegas-real-estate",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
    },
    {
      name: "twitter:description",
      content: "Expert Las Vegas real estate services specializing in 55+ communities and luxury homes. Serving Summerlin, Henderson, and Northwest Las Vegas.",
    },
  ],
};

export default component$(() => {

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Las Vegas Real Estate
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert real estate services specializing in 55+ communities, luxury homes, and active adult living throughout Las Vegas Valley
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Consultation
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 222-1964
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Overview */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Las Vegas Service Areas</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy provides comprehensive real estate services across the Las Vegas Valley, with specialized expertise in 55+ communities and luxury properties.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Summerlin</h3>
              <p class="text-gray-600 mb-4">Premier master-planned community with luxury homes, golf courses, and resort-style amenities.</p>
              <a href="/summerlin-homes" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Summerlin Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Henderson</h3>
              <p class="text-gray-600 mb-4">Family-friendly community with excellent schools, parks, and diverse housing options.</p>
              <a href="/henderson-real-estate" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Henderson Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Northwest Las Vegas</h3>
              <p class="text-gray-600 mb-4">Growing area with new construction, modern amenities, and convenient access to the Strip.</p>
              <a href="/northwest-las-vegas" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Northwest Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon</h3>
              <p class="text-gray-600 mb-4">Stunning mountain views and luxury communities near Red Rock Canyon National Conservation Area.</p>
              <a href="/red-rock-canyon-communities" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Red Rock Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Boulder City</h3>
              <p class="text-gray-600 mb-4">Historic community near Lake Mead with small-town charm and outdoor recreation.</p>
              <a href="/boulder-city-homes" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Boulder City Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Las Vegas Strip Area</h3>
              <p class="text-gray-600 mb-4">High-rise condos and luxury properties in the heart of Las Vegas entertainment district.</p>
              <a href="/las-vegas-condos" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Strip Condos →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 55+ Communities Focus */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">55+ Communities in Las Vegas</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas offers some of the finest active adult communities in the Southwest, featuring resort-style amenities, golf courses, and vibrant social scenes.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Popular 55+ Communities</h3>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Heritage at Stonebridge - Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Sun City Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Siena - Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  The Ridges - Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Del Webb communities
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Community Amenities</h3>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Championship golf courses
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Resort-style pools and spas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Fitness centers and tennis courts
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Clubhouses and social activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  24/7 security and gated access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Las Vegas Listings */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Las Vegas Listings</h2>
            <p class="text-lg text-gray-600">Explore available properties across the Las Vegas Valley</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF,CND"
            priceMin={300000}
            priceMax={2000000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Las Vegas Real Estate?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              With deep local knowledge and specialized expertise in 55+ communities, Dr. Jan Duffy provides unmatched service throughout the Las Vegas Valley.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏆</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">55+ Community Specialist</h3>
              <p class="text-gray-600">Deep expertise in active adult communities, understanding unique needs and lifestyle preferences.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📍</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Local Market Expert</h3>
              <p class="text-gray-600">Comprehensive knowledge of Las Vegas neighborhoods, market trends, and property values.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🤝</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p class="text-gray-600">Dedicated support throughout the entire buying or selling process with attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Las Vegas Dream Home?</h2>
          <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you navigate the Las Vegas real estate market and find the perfect home in your ideal community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Consultation
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 222-1964
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
