import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.jsx'


// Esse index css n sei se era pra ficar aqui, deixei pq n era prioridade saber na real
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
