import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    adapter: vercel({
        imageService: true,
        devImageService: "squoosh",
    }),
    integrations: [tailwind()],
});
