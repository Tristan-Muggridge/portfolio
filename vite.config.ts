import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteRadar from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(),
  viteRadar({
    analytics: {
      id: 'G-PTQ8QDCKGQ'
    }
  })],
})
