import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/KartuKaryawan'; // Baris ini sangat penting!

function App() {
  return (
    <div className="container mt-5">
      {/* BAGIAN MONITORING MESIN (Langkah 4 + Latihan 1 & 2) */}
      <h1 className="text-center mb-4">Dashboard Monitoring Produksi</h1>
      <div className="row mb-5">
        <div className="col-md-4">
          <KartuMesin nama="Mesin Injeksi-01" status="Running" produksi={150} />
        </div>
        <div className="col-md-4">
          <KartuMesin nama="Mesin CNC-02" status="Maintenance" produksi={45} />
        </div>
        <div className="col-md-4">
          <KartuMesin nama="Press-Hydraulic-05" status="Stop" produksi={85} />
        </div>
      </div>

      <hr />

      {/* TUGAS PROYEK MINI: BAGIAN KARYAWAN */}
      <h2 className="text-center my-4">Daftar Karyawan Aktif</h2>
      <div className="row">
        <div className="col-md-4">
          <KartuKaryawan nama="Budi Santoso" jabatan="Manager" bagian="Produksi" />
        </div>
        <div className="col-md-4">
          <KartuKaryawan nama="Siti Aminah" jabatan="Operator" bagian="Assembly" />
        </div>
        <div className="col-md-4">
          <KartuKaryawan nama="Agus Pratama" jabatan="QC" bagian="Quality Control" />
        </div>
      </div>
    </div>
  );
}

export default App;
