import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base: "/basic-reactjs/",
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});
