const btnLoad = document.getElementById('btnLoad');
const btnTambah = document.getElementById('btnTambah'); // ← BARU
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
// Endpoint API (Simulasi Database)
const API_URL = 'https://jsonplaceholder.typicode.com/users';

btnLoad.addEventListener('click', function () {
    // Tampilkan loading
    loading.classList.remove('d-none');
    container.innerHTML = ''; // Bersihkan konten lama
    // Fetch Data
    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(function (dataKaryawan) {
            console.log(dataKaryawan);
            renderData(dataKaryawan);
        })
        .catch(function (error) {
            container.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
});

// ← FUNGSI BARU: Event listener untuk tombol Tambah Karyawan
btnTambah.addEventListener('click', function () {
    tambahKaryawanBaru();
});

function tambahKaryawanBaru() {
    // Data dummy karyawan baru
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
            city: "Jakarta Selatan",
            zipcode: "12190"
        }
    };

    // Tampilkan loading
    loading.classList.remove('d-none');

    console.log('Mengirim data POST:', karyawanBaru);

    // Fetch dengan method POST
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
            console.log('✅ POST berhasil! Response dari server:', responseData);
            // JSONPlaceholder akan mengembalikan ID 201 dan data yang sama
            alert(`✅ Karyawan berhasil ditambahkan!\nID: ${responseData.id}\nNama: ${responseData.name}`);

            // Optional: Reload data untuk melihat perubahan (meski JSONPlaceholder tidak persist)
            // btnLoad.click();
        })
        .catch(function (error) {
            console.error('❌ Error POST:', error);
            alert(`❌ Gagal menambah karyawan: ${error.message}`);
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
}

function renderData(data) {
    data.forEach(function (karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        col.innerHTML = `
<div class="card h-100 shadow-sm">
<div class="card-body">
<h5 class="card-title">${karyawan.name}</h5>
<p class="card-text text-muted">Email: ${karyawan.email}</p>
<p class="card-text">Perusahaan: ${karyawan.company.name}</p>
<p class="card-text"><small>Kota: ${karyawan.address.city}</small></p>
<a href="" class="btn btn-sm btn-outline-primary">Detail Profil</a>
</div>
</div>
`;
        container.appendChild(col);
    });
}

// Fungsi cariKaryawan tetap sama...
async function cariKaryawan(id) {
    try {
        console.log(`Mencari data ID: ${id}...`);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error('Data tidak ditemukan');
        }
        const data = await response.json();
        console.log("Ditemukan:", data);
        alert(`Ditemukan: ${data.name} - bekerja di ${data.company.name}`);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}