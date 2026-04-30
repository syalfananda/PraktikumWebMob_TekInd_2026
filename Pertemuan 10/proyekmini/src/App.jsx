import React from 'react';
import KalkulatorOEE from './komponen/KalkulatorOEE';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef2f7, #dfe9f3)',
        display: 'flex',
        justifyContent: 'center'
      }}
      className="py-5"
    >
      <div
        className="container"
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >

        {/* HEADER */}
        <div className="text-center mb-5">
          <h1
            className="fw-bold"
            style={{ letterSpacing: '0.5px' }}
          >
            Syalfa Oktifa Nanda
          </h1>

          <div className="text-muted mb-2">
            23051430023
          </div>

          <span
            className="badge px-4 py-2"
            style={{
              backgroundColor: '#2563eb',
              fontSize: '14px',
              borderRadius: '8px'
            }}
          >
            Mini Proyek Kalkulator OEE
          </span>
        </div>

        {/* Section Kalkulator OEE */}
        <div
          className="card border-0 mb-4"
          style={{
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
          }}
        >
          <div className="card-body p-4">
            <h3 className="fw-semibold mb-3 text-center">
              Praktik 3 (Perhitungan Overall Equipment Effectiveness)
            </h3>

            <div
              style={{
                background: '#f8fafc',
                borderRadius: '12px',
                padding: '20px'
              }}
            >
              <KalkulatorOEE />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;