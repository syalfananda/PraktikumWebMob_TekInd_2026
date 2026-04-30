import React from 'react';
import KartuMesin from './komponen/KartuMesin.jsx';
import CounterProduksi from './komponen/CounterProduksi.jsx';
import JamDigital from './komponen/JamDigital.jsx';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #eef2f7, #d9e2ec)'
      }}
      className="py-5"
    >
      <div className="container-fluid px-4">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary mb-1">
            Syalfa Oktifa Nanda
          </h1>
          <p className="text-secondary mb-2">
            23051430023
          </p>

          <span className="badge bg-dark px-4 py-2 rounded-pill">
            Praktikum Web Mobile - Pertemuan 10
          </span>
        </div>

        {/* SECTION MESIN */}
        <div className="card border-0 shadow-lg mb-4 rounded-4">
          <div className="card-body p-4">
            <h4 className="text-center mb-4 fw-semibold text-dark">
              Monitoring Lini Produksi
            </h4>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <KartuMesin
                      nama="CNC-Turning-01"
                      status="Running"
                      produksi={98}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <KartuMesin
                      nama="CNC-Milling-02"
                      status="Maintenance"
                      produksi={0}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <KartuMesin
                      nama="Press-Hydraulic-05"
                      status="Stop"
                      produksi={85}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COUNTER */}
        <div className="card border-0 shadow-lg mb-4 rounded-4">
          <div className="card-body text-center p-4">
            <h4 className="mb-3 fw-semibold">Counter Produksi</h4>

            <div className="bg-white border rounded-3 p-4 shadow-sm">
              <CounterProduksi />
            </div>
          </div>
        </div>

        {/* JAM DIGITAL */}
        <div className="card border-0 shadow-lg rounded-4">
          <div className="card-body text-center p-4">
            <h4 className="mb-3 fw-semibold">Jam Digital</h4>

            <div className="bg-white border rounded-3 p-4 shadow-sm">
              <JamDigital />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;