import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuxuryHomeCards, SocialProof } from "~/components/luxury";

export default component$(() => {
	return (
		<>
			{/* Simple Hero Section */}
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
					<div class="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
						<p class="text-gray-600 text-xl">Hero Image Placeholder</p>
					</div>
				</div>
			</section>

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
						<button
							type="button"
							class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg"
						>
							Schedule Private Tour
						</button>
						<button
							type="button"
							class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg"
						>
							Call (702) 555-1234
						</button>
					</div>
				</div>
			</section>
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
