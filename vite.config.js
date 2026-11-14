import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const emailJsBrowserSettings = [
  'EMAILJS_SERVICE_ID',
  'EMAILJS_TEMPLATE_ID',
  'EMAILJS_PUBLIC_KEY',
]

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_EMAILJS_')
  const define = {}

  // Alias only the browser-safe settings already configured in Vercel.
  for (const setting of emailJsBrowserSettings) {
    const viteSetting = `VITE_${setting}`
    const value = process.env[setting]
    if (!env[viteSetting] && value) {
      define[`import.meta.env.${viteSetting}`] = JSON.stringify(value)
    }
  }

  return { plugins: [react()], define }
})
