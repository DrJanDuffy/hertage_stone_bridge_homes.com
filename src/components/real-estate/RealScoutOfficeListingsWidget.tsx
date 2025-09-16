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

			useVisibleTask$(() => {
				if (typeof window === "undefined") return;

				// Check if custom element is already defined
				if (customElements.get("realscout-office-listings")) {
					console.log("RealScout custom element already defined");
					isScriptLoaded.value = true;
					return;
				}

				// Wait for custom elements to be defined
				customElements
					.whenDefined("realscout-office-listings")
					.then(() => {
						console.log("RealScout custom element defined");
						isScriptLoaded.value = true;
					})
					.catch((error) => {
						console.error("Error waiting for RealScout custom element:", error);
					});

				// Debug: Check if realscout-office-listings is defined
				console.log(
					"Checking if realscout-office-listings is defined:",
					customElements.get("realscout-office-listings"),
				);
			});

			return (
				<div class="min-h-[400px] bg-gray-50 rounded-lg p-8">
					{!isScriptLoaded.value && (
						<div class="text-center text-gray-500 mb-4">
							Loading property listings...
						</div>
					)}
					{isScriptLoaded.value && (
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
