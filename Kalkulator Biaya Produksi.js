let biayaBahanBaku = Number(prompt("Masukkan biaya bahan baku:"));
let biayaTenagaKerja = Number(prompt("Masukkan biaya tenaga kerja:"));
let biayaOverhead = Number(prompt("Masukkan biaya overhead:"));
let jumlahProduksi = Number(prompt("Masukkan jumlah produksi:"));

let totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

console.log("Biaya Bahan Baku: Rp " + biayaBahanBaku);
console.log("Biaya Tenaga Kerja: Rp " + biayaTenagaKerja);
console.log("Biaya Overhead: Rp " + biayaOverhead);
console.log("Jumlah Produksi: " + jumlahProduksi);
console.log("Total Biaya Produksi per Unit: Rp " + totalPerUnit.toFixed(2));

if (jumlahProduksi < 100) {
    console.log("Status: Biaya Tinggi (Ekonomi Skala Kecil)");
} else {
    console.log("Status: Biaya Efisien");
}