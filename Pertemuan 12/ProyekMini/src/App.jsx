import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pastikan path import ini sesuai dengan folder kamu
import Layout from './Komponen/Layout';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import InventoriDetail from './Halaman/Inventoridetail';
import LaporanKualitas from './Halaman/LaporanKualitas';
import NotFound from './Halaman/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventori" element={<Inventori />} />
        <Route path="/inventori/:id" element={<InventoriDetail />} />
        <Route path="/laporan-kualitas" element={<LaporanKualitas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;