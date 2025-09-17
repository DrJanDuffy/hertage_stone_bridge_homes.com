import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  // Inject JSON-LD structured data
  useTask$(() => {
    if (typeof document !== 'undefined') {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Dr. Jan Duffy",
        "email": "DrDuffySells@HeritageStonebridge.com",
        "telephone": "+1-702-222-1964",
        "url": "https://heritagestonebridge.com",
        "image": "https://heritagestonebridge.com/images/dr-jan-duffy.jpg",
        "description": "Licensed Real Estate Professional specializing in 55+ communities and luxury homes in Las Vegas, Summerlin, and Red Rock Canyon areas.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Heritage at Stonebridge",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89138",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "36.1699",
          "longitude": "-115.1398"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Las Vegas",
            "containedInPlace": {
              "@type": "State",
              "name": "Nevada"
            }
          },
          {
            "@type": "City", 
            "name": "Summerlin",
            "containedInPlace": {
              "@type": "State",
              "name": "Nevada"
            }
          }
        ],
        "knowsAbout": [
          "55+ Communities",
          "Active Adult Living",
          "Luxury Homes",
          "Gated Communities",
          "Red Rock Canyon Real Estate",
          "Summerlin Real Estate"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Real Estate Consultation",
              "description": "Professional real estate services for 55+ communities"
            }
          }
        ],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Real Estate License",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Nevada Real Estate Division"
          },
          "identifier": "S.0197614"
        }
      });

      const residentialComplexScript = document.createElement('script');
      residentialComplexScript.type = 'application/ld+json';
      residentialComplexScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ResidentialComplex",
        "name": "Heritage at Stonebridge",
        "description": "Luxury 55+ active adult community in Summerlin, Las Vegas featuring resort-style amenities and stunning mountain views.",
        "url": "https://heritagestonebridge.com",
        "image": "https://heritagestonebridge.com/images/heritage-stonebridge.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Heritage at Stonebridge",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89138",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "36.1699",
          "longitude": "-115.1398"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Resort-Style Pool",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification", 
            "name": "Golf Course Access",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "24/7 Security",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Gated Community",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Mountain Views",
            "value": true
          }
        ],
        "numberOfUnits": "500+",
        "developer": {
          "@type": "Organization",
          "name": "Heritage at Stonebridge Development"
        },
        "propertyType": "55+ Active Adult Community",
        "ageRestriction": "55+",
        "hasMap": "https://www.google.com/maps/place/Heritage+at+Stonebridge"
      });

      document.head.appendChild(schemaScript);
      document.head.appendChild(residentialComplexScript);
    }
  });

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
