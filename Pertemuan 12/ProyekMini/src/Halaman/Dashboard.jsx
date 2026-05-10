import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import KartuMesin from '../Komponen/KartuMesin';
import GrafikCacat from '../Komponen/GrafikCacat';

function Dashboard() {
    return (
        <div className="container-fluid py-4">

            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">

                <div>
                    <h2 className="fw-bold mb-0">
                        Dashboard Pintar 4.0
                    </h2>
                </div>
            </div>

            {/* Grafik dan KPI */}
            <div className="row g-4 mb-4">

                {/* Grafik Produksi */}
                <div className="col-lg-8">

                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body">
                            <GrafikProduksi />
                        </div>
                    </div>

                </div>

                {/* KPI */}
                <div className="col-lg-4">

                    <div className="d-flex flex-column gap-3 h-100">

                        <div className="card bg-primary text-white shadow-sm border-0 flex-fill">
                            <div className="card-body d-flex flex-column justify-content-center">

                                <h6 className="text-uppercase mb-2">
                                    Total Output Hari Ini
                                </h6>

                                <h1 className="fw-bold mb-2">
                                    1,030
                                </h1>

                                <small>
                                    Update terakhir: 13:00
                                </small>

                            </div>
                        </div>

                        <div className="card bg-success text-white shadow-sm border-0 flex-fill">
                            <div className="card-body d-flex flex-column justify-content-center">

                                <h6 className="text-uppercase mb-2">
                                    Efficiency Rate
                                </h6>

                                <h1 className="fw-bold mb-2">
                                    92.4%
                                </h1>

                                <small>
                                    +1.2% dari kemarin
                                </small>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* Donut Full Width */}
            <div className="row mb-4">

                <div className="col-lg-12">

                    <div className="card shadow-sm border-0">
                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <div>
                                    <h5 className="fw-semibold mb-1">
                                        Proporsi Cacat Produksi
                                    </h5>

                                    <small className="text-muted">
                                        Distribusi jenis cacat hari ini
                                    </small>
                                </div>

                            </div>

                            <div
                                style={{
                                    maxWidth: "320px",
                                    margin: "0 auto",
                                }}
                            >
                                <GrafikCacat />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* Status Mesin */}
            <div className="mb-3">
                <h4 className="fw-semibold">
                    Status Mesin Aktif
                </h4>
            </div>

            <div className="row g-4">

                <div className="col-md-6 col-lg-3">
                    <KartuMesin
                        nama="CNC-01"
                        status="Running"
                        produksi={320}
                    />
                </div>

                <div className="col-md-6 col-lg-3">
                    <KartuMesin
                        nama="CNC-02"
                        status="Running"
                        produksi={310}
                    />
                </div>

                <div className="col-md-6 col-lg-3">
                    <KartuMesin
                        nama="Press-01"
                        status="Stop"
                        produksi={150}
                    />
                </div>

                <div className="col-md-6 col-lg-3">
                    <KartuMesin
                        nama="Weld-04"
                        status="Maintenance"
                        produksi={0}
                    />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;