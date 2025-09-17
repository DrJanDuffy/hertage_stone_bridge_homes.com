import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
	return (
		<footer class="bg-gray-900 text-white">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<h3 class="text-xl font-bold mb-4">Dr. Jan Duffy</h3>
						<p class="text-gray-300 mb-4">
							Las Vegas Real Estate Expert specializing in 55+ communities and
							luxury homes near Red Rock Canyon.
						</p>
						<div class="space-y-2">
							<p class="flex items-center">
								<span class="mr-2">📞</span>
								<a href="tel:702-222-1964" class="hover:text-blue-400">
									702-222-1964
								</a>
							</p>
							<p class="flex items-center">
								<span class="mr-2">✉️</span>
								<a
									href="mailto:DrDuffySells@HeritageStonebridge.com"
									class="hover:text-blue-400"
								>
									DrDuffySells@HeritageStonebridge.com
								</a>
							</p>
							<p class="flex items-center">
								<span class="mr-2">📍</span>
								Las Vegas, Nevada
							</p>
						</div>
					</div>

					{/* Service Areas */}
					<div>
						<h3 class="text-xl font-bold mb-4">Service Areas</h3>
						<ul class="space-y-2 text-gray-300">
							<li>
								<a href="/las-vegas-real-estate" class="hover:text-blue-400">
									Las Vegas Real Estate
								</a>
							</li>
							<li>
								<a href="/summerlin-homes" class="hover:text-blue-400">
									Summerlin Homes
								</a>
							</li>
							<li>
								<a
									href="/red-rock-canyon-communities"
									class="hover:text-blue-400"
								>
									Red Rock Canyon Communities
								</a>
							</li>
							<li>
								<a href="/henderson-real-estate" class="hover:text-blue-400">
									Henderson Real Estate
								</a>
							</li>
							<li>
								<a href="/northwest-las-vegas" class="hover:text-blue-400">
									Northwest Las Vegas
								</a>
							</li>
							<li>
								<a href="/boulder-city-homes" class="hover:text-blue-400">
									Boulder City Homes
								</a>
							</li>
						</ul>
					</div>

					{/* Property Types */}
					<div>
						<h3 class="text-xl font-bold mb-4">Property Types</h3>
						<ul class="space-y-2 text-gray-300">
							<li>
								<a href="/55-plus-communities" class="hover:text-blue-400">
									55+ Communities
								</a>
							</li>
							<li>
								<a href="/active-adult-communities" class="hover:text-blue-400">
									Active Adult Communities
								</a>
							</li>
							<li>
								<a href="/luxury-homes" class="hover:text-blue-400">
									Luxury Homes
								</a>
							</li>
							<li>
								<a href="/gated-communities" class="hover:text-blue-400">
									Gated Communities
								</a>
							</li>
							<li>
								<a href="/golf-course-homes" class="hover:text-blue-400">
									Golf Course Homes
								</a>
							</li>
							<li>
								<a href="/mountain-view-homes" class="hover:text-blue-400">
									Mountain View Homes
								</a>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 class="text-xl font-bold mb-4">Resources</h3>
						<ul class="space-y-2 text-gray-300 mb-6">
							<li>
								<a href="/market-reports" class="hover:text-blue-400">
									Las Vegas Market Reports
								</a>
							</li>
							<li>
								<a href="/community-guides" class="hover:text-blue-400">
									Community Guides
								</a>
							</li>
							<li>
								<a href="/home-selling-guide" class="hover:text-blue-400">
									Home Selling Guide
								</a>
							</li>
							<li>
								<a href="/first-time-buyers" class="hover:text-blue-400">
									First Time Buyers
								</a>
							</li>
							<li>
								<a href="/testimonials" class="hover:text-blue-400">
									Client Testimonials
								</a>
							</li>
						</ul>

						{/* Social Media */}
						<div class="space-y-2">
							<h4 class="font-semibold">Follow Dr. Jan Duffy</h4>
							<div class="flex space-x-4">
								<a
									href="https://www.facebook.com/DrJanDuffyRealEstate"
									class="text-gray-300 hover:text-blue-400"
									aria-label="Facebook"
								>
									📘
								</a>
								<a
									href="https://www.linkedin.com/in/drjanduffy"
									class="text-gray-300 hover:text-blue-400"
									aria-label="LinkedIn"
								>
									💼
								</a>
								<a
									href="https://www.instagram.com/drjanduffylasvegas"
									class="text-gray-300 hover:text-blue-400"
									aria-label="Instagram"
								>
									📷
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div class="border-t border-gray-700 mt-8 pt-8">
					<div class="flex flex-col md:flex-row justify-between items-center">
						<div class="text-gray-400 text-sm mb-4 md:mb-0">
							<p>
								&copy; 2025 Dr. Jan Duffy, Nevada Real Estate License #S.0197614
							</p>
							<p>
								Licensed Real Estate Professional serving Las Vegas & Summerlin
							</p>
						</div>
						<div class="flex space-x-6 text-sm">
							<a
								href="/privacy-policy"
								class="text-gray-400 hover:text-blue-400"
							>
								Privacy Policy
							</a>
							<a
								href="/terms-of-service"
								class="text-gray-400 hover:text-blue-400"
							>
								Terms of Service
							</a>
							<a href="/sitemap" class="text-gray-400 hover:text-blue-400">
								Sitemap
							</a>
						</div>
					</div>

					{/* SEO Keywords Footer */}
					<div class="mt-6 text-xs text-gray-500 leading-relaxed">
						<p>
							Dr. Jan Duffy is a Las Vegas real estate expert specializing in
							55+ communities, active adult living, luxury homes, and gated
							communities in Summerlin, Red Rock Canyon, Henderson, and
							Northwest Las Vegas. Serving clients in Del Webb communities, Sun
							City, Siena, The Ridges, and all premier Nevada retirement
							communities.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
});
