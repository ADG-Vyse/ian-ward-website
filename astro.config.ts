// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ianwardgames.uk/",
  integrations: [react()],
  vite: {
    preview: {
      allowedHosts: ["annex-squander-regretful.ngrok-free.dev"]
    }
  }
});