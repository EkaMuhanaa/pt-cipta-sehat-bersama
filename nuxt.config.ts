// Ganti URL ini dengan URL Ngrok Anda saat akan push ke Vercel!
// Contoh: const API_URL = 'https://1234-abcd.ngrok-free.app'
const API_URL = process.env.API_URL || 'http://localhost:4000'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'PT CIPTA SEHAT BERSAMA | Solusi Terpadu Kesehatan',
      htmlAttrs: { lang: 'id' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo-pt-trans.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/api/**': { proxy: `${API_URL}/api/**` }
  }
})