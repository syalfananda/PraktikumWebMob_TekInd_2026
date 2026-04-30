import React, { useState } from 'react';
function CounterProduksi() {
    const [jumlah, setJumlah] = useState(0);
    const [emergency, setEmergency] = useState(false);

    const handleEmergency = () => setEmergency(true);
    const reset = () => {
        setJumlah(0);
        setEmergency(false);  // reset emergency juga
    };

    return (
        <div className="text-center p-4">
            <h1>{jumlah}</h1>

            {emergency && (
                <div className="alert alert-danger">
                    🚨 EMERGENCY STOP AKTIF — Hubungi supervisor
                </div>
            )}

            <button className="btn btn-primary me-2"
                disabled={emergency}
                onClick={() => setJumlah(jumlah + 1)}>+1 Unit</button>

            <button className="btn btn-warning me-2"
                onClick={handleEmergency}
                disabled={emergency}>🚨 Emergency Stop</button>

            <button className="btn btn-danger"
                onClick={reset}>Reset Shift</button>
        </div>
    );
}
export default CounterProduksi;