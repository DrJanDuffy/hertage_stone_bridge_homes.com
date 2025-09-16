import { component$, useVisibleTask$ } from "@builder.io/qwik";

export interface RealScoutOfficeListingsWidgetProps {
	agentEncodedId: string;
	sortOrder?: string;
	listingStatus?: string;
	propertyTypes?: string;
	priceMin?: number;
	priceMax?: number;
}

export const RealScoutOfficeListingsWidget = component$<RealScoutOfficeListingsWidgetProps>(
	({ agentEncodedId, sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE", listingStatus = "For Sale", propertyTypes = "SFR,MF", priceMin = 500000, priceMax = 600000 }) => {
		useVisibleTask$(() => {
			if (typeof window === "undefined") return;

			// Check if RealScout script is already loaded
			const existingScript = document.querySelector('script[src*="realscout-web-components"]');
			if (existingScript) {
				console.log("RealScout script already loaded");
				return;
			}

			// Load RealScout script
			const script = document.createElement("script");
			script.src = "https://em.realscout.com/widgets/realscout-web-components.umd.js";
			script.type = "module";
			script.async = true;
			
			script.onload = () => {
				console.log("RealScout script loaded successfully");
				// Hide loading message
				setTimeout(() => {
					const loadingEl = document.getElementById("realscout-loading");
					if (loadingEl) {
						loadingEl.style.display = "none";
					}
				}, 1000);
			};
			
			script.onerror = () => {
				console.error("Failed to load RealScout script");
			};
			
			document.head.appendChild(script);

			// Add RealScout styles
			const existingStyle = document.querySelector('style[data-realscout]');
			if (!existingStyle) {
				const style = document.createElement("style");
				style.setAttribute("data-realscout", "true");
				style.textContent = `
					realscout-office-listings {
						--rs-listing-divider-color: rgb(101, 141, 172);
						width: 100%;
						min-height: 400px;
						display: block;
					}
				`;
				document.head.appendChild(style);
			}
		});

		return (
			<div class="min-h-[400px] bg-gray-50 rounded-lg p-8">
				<div id="realscout-loading" class="text-center text-gray-500 mb-4">
					Loading property listings...
				</div>
				<realscout-office-listings
					agent-encoded-id={agentEncodedId}
					sort-order={sortOrder}
					listing-status={listingStatus}
					property-types={propertyTypes}
					price-min={priceMin}
					price-max={priceMax}
					class="w-full"
				></realscout-office-listings>
			</div>
		);
	},
);
