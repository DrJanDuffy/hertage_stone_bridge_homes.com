import { createQwikCity, type PlatformVercel } from "@builder.io/qwik-city/middleware/vercel-edge";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";

declare global {
  interface QwikCityPlatform extends PlatformVercel {}
}

// Edge Runtime compatible render function
const render = async (opts: any) => {
  // Return a simple HTML response for Edge Runtime
  const html = `<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Heritage at Stonebridge - Las Vegas 55+ Communities</title>
  <meta name="description" content="Discover luxury 55+ active adult communities near Red Rock Canyon in Summerlin, Las Vegas. Heritage at Stonebridge offers gated living, resort amenities & stunning mountain views.">
  <link rel="canonical" href="https://heritagestonebridge.com">
  <script type="module" src="/build/qwikloader.js"></script>
</head>
<body>
  <div id="root">
    <div style="text-align: center; padding: 2rem;">
      <h1>Heritage at Stonebridge</h1>
      <p>Luxury 55+ Active Adult Living in the Heart of Summerlin, Las Vegas</p>
      <p>Loading...</p>
    </div>
  </div>
  <script type="module">
    import { qwikLoader } from '/build/qwikloader.js';
    qwikLoader();
  </script>
</body>
</html>`;

  return {
    html,
    timing: { render: 0, snapshot: 0 },
    prefetchResources: [],
    snapshotResult: undefined,
    isStatic: false
  };
};

export default createQwikCity({ render, qwikCityPlan, manifest });
