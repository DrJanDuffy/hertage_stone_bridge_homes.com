import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { ListingProps } from "../../types/real-estate";
import { PropertyImage } from "./PropertyImage";
import { PropertyDetails } from "./PropertyDetails";
import { ContactAgent } from "./ContactAgent";
import { FavoriteButton } from "./FavoriteButton";
import styles from "./property-card.module.css";

export interface PropertyCardProps {
	listing: ListingProps;
	showContactForm?: boolean;
}

export const PropertyCard = component$<PropertyCardProps>(
	({ listing, showContactForm = false }) => {
		const isFavorited = useSignal(false);
		const contactFormVisible = useSignal(showContactForm);
		const imageLoaded = useSignal(false);

		// Track property views for analytics
		useVisibleTask$(() => {
			// Analytics tracking
			if (typeof window !== "undefined" && window.gtag) {
				window.gtag("event", "property_view", {
					property_id: listing.mls,
					property_price: listing.price,
					property_location: `${listing.address.city}, ${listing.address.state}`,
				});
			}
		});

		return (
			<article class={styles.propertyCard} data-mls={listing.mls}>
				<div class={styles.imageContainer}>
					<PropertyImage
						src={listing.photos[0]}
						alt={`${listing.address.street} - ${listing.beds} bed, ${listing.baths} bath`}
						onLoad$={() => {
							imageLoaded.value = true;
						}}
					/>
					<FavoriteButton
						isFavorited={isFavorited}
						mls={listing.mls}
						onToggle$={() => {
							isFavorited.value = !isFavorited.value;
						}}
					/>
					{listing.status === "pending" && (
						<div class={styles.statusBadge}>Pending</div>
					)}
					{listing.status === "sold" && (
						<div class={styles.statusBadge}>Sold</div>
					)}
				</div>

				<PropertyDetails listing={listing} />

				<div class={styles.actionButtons}>
					<ContactAgent
						agent={listing.agent}
						property={listing}
						isVisible={contactFormVisible}
						onToggle$={() => {
							contactFormVisible.value = !contactFormVisible.value;
						}}
					/>
					<button
						type="button"
						class={styles.viewDetailsBtn}
						onClick$={() => {
							// Navigate to property details page
							window.location.href = `/property/${listing.mls}`;
						}}
					>
						View Details
					</button>
				</div>
			</article>
		);
	}
);
