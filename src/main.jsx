import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/home/Home.jsx'
import Navbar from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
  </React.StrictMode>
)
