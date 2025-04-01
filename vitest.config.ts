import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(
        new URL("./src", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1")
      ),
    },
  },
});
