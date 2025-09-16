import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export default component$(() => {

	return (
		<>
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
				<div class="max-w-7xl mx-auto px-4 text-center">
					<h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
						Heritage at Stonebridge Homes for Sale | Luxury 55+ Summerlin
						Community
					</h1>
					<p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
						Discover the perfect blend of luxury living and active adult
						lifestyle in Las Vegas's most sought-after gated community.
					</p>
					<div class="flex justify-center space-x-8">
						<a
							href="/real-estate"
							class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
						>
							View Available Homes
						</a>
						<a
							href="#amenities"
							class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
						>
							Explore Amenities
						</a>
					</div>
				</div>
			</section>

			{/* RealScout Office Listings */}
			<section class="bg-white py-16">
				<div class="max-w-7xl mx-auto px-4">
					<div class="text-center mb-8">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">
							Available Homes in Heritage at Stonebridge
						</h2>
						<p class="text-lg text-gray-600">
							Discover our latest listings in this exclusive gated community
						</p>
					</div>
					<RealScoutOfficeListingsWidget
						agentEncodedId="QWdlbnQtMjI1MDUw"
						sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
						listingStatus="For Sale"
						propertyTypes="SFR,MF"
						priceMin={500000}
						priceMax={600000}
					/>
				</div>
			</section>

			{/* Main Content */}
			<main class="max-w-7xl mx-auto px-4 py-16">
				<section class="mb-16">
					<h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">
						Discover Single-Story Living in Las Vegas's Premier Active Adult
						Community
					</h2>
					<div class="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<p class="text-lg text-gray-700 mb-6">
								Heritage at Stonebridge offers an unparalleled 55+ lifestyle in
								the heart of Summerlin, Las Vegas's most prestigious
								master-planned community. Our single-story homes are designed
								for comfort, convenience, and luxury living.
							</p>
							<ul class="space-y-3 text-gray-700">
								<li class="flex items-center">
									<span class="text-green-500 mr-3">✓</span>
									Single-story floor plans perfect for active adults
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-3">✓</span>
									Luxury finishes and modern amenities
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-3">✓</span>
									Gated community with 24/7 security
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-3">✓</span>
									Prime Summerlin location near shopping and dining
								</li>
							</ul>
						</div>
						<div class="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
							<span class="text-gray-500">Community Image Placeholder</span>
						</div>
					</div>
				</section>

				<section class="mb-16">
					<h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">
						Lennar New Construction Homes Starting from $X
					</h3>
					<div class="grid md:grid-cols-3 gap-8">
						<div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
							<h4 class="text-xl font-semibold mb-4">The Heritage</h4>
							<p class="text-gray-600 mb-4">Starting from $650,000</p>
							<ul class="text-sm text-gray-700 space-y-2">
								<li>• 2,100 - 2,400 sq ft</li>
								<li>• 2-3 Bedrooms</li>
								<li>• 2-3 Bathrooms</li>
								<li>• 2-Car Garage</li>
							</ul>
							<button
								type="button"
								class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
							>
								Learn More
							</button>
						</div>
						<div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
							<h4 class="text-xl font-semibold mb-4">The Stonebridge</h4>
							<p class="text-gray-600 mb-4">Starting from $750,000</p>
							<ul class="text-sm text-gray-700 space-y-2">
								<li>• 2,500 - 2,800 sq ft</li>
								<li>• 3-4 Bedrooms</li>
								<li>• 2-3 Bathrooms</li>
								<li>• 3-Car Garage</li>
							</ul>
							<button
								type="button"
								class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
							>
								Learn More
							</button>
						</div>
						<div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
							<h4 class="text-xl font-semibold mb-4">The Signature</h4>
							<p class="text-gray-600 mb-4">Starting from $850,000</p>
							<ul class="text-sm text-gray-700 space-y-2">
								<li>• 2,800 - 3,200 sq ft</li>
								<li>• 3-4 Bedrooms</li>
								<li>• 3-4 Bathrooms</li>
								<li>• 3-Car Garage</li>
							</ul>
							<button
								type="button"
								class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
							>
								Learn More
							</button>
						</div>
					</div>
				</section>

				<section id="amenities" class="mb-16">
					<h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">
						Exclusive Gated Community Features & Amenities
					</h3>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div class="text-center p-6">
							<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span class="text-2xl">🏊</span>
							</div>
							<h4 class="text-xl font-semibold mb-2">Resort-Style Pool</h4>
							<p class="text-gray-600">
								Luxurious pool area with cabanas and spa facilities
							</p>
						</div>
						<div class="text-center p-6">
							<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span class="text-2xl">🏌️</span>
							</div>
							<h4 class="text-xl font-semibold mb-2">Golf Course Access</h4>
							<p class="text-gray-600">
								Premium golf courses within minutes of your home
							</p>
						</div>
						<div class="text-center p-6">
							<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span class="text-2xl">🏃</span>
							</div>
							<h4 class="text-xl font-semibold mb-2">Fitness Center</h4>
							<p class="text-gray-600">
								State-of-the-art fitness facilities and classes
							</p>
						</div>
						<div class="text-center p-6">
							<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span class="text-2xl">🎾</span>
							</div>
							<h4 class="text-xl font-semibold mb-2">Tennis Courts</h4>
							<p class="text-gray-600">
								Professional-grade tennis courts and pickleball
							</p>
						</div>
						<div class="text-center p-6">
							<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span class="text-2xl">🍽️</span>
							</div>
							<h4 class="text-xl font-semibold mb-2">Clubhouse</h4>
							<p class="text-gray-600">
								Elegant clubhouse for events and social gatherings
							</p>
						</div>
						<div class="text-center p-6">
							<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span class="text-2xl">🛡️</span>
							</div>
							<h4 class="text-xl font-semibold mb-2">24/7 Security</h4>
							<p class="text-gray-600">
								Gated entrance with professional security services
							</p>
						</div>
					</div>
				</section>

				<section class="mb-16">
					<h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">
						Why Choose Heritage at Stonebridge in 2025
					</h3>
					<div class="grid md:grid-cols-2 gap-12">
						<div>
							<h4 class="text-2xl font-semibold mb-4">
								Prime Summerlin Location
							</h4>
							<p class="text-gray-700 mb-6">
								Nestled in the heart of Summerlin, Heritage at Stonebridge
								offers easy access to world-class shopping, dining,
								entertainment, and healthcare facilities. The community is
								minutes from Red Rock Canyon and the Las Vegas Strip.
							</p>
							<h4 class="text-2xl font-semibold mb-4">
								Active Adult Lifestyle
							</h4>
							<p class="text-gray-700">
								Designed specifically for active adults 55+, our community
								fosters social connections through organized activities, clubs,
								and events. Enjoy a maintenance-free lifestyle with time to
								pursue your passions.
							</p>
						</div>
						<div>
							<h4 class="text-2xl font-semibold mb-4">
								Lennar Quality & Innovation
							</h4>
							<p class="text-gray-700 mb-6">
								Built by Lennar, one of America's most trusted homebuilders, our
								homes feature cutting-edge technology, energy-efficient design,
								and premium finishes throughout.
							</p>
							<h4 class="text-2xl font-semibold mb-4">
								Investment Opportunity
							</h4>
							<p class="text-gray-700">
								Summerlin's continued growth and development make Heritage at
								Stonebridge a smart investment choice. Property values have
								shown consistent appreciation in this desirable Las Vegas
								location.
							</p>
						</div>
					</div>
				</section>

				{/* Call to Action */}
				<section class="bg-blue-50 rounded-lg p-12 text-center">
					<h2 class="text-3xl font-bold text-gray-900 mb-4">
						Ready to Find Your Dream Home?
					</h2>
					<p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
						Schedule a private tour of Heritage at Stonebridge and discover why
						this is the perfect place for your next chapter.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/real-estate"
							class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
						>
							View Available Homes
						</a>
						<a
							href="tel:+17025551234"
							class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
						>
							Call (702) 555-1234
						</a>
					</div>
				</section>
			</main>
		</>
	);
});

export const head: DocumentHead = {
	title:
		"Heritage at Stonebridge Homes for Sale | Luxury 55+ Summerlin Community",
	meta: [
		{
			name: "description",
			content:
				"Discover luxury 55+ living at Heritage at Stonebridge in Summerlin, Las Vegas. Single-story Lennar homes starting from $650K with resort-style amenities, gated security, and prime location.",
		},
		{
			name: "keywords",
			content:
				"Heritage at Stonebridge, Summerlin homes for sale, 55+ community Las Vegas, active adult community, Lennar homes Summerlin, gated community Las Vegas, luxury homes Summerlin",
		},
		{
			property: "og:title",
			content:
				"Heritage at Stonebridge Homes for Sale | Luxury 55+ Summerlin Community",
		},
		{
			property: "og:description",
			content:
				"Discover luxury 55+ living at Heritage at Stonebridge in Summerlin, Las Vegas. Single-story Lennar homes with resort-style amenities and prime location.",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
		{
			name: "twitter:title",
			content:
				"Heritage at Stonebridge Homes for Sale | Luxury 55+ Summerlin Community",
		},
		{
			name: "twitter:description",
			content:
				"Discover luxury 55+ living at Heritage at Stonebridge in Summerlin, Las Vegas. Single-story Lennar homes with resort-style amenities.",
		},
		{
			name: "robots",
			content: "index, follow",
		},
		{
			name: "author",
			content: "Heritage at Stonebridge",
		},
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1.0",
		},
	],
	links: [
		{
			rel: "canonical",
			href: "https://heritagestonebridge.com/",
		},
	],
};
