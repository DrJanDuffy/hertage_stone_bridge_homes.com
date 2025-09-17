import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer";
import {
	AnimatedAmenities,
	FloatingContactWidget,
	HeroImageCarousel,
	LuxuryHomeCards,
	PriceCalculator,
	SocialProof,
	StickyHeader,
} from "~/components/luxury";
import {
	RealScoutAmenitiesWidget,
	RealScoutHeroWidget,
	RealScoutPremiumWidget,
	RealScoutStickyWidget,
} from "~/components/real-estate";
import { AICrawlerDetection } from "~/components/seo";

export default component$(() => {
	// Inject Enhanced Local Business Schema for AI Understanding
	useTask$(() => {
		if (typeof document !== "undefined") {
			const localBusinessSchema = {
				"@context": "https://schema.org",
				"@type": "RealEstateAgent",
				name: "Dr. Jan Duffy - Las Vegas Real Estate Expert",
				description:
					"Las Vegas Real Estate Expert specializing in 55+ communities, luxury homes, and active adult living near Red Rock Canyon.",
				url: "https://heritagestonebridge.com",
				telephone: "702-222-1964",
				email: "DrDuffySells@HeritageStonebridge.com",
				image: "https://heritagestonebridge.com/images/dr-jan-duffy.jpg",
				priceRange: "$$$$",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Crossbridge Dr",
					addressLocality: "Las Vegas",
					addressRegion: "NV",
					postalCode: "89138",
					addressCountry: "US",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: "36.1699",
					longitude: "-115.1398",
				},
				areaServed: [
					{
						"@type": "City",
						name: "Las Vegas, Nevada",
					},
					{
						"@type": "City",
						name: "Summerlin, Nevada",
					},
					{
						"@type": "Place",
						name: "Red Rock Canyon Area",
					},
				],
				serviceType: [
					"55+ Community Sales",
					"Active Adult Communities",
					"Luxury Home Sales",
					"Real Estate Consultation",
				],
				openingHours: "Mo-Su 08:00-20:00",
				sameAs: [
					"https://www.facebook.com/DrJanDuffyRealEstate",
					"https://www.linkedin.com/in/drjanduffy",
					"https://www.instagram.com/drjanduffylasvegas",
				],
				// Enhanced AI-friendly properties
				knowsAbout: [
					"55+ Active Adult Communities",
					"Heritage at Stonebridge",
					"Summerlin Real Estate",
					"Red Rock Canyon Homes",
					"Luxury Home Sales",
					"Gated Communities",
					"Active Adult Living",
					"Las Vegas Retirement Communities",
				],
				makesOffer: {
					"@type": "Offer",
					itemOffered: {
						"@type": "Accommodation",
						name: "55+ Active Adult Homes",
						description:
							"Single-story homes in gated community with resort-style amenities",
					},
				},
				hasCredential: {
					"@type": "EducationalOccupationalCredential",
					name: "Nevada Real Estate License",
					credentialCategory: "Real Estate License",
					recognizedBy: {
						"@type": "Organization",
						name: "Nevada Real Estate Division",
					},
				},
			};

			// Add Heritage at Stonebridge Community Schema
			const communitySchema = {
				"@context": "https://schema.org",
				"@type": "ResidentialComplex",
				name: "Heritage at Stonebridge",
				description:
					"Premier 55+ active adult community in Summerlin, Las Vegas with resort-style amenities",
				url: "https://heritagestonebridge.com",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Crossbridge Dr",
					addressLocality: "Las Vegas",
					addressRegion: "NV",
					postalCode: "89138",
					addressCountry: "US",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: "36.1699",
					longitude: "-115.1398",
				},
				amenityFeature: [
					{
						"@type": "AmenityFeature",
						name: "Clubhouse",
						description:
							"8,000 square foot clubhouse with fitness center and social areas",
					},
					{
						"@type": "AmenityFeature",
						name: "Swimming Pool",
						description: "Resort-style swimming pool with spa area",
					},
					{
						"@type": "AmenityFeature",
						name: "Pickleball Courts",
						description: "Multiple pickleball courts for active recreation",
					},
					{
						"@type": "AmenityFeature",
						name: "Fitness Center",
						description:
							"State-of-the-art fitness center with cardio and strength training",
					},
					{
						"@type": "AmenityFeature",
						name: "Walking Trails",
						description:
							"Scenic walking and biking trails throughout the community",
					},
				],
				numberOfUnits: 421,
				priceRange: "$489,000 - $800,000+",
				developer: {
					"@type": "Organization",
					name: "Lennar Homes",
				},
				propertyType: "55+ Active Adult Community",
				ageRestriction: "55+",
				hasMap: "https://maps.google.com/?q=36.1699,-115.1398",
			};

			// Inject RealEstateAgent schema
			const script1 = document.createElement("script");
			script1.type = "application/ld+json";
			script1.textContent = JSON.stringify(localBusinessSchema);
			document.head.appendChild(script1);

			// Inject ResidentialComplex schema
			const script2 = document.createElement("script");
			script2.type = "application/ld+json";
			script2.textContent = JSON.stringify(communitySchema);
			document.head.appendChild(script2);
		}
	});

	return (
		<>
			{/* AI Crawler Detection */}
			<AICrawlerDetection />

			{/* Sticky Header */}
			<StickyHeader />

			{/* Floating Contact Widget */}
			<FloatingContactWidget />

			{/* Sticky Side Panel Widget - Appears after 15 seconds */}
			<RealScoutStickyWidget
				agentEncodedId="QWdlbnQtMjI1MDUw"
				sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
				listingStatus="For Sale"
				propertyTypes="SFR,MF"
				priceMin="600000"
				priceMax="900000"
				title="Exclusive Listings"
				subtitle="Schedule Private Tour"
			/>

			{/* Hero Image Carousel */}
			<section class="relative">
				<div class="max-w-7xl mx-auto px-4 py-8">
					<div class="text-center mb-8">
						<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
							Heritage at Stonebridge
						</h1>
						<p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
							Luxury 55+ Active Adult Living in the Heart of Summerlin, Las
							Vegas
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
					<HeroImageCarousel />
				</div>
			</section>

			{/* RealScout Widget #1: Featured New Construction Homes - Below Hero */}
			<RealScoutHeroWidget
				agentEncodedId="QWdlbnQtMjI1MDUw"
				sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
				listingStatus="For Sale"
				propertyTypes="SFR,MF"
				priceMin="500000"
				priceMax="800000"
				title="Featured New Construction Homes"
				subtitle="See What's Available Now"
			/>

			{/* Simple Content Sections */}
			<section class="bg-gray-50 py-16">
				<div class="max-w-7xl mx-auto px-4">
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">
							Luxury Living Awaits
						</h2>
						<p class="text-lg text-gray-600">
							Experience the finest in 55+ active adult living
						</p>
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

			{/* Luxury Home Cards */}
			<section class="py-16">
				<div class="max-w-7xl mx-auto px-4">
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">
							Available Homes
						</h2>
						<p class="text-lg text-gray-600">
							Discover our latest luxury homes in Heritage at Stonebridge
						</p>
					</div>
					<LuxuryHomeCards />
				</div>
			</section>

			{/* Price Calculator */}
			<section class="bg-gray-50 py-16">
				<div class="max-w-7xl mx-auto px-4">
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">
							Calculate Your Monthly Payment
						</h2>
						<p class="text-lg text-gray-600">
							Get an instant estimate for your dream home
						</p>
					</div>
					<PriceCalculator />
				</div>
			</section>

			{/* Animated Amenities */}
			<section class="py-16">
				<div class="max-w-7xl mx-auto px-4">
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">
							Resort-Style Amenities
						</h2>
						<p class="text-lg text-gray-600">
							Experience luxury living with world-class amenities
						</p>
					</div>
					<AnimatedAmenities />
				</div>
			</section>

			{/* RealScout Widget #2: Luxury Resale Opportunities - After Amenities */}
			<RealScoutAmenitiesWidget
				agentEncodedId="QWdlbnQtMjI1MDUw"
				sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
				listingStatus="For Sale"
				propertyTypes="SFR,MF"
				priceMin="650000"
				priceMax="1000000"
				title="Luxury Resale Opportunities"
				subtitle="Browse Exclusive Listings"
			/>

			{/* Social Proof */}
			<section class="py-16">
				<div class="max-w-7xl mx-auto px-4">
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">
							What Our Residents Say
						</h2>
					</div>
					<SocialProof />
				</div>
			</section>

			{/* RealScout Widget #3: Premium Estate Homes - Before Final CTA */}
			<RealScoutPremiumWidget
				agentEncodedId="QWdlbnQtMjI1MDUw"
				sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
				listingStatus="For Sale"
				propertyTypes="SFR,MF"
				priceMin="700000"
				priceMax="1200000"
				title="Premium Estate Homes"
				subtitle="Exclusive Luxury Properties"
			/>

			{/* Call to Action */}
			<section class="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
				<div class="max-w-7xl mx-auto px-4 text-center">
					<h2 class="text-3xl font-bold text-white mb-4">
						Ready to Experience Luxury Living?
					</h2>
					<p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
						Schedule a private tour of Heritage at Stonebridge and discover why
						this is the perfect place for your next chapter.
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
							Call (702) 555-1234
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</>
	);
});

export const head: DocumentHead = {
	title:
		"Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge - Dr. Jan Duffy",
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
			content:
				"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
		},
		{
			name: "googlebot",
			content:
				"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
		},
		{
			name: "bingbot",
			content:
				"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
			content:
				"Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge",
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
			content:
				"Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge",
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
