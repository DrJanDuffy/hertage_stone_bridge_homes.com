import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./realscout-widget.module.css";

export interface RealScoutWidgetProps {
	agentEncodedId: string;
	widgetType?: "search" | "listing" | "contact";
	className?: string;
}

export const RealScoutWidget = component$<RealScoutWidgetProps>(
	({ agentEncodedId, widgetType = "search", className = "" }) => {
		const widgetRef = useSignal<Element>();
		const isLoaded = useSignal(false);
		const hasError = useSignal(false);

		useVisibleTask$(async () => {
			try {
				// Check if RealScout script is already loaded
				if (!document.querySelector('script[src*="realscout"]')) {
					await loadRealScoutScript();
				}

				// Wait for the widget to be ready
				await waitForWidget();

				isLoaded.value = true;

				// Track widget load for analytics
				if (typeof window !== "undefined" && window.gtag) {
					window.gtag("event", "realscout_widget_loaded", {
						widget_type: widgetType,
						agent_id: agentEncodedId,
					});
				}
			} catch (error) {
				console.error("Failed to load RealScout widget:", error);
				hasError.value = true;
			}
		});

		const loadRealScoutScript = (): Promise<void> => {
			return new Promise((resolve, reject) => {
				const script = document.createElement("script");
				script.src = "https://em.realscout.com/widgets/realscout-web-components.umd.js";
				script.type = "module";
				script.crossOrigin = "anonymous";
				script.integrity = "sha384-..."; // Add actual integrity hash

				script.onload = () => resolve();
				script.onerror = () => reject(new Error("Failed to load RealScout script"));

				document.head.appendChild(script);
			});
		};

		const waitForWidget = (): Promise<void> => {
			return new Promise((resolve) => {
				const checkWidget = () => {
					if (customElements.get("realscout-search-widget")) {
						resolve();
					} else {
						setTimeout(checkWidget, 100);
					}
				};
				checkWidget();
			});
		};

		const getWidgetTag = () => {
			switch (widgetType) {
				case "search":
					return "realscout-search-widget";
				case "listing":
					return "realscout-listing-widget";
				case "contact":
					return "realscout-contact-widget";
				default:
					return "realscout-search-widget";
			}
		};

		if (hasError.value) {
			return (
				<div class={`${styles.errorState} ${className}`}>
					<div class={styles.errorIcon}>
						<svg
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
							/>
						</svg>
					</div>
					<h3 class={styles.errorTitle}>Widget Unavailable</h3>
					<p class={styles.errorMessage}>
						The RealScout widget is temporarily unavailable. Please try again later or contact us directly.
					</p>
				</div>
			);
		}

		return (
			<div class={`${styles.widgetContainer} ${className}`}>
				{!isLoaded.value && (
					<div class={styles.loadingState}>
						<div class={styles.loadingSpinner}></div>
						<p class={styles.loadingText}>Loading search widget...</p>
					</div>
				)}

				<div
					ref={widgetRef}
					class={`${styles.widgetContent} ${
						isLoaded.value ? styles.loaded : styles.hidden
					}`}
				>
					{/* RealScout widget will be rendered here */}
					<div
						dangerouslySetInnerHTML={`
							<${getWidgetTag()} 
								agent-encoded-id="${agentEncodedId}"
								style="width: 100%; min-height: 480px;"
							></${getWidgetTag()}>
						`}
					/>
				</div>
			</div>
		);
	}
);

// Extend Window interface for TypeScript
declare global {
	interface Window {
		gtag?: (...args: any[]) => void;
	}
}
