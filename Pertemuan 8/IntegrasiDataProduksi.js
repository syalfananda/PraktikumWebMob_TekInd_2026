const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerLaporan');
const loading = document.getElementById('loading');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const dataInsidenReal2 = [
    { title: "Suara tidak normal dari mesin utama", body: "Terdengar bunyi berisik dari dalam mesin saat dioperasikan, diduga ada komponen yang longgar." },
    { title: "Tekanan air menurun di sistem pendingin", body: "Aliran air tidak sekuat biasanya sehingga proses pendinginan tidak berjalan optimal." },
    { title: "Panel kontrol tidak merespons input", body: "Tombol pada panel tidak berfungsi saat ditekan sehingga operator tidak dapat mengatur sistem." },
    { title: "Sistem tiba-tiba restart otomatis", body: "Perangkat mengalami restart tanpa perintah yang menyebabkan proses kerja terhenti sementara." },
    { title: "Akses login pengguna mengalami kendala", body: "Beberapa pengguna tidak dapat masuk ke sistem meskipun menggunakan kredensial yang benar." },
    { title: "Pergerakan conveyor tidak stabil", body: "Conveyor berjalan tersendat-sendat sehingga mengganggu alur distribusi barang." },
    { title: "Sensor suhu menunjukkan angka tidak wajar", body: "Data suhu yang ditampilkan tidak sesuai dengan kondisi sebenarnya di lapangan." },
    { title: "Kendaraan operasional sulit dikendalikan", body: "Operator melaporkan kendala saat mengarahkan kendaraan di area kerja." },
    { title: "Data transaksi tidak tersimpan di sistem", body: "Beberapa input data hilang setelah disimpan sehingga perlu dilakukan input ulang." },
    { title: "Gerbang otomatis tertutup sebagian", body: "Gerbang tidak terbuka penuh sehingga menghambat keluar masuk barang." }
];

btnLoad.addEventListener('click', function () {

    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error('Gagal mengambil data laporan');
            return response.json();
        })
        .then(dataLaporan => {

            // ambil 10 data + ganti isi dengan data kamu
            const sepuluhLaporan = dataLaporan.slice(0, 10).map((item, index) => {
                return {
                    id: item.id,
                    title: dataInsidenReal2[index].title,
                    body: dataInsidenReal2[index].body
                };
            });

            renderData(sepuluhLaporan);
        })
        .catch(error => {
            container.innerHTML = `<div class="alert alert-danger w-100">Error: ${error.message}</div>`;
        })
        .finally(() => {
            loading.classList.add('d-none');
        });
});

function renderData(data) {
    data.forEach(laporan => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        col.innerHTML = `
            <div id="card-${laporan.id}" class="card h-100 shadow-sm border-0 bg-white">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-danger">${laporan.title}</h5>
                    <p class="card-text text-muted flex-grow-1">${laporan.body}</p>

                    <button id="btn-${laporan.id}" 
                        class="btn btn-warning mt-3 fw-bold"
                        onclick="tindakLanjut(${laporan.id}, \`${laporan.title}\`)">
                        Tindak Lanjut
                    </button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

function tindakLanjut(id, judul) {
    alert("Tiket ID " + id + " sedang diproses oleh Tim Maintenance");

    const card = document.getElementById(`card-${id}`);
    const btn = document.getElementById(`btn-${id}`);

    if (card && btn) {
        card.classList.remove('bg-white');
        card.classList.add('bg-warning', 'bg-opacity-25', 'border', 'border-warning');

        btn.classList.remove('btn-warning');
        btn.classList.add('btn-success');
        btn.innerText = "✓ Sedang Diproses";
        btn.disabled = true;
    }
}