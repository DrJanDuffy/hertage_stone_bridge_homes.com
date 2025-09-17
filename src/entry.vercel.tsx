import { createQwikCity, type PlatformVercel } from "@builder.io/qwik-city/middleware/vercel";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";

declare global {
  interface QwikCityPlatform extends PlatformVercel {}
}

export default createQwikCity({ render, qwikCityPlan, manifest });
