import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
// import Navbar from './Komponen/Navbar'; // Anda bisa buat navbar sendiri
import Inventoridetail from "./Halaman/Inventoridetail";
import LaporanKualitas from "./Halaman/LaporanKualitas"
// Buat Navbar.jsx sederhana untuk navigasi
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="/">Sistem Pabrik</a>
        <div className="navbar-nav">
          <a className="nav-link" href="/">Dashboard</a>
          <a className="nav-link" href="/inventori">Inventori</a>
          <a className="nav-link" href="/laporan-kualitas">Laporan Kualitas</a>
        </div>
      </div>
    </nav>
  )
}
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Route yang tepat akan di-render */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/Inventori" element={<Inventori />} />
        <Route path="/Inventori/:id" element={<Inventoridetail />} />
        <Route path="/laporan-kualitas" element={<LaporanKualitas />} />
        {/* Route untuk semua path lainnya (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;