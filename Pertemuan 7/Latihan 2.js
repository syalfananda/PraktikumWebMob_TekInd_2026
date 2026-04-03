const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
const btnSortJumlah = document.getElementById('btnSortJumlah'); // LATIHAN 2
const STORAGE_KEY = 'DATA_PRODUKSI_LAT2';

document.addEventListener('DOMContentLoaded', loadDataFromStorage);

formProduksi.addEventListener('submit', function (e) {
    e.preventDefault();
    const tanggal = document.getElementById('tanggal').value;
    const operator = document.getElementById('operator').value;
    const shift = document.getElementById('shift').value;
    const jumlah = document.getElementById('jumlah').value;

    if (jumlah <= 0) { alert("Jumlah > 0!"); return; }

    const dataBaru = { id: Date.now(), tanggal, operator, shift, jumlah: parseInt(jumlah) };
    saveData(dataBaru);
    formProduksi.reset();
    loadDataFromStorage();
});

function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

function loadDataFromStorage() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    renderTable(data);
}

function renderTable(data) {
    tabelBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.operator}</td>
            <td>${item.shift}</td>
            <td>${item.jumlah}</td>
            <td><button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">Hapus</button></td>
        `;
        tabelBody.appendChild(row);
    });
}

// LATIHAN 2: SORTIR JUMLAH
btnSortJumlah.addEventListener('click', function () {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Sort DESCENDING (terbesar ke terkecil)
    const sortedData = [...data].sort((a, b) => b.jumlah - a.jumlah);

    renderTable(sortedData);

    // Update button
    this.innerHTML = '↻ Sortir Ulang';
    this.className = 'btn btn-sm btn-outline-warning';
});

window.hapusData = function (id) {
    if (confirm('Hapus?')) {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        let dataBaru = data.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
        loadDataFromStorage();
    }
};

btnHapusSemua.addEventListener('click', function () {
    if (confirm('Hapus semua?')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDataFromStorage();
    }
});