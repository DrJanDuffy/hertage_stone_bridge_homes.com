import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import type { SearchFilters, PropertySearchResult } from "../../types/real-estate";
import { SearchFilters as SearchFiltersComponent } from "./SearchFilters";
import { PropertyGrid } from "./PropertyGrid";
import { SortOptions } from "./SortOptions";
import styles from "./search-interface.module.css";

export interface SearchInterfaceProps {
	initialFilters?: Partial<SearchFilters>;
	onSearch?: (filters: SearchFilters) => void;
}

export const SearchInterface = component$<SearchInterfaceProps>(
	({ initialFilters, onSearch }) => {
		const filters = useSignal<SearchFilters>({
			priceMin: 0,
			priceMax: 2000000,
			beds: 0,
			baths: 0,
			neighborhood: "",
			propertyType: "all",
			status: "for-sale",
			...initialFilters,
		});

		const searchResults = useSignal<PropertySearchResult>({
			listings: [],
			total: 0,
			page: 1,
			hasMore: false,
		});

		const isLoading = useSignal(false);
		const sortBy = useSignal<"price" | "beds" | "sqft" | "newest">("price");
		const sortOrder = useSignal<"asc" | "desc">("asc");

		// Debounced search
		useTask$(({ track }) => {
			const currentFilters = track(() => filters.value);
			const currentSort = track(() => sortBy.value);
			const currentOrder = track(() => sortOrder.value);

			// Debounce search requests
			const timeoutId = setTimeout(async () => {
				isLoading.value = true;
				try {
					const results = await performSearch(currentFilters, 1, currentSort, currentOrder);
					searchResults.value = results;
					onSearch?.(currentFilters);
				} catch (error) {
					console.error("Search failed:", error);
				} finally {
					isLoading.value = false;
				}
			}, 300);

			return () => clearTimeout(timeoutId);
		});

		const handleLoadMore = async () => {
			if (isLoading.value || !searchResults.value.hasMore) return;

			isLoading.value = true;
			try {
				const nextPage = searchResults.value.page + 1;
				const newResults = await performSearch(
					filters.value,
					nextPage,
					sortBy.value,
					sortOrder.value
				);

				searchResults.value = {
					...newResults,
					listings: [...searchResults.value.listings, ...newResults.listings],
				};
			} catch (error) {
				console.error("Load more failed:", error);
			} finally {
				isLoading.value = false;
			}
		};

		const handleSortChange = (newSortBy: typeof sortBy.value, newOrder: typeof sortOrder.value) => {
			sortBy.value = newSortBy;
			sortOrder.value = newOrder;
		};

		return (
			<div class={styles.searchInterface}>
				<div class={styles.searchHeader}>
					<h2 class={styles.searchTitle}>Find Your Dream Home</h2>
					<div class={styles.searchActions}>
						<SortOptions
							sortBy={sortBy.value}
							sortOrder={sortOrder.value}
							onSortChange$={handleSortChange}
						/>
					</div>
				</div>

				<div class={styles.searchContent}>
					<div class={styles.filtersSidebar}>
						<SearchFiltersComponent
							filters={filters}
							onFiltersChange$={(newFilters: SearchFilters) => {
								filters.value = newFilters;
							}}
						/>
					</div>

					<div class={styles.resultsSection}>
						<PropertyGrid
							searchResult={searchResults.value}
							onLoadMore={handleLoadMore}
							isLoading={isLoading.value}
						/>
					</div>
				</div>
			</div>
		);
	}
);

// Mock search function - replace with actual API call
async function performSearch(
	filters: SearchFilters,
	page: number,
	sortBy: string,
	sortOrder: string
): Promise<PropertySearchResult> {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 500));

	// Mock data - replace with actual API call
	const mockListings = Array.from({ length: 12 }, (_, index) => ({
		mls: `MLS${(page - 1) * 12 + index + 1}`,
		price: 300000 + Math.random() * 700000,
		beds: Math.floor(Math.random() * 5) + 1,
		baths: Math.floor(Math.random() * 3) + 1,
		sqft: 1000 + Math.random() * 2000,
		photos: [`/api/placeholder/400/300?text=Property+${index + 1}`],
		address: {
			street: `${Math.floor(Math.random() * 9999) + 1} Main St`,
			city: "Anytown",
			state: "CA",
			zip: "90210",
			neighborhood: ["Downtown", "Uptown", "Midtown"][Math.floor(Math.random() * 3)],
		},
		agent: {
			id: `agent-${index + 1}`,
			name: "John Doe",
			email: "john@example.com",
			phone: "(555) 123-4567",
		},
		status: ["for-sale", "pending", "sold"][Math.floor(Math.random() * 3)] as any,
		description: "Beautiful home in great location",
		features: ["Garage", "Pool", "Fireplace", "Garden"].slice(0, Math.floor(Math.random() * 4)),
	}));

	return {
		listings: mockListings,
		total: 150, // Mock total
		page,
		hasMore: page < 13, // Mock pagination
	};
}
