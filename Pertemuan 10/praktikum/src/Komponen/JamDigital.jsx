import React, { useState, useEffect } from 'react';

function JamDigital() {
    const [waktu, setWaktu] = useState(new Date());
    // useEffect berjalan sekali setelah komponen dirender pertama kali
    useEffect(() => {
        // Membuat interval timer
        const timerID = setInterval(() => {
            setWaktu(new Date()); // Update state waktu setiap detik
        }, 1000);
        // Cleanup function: Dijalankan saat komponen dihapus/hancur
        // Penting untuk mencegah memory leak
        return () => {
            clearInterval(timerID);
        };
    }, []); // Array kosong [] artinya hanya dijalankan sekali saat mount
    return (
        <div className="alert alert-info text-center">
            <h4>Waktu Sistem Server: {waktu.toLocaleTimeString()}</h4>
        </div >
    );
}
export default JamDigital;