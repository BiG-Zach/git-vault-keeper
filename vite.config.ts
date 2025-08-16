import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const domain = env.NGROK_DOMAIN;        // set only in `npm run live`
  const useNgrok = !!domain;

  return {
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "::",
      port: 8080,
      strictPort: true,
      ...(useNgrok
        ? {
            origin: `https://${domain}`,
            allowedHosts: [domain],
            hmr: {
              protocol: 'wss',
              host: domain,
              clientPort: 443
            }
          }
        : {})
    }
  };
});



