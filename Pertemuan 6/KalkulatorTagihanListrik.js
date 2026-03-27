// Ambil elemen
const dayaInput = document.getElementById('daya');
const jamInput = document.getElementById('jam');
const kwhEl = document.getElementById('kwh');
const biayaEl = document.getElementById('biaya');
const resultEl = document.getElementById('result');

// Konstanta tarif
const TARIF = 1500; // Rp/kWh

// Fungsi hitung
function hitung() {
    const daya = parseFloat(dayaInput.value) || 0;
    const jam = parseFloat(jamInput.value) || 0;

    const kwh = (daya * jam) / 1000;
    const biaya = kwh * TARIF;

    // Update tampilan
    kwhEl.textContent = kwh.toFixed(2) + ' kWh';
    biayaEl.textContent = 'Rp ' + Math.round(biaya).toLocaleString('id-ID');

    // Tampilkan hasil
    if (daya > 0 || jam > 0) {
        resultEl.style.display = 'block';
    } else {
        resultEl.style.display = 'none';
    }
}

// Event listener real-time
dayaInput.addEventListener('input', hitung);
jamInput.addEventListener('input', hitung);