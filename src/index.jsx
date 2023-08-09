import { createRoot } from 'react-dom/client'
import './style.css'
import { StrictMode } from 'react'
import App from './App'

const container = document.getElementById('app')
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
)