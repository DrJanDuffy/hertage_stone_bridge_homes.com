import { createQwikCity, type PlatformVercel } from "@builder.io/qwik-city/middleware/vercel-edge";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";

declare global {
  interface QwikCityPlatform extends PlatformVercel {}
}

// Create a minimal render function for Edge Runtime
const render = async (opts: any) => {
  const { renderToStream } = await import("@builder.io/qwik/server");
  const Root = (await import("./root")).default;
  
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    containerAttributes: {
      lang: "en-us",
      ...opts.containerAttributes,
    },
  });
};

export default createQwikCity({ render, qwikCityPlan, manifest });
