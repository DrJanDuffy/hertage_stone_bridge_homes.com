import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export interface RealScoutOfficeListingsWidgetProps {
	agentEncodedId: string;
	sortOrder?: string;
	listingStatus?: string;
	propertyTypes?: string;
	priceMin?: number;
	priceMax?: number;
}

export const RealScoutOfficeListingsWidget =
	component$<RealScoutOfficeListingsWidgetProps>(
		({
			agentEncodedId,
			sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
			listingStatus = "For Sale",
			propertyTypes = "SFR,MF",
			priceMin = 500000,
			priceMax = 600000,
		}) => {
			const isScriptLoaded = useSignal(false);
			const hasError = useSignal(false);
			const errorMessage = useSignal("");

			useVisibleTask$(() => {
				if (typeof window === "undefined") return;

				console.log("🔍 RealScout Debug: Starting widget initialization");

				// 1) Check if script loaded
				const scriptElement = document.querySelector(
					'script[src*="realscout-web-components"]',
				);
				console.log(
					"📜 RealScout Debug: Script element found:",
					!!scriptElement,
				);
				if (scriptElement) {
					console.log(
						"📜 RealScout Debug: Script src:",
						scriptElement.getAttribute("src"),
					);
				}

				// 2) Check if customElements.get('realscout-office-listings') returns anything
				const customElement = customElements.get("realscout-office-listings");
				console.log(
					"🧩 RealScout Debug: Custom element definition:",
					customElement,
				);

				if (customElement) {
					console.log(
						"✅ RealScout Debug: Custom element already defined, widget ready",
					);
					isScriptLoaded.value = true;
					return;
				}

				console.log(
					"⏳ RealScout Debug: Custom element not yet defined, waiting...",
				);

				// Set up timeout fallback (10 seconds)
				const timeoutId = setTimeout(() => {
					console.error(
						"⏰ RealScout Debug: Timeout reached - widget failed to load within 10 seconds",
					);
					hasError.value = true;
					errorMessage.value =
						"RealScout widget failed to load. Please refresh the page or contact support.";
				}, 10000);

				// Wait for custom elements to be defined
				customElements
					.whenDefined("realscout-office-listings")
					.then(() => {
						console.log(
							"✅ RealScout Debug: Custom element successfully defined",
						);
						clearTimeout(timeoutId);
						isScriptLoaded.value = true;
					})
					.catch((error) => {
						// 3) Log any errors in the whenDefined promise
						console.error(
							"❌ RealScout Debug: Error waiting for custom element:",
							error,
						);
						console.error("❌ RealScout Debug: Error details:", {
							name: error.name,
							message: error.message,
							stack: error.stack,
						});
						clearTimeout(timeoutId);
						hasError.value = true;
						errorMessage.value = `RealScout widget error: ${error.message}`;
					});

				// Additional debugging: Check specific RealScout elements
				const realScoutElements = [
					"realscout-office-listings",
					"realscout-simple-search",
					"realscout-advanced-search",
					"realscout-home-value",
				];
				realScoutElements.forEach((el) => {
					console.log(
						`🔍 RealScout Debug: ${el} defined:`,
						!!customElements.get(el),
					);
				});

				// Check if RealScout script is in the DOM
				const allScripts = Array.from(document.querySelectorAll("script")).map(
					(s) => s.src,
				);
				console.log("📜 RealScout Debug: All script sources:", allScripts);
			});

			return (
				<div class="min-h-[400px] bg-gray-50 rounded-lg p-8">
					{hasError.value ? (
						<div class="text-center text-red-600 mb-4 p-4 bg-red-50 rounded-lg">
							<div class="font-semibold mb-2">⚠️ Widget Loading Error</div>
							<div class="text-sm mb-4">{errorMessage.value}</div>
							<button
								type="button"
								onClick$={() => window.location.reload()}
								class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
							>
								Refresh Page
							</button>
						</div>
					) : !isScriptLoaded.value ? (
						<div class="text-center text-gray-500 mb-4">
							<div class="animate-pulse">Loading property listings...</div>
							<div class="text-xs text-gray-400 mt-2">
								Check browser console for debug info
							</div>
						</div>
					) : (
						<realscout-office-listings
							agent-encoded-id={agentEncodedId}
							sort-order={sortOrder}
							listing-status={listingStatus}
							property-types={propertyTypes}
							price-min={priceMin}
							price-max={priceMax}
							class="w-full"
						></realscout-office-listings>
					)}
				</div>
			);
		},
	);
