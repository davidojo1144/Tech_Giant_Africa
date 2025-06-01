import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TechGiantContextProvider from './context/TechGiantContext.jsx'
import { BrowserRouter } from 'react-router-dom'

// Eruda debugger (dev mode only)
if (import.meta.env.DEV) {
  import('eruda').then(({ default: eruda }) => {
    eruda.init({
      tool: ['console', 'elements', 'network', 'performance'],
      defaults: {
        displaySize: 45,
        theme: 'Dark' // Better for OLED screens
      }
    })
    console.log('Eruda debugger initialized') // Optional confirmation
  }).catch(console.error)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TechGiantContextProvider>
        <App />
      </TechGiantContextProvider>
    </BrowserRouter>
  </StrictMode>
)