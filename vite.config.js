import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import vsharp from "vite-plugin-vsharp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vsharp()],
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@data": path.resolve(__dirname, "./src/data"),
    },
  },
  build: {
    assetsInlineLimit: 0,
  },
});
