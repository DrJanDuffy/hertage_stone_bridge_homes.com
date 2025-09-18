import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  const isSticky = useSignal(false);

  useVisibleTask$(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      isSticky.value = window.scrollY > 100;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header 
      class={`${styles.header} ${
        isSticky.value 
          ? "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
          : "relative bg-white"
      } transition-all duration-300`}
    >
      <div class={["container", styles.wrapper]}>
        {/* Clean Brand Logo */}
        <div class={styles.logo}>
          <a href="/" title="Heritage at Stonebridge">
            <div class="flex items-center space-x-2">
              <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-2">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div class="text-left">
                <div class="text-lg font-bold text-gray-900">Heritage at Stonebridge</div>
              </div>
            </div>
          </a>
        </div>

        {/* Clean Navigation */}
        <nav class="flex items-center space-x-8">
          <ul class="flex items-center space-x-8">
            <li>
              <a href="/" class="text-gray-800 hover:text-blue-600 font-semibold transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/55-plus-communities"
                class="text-gray-800 hover:text-blue-600 font-semibold transition-colors"
              >
                55+ Communities
              </a>
            </li>
            <li>
              <a
                href="/homes-for-sale-stonebridge-summerlin"
                class="text-gray-800 hover:text-blue-600 font-semibold transition-colors"
              >
                Stonebridge Homes
              </a>
            </li>
            <li>
              <a
                href="/real-estate"
                class="text-gray-800 hover:text-blue-600 font-semibold transition-colors"
              >
                All Listings
              </a>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div class="flex items-center space-x-3">
            <a
              href="tel:702-789-6561"
              class="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>(702) 789-6561</span>
            </a>
            
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule Tour
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
});
