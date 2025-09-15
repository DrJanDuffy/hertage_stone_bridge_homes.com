import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { Agent, ListingProps, ContactFormData } from "../../types/real-estate";
import styles from "./contact-agent.module.css";

export interface ContactAgentProps {
	agent: Agent;
	property: ListingProps;
	isVisible: any; // Signal<boolean>
	onToggle$: () => void;
}

export const ContactAgent = component$<ContactAgentProps>(
	({ agent, property, isVisible, onToggle$ }) => {
		const formData = useSignal<ContactFormData>({
			name: "",
			email: "",
			phone: "",
			message: "",
			propertyMls: property.mls,
			agentId: agent.id,
		});

		const isSubmitting = useSignal(false);
		const submitSuccess = useSignal(false);
		const submitError = useSignal("");

		const handleSubmit = async () => {
			if (isSubmitting.value) return;

			isSubmitting.value = true;
			submitError.value = "";

			try {
				// Validate form
				if (!formData.value.name || !formData.value.email) {
					throw new Error("Name and email are required");
				}

				// Submit form data
				const response = await fetch("/api/contact-agent", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData.value),
				});

				if (!response.ok) {
					throw new Error("Failed to send message");
				}

				submitSuccess.value = true;

				// Track successful contact for analytics
				if (typeof window !== "undefined" && window.gtag) {
					window.gtag("event", "agent_contact", {
						agent_id: agent.id,
						property_id: property.mls,
						contact_method: "form",
					});
				}

				// Reset form after success
				setTimeout(() => {
					formData.value = {
						name: "",
						email: "",
						phone: "",
						message: "",
						propertyMls: property.mls,
						agentId: agent.id,
					};
					submitSuccess.value = false;
					isVisible.value = false;
				}, 2000);
			} catch (error) {
				submitError.value = error instanceof Error ? error.message : "An error occurred";
			} finally {
				isSubmitting.value = false;
			}
		};

		const handleInputChange = (field: keyof ContactFormData, value: string) => {
			formData.value = { ...formData.value, [field]: value };
		};

		return (
			<div class={styles.contactAgent}>
				<button
					type="button"
					class={styles.contactButton}
					onClick$={onToggle$}
					aria-expanded={isVisible.value}
				>
					<span class={styles.contactButtonText}>
						{isVisible.value ? "Hide Contact Form" : "Contact Agent"}
					</span>
					<svg
						class={`${styles.contactIcon} ${
							isVisible.value ? styles.expanded : ""
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
							d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
						/>
					</svg>
				</button>

				{isVisible.value && (
					<div class={styles.contactForm}>
						<div class={styles.agentInfo}>
							<div class={styles.agentAvatar}>
								{agent.photo ? (
									<img
										src={agent.photo}
										alt={agent.name}
										class={styles.agentPhoto}
									/>
								) : (
									<div class={styles.agentInitials}>
										{agent.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
								)}
							</div>
							<div class={styles.agentDetails}>
								<h4 class={styles.agentName}>{agent.name}</h4>
								{agent.brokerage && (
									<p class={styles.agentBrokerage}>{agent.brokerage}</p>
								)}
								<p class={styles.agentPhone}>{agent.phone}</p>
							</div>
						</div>

						{submitSuccess.value ? (
							<div class={styles.successMessage}>
								<svg
									class={styles.successIcon}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<p>Message sent successfully! We'll get back to you soon.</p>
							</div>
						) : (
							<form
								class={styles.form}
							onSubmit$={() => {
								handleSubmit();
							}}
							>
								<div class={styles.formGroup}>
									<label for={`name-${property.mls}`} class={styles.formLabel}>
										Name *
									</label>
									<input
										type="text"
										id={`name-${property.mls}`}
										value={formData.value.name}
										onInput$={(e) => {
											handleInputChange("name", (e.target as HTMLInputElement).value);
										}}
										class={styles.formInput}
										required
									/>
								</div>

								<div class={styles.formGroup}>
									<label for={`email-${property.mls}`} class={styles.formLabel}>
										Email *
									</label>
									<input
										type="email"
										id={`email-${property.mls}`}
										value={formData.value.email}
										onInput$={(e) => {
											handleInputChange("email", (e.target as HTMLInputElement).value);
										}}
										class={styles.formInput}
										required
									/>
								</div>

								<div class={styles.formGroup}>
									<label for={`phone-${property.mls}`} class={styles.formLabel}>
										Phone
									</label>
									<input
										type="tel"
										id={`phone-${property.mls}`}
										value={formData.value.phone}
										onInput$={(e) => {
											handleInputChange("phone", (e.target as HTMLInputElement).value);
										}}
										class={styles.formInput}
									/>
								</div>

								<div class={styles.formGroup}>
									<label for={`message-${property.mls}`} class={styles.formLabel}>
										Message
									</label>
									<textarea
										id={`message-${property.mls}`}
										value={formData.value.message}
										onInput$={(e) => {
											handleInputChange("message", (e.target as HTMLTextAreaElement).value);
										}}
										class={styles.formTextarea}
										rows={3}
										placeholder={`I'm interested in ${property.address.street}...`}
									/>
								</div>

								{submitError.value && (
									<div class={styles.errorMessage}>
										<svg
											class={styles.errorIcon}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
											/>
										</svg>
										<p>{submitError.value}</p>
									</div>
								)}

								<button
									type="submit"
									class={styles.submitButton}
									disabled={isSubmitting.value}
								>
									{isSubmitting.value ? (
										<>
											<div class={styles.spinner}></div>
											Sending...
										</>
									) : (
										"Send Message"
									)}
								</button>
							</form>
						)}
					</div>
				)}
			</div>
		);
	}
);
