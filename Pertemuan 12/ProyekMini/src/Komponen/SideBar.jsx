import React from 'react';
import { NavLink } from 'react-router-dom';
// Gunakan path logo yang sesuai dengan file aslimu
import logoTI from './Logo Teknik Industri.jpeg';

function Sidebar({ mobile = false }) {
    const menuStyle = ({ isActive }) => ({
        padding: '14px 16px',
        borderRadius: '14px',
        textDecoration: 'none',
        color: isActive ? '#fff' : '#cbd5e1',
        // Kreasi warna: Gradasi Indigo ke Violet yang lebih elegan
        background: isActive
            ? 'linear-gradient(90deg, #4f46e5, #8b5cf6)'
            : 'transparent',
        fontWeight: isActive ? '600' : '500',
        transition: '0.3s ease-in-out',
    });

    return (
        <div
            className="d-flex flex-column text-white"
            style={{
                width: mobile ? '100%' : '270px',
                height: mobile ? '100%' : '100vh',
                background: '#0f172a', // Warna background sedikit lebih modern (Slate)
                padding: '24px',
                position: mobile ? 'relative' : 'fixed',
                top: 0,
                left: 0,
                boxShadow: '0 0 25px rgba(0,0,0,0.15)',
            }}
        >
            {/* Logo */}
            <div className="d-flex align-items-center mb-5">
                <div
                    className="bg-white rounded-4 d-flex justify-content-center align-items-center me-3 shadow-sm"
                    style={{
                        width: '64px',
                        height: '64px',
                        padding: '8px',
                        flexShrink: 0,
                    }}
                >
                    <img
                        src={logoTI}
                        alt="Logo TI"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </div>
                <div>
                    <h4 className="fw-bold mb-1">Sistem Pabrik</h4>
                    <small style={{ color: '#94a3b8', fontSize: '13px' }}>
                        Dashboard Industri
                    </small>
                </div>
            </div>

            {/* Section Navigasi */}
            <small
                className="mb-3 fw-bold"
                style={{
                    color: '#64748b',
                    letterSpacing: '1.5px',
                    fontSize: '11px',
                }}
            >
                MENU NAVIGASI
            </small>

            {/* Menu */}
            <div className="d-flex flex-column gap-2">
                <NavLink to="/" style={menuStyle}>
                    Dashboard
                </NavLink>
                <NavLink to="/inventori" style={menuStyle}>
                    Inventori
                </NavLink>
                <NavLink to="/laporan-kualitas" style={menuStyle}>
                    Laporan Kualitas
                </NavLink>
            </div>

            {/* Footer */}
            {!mobile && (
                <div className="mt-auto pt-4 border-top border-secondary">
                    {/* NAMA DAN NIM SUDAH DIGANTI */}
                    <div className="fw-semibold text-light">
                        Syalfa Oktifa Nanda
                    </div>
                    <small style={{ color: '#94a3b8', letterSpacing: '0.5px' }}>
                        NIM: 23051430023
                    </small>
                </div>
            )}
        </div>
    );
}

export default Sidebar;