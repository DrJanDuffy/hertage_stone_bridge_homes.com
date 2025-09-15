import { component$ } from "@builder.io/qwik";
import type { ListingProps } from "../../types/real-estate";
import styles from "./property-price.module.css";

export interface PropertyPriceProps {
	price: number;
	status: ListingProps["status"];
	pricePerSqft?: number;
	showPricePerSqft?: boolean;
}

export const PropertyPrice = component$<PropertyPriceProps>(
	({ price, status, pricePerSqft, showPricePerSqft = true }) => {
		const formatPrice = (price: number) => {
			if (price >= 1000000) {
				return `$${(price / 1000000).toFixed(1)}M`;
			}
			if (price >= 1000) {
				return `$${(price / 1000).toFixed(0)}K`;
			}
			return `$${price.toLocaleString()}`;
		};

		const getStatusColor = (status: ListingProps["status"]) => {
			switch (status) {
				case "for-sale":
					return styles.forSale;
				case "pending":
					return styles.pending;
				case "sold":
					return styles.sold;
				default:
					return styles.forSale;
			}
		};

		const getStatusText = (status: ListingProps["status"]) => {
			switch (status) {
				case "for-sale":
					return "For Sale";
				case "pending":
					return "Pending";
				case "sold":
					return "Sold";
				default:
					return "For Sale";
			}
		};

		return (
			<div class={styles.priceContainer}>
				<div class={styles.priceRow}>
					<span class={styles.price}>{formatPrice(price)}</span>
					<span class={`${styles.status} ${getStatusColor(status)}`}>
						{getStatusText(status)}
					</span>
				</div>
				{showPricePerSqft && pricePerSqft && (
					<div class={styles.pricePerSqft}>
						${pricePerSqft.toLocaleString()}/sq ft
					</div>
				)}
			</div>
		);
	}
);
