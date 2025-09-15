import { component$, useSignal } from "@builder.io/qwik";
import { SearchInterface } from "../../components/real-estate";
import type { SearchFilters } from "../../types/real-estate";
import styles from "./real-estate.module.css";

export default component$(() => {
	const searchFilters = useSignal<Partial<SearchFilters>>({
		priceMin: 300000,
		priceMax: 800000,
		beds: 2,
		neighborhood: "Downtown",
	});

	const handleSearch = (filters: SearchFilters) => {
		console.log("Search performed with filters:", filters);
		// Track search for analytics
		if (typeof window !== "undefined" && window.gtag) {
			window.gtag("event", "property_search", {
				search_term: `${filters.neighborhood} ${filters.beds} bed`,
				price_range: `${filters.priceMin}-${filters.priceMax}`,
				property_type: filters.propertyType,
			});
		}
	};

	return (
		<div class={styles.realEstatePage}>
			<div class={styles.heroSection}>
				<div class={styles.heroContent}>
					<h1 class={styles.heroTitle}>
						Find Your Dream Home in Heritage Stone Bridge
					</h1>
					<p class={styles.heroDescription}>
						Discover beautiful properties with our advanced search tools and expert
						real estate guidance.
					</p>
					<div class={styles.heroStats}>
						<div class={styles.stat}>
							<span class={styles.statNumber}>150+</span>
							<span class={styles.statLabel}>Active Listings</span>
						</div>
						<div class={styles.stat}>
							<span class={styles.statNumber}>$650K</span>
							<span class={styles.statLabel}>Avg. Price</span>
						</div>
						<div class={styles.stat}>
							<span class={styles.statNumber}>28</span>
							<span class={styles.statLabel}>Days on Market</span>
						</div>
					</div>
				</div>
			</div>

			<div class={styles.searchSection}>
				<SearchInterface
					initialFilters={searchFilters.value}
					onSearch={handleSearch}
				/>
			</div>

			<div class={styles.featuresSection}>
				<div class={styles.featuresContent}>
					<h2 class={styles.featuresTitle}>Why Choose Heritage Stone Bridge?</h2>
					<div class={styles.featuresGrid}>
						<div class={styles.feature}>
							<div class={styles.featureIcon}>
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
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 class={styles.featureTitle}>Verified Listings</h3>
							<p class={styles.featureDescription}>
								All properties are verified and up-to-date with accurate information.
							</p>
						</div>

						<div class={styles.feature}>
							<div class={styles.featureIcon}>
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
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<h3 class={styles.featureTitle}>Prime Locations</h3>
							<p class={styles.featureDescription}>
								Properties in the most desirable neighborhoods with excellent amenities.
							</p>
						</div>

						<div class={styles.feature}>
							<div class={styles.featureIcon}>
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
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 class={styles.featureTitle}>Fast Updates</h3>
							<p class={styles.featureDescription}>
								Real-time updates on price changes, new listings, and market trends.
							</p>
						</div>

						<div class={styles.feature}>
							<div class={styles.featureIcon}>
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
										d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
									/>
								</svg>
							</div>
							<h3 class={styles.featureTitle}>Expert Support</h3>
							<p class={styles.featureDescription}>
								Dedicated real estate professionals to guide you through the process.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
