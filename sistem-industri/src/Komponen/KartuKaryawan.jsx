import React from 'react';

// Latihan 3: Membuat komponen KartuKaryawan
function KartuKaryawan({ nama, jabatan, bagian }) {
    return (
        <div className="card border-primary p-3 mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title text-primary">{nama}</h5>
                <p className="mb-1"><strong>Jabatan:</strong> {jabatan}</p>
                <p className="mb-0"><strong>Bagian:</strong> {bagian}</p>
            </div>
        </div>
    );
}

export default KartuKaryawan;
