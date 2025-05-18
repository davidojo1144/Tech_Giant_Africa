import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TechGiantContextProvider from './context/TechGiantContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TechGiantContextProvider>
      <App />
    </TechGiantContextProvider>
  </StrictMode>,
)
