import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: { // new increase
    // Set aliases
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },

  },
})
