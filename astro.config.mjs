import { defineConfig } from "astro/config";
import { sharp } from "astro/assets/services/sharp";

export default defineConfig({
  image: {
    service: sharp(),
  },
});
