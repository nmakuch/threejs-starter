import { defineConfig } from "vite";

export default defineConfig ({
  // config options
  root: 'src/',
  publicDir: '../static/',
  base: './',
  server:
  {
    host: true, // Open to local network and display URL
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST') 
  },
  build:
  {
    outDir: '../dist', // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true // Add sourcemap
  }
})