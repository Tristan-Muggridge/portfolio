import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePluginRadar } from "vite-plugin-radar";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(),
    VitePluginRadar ({
    analytics: {
      id: 'G-PTQ8QDCKGQ'
    }
  })],
})
