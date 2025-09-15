import { component$ } from "@builder.io/qwik";
import styles from "./sort-options.module.css";

export interface SortOptionsProps {
	sortBy: "price" | "beds" | "sqft" | "newest";
	sortOrder: "asc" | "desc";
	onSortChange$: (sortBy: "price" | "beds" | "sqft" | "newest", sortOrder: "asc" | "desc") => void;
}

export const SortOptions = component$<SortOptionsProps>(
	({ sortBy, sortOrder, onSortChange$ }) => {
		const sortOptions = [
			{ value: "price", label: "Price" },
			{ value: "beds", label: "Bedrooms" },
			{ value: "sqft", label: "Square Feet" },
			{ value: "newest", label: "Newest" },
		] as const;

		const handleSortByChange = (newSortBy: typeof sortBy) => {
			// If changing to a different field, default to descending for price, ascending for others
			const newOrder = newSortBy === "price" ? "desc" : "asc";
			onSortChange$(newSortBy, newOrder);
		};

		const handleOrderToggle = () => {
			const newOrder = sortOrder === "asc" ? "desc" : "asc";
			onSortChange$(sortBy, newOrder);
		};

		return (
			<div class={styles.sortContainer}>
				<label class={styles.sortLabel} for="sort-by">
					Sort by:
				</label>
				<select
					id="sort-by"
					value={sortBy}
					onChange$={(e) => {
						handleSortByChange(e.target.value as typeof sortBy);
					}}
					class={styles.sortSelect}
				>
					{sortOptions.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<button
					type="button"
					class={styles.sortOrderButton}
					onClick$={handleOrderToggle}
					aria-label={`Sort ${sortOrder === "asc" ? "ascending" : "descending"}`}
				>
					<svg
						class={`${styles.sortIcon} ${
							sortOrder === "desc" ? styles.descending : ""
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
							d="M7 11l5-5m0 0l5 5m-5-5v12"
						/>
					</svg>
				</button>
			</div>
		);
	}
);
