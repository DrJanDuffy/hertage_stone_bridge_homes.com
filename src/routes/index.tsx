import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
	AnimatedAmenities,
	FloatingContactWidget,
	HeroImageCarousel,
	LuxuryHomeCards,
	PriceCalculator,
	SocialProof,
	StickyHeader,
} from "~/components/luxury";
import { RealScoutWidget } from "~/components/real-estate/RealScoutWidget";

export default component$(() => {
	return (
		<>
			{/* Sticky Header */}
			<StickyHeader />

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
							<button
								type="button"
								class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
							>
								Schedule Private Tour
							</button>
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
					<RealScoutWidget
						agentEncodedId="QWdlbnQtMjI1MDUw"
						sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
						listingStatus="For Sale"
						propertyTypes="SFR,MF"
						priceMin="500000"
						priceMax="600000"
					/>
				</div>
			</section>

			{/* Price Calculator */}
			<section class="bg-gray-50 py-16">
				<div class="max-w-7xl mx-auto px-4">
					<PriceCalculator />
				</div>
			</section>

			{/* Luxury Home Cards */}
			<section class="bg-white py-16">
				<div class="max-w-7xl mx-auto px-4">
					<div class="text-center mb-12">
						<h2 class="text-4xl font-bold text-gray-900 mb-4">
							Luxury Home Collections
						</h2>
						<p class="text-xl text-gray-600 max-w-3xl mx-auto">
							Choose from three distinct collections, each designed with luxury
							finishes and modern amenities
						</p>
					</div>
					<LuxuryHomeCards />
				</div>
			</section>

			{/* Animated Amenities */}
			<section
				id="amenities"
				class="bg-gradient-to-br from-blue-50 to-indigo-100 py-16"
			>
				<div class="max-w-7xl mx-auto px-4">
					<div class="text-center mb-12">
						<h2 class="text-4xl font-bold text-gray-900 mb-4">
							Exclusive Gated Community Features & Amenities
						</h2>
						<p class="text-xl text-gray-600 max-w-3xl mx-auto">
							Experience resort-style living with world-class amenities designed
							for active adults
						</p>
					</div>
					<AnimatedAmenities />
				</div>
			</section>

			{/* Social Proof */}
			<section class="bg-white py-16">
				<div class="max-w-7xl mx-auto px-4">
					<SocialProof />
				</div>
			</section>

			{/* Why Choose Heritage */}
			<section class="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
				<div class="max-w-7xl mx-auto px-4">
					<div class="text-center mb-12">
						<h2 class="text-4xl font-bold text-gray-900 mb-4">
							Why Choose Heritage at Stonebridge in 2025
						</h2>
						<p class="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover the perfect blend of luxury, location, and lifestyle
						</p>
					</div>
					<div class="grid md:grid-cols-2 gap-12">
						<div class="bg-white rounded-2xl p-8 shadow-lg">
							<h3 class="text-2xl font-semibold mb-4 text-gray-900">
								Prime Summerlin Location
							</h3>
							<p class="text-gray-700 mb-6 leading-relaxed">
								Nestled in the heart of Summerlin, Heritage at Stonebridge
								offers easy access to world-class shopping, dining,
								entertainment, and healthcare facilities. The community is
								minutes from Red Rock Canyon and the Las Vegas Strip.
							</p>
							<h3 class="text-2xl font-semibold mb-4 text-gray-900">
								Active Adult Lifestyle
							</h3>
							<p class="text-gray-700 leading-relaxed">
								Designed specifically for active adults 55+, our community
								fosters social connections through organized activities, clubs,
								and events. Enjoy a maintenance-free lifestyle with time to
								pursue your passions.
							</p>
						</div>
						<div class="bg-white rounded-2xl p-8 shadow-lg">
							<h3 class="text-2xl font-semibold mb-4 text-gray-900">
								Lennar Quality & Innovation
							</h3>
							<p class="text-gray-700 mb-6 leading-relaxed">
								Built by Lennar, one of America's most trusted homebuilders, our
								homes feature cutting-edge technology, energy-efficient design,
								and premium finishes throughout.
							</p>
							<h3 class="text-2xl font-semibold mb-4 text-gray-900">
								Investment Opportunity
							</h3>
							<p class="text-gray-700 leading-relaxed">
								Summerlin's continued growth and development make Heritage at
								Stonebridge a smart investment choice. Property values have
								shown consistent appreciation in this desirable Las Vegas
								location.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Floating Contact Widget */}
			<FloatingContactWidget />
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
