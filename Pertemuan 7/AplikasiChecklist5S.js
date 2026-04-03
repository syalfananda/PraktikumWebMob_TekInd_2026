// Seleksi Elemen
const form5S = document.getElementById('form5S');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
const skorPreview = document.getElementById('skorPreview');
const STORAGE_KEY = 'AUDIT_5S_23051430023';

// Load data saat halaman dibuka
document.addEventListener('DOMContentLoaded', function () {
    loadDataFromStorage();
    attachCheckboxListeners();
});

// Event: Real-time Skor Preview
function attachCheckboxListeners() {
    ['seiri', 'seiton', 'seiso', 'seiketsu', 'shitsuke'].forEach(id => {
        document.getElementById(id).addEventListener('change', updateSkorPreview);
    });
}

function updateSkorPreview() {
    const checkboxes = document.querySelectorAll('#form5S input[type="checkbox"]:checked');
    const skor = Math.round((checkboxes.length / 5) * 100);
    skorPreview.innerHTML = `<strong>Skor: ${skor}%</strong> (${checkboxes.length}/5 checklist)`;
}

// Event: Submit Form
form5S.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validasi
    const auditor = document.getElementById('auditor').value.trim();
    if (!auditor || auditor.length < 2) {
        alert('Nama auditor minimal 2 karakter!');
        return;
    }

    // Hitung skor
    const checkboxes = document.querySelectorAll('#form5S input[type="checkbox"]:checked');
    const totalChecked = checkboxes.length;
    const skor = Math.round((totalChecked / 5) * 100);

    // Ambil status 5S
    const status5S = {
        seiri: document.getElementById('seiri').checked,
        seiton: document.getElementById('seiton').checked,
        seiso: document.getElementById('seiso').checked,
        seiketsu: document.getElementById('seiketsu').checked,
        shitsuke: document.getElementById('shitsuke').checked
    };

    // Buat data audit
    const dataAudit = {
        id: Date.now(),
        tanggal: new Date().toLocaleDateString('id-ID'),
        auditor: auditor,
        skor: skor,
        totalChecked: totalChecked,
        status5S: status5S
    };

    // Simpan ke LocalStorage
    saveData(dataAudit);

    // Reset form
    form5S.reset();
    skorPreview.innerHTML = 'Skor: 0%';

    // Refresh tabel
    loadDataFromStorage();

    alert(`✅ Audit disimpan! Skor: ${skor}%`);
});

// Simpan data
function saveData(data) {
    let audits = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    audits.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(audits));
}

// Load & Render Tabel
function loadDataFromStorage() {
    let audits = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Sort terbaru dulu
    audits.sort((a, b) => b.id - a.id);

    tabelBody.innerHTML = '';

    if (audits.length === 0) {
        tabelBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-4">
                    <i class="bi bi-inbox fs-1 mb-2 d-block"></i>
                    Belum ada data audit
                </td>
            </tr>
        `;
        return;
    }

    audits.forEach(audit => {
        const row = document.createElement('tr');

        // Badge skor warna
        const badgeClass = audit.skor >= 80 ? 'bg-success' : audit.skor >= 60 ? 'bg-warning' : 'bg-danger';
        const badgeText = audit.skor >= 80 ? 'LULUS' : audit.skor >= 60 ? 'CUKUP' : 'PERBAIKI';

        row.innerHTML = `
            <td>${audit.tanggal}</td>
            <td>${audit.auditor}</td>
            <td>
                <span class="badge ${badgeClass} fs-6">${audit.skor}%</span>
                <br><small class="text-muted">${audit.totalChecked}/5</small>
            </td>
            <td>
                ${audit.status5S.seiri ? '✅' : '❌'} Seiri<br>
                ${audit.status5S.seiton ? '✅' : '❌'} Seiton<br>
                ${audit.status5S.seiso ? '✅' : '❌'} Seiso<br>
                ${audit.status5S.seiketsu ? '✅' : '❌'} Seiketsu<br>
                ${audit.status5S.shitsuke ? '✅' : '❌'} Shitsuke
            </td>
            <td>
                <button class="btn btn-sm btn-outline-danger" onclick="hapusData(${audit.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        tabelBody.appendChild(row);
    });
}

// Hapus data spesifik
window.hapusData = function (id) {
    if (confirm('Hapus audit ini?')) {
        let audits = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        let dataBaru = audits.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
        loadDataFromStorage();
    }
};

// Hapus semua
btnHapusSemua.addEventListener('click', function () {
    if (confirm('⚠️ Hapus SEMUA data audit?')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDataFromStorage();
    }
});