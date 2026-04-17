const btnLoad = document.getElementById('btnLoad');
const btnFilter = document.getElementById('btnFilter'); // ← BARU
const btnTambah = document.getElementById('btnTambah');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
const infoFilter = document.getElementById('infoFilter'); // ← BARU

// Endpoint API
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Variable global untuk status filter
let isFilterActive = false;

btnLoad.addEventListener('click', function () {
    loading.classList.remove('d-none');
    container.innerHTML = '';
    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(function (dataKaryawan) {
            console.log('Total data:', dataKaryawan.length);
            renderData(dataKaryawan);
        })
        .catch(function (error) {
            container.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
});

// ← BARU: Tombol Filter
btnFilter.addEventListener('click', function () {
    isFilterActive = !isFilterActive; // Toggle filter

    if (isFilterActive) {
        btnFilter.textContent = 'Hapus Filter';
        btnFilter.className = 'btn btn-secondary me-2';
        infoFilter.classList.remove('d-none');
        console.log('🔍 Filter AKTIF - Hanya kota mengandung "s"');
    } else {
        btnFilter.textContent = 'Filter Kota \'s\'';
        btnFilter.className = 'btn btn-warning me-2';
        infoFilter.classList.add('d-none');
        console.log('✅ Filter DINONAKTIFKAN');
    }

    // Reload data dengan status filter baru
    btnLoad.click();
});

// Fungsi tambah karyawan (tetap sama)
btnTambah.addEventListener('click', function () {
    tambahKaryawanBaru();
});

function tambahKaryawanBaru() {
    const karyawanBaru = {
        name: "Rizky Pratama",
        email: "rizky.pratama@perusahaanbaru.com",
        phone: "081234567890",
        website: "rizkypratama.com",
        company: {
            name: "PT Inovasi Digital",
            catchPhrase: "Membangun masa depan digital",
            bs: "Digital solutions provider"
        },
        address: {
            street: "Jl. Teknologi No. 123",
            suite: "Lantai 5",
            city: "Jakarta Selatan", // ← Mengandung "s"
            zipcode: "12190"
        }
    };

    loading.classList.remove('d-none');

    console.log('Mengirim data POST:', karyawanBaru);

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(karyawanBaru)
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(function (responseData) {
            console.log('✅ POST berhasil!', responseData);
            alert(`✅ Karyawan berhasil ditambahkan!\nID: ${responseData.id}`);
        })
        .catch(function (error) {
            console.error('❌ Error POST:', error);
            alert(`❌ Gagal: ${error.message}`);
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
}

// ← MODIFIKASI: Fungsi renderData dengan FILTER
function renderData(data) {
    console.log('Rendering data...', data.length, 'items');

    let dataToRender = data;

    // 🔥 FILTER: Hanya kota yang mengandung huruf "s"
    if (isFilterActive) {
        dataToRender = data.filter(function (karyawan) {
            // Cek apakah kota mengandung huruf "s" (case-insensitive)
            return karyawan.address.city.toLowerCase().includes('s');
        });
        console.log(`✅ Filter diterapkan: ${dataToRender.length}/${data.length} karyawan dari kota dengan huruf "s"`);
    }

    // Render data yang sudah difilter
    dataToRender.forEach(function (karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        // Tambah badge untuk kota yang difilter
        const badgeFilter = isFilterActive ?
            `<span class="badge bg-success ms-2">Kota: ${karyawan.address.city}</span>` :
            `<small>Kota: ${karyawan.address.city}</small>`;

        col.innerHTML = `
<div class="card h-100 shadow-sm">
<div class="card-body">
<h5 class="card-title">${karyawan.name}</h5>
<p class="card-text text-muted">Email: ${karyawan.email}</p>
<p class="card-text">Perusahaan: ${karyawan.company.name}</p>
<p class="card-text">${badgeFilter}</p>
<a href="#" class="btn btn-sm btn-outline-primary" onclick="cariKaryawan(${karyawan.id})">Detail</a>
</div>
</div>
`;
        container.appendChild(col);
    });

    // Update info jumlah data
    if (dataToRender.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center">
                    <h5>📭 Tidak ada data</h5>
                    ${isFilterActive ? '(Semua kota tidak mengandung huruf "s")' : '(Klik "Muat Semua Data" terlebih dahulu)'}
                </div>
            </div>
        `;
    }
}

// Fungsi cariKaryawan (diperbaiki agar bisa dipanggil dari HTML onclick)
function cariKaryawan(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            if (!response.ok) throw new Error('Data tidak ditemukan');
            return response.json();
        })
        .then(data => {
            console.log("Detail:", data);
            alert(`👤 ${data.name}\n📧 ${data.email}\n🏢 ${data.company.name}\n📍 ${data.address.city}`);
        })
        .catch(error => {
            console.error(error);
            alert(error.message);
        });
}