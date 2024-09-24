import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { WeightCalc } from './WeightCalc'
//import { AdviceApp } from './AdviceApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*<App />*/} 
  {/* <AdviceApp/>*/} 
  <WeightCalc/>
  
  </StrictMode>,
)
