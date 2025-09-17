import { createQwikCity, type PlatformNode } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";

declare global {
  interface QwikCityPlatform extends PlatformNode {}
}

// Simple render function for static generation
const render = async () => {
  return {
    html: '<div id="root"></div>',
    timing: { render: 0, snapshot: 0 },
    prefetchResources: [],
    snapshotResult: undefined,
    isStatic: false
  };
};

export default createQwikCity({ render, qwikCityPlan, manifest });
