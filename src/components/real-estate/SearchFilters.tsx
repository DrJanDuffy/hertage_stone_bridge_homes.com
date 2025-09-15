import { component$, useSignal } from "@builder.io/qwik";
import type { SearchFilters as SearchFiltersType } from "../../types/real-estate";
import styles from "./search-filters.module.css";

export interface SearchFiltersProps {
	filters: { value: SearchFiltersType };
	onFiltersChange$: (filters: SearchFiltersType) => void;
}

export const SearchFilters = component$<SearchFiltersProps>(
	({ filters, onFiltersChange$ }) => {
		const isExpanded = useSignal(false);

		const updateFilter = (key: keyof SearchFiltersType, value: string | number) => {
			const newFilters = { ...filters.value, [key]: value };
			onFiltersChange$(newFilters);
		};

		const neighborhoods = [
			"Downtown",
			"Uptown",
			"Midtown",
			"Riverside",
			"Hillside",
			"Oak Valley",
			"Pine Grove",
			"Sunset Hills",
		];


		return (
			<div class={styles.searchFilters}>
				<div class={styles.filtersHeader}>
					<h3 class={styles.filtersTitle}>Search Filters</h3>
					<button
						type="button"
						class={styles.expandButton}
						onClick$={() => {
							isExpanded.value = !isExpanded.value;
						}}
						aria-expanded={isExpanded.value.toString()}
						aria-label="Toggle filters"
					>
						<svg
							class={`${styles.expandIcon} ${
								isExpanded.value ? styles.expanded : ""
							}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
				</div>

				<div
					class={`${styles.filtersContent} ${
						isExpanded.value ? styles.expanded : ""
					}`}
				>
					{/* Price Range */}
					<div class={styles.filterGroup}>
						<label for="price-range" class={styles.filterLabel}>Price Range</label>
						<div class={styles.priceRange}>
							<input
								id="price-min"
								type="range"
								min="0"
								max="2000000"
								step="25000"
								value={filters.value.priceMin}
								onInput$={(e) => {
									updateFilter("priceMin", parseInt(e.target.value));
								}}
								class={styles.rangeInput}
								aria-label="Minimum price"
							/>
							<input
								id="price-max"
								type="range"
								min="0"
								max="2000000"
								step="25000"
								value={filters.value.priceMax}
								onInput$={(e) => {
									updateFilter("priceMax", parseInt(e.target.value));
								}}
								class={styles.rangeInput}
								aria-label="Maximum price"
							/>
						</div>
						<div class={styles.priceDisplay}>
							<span>${filters.value.priceMin.toLocaleString()}</span>
							<span> - </span>
							<span>${filters.value.priceMax.toLocaleString()}</span>
						</div>
					</div>

					{/* Bedrooms */}
					<div class={styles.filterGroup}>
						<label for="bedrooms" class={styles.filterLabel}>Bedrooms</label>
						<select
							id="bedrooms"
							value={filters.value.beds}
							onChange$={(e) => {
								updateFilter("beds", parseInt(e.target.value));
							}}
							class={styles.selectInput}
						>
							<option value={0}>Any</option>
							<option value={1}>1+</option>
							<option value={2}>2+</option>
							<option value={3}>3+</option>
							<option value={4}>4+</option>
							<option value={5}>5+</option>
						</select>
					</div>

					{/* Bathrooms */}
					<div class={styles.filterGroup}>
						<label for="bathrooms" class={styles.filterLabel}>Bathrooms</label>
						<select
							id="bathrooms"
							value={filters.value.baths}
							onChange$={(e) => {
								updateFilter("baths", parseInt(e.target.value));
							}}
							class={styles.selectInput}
						>
							<option value={0}>Any</option>
							<option value={1}>1+</option>
							<option value={1.5}>1.5+</option>
							<option value={2}>2+</option>
							<option value={2.5}>2.5+</option>
							<option value={3}>3+</option>
							<option value={4}>4+</option>
						</select>
					</div>

					{/* Property Type */}
					<div class={styles.filterGroup}>
						<label class={styles.filterLabel}>Property Type</label>
						<div class={styles.checkboxGroup}>
							{["all", "house", "condo", "townhouse"].map((type) => (
								<label key={type} class={styles.checkboxLabel}>
									<input
										type="radio"
										name="propertyType"
										value={type}
										checked={filters.value.propertyType === type}
										onChange$={(e) => {
											updateFilter("propertyType", e.target.value);
										}}
										class={styles.radioInput}
									/>
									<span class={styles.radioText}>
										{type === "all"
											? "All Types"
											: type.charAt(0).toUpperCase() + type.slice(1)}
									</span>
								</label>
							))}
						</div>
					</div>

					{/* Status */}
					<div class={styles.filterGroup}>
						<label class={styles.filterLabel}>Status</label>
						<div class={styles.checkboxGroup}>
							{["for-sale", "pending", "sold"].map((status) => (
								<label key={status} class={styles.checkboxLabel}>
									<input
										type="radio"
										name="status"
										value={status}
										checked={filters.value.status === status}
										onChange$={(e) => {
											updateFilter("status", e.target.value);
										}}
										class={styles.radioInput}
									/>
									<span class={styles.radioText}>
										{status === "for-sale"
											? "For Sale"
											: status.charAt(0).toUpperCase() + status.slice(1)}
									</span>
								</label>
							))}
						</div>
					</div>

					{/* Neighborhood */}
					<div class={styles.filterGroup}>
						<label for="neighborhood" class={styles.filterLabel}>Neighborhood</label>
						<select
							id="neighborhood"
							value={filters.value.neighborhood}
							onChange$={(e) => {
								updateFilter("neighborhood", e.target.value);
							}}
							class={styles.selectInput}
						>
							<option value="">All Neighborhoods</option>
							{neighborhoods.map((neighborhood) => (
								<option key={neighborhood} value={neighborhood}>
									{neighborhood}
								</option>
							))}
						</select>
					</div>

					{/* Clear Filters */}
					<div class={styles.filterActions}>
						<button
							type="button"
							class={styles.clearButton}
							onClick$={() => {
								onFiltersChange$({
									priceMin: 0,
									priceMax: 2000000,
									beds: 0,
									baths: 0,
									neighborhood: "",
									propertyType: "all",
									status: "for-sale",
								});
							}}
						>
							Clear All Filters
						</button>
					</div>
				</div>
			</div>
		);
	}
);
