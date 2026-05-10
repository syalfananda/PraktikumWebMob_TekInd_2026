import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
// Mendaftarkan komponen ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function GrafikProduksi() {
    // Data untuk Grafik
    const data = {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
        datasets: [
            {
                label: 'Jumlah Produksi (Unit)',
                data: [120, 150, 180, 170, 200, 210], // Data statis, bisa diganti state/dinamis
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Target',
                data: [150, 150, 150, 150, 150, 150], // Garis target konstan
                type: 'line', // Tipe campuran (Bar + Line)
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
            },
        ],
    };
    // Opsi Tampilan Grafik
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Grafik Produksi Harian - Lini 1',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return <Bar data={data} options={options} />;
}
export default GrafikProduksi;