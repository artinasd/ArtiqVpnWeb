import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/artiqvpnweb/', // IMPORTANT: Make sure this matches your repo name
  plugins: [
    react(),
    tailwindcss(),
  ],
})