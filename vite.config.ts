import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/send-lead.php': {
        target: 'https://code17-f5b8erd0hkdhcbba.westus3-01.azurewebsites.net',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
