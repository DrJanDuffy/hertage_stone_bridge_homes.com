import { component$ } from "@builder.io/qwik";
import type { ListingProps } from "../../types/real-estate";
import { PropertyPrice } from "./PropertyPrice";
import styles from "./property-details.module.css";

export interface PropertyDetailsProps {
	listing: ListingProps;
}

export const PropertyDetails = component$<PropertyDetailsProps>(({ listing }) => {
	const formatSqft = (sqft: number) => {
		return sqft.toLocaleString();
	};

	const formatAddress = (address: any) => {
		return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
	};

	return (
		<div class={styles.propertyDetails}>
			<div class={styles.priceSection}>
				<PropertyPrice
					price={listing.price}
					status={listing.status}
					pricePerSqft={Math.round(listing.price / listing.sqft)}
				/>
			</div>

			<div class={styles.specsSection}>
				<div class={styles.specs}>
					<div class={styles.spec}>
						<span class={styles.specValue}>{listing.beds}</span>
						<span class={styles.specLabel}>
							{listing.beds === 1 ? "Bed" : "Beds"}
						</span>
					</div>
					<div class={styles.spec}>
						<span class={styles.specValue}>{listing.baths}</span>
						<span class={styles.specLabel}>
							{listing.baths === 1 ? "Bath" : "Baths"}
						</span>
					</div>
					<div class={styles.spec}>
						<span class={styles.specValue}>
							{formatSqft(listing.sqft)}
						</span>
						<span class={styles.specLabel}>Sq Ft</span>
					</div>
				</div>
			</div>

			<div class={styles.addressSection}>
				<h3 class={styles.address} title={formatAddress(listing.address)}>
					{listing.address.street}
				</h3>
				<p class={styles.location}>
					{listing.address.city}, {listing.address.state} {listing.address.zip}
				</p>
				{listing.address.neighborhood && (
					<p class={styles.neighborhood}>
						{listing.address.neighborhood}
					</p>
				)}
			</div>

			{listing.features && listing.features.length > 0 && (
				<div class={styles.featuresSection}>
					<div class={styles.features}>
						{listing.features.slice(0, 3).map((feature, index) => (
							<span key={index} class={styles.feature}>
								{feature}
							</span>
						))}
						{listing.features.length > 3 && (
							<span class={styles.moreFeatures}>
								+{listing.features.length - 3} more
							</span>
						)}
					</div>
				</div>
			)}

			{listing.openHouse && (
				<div class={styles.openHouseSection}>
					<div class={styles.openHouseBadge}>
						<span class={styles.openHouseLabel}>Open House</span>
						<span class={styles.openHouseDate}>
							{new Date(listing.openHouse.date).toLocaleDateString()}
						</span>
						<span class={styles.openHouseTime}>
							{listing.openHouse.startTime} - {listing.openHouse.endTime}
						</span>
					</div>
				</div>
			)}

			<div class={styles.mlsSection}>
				<span class={styles.mlsLabel}>MLS:</span>
				<span class={styles.mlsNumber}>{listing.mls}</span>
			</div>
		</div>
	);
});
