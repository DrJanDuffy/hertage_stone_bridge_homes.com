import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
  meta: [
    {
      name: "description",
      content: "Discover Northwest Las Vegas real estate with Dr. Jan Duffy. Growing area with new construction, modern amenities, and convenient access to the Strip. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/northwest-las-vegas",
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
      content: "Northwest Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
    },
    {
      property: "og:description",
      content: "Discover Northwest Las Vegas real estate in growing area with new construction and modern amenities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/northwest-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
    },
    {
      name: "twitter:description",
      content: "Discover Northwest Las Vegas real estate in growing area with new construction and modern amenities.",
    },
  ],
};

export default component$(() => {

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Northwest Las Vegas Real Estate
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the growing Northwest Las Vegas area with new construction, modern amenities, and convenient access to the Strip
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Schedule Northwest Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Northwest Las Vegas Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Northwest Las Vegas?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Northwest Las Vegas is one of the fastest-growing areas in the valley, offering new construction homes, modern amenities, and excellent value for money with convenient access to the Strip.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏗️</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">New Construction</h3>
              <p class="text-gray-600">Modern homes with the latest features, designs, and energy-efficient systems</p>
            </div>
            
            <div class="text-center">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🚗</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Convenient Access</h3>
              <p class="text-gray-600">Easy access to the Las Vegas Strip, downtown, and major highways</p>
            </div>
            
            <div class="text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">💰</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Great Value</h3>
              <p class="text-gray-600">More home for your money compared to established areas</p>
            </div>
            
            <div class="text-center">
              <div class="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📈</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Growth Potential</h3>
              <p class="text-gray-600">Rapidly developing area with increasing property values</p>
            </div>
          </div>
        </div>
      </section>

      {/* Northwest Las Vegas Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Northwest Las Vegas Communities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Northwest Las Vegas's diverse neighborhoods, from master-planned communities to new construction developments.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Skye Canyon</h3>
              <p class="text-gray-600 mb-4">Master-planned community with outdoor recreation, parks, and modern amenities.</p>
              <a href="/skye-canyon-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Skye Canyon Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Centennial Hills</h3>
              <p class="text-gray-600 mb-4">Established community with parks, schools, and convenient shopping.</p>
              <a href="/centennial-hills-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Centennial Hills Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Aliante</h3>
              <p class="text-gray-600 mb-4">Master-planned community with golf course, parks, and family amenities.</p>
              <a href="/aliante-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Aliante Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Tule Springs</h3>
              <p class="text-gray-600 mb-4">New development with modern homes and community amenities.</p>
              <a href="/tule-springs-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Tule Springs Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Desert Shores</h3>
              <p class="text-gray-600 mb-4">Waterfront community with lakes, parks, and recreational facilities.</p>
              <a href="/desert-shores-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Desert Shores Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">North Las Vegas</h3>
              <p class="text-gray-600 mb-4">Growing area with new construction and affordable housing options.</p>
              <a href="/north-las-vegas-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View North Las Vegas Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Focus */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">New Construction in Northwest Las Vegas</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Northwest Las Vegas is home to numerous new construction developments offering modern homes with the latest features and designs.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">New Construction Benefits</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Latest building codes and safety features
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Energy-efficient systems and appliances
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Modern floor plans and open designs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Warranty coverage on major systems
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Customization options available
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Popular Builders</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Lennar - Modern homes with smart features
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Pulte Homes - Quality construction and design
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  KB Home - Affordable new construction
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Richmond American - Customizable floor plans
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Toll Brothers - Luxury new construction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Northwest Las Vegas Listings */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Northwest Las Vegas Listings</h2>
            <p class="text-lg text-gray-600">Explore available homes in Northwest Las Vegas's growing communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF"
            priceMin={250000}
            priceMax={1500000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy for Northwest Las Vegas */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Northwest Las Vegas Real Estate?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              With comprehensive knowledge of Northwest Las Vegas's growing communities and new construction developments, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏆</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Northwest Specialist</h3>
              <p class="text-gray-600">Deep expertise in Northwest Las Vegas communities and new construction developments.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏗️</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">New Construction Expert</h3>
              <p class="text-gray-600">Specialized knowledge of new construction processes and builder relationships.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🤝</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p class="text-gray-600">Dedicated support throughout your Northwest Las Vegas home buying journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gradient-to-br from-purple-600 to-purple-800 py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Northwest Las Vegas Dream Home?</h2>
          <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Northwest Las Vegas's growing communities.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Schedule Northwest Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Northwest Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="250000"
        priceMax="1500000"
      />
    </>
  );
});
