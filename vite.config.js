import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/test-assignment_ToDo-list_vite-project/',
  plugins: [react()],
})
