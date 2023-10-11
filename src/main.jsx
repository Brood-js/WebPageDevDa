import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'
import Nosotros from './components/Nosotros'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Nosotros />
  </React.StrictMode>
)
