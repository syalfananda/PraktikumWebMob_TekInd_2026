import React, { useState, useEffect } from 'react';

function JamDigital() {
    const [waktu, setWaktu] = useState(new Date());
    const [kota, setKota] = useState("Yogyakarta");

    // Effect 1: timer (mount only)
    useEffect(() => {
        const id = setInterval(() => setWaktu(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    // Effect 2: update title saat kota berubah
    useEffect(() => {
        document.title = `Jam ${kota}`;
    }, [kota]);  // Dependency array berisi kota

    return (
        <div className="text-center p-3">
            <input value={kota}
                onChange={(e) => setKota(e.target.value)}
                className="form-control mb-2" />
            <h4>Jam {kota}: {waktu.toLocaleTimeString()}</h4>
        </div>
    );
}
export default JamDigital;