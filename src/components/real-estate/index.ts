// Main property components

// Type exports
export type {
	Address,
	Agent,
	ContactFormData,
	ListingProps,
	MarketData,
	PropertySearchResult,
	SearchFilters,
} from "../../types/real-estate";

// Dynamic content types
export type {
	RealScoutContentBlock,
	RealScoutContentConfig,
} from "../../types/real-estate-content";

// Agent and contact components
export { ContactAgent } from "./ContactAgent";
export { FavoriteButton } from "./FavoriteButton";
export { PropertyCard } from "./PropertyCard";
export { PropertyDetails } from "./PropertyDetails";
export { PropertyGrid } from "./PropertyGrid";
export { PropertyImage } from "./PropertyImage";
export { PropertyPrice } from "./PropertyPrice";

// RealScout Widget Arsenal - Complete Lead Generation Suite
export { RealScoutAdvancedSearch } from "./RealScoutAdvancedSearch";
export { RealScoutHomeValue } from "./RealScoutHomeValue";
export { RealScoutOfficeListings } from "./RealScoutOfficeListings";
export { RealScoutSimpleSearch } from "./RealScoutSimpleSearch";

// Dynamic RealScout Components
export { DynamicRealScoutBlock } from "./DynamicRealScoutBlock";
export { DynamicRealScoutGrid } from "./DynamicRealScoutGrid";

// Third-party widget integration
export { RealScoutWidget } from "./RealScoutWidget";
export { SearchFilters as SearchFiltersComponent } from "./SearchFilters";

// Search and filtering components
export { SearchInterface } from "./SearchInterface";
export { SortOptions } from "./SortOptions";
