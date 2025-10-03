// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Для custom domain (www.churchillpower.ca) base ДОЛЖЕН быть '/'
// Если позже захочешь тестировать по пути репозитория, можно временно
// указать base: '/churchill-power-landing/'.
export default defineConfig(({ mode }) => ({
  base: "/", // <<< ключевая строка для работы на домене
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}));
