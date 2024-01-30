import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
    },
  },
});
