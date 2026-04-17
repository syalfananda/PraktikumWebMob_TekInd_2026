class LogProduksi {
    constructor() {
        this.dataKey = 'logProduksi_1shift_per_hari';
        this.init();
    }

    init() {
        this.loadData();
        this.bindEvents();
        this.setTanggalDefault();
        this.updateStats();
    }

    bindEvents() {
        const form = document.getElementById('formProduksi');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.simpanData();
        });

        document.getElementById('btnHapusSemua').addEventListener('click', () => {
            this.hapusSemua();
        });

        // Validasi real-time
        ['tanggal', 'operator', 'shift'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('change', () => {
                    this.validasiShiftUnik();
                });
            }
        });
    }

    setTanggalDefault() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('tanggal').value = today;
        this.validasiShiftUnik(); // Initial validation
    }

    validasiShiftUnik() {
        const tanggal = document.getElementById('tanggal').value;
        const operator = document.getElementById('operator').value;
        const shiftEl = document.getElementById('shift');
        const btnSubmit = document.getElementById('btnSubmit');
        const statusBadge = document.getElementById('statusShift');
        const shiftError = document.getElementById('shiftError');

        // Reset state
        shiftEl.classList.remove('is-valid', 'is-invalid');
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = 'Lengkapi data dulu';
        if (statusBadge) statusBadge.textContent = 'Lengkapi';
        if (shiftError) shiftError.style.display = 'none';

        if (!tanggal || !operator || !shiftEl.value) {
            if (statusBadge) statusBadge.className = 'badge bg-warning';
            return;
        }

        // Cek apakah karyawan sudah kerja hari ini
        const data = this.getData();
        const sudahKerja = data.some(item =>
            item.tanggal === tanggal && item.operator === operator
        );

        if (sudahKerja) {
            shiftEl.classList.add('is-invalid');
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '❌ Sudah kerja hari ini!';
            if (statusBadge) {
                statusBadge.textContent = 'Sudah Kerja';
                statusBadge.className = 'badge bg-danger';
            }
            if (shiftError) shiftError.style.display = 'block';
        } else {
            shiftEl.classList.add('is-valid');
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = '💾 Simpan Log';
            if (statusBadge) {
                statusBadge.textContent = '✅ Bisa Input';
                statusBadge.className = 'badge bg-success';
            }
        }
    }

    simpanData() {
        const tanggal = document.getElementById('tanggal').value;
        const operator = document.getElementById('operator').value;
        const shift = document.getElementById('shift').value;
        const jumlah = parseInt(document.getElementById('jumlah').value);

        if (!tanggal || !operator || !shift || !jumlah || jumlah < 1) {
            this.showAlert('⛔ Lengkapi semua data dengan benar!', 'danger');
            return;
        }

        // Final check
        if (this.cekSudahKerja(tanggal, operator)) {
            this.showAlert('❌ Karyawan sudah kerja 1 shift hari ini!', 'danger');
            return;
        }

        const dataBaru = {
            id: Date.now(),
            tanggal, operator, shift, jumlah,
            timestamp: new Date().toISOString()
        };

        let data = this.getData();
        data.unshift(dataBaru);
        this.saveData(data);

        this.renderTable(data);
        this.updateStats();
        this.resetForm();
        this.showAlert(`✅ ${operator} - ${shift}: ${jumlah} unit`, 'success');
    }

    cekSudahKerja(tanggal, operator) {
        const data = this.getData();
        return data.some(item => item.tanggal === tanggal && item.operator === operator);
    }

    hapusSemua() {
        if (confirm('🗑️ Yakin hapus SEMUA data?')) {
            localStorage.removeItem(this.dataKey);
            document.getElementById('tabelBody').innerHTML = '';
            this.updateStats();
            this.showAlert('🗑️ Semua data dihapus!', 'warning');
        }
    }

    hapusData(id) {
        if (confirm('Hapus data ini?')) {
            let data = this.getData();
            data = data.filter(item => item.id !== id);
            this.saveData(data);
            this.renderTable(data);
            this.updateStats();
            this.showAlert('✅ Data dihapus!', 'success');
        }
    }

    renderTable(data) {
        const tbody = document.getElementById('tabelBody');
        tbody.innerHTML = '';

        // Urutkan terbaru dulu
        data.slice(0, 100).sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
            .forEach(item => {
                const row = this.createRow(item);
                tbody.appendChild(row);
            });

        // Tambah summary hari ini
        this.tambahSummaryHariIni(data);
    }

    createRow(item) {
        const row = document.createElement('tr');
        const shiftColor = this.getShiftColor(item.shift);
        const totalRp = (item.jumlah * 50000).toLocaleString();

        row.innerHTML = `
            <td>
                <div>${this.formatTanggal(item.tanggal)}</div>
                <small class="text-muted">${this.formatWaktu(item.timestamp)}</small>
            </td>
            <td><strong>${item.operator}</strong></td>
            <td><span class="badge bg-${shiftColor} px-3 py-2">${item.shift}</span></td>
            <td><strong>${item.jumlah.toLocaleString()}</strong></td>
            <td><strong class="text-success">Rp ${totalRp}</strong></td>
            <td>
                <button class="btn btn-sm btn-outline-danger" onclick="logProduksi.hapusData(${item.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        return row;
    }

    tambahSummaryHariIni(data) {
        const today = new Date().toISOString().split('T')[0];
        const hariIni = data.filter(item => item.tanggal === today);

        if (hariIni.length > 0) {
            const tbody = document.getElementById('tabelBody');
            const totalUnit = hariIni.reduce((sum, item) => sum + item.jumlah, 0);
            const totalRp = totalUnit * 50000;

            const summary = document.createElement('tr');
            summary.className = 'table-success fw-bold fs-5';
            summary.innerHTML = `
                <td colspan="3">
                    📊 <strong>HARI INI (${hariIni.length}/3 shift)</strong>
                </td>
                <td><strong>${totalUnit.toLocaleString()}</strong></td>
                <td><strong class="text-success">Rp ${totalRp.toLocaleString()}</strong></td>
                <td></td>
            `;
            tbody.appendChild(summary);
        }
    }

    getShiftColor(shift) {
        const colors = { Pagi: 'primary', Siang: 'warning', Malam: 'dark' };
        return colors[shift] || 'secondary';
    }

    formatTanggal(tanggal) {
        const date = new Date(tanggal);
        return date.toLocaleDateString('id-ID', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }

    formatWaktu(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    }

    resetForm() {
        document.getElementById('formProduksi').reset();
        this.setTanggalDefault();
    }

    updateStats() {
        const data = this.getData();
        const today = new Date().toISOString().split('T')[0];
        const hariIni = data.filter(item => item.tanggal === today);

        document.getElementById('totalRecords').textContent = data.length;
        document.getElementById('totalToday').textContent = hariIni.length;
    }

    showAlert(message, type) {
        // Hapus alert lama
        document.querySelectorAll('.custom-alert').forEach(el => el.remove());

        const alert = document.createElement('div');
        alert.className = `alert alert-${type} custom-alert position-fixed`;
        alert.style.cssText = `
            top: 20px; right: 20px; z-index: 9999; 
            min-width: 350px; border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        `;
        alert.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-triangle-fill'} fs-4 me-3"></i>
                <strong>${message}</strong>
            </div>
        `;
        document.body.appendChild(alert);

        setTimeout(() => alert.remove(), 4000);
    }

    getData() {
        try {
            const data = localStorage.getItem(this.dataKey);
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    }

    saveData(data) {
        localStorage.setItem(this.dataKey, JSON.stringify(data));
    }

    loadData() {
        const data = this.getData();
        this.renderTable(data);
    }
}

//  INIT APP
const logProduksi = new LogProduksi();