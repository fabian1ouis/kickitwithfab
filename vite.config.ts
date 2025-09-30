import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __SITE_URL__: JSON.stringify('https://www.kickitwithfab.com'),
    __SITE_NAME__: JSON.stringify('Kick it with Fab'),
    __AUTHOR__: JSON.stringify('Fabian Louis')
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'swiper'],
          utils: ['lucide-react']
        }
      }
    }
  }
});
