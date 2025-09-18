import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "Henderson Real Estate | Dr. Jan Duffy - Family-Friendly Communities",
  meta: [
    {
      name: "description",
      content: "Discover Henderson real estate with Dr. Jan Duffy. Family-friendly community with excellent schools, parks, and diverse housing options. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/henderson-real-estate",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "families, luxury-home-buyers",
    },
    {
      name: "location",
      content: "Henderson, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Henderson Real Estate | Dr. Jan Duffy - Family-Friendly Communities",
    },
    {
      property: "og:description",
      content: "Discover Henderson real estate in family-friendly community with excellent schools and diverse housing options.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/henderson-real-estate",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Henderson Real Estate | Dr. Jan Duffy - Family-Friendly Communities",
    },
    {
      name: "twitter:description",
      content: "Discover Henderson real estate in family-friendly community with excellent schools and diverse housing options.",
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
            Henderson Real Estate
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover family-friendly living in Henderson, Nevada's second-largest city with excellent schools, parks, and diverse housing options
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Henderson Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 222-1964
            </a>
          </div>
        </div>
      </section>

      {/* Henderson Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Henderson?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Henderson offers the perfect blend of suburban charm and urban convenience, with excellent schools, beautiful parks, and diverse housing options for every lifestyle.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🎓</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Excellent Schools</h3>
              <p class="text-gray-600">Top-rated public and private schools with strong academic programs</p>
            </div>
            
            <div class="text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🌳</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Beautiful Parks</h3>
              <p class="text-gray-600">Numerous parks, trails, and recreational facilities throughout the city</p>
            </div>
            
            <div class="text-center">
              <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏪</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Shopping & Dining</h3>
              <p class="text-gray-600">Galleria at Sunset, The District, and diverse dining options</p>
            </div>
            
            <div class="text-center">
              <div class="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏥</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
              <p class="text-gray-600">St. Rose Dominican Hospital and Henderson Hospital for quality care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Henderson Communities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Henderson's diverse neighborhoods, from master-planned communities to established areas with unique character and amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Green Valley</h3>
              <p class="text-gray-600 mb-4">Established community with mature trees, parks, and excellent schools.</p>
              <a href="/green-valley-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Green Valley Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Anthem</h3>
              <p class="text-gray-600 mb-4">Master-planned community with golf courses, parks, and resort amenities.</p>
              <a href="/anthem-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Anthem Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">MacDonald Ranch</h3>
              <p class="text-gray-600 mb-4">Luxury community with custom homes and golf course access.</p>
              <a href="/macdonald-ranch-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View MacDonald Ranch Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Seven Hills</h3>
              <p class="text-gray-600 mb-4">Gated community with luxury homes and mountain views.</p>
              <a href="/seven-hills-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Seven Hills Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Inspirada</h3>
              <p class="text-gray-600 mb-4">Modern master-planned community with contemporary homes and amenities.</p>
              <a href="/inspirada-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Inspirada Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Sun City Anthem</h3>
              <p class="text-gray-600 mb-4">Premier 55+ community with golf courses and resort-style amenities.</p>
              <a href="/sun-city-anthem" class="text-blue-600 hover:text-blue-800 font-semibold">View Sun City Anthem Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 55+ Communities in Henderson */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">55+ Active Adult Communities in Henderson</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Henderson offers several premier active adult communities designed for the 55+ lifestyle, featuring resort-style amenities and vibrant social scenes.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Sun City Anthem</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Multiple golf courses and driving ranges
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Recreation centers with pools and spas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Arts and crafts studios
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Social clubs and activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Healthcare facilities on-site
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Other 55+ Communities</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Solera at Anthem - Luxury active adult living
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Regency at Seven Hills - Gated community
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Heritage at Inspirada - Modern 55+ living
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Del Webb communities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Various age-restricted neighborhoods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Henderson Listings */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Henderson Listings</h2>
            <p class="text-lg text-gray-600">Explore available homes in Henderson's diverse communities</p>
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

      {/* Why Choose Dr. Jan Duffy for Henderson */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Henderson Real Estate?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              With comprehensive knowledge of Henderson's communities and specialized expertise in 55+ active adult living, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏆</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Henderson Specialist</h3>
              <p class="text-gray-600">Deep expertise in Henderson's neighborhoods, schools, and community amenities.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">55+ Community Expert</h3>
              <p class="text-gray-600">Specialized knowledge of active adult communities and their unique requirements.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🤝</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p class="text-gray-600">Dedicated support throughout your Henderson home buying or selling journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Henderson Dream Home?</h2>
          <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Henderson's family-friendly community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Henderson Tour
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
        title="Henderson Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
