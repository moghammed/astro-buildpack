import { defineConfig } from "astro/config";
import { sharp } from "astro/assets/services/sharp";
import node from "@astrojs/node";

export default defineConfig({
  image: {
    service: sharp(),
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
