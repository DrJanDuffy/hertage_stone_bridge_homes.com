import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "Boulder City Homes for Sale | Dr. Jan Duffy - Historic Community Near Lake Mead",
  meta: [
    {
      name: "description",
      content: "Discover Boulder City homes for sale with Dr. Jan Duffy. Historic community near Lake Mead with small-town charm, outdoor recreation, and unique character. Call 702-222-1964.",
    },
    {
      name: "keywords",
      content: "Boulder City homes for sale, Boulder City real estate, Boulder City realtor, Dr Jan Duffy Boulder City, Lake Mead homes, historic Boulder City",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/boulder-city-homes",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "outdoor-enthusiasts, historic-home-buyers",
    },
    {
      name: "location",
      content: "Boulder City, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Boulder City Homes for Sale | Dr. Jan Duffy - Historic Community Near Lake Mead",
    },
    {
      property: "og:description",
      content: "Discover Boulder City homes for sale in historic community near Lake Mead with small-town charm and outdoor recreation.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/boulder-city-homes",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Boulder City Homes for Sale | Dr. Jan Duffy - Historic Community Near Lake Mead",
    },
    {
      name: "twitter:description",
      content: "Discover Boulder City homes for sale in historic community near Lake Mead with small-town charm and outdoor recreation.",
    },
  ],
};

export default component$(() => {
  useTask$(() => {
    // Add structured data for Boulder City real estate
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "City",
      "name": "Boulder City",
      "description": "Historic community near Lake Mead with small-town charm, outdoor recreation, and unique character",
      "url": "https://heritagestonebridge.com/boulder-city-homes",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Lake Mead",
          "value": "Access to Lake Mead National Recreation Area"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Historic District",
          "value": "Historic downtown with unique shops and restaurants"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Outdoor Recreation",
          "value": "Hiking, boating, fishing, and water sports"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Small Town Charm",
          "value": "Close-knit community with friendly atmosphere"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Boulder City Homes for Sale
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover historic Boulder City, a charming community near Lake Mead with small-town character and outdoor recreation
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Schedule Boulder City Tour
            </a>
            <a href="tel:702-222-1964" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 222-1964
            </a>
          </div>
        </div>
      </section>

      {/* Boulder City Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Boulder City?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Boulder City offers a unique blend of historic charm, outdoor recreation, and small-town community feel, all while being just 30 minutes from Las Vegas.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏛️</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Historic Charm</h3>
              <p class="text-gray-600">Historic downtown district with unique shops, restaurants, and architecture</p>
            </div>
            
            <div class="text-center">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏞️</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Lake Mead Access</h3>
              <p class="text-gray-600">Direct access to Lake Mead National Recreation Area for water sports</p>
            </div>
            
            <div class="text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🤝</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Small Town Feel</h3>
              <p class="text-gray-600">Close-knit community with friendly neighbors and local events</p>
            </div>
            
            <div class="text-center">
              <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🚗</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Easy Access</h3>
              <p class="text-gray-600">Just 30 minutes from Las Vegas Strip and McCarran Airport</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boulder City Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Boulder City Neighborhoods</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Boulder City's diverse neighborhoods, from historic downtown to newer developments with mountain views.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Historic Downtown</h3>
              <p class="text-gray-600 mb-4">Charming historic district with unique shops, restaurants, and original Hoover Dam worker homes.</p>
              <a href="/boulder-city-downtown" class="text-teal-600 hover:text-teal-800 font-semibold">View Downtown Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Eldorado Valley</h3>
              <p class="text-gray-600 mb-4">Newer development with modern homes and mountain views.</p>
              <a href="/eldorado-valley-homes" class="text-teal-600 hover:text-teal-800 font-semibold">View Eldorado Valley Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Lake Mead Estates</h3>
              <p class="text-gray-600 mb-4">Luxury homes with lake views and private boat access.</p>
              <a href="/lake-mead-estates" class="text-teal-600 hover:text-teal-800 font-semibold">View Lake Mead Estates →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Sunrise Hills</h3>
              <p class="text-gray-600 mb-4">Established neighborhood with mature trees and mountain views.</p>
              <a href="/sunrise-hills-homes" class="text-teal-600 hover:text-teal-800 font-semibold">View Sunrise Hills Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Boulder Creek Golf Course</h3>
              <p class="text-gray-600 mb-4">Golf course community with luxury homes and resort amenities.</p>
              <a href="/boulder-creek-golf" class="text-teal-600 hover:text-teal-800 font-semibold">View Golf Course Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Desert Hills</h3>
              <p class="text-gray-600 mb-4">Custom homes with desert landscaping and mountain views.</p>
              <a href="/desert-hills-homes" class="text-teal-600 hover:text-teal-800 font-semibold">View Desert Hills Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Outdoor Recreation in Boulder City</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Boulder City is a paradise for outdoor enthusiasts, with easy access to Lake Mead, hiking trails, and recreational activities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Lake Mead Recreation</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Boating and water sports
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Fishing for bass, catfish, and stripers
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Swimming and beach access
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Kayaking and paddleboarding
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Scenic lake cruises
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Hiking & Outdoor Activities</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  River Mountains Loop Trail
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Historic Railroad Trail
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Gold Strike Hot Springs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Mountain biking trails
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Rock climbing opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Boulder City Listings */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Boulder City Listings</h2>
            <p class="text-lg text-gray-600">Explore available homes in Boulder City's charming communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF"
            priceMin={200000}
            priceMax={1500000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy for Boulder City */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Boulder City Real Estate?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              With deep knowledge of Boulder City's unique character, historic properties, and outdoor recreation opportunities, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏛️</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Historic Property Specialist</h3>
              <p class="text-gray-600">Expert knowledge of Boulder City's historic homes and unique character properties.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏞️</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Outdoor Recreation Expert</h3>
              <p class="text-gray-600">Understanding of Lake Mead access, hiking trails, and recreational amenities.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🤝</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Community Knowledge</h3>
              <p class="text-gray-600">Deep understanding of Boulder City's small-town charm and local amenities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gradient-to-br from-teal-600 to-teal-800 py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Boulder City Dream Home?</h2>
          <p class="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Boulder City's historic and charming community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Schedule Boulder City Tour
            </a>
            <a href="tel:702-222-1964" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 222-1964
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Boulder City Listings"
        subtitle="Call 702-222-1964"
        priceMin="200000"
        priceMax="1500000"
      />
    </>
  );
});
