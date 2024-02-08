import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';
import path from "path"
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
      { find: "@", replacement: "/src/@" },
      { find: "@api", replacement: "/src/api" },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
