import React from 'react';
import CounterProduksi from './komponen/CounterProduksi.jsx';
import JamDigital from './komponen/JamDigital.jsx';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4f7fe', // Background abu-abu kebiruan modern ala dashboard
      fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
      padding: '3rem 1rem'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>

        {/* --- HEADER / PROFILE SECTION --- */}
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.4rem 1.5rem',
            backgroundColor: '#e0e8ff',
            color: '#4318ff',
            borderRadius: '50px',
            fontWeight: '700',
            fontSize: '0.85rem',
            marginBottom: '1.2rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            boxShadow: '0 4px 10px rgba(67, 24, 255, 0.15)'
          }}>
            Praktikum Web Mobile • Pertemuan 10
          </div>
          
          <h1 style={{
            fontWeight: '800',
            fontSize: '2.8rem',
            color: '#2b3674',
            marginBottom: '0.5rem',
            letterSpacing: '-1px'
          }}>
            Syalfa Oktifa Nanda
          </h1>
          
          <div style={{
            fontSize: '1.2rem',
            color: '#a3aed1',
            fontWeight: '600',
            letterSpacing: '2px'
          }}>
            NIM: 23051430023
          </div>
        </div>

        {/* --- CARD 1: JAM DIGITAL --- */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: '0 18px 40px rgba(112, 144, 176, 0.12)',
          marginBottom: '2.5rem',
          border: '1px solid #e9edf7'
        }}>
          <div style={{ 
            borderBottom: '2px solid #f4f7fe', 
            paddingBottom: '1.2rem', 
            marginBottom: '2rem' 
          }}>
            <h3 style={{ 
              color: '#2b3674', 
              fontWeight: '800', 
              margin: 0, 
              fontSize: '1.4rem' 
            }}>
              🕒 Latihan 1: Jam Digital & State Kota
            </h3>
            <p style={{ 
              color: '#8f9bba', 
              margin: '0.5rem 0 0 0', 
              fontSize: '0.95rem',
              fontWeight: '500'
            }}>
              Modifikasi Jam Digital menggunakan dependency array pada useEffect.
            </p>
          </div>
          
          {/* Tempat Komponen JamDigital Dirender */}
          <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <JamDigital />
          </div>
        </div>

        {/* --- CARD 2: COUNTER PRODUKSI --- */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: '0 18px 40px rgba(112, 144, 176, 0.12)',
          marginBottom: '2.5rem',
          border: '1px solid #e9edf7'
        }}>
          <div style={{ 
            borderBottom: '2px solid #f4f7fe', 
            paddingBottom: '1.2rem', 
            marginBottom: '2rem' 
          }}>
            <h3 style={{ 
              color: '#2b3674', 
              fontWeight: '800', 
              margin: 0, 
              fontSize: '1.4rem' 
            }}>
              ⚠️ Latihan 2: Counter Produksi
            </h3>
            <p style={{ 
              color: '#8f9bba', 
              margin: '0.5rem 0 0 0', 
              fontSize: '0.95rem',
              fontWeight: '500'
            }}>
              Simulasi penambahan tombol Emergency Stop dan Conditional Rendering.
            </p>
          </div>
          
          {/* Tempat Komponen CounterProduksi Dirender */}
          <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <CounterProduksi />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;