import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const StickyHeader = component$(() => {
	const isVisible = useSignal(false);

	useVisibleTask$(() => {
		const handleScroll = () => {
			isVisible.value = window.scrollY > 100;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div
			class={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				isVisible.value
					? "translate-y-0 opacity-100"
					: "-translate-y-full opacity-0"
			}`}
		>
			<div class="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
				<div class="max-w-7xl mx-auto px-4 py-3">
					<div class="flex items-center justify-between">
						{/* Logo/Brand */}
						<div class="flex items-center space-x-3">
							<div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
								<span class="text-white font-bold text-lg">H</span>
							</div>
							<div>
								<div class="font-bold text-gray-900">
									Heritage at Stonebridge
								</div>
								<div class="text-xs text-gray-600">Luxury 55+ Living</div>
							</div>
						</div>

						{/* Agent Contact Info */}
						<div class="flex items-center space-x-6">
							<div class="hidden md:flex items-center space-x-4">
								<div class="text-right">
									<div class="text-sm font-semibold text-gray-900">
										Janet Duffy
									</div>
									<div class="text-xs text-gray-600">
										Licensed Real Estate Agent
									</div>
								</div>
								<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
									<span class="text-white font-semibold text-sm">JD</span>
								</div>
							</div>

							{/* Contact Buttons */}
							<div class="flex items-center space-x-3">
								<a
									href="tel:+17025551234"
									class="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
								>
									<svg
										class="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<span class="hidden sm:inline">Call Now</span>
								</a>

								<a
									href="mailto:janet@heritagestonebridge.com"
									class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
								>
									<svg
										class="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<span class="hidden sm:inline">Email</span>
								</a>

								<button
									type="button"
									class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
								>
									Schedule Tour
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
