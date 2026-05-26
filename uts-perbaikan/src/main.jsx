import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export default App

export { default as Navbar } from './components/Navbar.jsx'
export { default as Dashboard } from './Pages/Dashboard.jsx'
export { default as InputLaporan } from './Pages/InputLaporan.jsx'
export { default as RiwayatData } from './Pages/RiwayatData.jsx'

// KETIK 3 BARIS INI:
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter } from 'react-router-dom'

// UBAH BAGIAN RENDER MENJADI SEPERTI INI:
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)