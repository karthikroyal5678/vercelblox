import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';


export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-sitemap-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Serve sitemap_index.xml for all matching URLs
          if (req.url?.endsWith('/sitemap_index.xml')) {
            const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
            if (fs.existsSync(sitemapPath)) {
              res.setHeader('Content-Type', 'application/xml'); // Set correct Content-Type
              res.end(fs.readFileSync(sitemapPath)); // Serve the sitemap content
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
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
