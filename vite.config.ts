import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // Served from the apex custom domain (perko.la), so assets live at the root.
  base: "/",
  plugins: [react()],
});
