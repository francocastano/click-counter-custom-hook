import { React } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ComponentCounter } from './components/ComponentCounter'
import { HooksApp } from './components/HooksApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HooksApp></HooksApp>  
  </StrictMode>,
)
