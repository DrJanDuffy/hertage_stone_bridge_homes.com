import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./favorite-button.module.css";

export interface FavoriteButtonProps {
	isFavorited: any; // Signal<boolean>
	mls: string;
	onToggle$: () => void;
}

export const FavoriteButton = component$<FavoriteButtonProps>(
	({ isFavorited, mls, onToggle$ }) => {
		const isClient = useSignal(false);

		useVisibleTask$(() => {
			isClient.value = true;
		});

		const handleToggle = () => {
			onToggle$();
			
			// Track favorite action for analytics
			if (typeof window !== "undefined" && window.gtag) {
				window.gtag("event", "favorite_property", {
					property_id: mls,
					favorite_action: isFavorited.value ? "remove" : "add",
				});
			}
		};

		if (!isClient.value) {
			return (
				<button
					type="button"
					class={styles.favoriteButton}
					aria-label="Add to favorites"
				>
					<svg
						class={styles.heartIcon}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</button>
			);
		}

		return (
			<button
				type="button"
				class={`${styles.favoriteButton} ${
					isFavorited.value ? styles.favorited : ""
				}`}
				onClick$={handleToggle}
				aria-label={
					isFavorited.value ? "Remove from favorites" : "Add to favorites"
				}
			>
				<svg
					class={styles.heartIcon}
					fill={isFavorited.value ? "currentColor" : "none"}
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</button>
		);
	}
);
