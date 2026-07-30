import { defineEventHandler, proxyRequest } from 'h3'

export default defineEventHandler((event) => {
  const url = event.node.req.url
  const API_URL = process.env.API_URL || 'http://localhost:8000'

  if (url && (url.startsWith('/api/') || url.startsWith('/storage/') || url.startsWith('/uploads/'))) {
    return proxyRequest(event, `${API_URL}${url}`)
  }
})
