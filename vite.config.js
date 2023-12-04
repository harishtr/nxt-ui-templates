//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "nxt-ui-templates",

      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
