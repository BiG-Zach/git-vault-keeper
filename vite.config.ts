import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const domain = env.NGROK_DOMAIN;        // set only in `npm run live`
  const useNgrok = !!domain;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
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



