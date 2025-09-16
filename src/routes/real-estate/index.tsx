import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
	RealScoutAdvancedSearch,
	RealScoutHomeValue,
	RealScoutOfficeListings,
	RealScoutSimpleSearch,
	SearchInterface,
} from "~/components/real-estate";

export default component$(() => {
	const AGENT_ENCODED_ID = "QWdlbnQtMjI1MDUw";

	return (
		<>
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
				<div class="max-w-7xl mx-auto px-4 text-center">
					<h1 class="text-4xl md:text-5xl font-bold mb-6">
						Real Estate Tools & Widgets
					</h1>
					<p class="text-xl text-blue-100 max-w-3xl mx-auto">
						Explore our comprehensive suite of RealScout widgets and property
						search tools designed for Heritage at Stonebridge and surrounding
						Las Vegas areas.
					</p>
				</div>
			</section>

			{/* Main Content */}
			<main class="max-w-7xl mx-auto px-4 py-12">
				{/* Widget Showcase Grid */}
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{/* Simple Search Widget */}
					<div class="bg-white rounded-lg shadow-lg p-6">
						<div class="mb-6">
							<h2 class="text-2xl font-bold text-gray-900 mb-2">
								Simple Search
							</h2>
							<p class="text-gray-600">
								Quick property search with address and basic filters
							</p>
						</div>
						<RealScoutSimpleSearch
							agentEncodedId={AGENT_ENCODED_ID}
							class="min-h-[400px]"
						/>
					</div>

					{/* Advanced Search Widget */}
					<div class="bg-white rounded-lg shadow-lg p-6">
						<div class="mb-6">
							<h2 class="text-2xl font-bold text-gray-900 mb-2">
								Advanced Search
							</h2>
							<p class="text-gray-600">
								Comprehensive search with detailed filters and criteria
							</p>
						</div>
						<RealScoutAdvancedSearch
							agentEncodedId={AGENT_ENCODED_ID}
							class="min-h-[600px]"
						/>
					</div>
				</div>

				{/* Home Value Widget - Full Width */}
				<div class="bg-white rounded-lg shadow-lg p-6 mb-16">
					<div class="mb-6">
						<h2 class="text-2xl font-bold text-gray-900 mb-2">
							Home Value Estimator
						</h2>
						<p class="text-gray-600">
							Get instant home valuations and market analysis - perfect for lead
							generation
						</p>
					</div>
					<RealScoutHomeValue
						agentEncodedId={AGENT_ENCODED_ID}
						class="min-h-[500px]"
					/>
				</div>

				{/* Office Listings Widget - Full Width */}
				<div class="bg-white rounded-lg shadow-lg p-6 mb-16">
					<div class="mb-6">
						<h2 class="text-2xl font-bold text-gray-900 mb-2">
							Office Listings
						</h2>
						<p class="text-gray-600">
							Curated property listings from our office with advanced sorting
							and filtering
						</p>
					</div>
					<RealScoutOfficeListings
						agentEncodedId={AGENT_ENCODED_ID}
						sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
						listingStatus="For Sale"
						propertyTypes="SFR,MF"
						priceMin={500000}
						priceMax={600000}
						class="min-h-[480px]"
					/>
				</div>

				{/* Custom Search Interface */}
				<div class="bg-white rounded-lg shadow-lg p-6">
					<div class="mb-6">
						<h2 class="text-2xl font-bold text-gray-900 mb-2">
							Custom Search Interface
						</h2>
						<p class="text-gray-600">
							Our custom-built search interface with Qwik optimization and
							real-time filtering
						</p>
					</div>
					<SearchInterface />
				</div>

				{/* Widget Information */}
				<div class="mt-16 bg-blue-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold text-gray-900 mb-4">
						About Our Real Estate Tools
					</h3>
					<div class="grid md:grid-cols-2 gap-8">
						<div>
							<h4 class="text-lg font-semibold text-gray-900 mb-3">
								RealScout Integration
							</h4>
							<p class="text-gray-700 mb-4">
								Our widgets are powered by RealScout's advanced MLS integration,
								providing real-time property data, accurate valuations, and
								seamless lead capture.
							</p>
							<ul class="space-y-2 text-gray-700">
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									Real-time MLS data synchronization
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									Advanced search and filtering capabilities
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									Automated lead capture and CRM integration
								</li>
							</ul>
						</div>
						<div>
							<h4 class="text-lg font-semibold text-gray-900 mb-3">
								Performance Optimized
							</h4>
							<p class="text-gray-700 mb-4">
								Built with Qwik's resumable architecture for lightning-fast
								loading and optimal user experience across all devices.
							</p>
							<ul class="space-y-2 text-gray-700">
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									Lazy-loaded widgets for faster page loads
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									Mobile-responsive design
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									SEO-optimized for better search rankings
								</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		</>
	);
});

export const head: DocumentHead = {
	title: "Real Estate Tools & Widgets | Heritage at Stonebridge",
	meta: [
		{
			name: "description",
			content:
				"Explore our comprehensive suite of RealScout widgets, property search tools, and home valuation services for Heritage at Stonebridge and Las Vegas areas.",
		},
		{
			name: "keywords",
			content:
				"RealScout widgets, property search, home valuation, MLS integration, Las Vegas real estate, Heritage at Stonebridge, property tools",
		},
		{
			property: "og:title",
			content: "Real Estate Tools & Widgets | Heritage at Stonebridge",
		},
		{
			property: "og:description",
			content:
				"Explore our comprehensive suite of RealScout widgets, property search tools, and home valuation services for Heritage at Stonebridge and Las Vegas areas.",
		},
		{
			name: "robots",
			content: "index, follow",
		},
	],
};
