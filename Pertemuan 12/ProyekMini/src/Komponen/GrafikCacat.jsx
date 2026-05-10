import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

function GrafikCacat() {
    const data = {
        labels: ['Scratch', 'Dent', 'Lainnya'],
        datasets: [
            {
                label: 'Proporsi Cacat',
                data: [50, 30, 20],
                // Kreasi: Warna pastel modern untuk Chart
                backgroundColor: [
                    '#f43f5e', // Rose
                    '#f59e0b', // Amber
                    '#3b82f6', // Blue
                ],
                borderWidth: 2,
                borderColor: '#ffffff',
                hoverOffset: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%', // Membuat cincinnya sedikit lebih elegan
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true, // Mengubah kotak legenda menjadi lingkaran
                    font: { size: 13, family: "'Inter', sans-serif" },
                },
            },
            tooltip: { enabled: true },
        },
    };

    return (
        <div style={{ height: '320px', width: '100%', maxWidth: '340px', margin: '0 auto' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default GrafikCacat;