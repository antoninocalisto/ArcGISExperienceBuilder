import { Application } from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

export default function setupProxy(app: Application) {
  // Tudo que começar com /proxy/portalgis -> https://portalgis.petrobras.com.br
  app.use('/proxy/portalgis', createProxyMiddleware({
    target: 'https://portalgis.petrobras.com.br',
    changeOrigin: true,          // finge ser mesma origem
    secure: true,                // true se o cert é válido
    pathRewrite: { '^/proxy/portalgis': '' },
    onProxyReq(proxyReq) {
      // (opcional) alguns servers validam Origin
      proxyReq.setHeader('Origin', 'https://portalgis.petrobras.com.br')
    }
  }))
}
