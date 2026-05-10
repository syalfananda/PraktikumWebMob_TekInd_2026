import React from 'react';
import Sidebar from './Sidebar';
import logoTI from './Logo Teknik Industri.jpeg';

function Layout({ children }) {
    return (
        <div>
            {/* Sidebar Desktop */}
            <div className="d-none d-lg-block">
                <Sidebar />
            </div>

            {/* Main Content Desktop */}
            <main
                className="d-none d-lg-block"
                style={{
                    marginLeft: '270px',
                    padding: '32px',
                    minHeight: '100vh',
                    background: '#f8fafc', // Warna background konten lebih soft
                }}
            >
                {children}
            </main>

            {/* Mobile Layout */}
            <div className="d-lg-none">
                {/* Navbar Mobile */}
                <nav
                    className="navbar px-3 shadow-sm d-flex justify-content-between align-items-center"
                    style={{
                        background: '#0f172a',
                        height: '72px',
                    }}
                >
                    {/* Kiri */}
                    <div className="d-flex align-items-center">
                        <button
                            className="btn btn-outline-light me-3 border-0"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#mobileSidebar"
                        >
                            <span className="fs-4">☰</span>
                        </button>
                        <div
                            className="bg-white rounded-3 d-flex justify-content-center align-items-center"
                            style={{
                                width: '42px',
                                height: '42px',
                                padding: '4px',
                            }}
                        >
                            <img
                                src={logoTI}
                                alt="Logo Teknik Industri"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    </div>

                    {/* Tengah */}
                    <div className="text-center text-white d-none d-sm-block">
                        <div style={{ fontWeight: '700', fontSize: '18px', lineHeight: '18px' }}>
                            Sistem Pabrik
                        </div>
                        <small style={{ opacity: 0.7, fontSize: '11px' }}>
                            Dashboard Industri
                        </small>
                    </div>

                    {/* Kanan */}
                    <div className="text-end text-white">
                        {/* NAMA DAN NIM SUDAH DIGANTI */}
                        <div style={{ fontSize: '13px', fontWeight: '600', lineHeight: '14px' }}>
                            Syalfa Oktifa
                        </div>
                        <small style={{ opacity: 0.7, fontSize: '10px' }}>
                            23051430023
                        </small>
                    </div>
                </nav>

                {/* Sidebar Mobile (Offcanvas) */}
                <div
                    className="offcanvas offcanvas-start text-bg-dark"
                    tabIndex="-1"
                    id="mobileSidebar"
                    style={{ width: '260px', background: '#0f172a' }}
                >
                    <div className="offcanvas-header border-bottom border-secondary">
                        <h5 className="offcanvas-title fw-bold">Menu Navigasi</h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                        ></button>
                    </div>
                    <div className="offcanvas-body p-0">
                        <Sidebar mobile />
                    </div>
                </div>

                {/* Content Mobile */}
                <main style={{ padding: '20px', background: '#f8fafc', minHeight: 'calc(100vh - 72px)' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;