import React from 'react';

function KartuMesin({ nama, status, produksi = 0 }) {
    let badgeColor = 'bg-secondary';
    if (status === 'Running') badgeColor = 'bg-success';
    if (status === 'Stop') badgeColor = 'bg-danger';
    if (status === 'Maintenance') badgeColor = 'bg-warning text-dark';

    return (
        <div className="card shadow-sm p-3 mb-3 text-center">
            <div className="card-body">
                <h5 className="card-title fw-bold">⚙️ {nama}</h5>
                <span className={`badge rounded-pill ${badgeColor} mb-3`}>{status}</span>
                <p className="border-top pt-3">Produksi: <strong>{produksi}</strong> Unit</p>
            </div>
        </div>
    );
}

export default KartuMesin;