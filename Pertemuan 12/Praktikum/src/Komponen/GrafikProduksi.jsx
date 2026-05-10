import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement, // Wajib ditambahkan untuk grafik Donat/Pie
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Mendaftarkan komponen ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement, // Daftarkan ArcElement
    Title,
    Tooltip,
    Legend
);

function GrafikProduksi() {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [defectData, setDefectData] = useState({ labels: [], datasets: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                // --- Data untuk Grafik Bar (Produksi) ---
                const labelWaktu = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];
                const dataProduksiDinamis = labelWaktu.map(() => 
                    Math.floor(Math.random() * (220 - 100 + 1)) + 100
                );

                setChartData({
                    labels: labelWaktu,
                    datasets: [
                        {
                            label: 'Jumlah Produksi (Unit)',
                            data: dataProduksiDinamis,
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                        },
                        {
                            label: 'Target',
                            data: [150, 150, 150, 150, 150, 150],
                            type: 'line',
                            borderColor: 'rgb(255, 99, 132)',
                            borderWidth: 2,
                        },
                    ],
                });

                // --- Data untuk Grafik Doughnut (Proporsi Cacat) ---
                setDefectData({
                    labels: ['Scratch', 'Dent', 'Lainnya'],
                    datasets: [
                        {
                            label: 'Persentase Cacat',
                            data: [50, 30, 20], // Sesuai permintaan: 50%, 30%, 20%
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)', // Merah untuk Scratch
                                'rgba(255, 206, 86, 0.6)', // Kuning untuk Dent
                                'rgba(75, 192, 192, 0.6)', // Hijau/Tosca untuk Lainnya
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                });

                setLoading(false);
            }, 1000);
        };

        fetchData();
    }, []);

    // Opsi untuk Grafik Bar
    const barOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Grafik Produksi Harian - Lini 1' },
        },
    };

    // Opsi untuk Grafik Doughnut
    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: 'Proporsi Cacat Produksi' },
        },
    };

    if (loading) {
        return <p style={{ textAlign: 'center', marginTop: '50px' }}>Memuat data Dashboard...</p>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Monitoring Produksi</h1>
            
            {/* Container Flexbox untuk mengatur posisi grafik */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                
                {/* Bagian Grafik Bar (Produksi) */}
                <div style={{ width: '600px', minWidth: '300px' }}>
                    <Bar data={chartData} options={barOptions} />
                </div>

                {/* Bagian Grafik Doughnut (Cacat) */}
                <div style={{ width: '350px', minWidth: '250px' }}>
                    <Doughnut data={defectData} options={doughnutOptions} />
                </div>

            </div>
        </div>
    );
}

export default GrafikProduksi;