import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Honor an externally assigned port (e.g. PORT from tooling); default 5173.
  server: {
    port: Number(process.env.PORT) || 5173,
  },
});
