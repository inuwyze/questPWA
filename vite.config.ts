import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePWA({ 
      mode: 'development',
      base: '/',
      registerType: 'autoUpdate',
      devOptions:{
        enabled:true,
        type: 'module',
        navigateFallback: 'index.html',
    
      },
     
      manifest:{
        name:'Quest',
        
        description:'quest application',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo_192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo_512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
     })]
})
