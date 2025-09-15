import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { PropertySearchResult } from "../../types/real-estate";
import { PropertyCard } from "./PropertyCard";
import styles from "./property-grid.module.css";

export interface PropertyGridProps {
	searchResult: PropertySearchResult;
	onLoadMore?: () => void;
	isLoading?: boolean;
}

export const PropertyGrid = component$<PropertyGridProps>(
	({ searchResult, onLoadMore, isLoading = false }) => {
		const gridRef = useSignal<HTMLDivElement>();
		const hasMore = searchResult.hasMore;

		// Intersection Observer for infinite scroll
		useVisibleTask$(({ track }) => {
			const grid = gridRef.value;
			if (!grid || !hasMore || !onLoadMore) return;

			const observer = new IntersectionObserver(
				(entries) => {
					const lastEntry = entries[entries.length - 1];
					if (lastEntry.isIntersecting && !isLoading) {
						onLoadMore();
					}
				},
				{
					rootMargin: "100px",
				}
			);

			// Observe the last few property cards
			const propertyCards = grid.querySelectorAll("[data-property-card]");
			const lastCards = Array.from(propertyCards).slice(-3);
			lastCards.forEach((card) => {
				observer.observe(card);
			});

			return () => observer.disconnect();
		});

		if (searchResult.listings.length === 0 && !isLoading) {
			return (
				<div class={styles.emptyState}>
					<div class={styles.emptyStateIcon}>
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
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
							/>
						</svg>
					</div>
					<h3 class={styles.emptyStateTitle}>No properties found</h3>
					<p class={styles.emptyStateDescription}>
						Try adjusting your search criteria to find more properties.
					</p>
				</div>
			);
		}

		return (
			<div class={styles.propertyGrid}>
				<div class={styles.gridHeader}>
					<div class={styles.resultsCount}>
						{searchResult.total.toLocaleString()} properties found
					</div>
					{searchResult.page > 1 && (
						<div class={styles.pageInfo}>
							Page {searchResult.page}
						</div>
					)}
				</div>

				<div ref={gridRef} class={styles.grid}>
					{searchResult.listings.map((listing, index) => (
						<div
							key={listing.mls}
							data-property-card={index}
							class={styles.gridItem}
						>
							<PropertyCard listing={listing} />
						</div>
					))}
				</div>

				{isLoading && (
					<div class={styles.loadingState}>
						<div class={styles.loadingSpinner}></div>
						<p class={styles.loadingText}>Loading more properties...</p>
					</div>
				)}

				{hasMore && !isLoading && onLoadMore && (
					<div class={styles.loadMoreSection}>
						<button
							type="button"
							class={styles.loadMoreButton}
							onClick$={onLoadMore}
						>
							Load More Properties
						</button>
					</div>
				)}

				{!hasMore && searchResult.listings.length > 0 && (
					<div class={styles.endOfResults}>
						<p>You've reached the end of the results</p>
					</div>
				)}
			</div>
		);
	}
);
