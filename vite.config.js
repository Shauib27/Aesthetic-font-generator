import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            // React + router change rarely: keep them in a separately cached chunk.
            manualChunks(id) {
              if (id.includes('node_modules')) return 'vendor';
            },
          },
        },
      },
}));
