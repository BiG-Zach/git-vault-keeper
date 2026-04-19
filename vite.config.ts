import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        clientPort: 8080,
      },
      allowedHosts: [
        'localhost',
        '.novita.ai',
        '.sandbox.novita.ai',
      ] as string[],
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      'process.env.VITE_SANITY_PROJECT_ID': JSON.stringify(env.VITE_SANITY_PROJECT_ID),
      'process.env.VITE_SANITY_DATASET': JSON.stringify(env.VITE_SANITY_DATASET),
      'process.env.SANITY_API_TOKEN': JSON.stringify(env.SANITY_API_TOKEN),
      'process.env.SANITY_PROJECT_ID': JSON.stringify(env.SANITY_PROJECT_ID),
      'process.env.SANITY_DATASET': JSON.stringify(env.SANITY_DATASET),
    },
  };
});



