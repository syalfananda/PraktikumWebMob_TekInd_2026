import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import InputLaporan from './pages/InputLaporan';
import RiwayatData from './pages/RiwayatData';

function App() {
  const [laporanList, setLaporanList] = useState([]);

  // useEffect untuk baca storage saat mount
  // ✓ Kode useEffect(() => { ... }, []) dengan logic JSON.parse saat pertama kali dibuka
  useEffect(() => {
    const dataLokal = localStorage.getItem('DATA_LAPORAN_PRODUKSI');
    if (dataLokal) {
      setLaporanList(JSON.parse(dataLokal));
    }
  }, []); // Dependency array [] kosong wajib agar tidak terjadi infinite loop

  // Fungsi simpan (setItem) setelah modifikasi array (Tambah Data)
  const tambahLaporan = (dataBaru) => {
    const arrayTerbaru = [...laporanList, dataBaru];
    setLaporanList(arrayTerbaru);
    
    //  LANGSUNG diikuti localStorage.setItem setelah setData
    localStorage.setItem('DATA_LAPORAN_PRODUKSI', JSON.stringify(arrayTerbaru));
  };

  // Integrasi setItem pada operasi hapus 1 baris
  const hapusLaporan = (indexHapus) => {
    const arrayTerfilter = laporanList.filter((_, index) => index !== indexHapus);
    setLaporanList(arrayTerfilter);
    
    // ✓ LANGSUNG diikuti localStorage.setItem setelah setData
    localStorage.setItem('DATA_LAPORAN_PRODUKSI', JSON.stringify(arrayTerfilter));
  };

  // Fungsi Hapus Semua menggunakan removeItem
  const hapusSemuaLaporan = () => {
    // ✓ Menggunakan confirm() bawaan browser sebelum menghapus
    if (window.confirm('Apakah Anda yakin ingin menghapus seluruh data laporan produksi?')) {
      setLaporanList([]);
      
      // ✓ Menggunakan removeItem untuk menghapus kunci secara total dari DevTools
      localStorage.removeItem('DATA_LAPORAN_PRODUKSI');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {/* Tombol Hapus Semua diletakkan secara global di atas halaman (opsional/bisa diakses kapan saja) */}
        {laporanList.length > 0 && (
          <div className="text-end mb-3">
            <button onClick={hapusSemuaLaporan} className="btn btn-sm btn-danger fw-bold shadow-sm">
               Bersihkan Semua Storage
            </button>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Dashboard data={laporanList} />} />
          <Route path="/input" element={<InputLaporan onTambahLaporan={tambahLaporan} />} />
          <Route 
            path="/riwayat" 
            element={
              <RiwayatData 
                data={laporanList} 
                onHapusLaporan={hapusLaporan} 
              />
            } 
          />
        </Routes>
      </div>
    </>
  );
}

export default App;