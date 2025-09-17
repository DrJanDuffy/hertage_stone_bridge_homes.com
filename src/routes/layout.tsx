import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer";
import Header from "~/components/starter/header/header";
import { PerformanceMonitor } from "~/components/performance/PerformanceMonitor";
import { AdvancedCaching } from "~/components/optimization/AdvancedCaching";
import { AdvancedSEO } from "~/components/seo/AdvancedSEO";

import styles from "./styles.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	};
});

export default component$(() => {
	useStyles$(styles);
	return (
		<>
			{/* Advanced Performance Monitoring */}
			<PerformanceMonitor />
			
			{/* Advanced Caching Strategy */}
			<AdvancedCaching />
			
			{/* Advanced SEO Optimization */}
			<AdvancedSEO />
			
			<Header />
			<main>
				<Slot />
			</main>
			<Footer />
		</>
	);
});
