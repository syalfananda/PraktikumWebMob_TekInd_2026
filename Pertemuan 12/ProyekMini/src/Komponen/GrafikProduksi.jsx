import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function GrafikProduksi() {

    const [produksiData, setProduksiData] = useState([]);

    // Simulasi fetch API dengan data random
    useEffect(() => {

        const fetchData = async () => {

            // Simulasi delay request API
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Generate data random
            const hasilRandom = Array.from(
                { length: 6 },
                () => Math.floor(Math.random() * 100) + 120
            );

            setProduksiData(hasilRandom);
        };

        fetchData();

    }, []);

    // Data grafik
    const data = {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],

        datasets: [
            {
                label: 'Jumlah Produksi (Unit)',
                data: produksiData,
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
    };

    // Opsi grafik
    const options = {
        responsive: true,
        maintainAspectRatio: false,

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
    return (
        <div style={{ height: '420px' }}>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
}

export default GrafikProduksi;