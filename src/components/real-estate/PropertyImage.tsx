import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./property-image.module.css";

export interface PropertyImageProps {
	src: string;
	alt: string;
	onLoad$?: () => void;
	priority?: boolean;
}

export const PropertyImage = component$<PropertyImageProps>(
	({ src, alt, onLoad$, priority = false }) => {
		const isLoaded = useSignal(false);
		const hasError = useSignal(false);
		const imageRef = useSignal<HTMLImageElement>();

		useVisibleTask$(({ track }) => {
			const img = imageRef.value;
			if (!img) return;

			// Intersection Observer for lazy loading
			if (!priority) {
				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								img.src = src;
								observer.unobserve(img);
							}
						});
					},
					{
						rootMargin: "50px",
					}
				);

				observer.observe(img);

				return () => observer.disconnect();
			} else {
				// Load immediately for priority images
				img.src = src;
			}
		});

		const handleLoad = () => {
			isLoaded.value = true;
			onLoad$?.();
		};

		const handleError = () => {
			hasError.value = true;
		};

		return (
			<div class={styles.imageWrapper}>
				{!hasError.value ? (
					<img
						ref={imageRef}
						alt={alt}
						class={`${styles.propertyImage} ${
							isLoaded.value ? styles.loaded : styles.loading
						}`}
						onLoad$={handleLoad}
						onError$={handleError}
						loading={priority ? "eager" : "lazy"}
						decoding="async"
					/>
				) : (
					<div class={styles.imagePlaceholder}>
						<svg
							class={styles.placeholderIcon}
							fill="currentColor"
							viewBox="0 0 20 20"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
								clipRule="evenodd"
							/>
						</svg>
						<span class={styles.placeholderText}>Image unavailable</span>
					</div>
				)}

				{!isLoaded.value && !hasError.value && (
					<div class={styles.loadingSkeleton}>
						<div class={styles.skeletonShimmer}></div>
					</div>
				)}
			</div>
		);
	}
);
