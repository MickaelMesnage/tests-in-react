import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    include: ["src/**/*.spec.tsx"],
    env: {
      IS_REACT_ACT_ENVIRONMENT: "true",
    },
  },
});
