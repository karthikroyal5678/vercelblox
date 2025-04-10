// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-sitemap-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith('/sitemap_index.xml')) {
            const sitemapPath = path.resolve(__dirname, 'public/sitemap_index.xml');
            if (fs.existsSync(sitemapPath)) {
              res.setHeader('Content-Type', 'application/xml');
              res.end(fs.readFileSync(sitemapPath));
              return;
            } else {
              res.statusCode = 404;
              res.end('Sitemap not found');
              return;
            }
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude specific packages from optimization
  },
});
