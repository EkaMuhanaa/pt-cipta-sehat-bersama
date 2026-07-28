import { defineEventHandler, proxyRequest } from 'h3'

export default defineEventHandler((event) => {
  const url = event.node.req.url
  const API_URL = process.env.API_URL || 'http://localhost:4000'

  if (url && (url.startsWith('/api/') || url.startsWith('/uploads/'))) {
    // Tambahkan header khusus ngrok agar tidak memunculkan halaman warning
    event.node.req.headers['ngrok-skip-browser-warning'] = '69420'
    
    // Lakukan proxy request secara manual
    return proxyRequest(event, `${API_URL}${url}`)
  }
})
