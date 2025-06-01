import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TechGiantContextProvider from './context/TechGiantContext.jsx'
import { BrowserRouter } from 'react-router-dom'

// Initialize Eruda in both dev and production
const initEruda = () => {
  import('eruda').then(({ default: eruda }) => {
    eruda.init({
      tool: ['console', 'elements', 'network', 'performance'],
      defaults: {
        displaySize: 45,
        theme: 'Dark'
      }
    });
    console.log('Eruda debugger initialized');
  }).catch(console.error);
};

// Enable Eruda based on URL hash or localStorage flag
if (window.location.hash === '#debug' || localStorage.getItem('debug-mode') === 'true') {
  initEruda();
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