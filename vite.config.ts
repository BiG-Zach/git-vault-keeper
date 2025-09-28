import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
  plugins: [
    react({
      // Enable automatic JSX runtime for smaller bundles
      jsxRuntime: 'automatic',
      // Babel optimizations for production
      babel: mode === 'production' ? {
        compact: true,
        minified: true
      } : undefined
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Advanced build optimizations for SEO performance
  build: {
    // Enable production source maps for debugging while keeping performance
    sourcemap: mode === 'production' ? 'hidden' : true,
    
    // Optimize chunk size strategy
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal loading
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs'
          ],
          'animation-vendor': ['framer-motion', 'react-type-animation'],
          'form-vendor': ['react-hook-form', 'input-otp'],
          'chart-vendor': ['recharts', 'd3-geo', 'd3-geo-projection'],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority']
        },
        // Optimize chunk file names for caching
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/[name]-[hash][extname]';
          }
          if (assetInfo.name?.match(/\.(png|jpe?g|gif|svg|webp|avif)$/)) {
            return 'images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    
    // Minification settings for optimal performance
    minify: mode === 'production' ? 'esbuild' : false,
    target: 'es2020',
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Asset inlining threshold (4kb is optimal for performance)
    assetsInlineLimit: 4096
  },
  
  // Performance optimizations
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev server startup
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
    // Force optimize specific deps
    force: mode === 'development'
  },
  
  // Experimental features for performance
  experimental: {
    // Enable render built-ins
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        // Use relative URLs for better CDN performance
        return { relative: true };
      }
    }
  },
  
  // Define for tree shaking
  define: {
    // Enable production optimizations
    __DEV__: mode === 'development',
    __PROD__: mode === 'production'
  },

  assetsInclude: ['**/*.webp'],
}));
