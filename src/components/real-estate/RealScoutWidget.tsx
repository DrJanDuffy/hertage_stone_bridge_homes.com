import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export interface RealScoutWidgetProps {
	agentEncodedId: string;
	widgetType?: "search" | "listing" | "contact";
	className?: string;
}

export const RealScoutWidget = component$<RealScoutWidgetProps>(
	({ agentEncodedId, widgetType = "search", className = "" }) => {
		const isLoaded = useSignal(false);
		const hasError = useSignal(false);
		const errorMessage = useSignal("");

		useVisibleTask$(({ track }) => {
			track(() => agentEncodedId);
			track(() => widgetType);

			if (typeof window === 'undefined') return;

			const loadRealScoutWidget = async () => {
				try {
					// Check if RealScout script is already loaded
					if (!window.RealScout) {
						// Load RealScout script
						const script = document.createElement('script');
						script.src = `https://widgets.realscout.com/v3/agent/${agentEncodedId}/widget.js`;
						script.async = true;
						script.crossOrigin = 'anonymous';
						script.integrity = 'sha384-REALSCOUT_INTEGRITY_HASH'; // Replace with actual hash
						
						script.onload = () => {
							initializeWidget();
						};
						
						script.onerror = () => {
							hasError.value = true;
							errorMessage.value = 'Failed to load RealScout widget';
						};

						document.head.appendChild(script);
					} else {
						initializeWidget();
					}
				} catch (error) {
					hasError.value = true;
					errorMessage.value = 'Error initializing RealScout widget';
					console.error('RealScout widget error:', error);
				}
			};

			const initializeWidget = () => {
				try {
					if (window.RealScout) {
						const widgetConfig = {
							agentEncodedId,
							widgetType,
							container: document.getElementById(`realscout-widget-${agentEncodedId}`),
							theme: 'modern',
							responsive: true,
							showPoweredBy: true
						};

						window.RealScout.init(widgetConfig);
						isLoaded.value = true;
					}
				} catch (error) {
					hasError.value = true;
					errorMessage.value = 'Error initializing widget';
					console.error('RealScout initialization error:', error);
				}
			};

			loadRealScoutWidget();
		});

		if (hasError.value) {
			return (
				<div class={`bg-red-50 border border-red-200 rounded-lg p-6 text-center ${className}`}>
					<div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-red-900 mb-2">Widget Unavailable</h3>
					<p class="text-red-700 mb-4">
						{errorMessage.value || 'Unable to load the RealScout search widget at this time.'}
					</p>
					<a 
						href="tel:+17025551234" 
						class="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
					>
						<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
						</svg>
						Call for Assistance
					</a>
				</div>
			);
		}

		return (
			<div class={`bg-white rounded-lg shadow-lg border border-gray-200 min-h-[480px] ${className}`}>
				{!isLoaded.value ? (
					<div class="flex flex-col items-center justify-center h-64">
						<div class="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
						<p class="text-gray-600">Loading search widget...</p>
					</div>
				) : (
					<div
						id={`realscout-widget-${agentEncodedId}`}
						class={`w-full h-full ${isLoaded.value ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
						style={{ minHeight: '480px' }}
					></div>
				)}
			</div>
		);
	}
);

// Extend Window interface for RealScout
declare global {
	interface Window {
		RealScout?: {
			init: (config: any) => void;
		};
	}
}