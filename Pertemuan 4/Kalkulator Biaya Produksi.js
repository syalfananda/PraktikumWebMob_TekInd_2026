// Menangkap elemen form dan output
const form = document.getElementById("formProduksi");
const output = document.getElementById("hasilOutput");

form.addEventListener("submit", function (event) {
    // Mencegah refresh halaman
    event.preventDefault();

    // Mengambil nilai input dan konversi ke Number (Sumber [1])
    let biayaBahanBaku = Number(document.getElementById("bahanBaku").value);
    let biayaTenagaKerja = Number(document.getElementById("tenagaKerja").value);
    let biayaOverhead = Number(document.getElementById("overhead").value);
    let jumlahProduksi = Number(document.getElementById("jumlahProduksi").value);

    // Validasi jumlah produksi (Sumber [1])
    if (jumlahProduksi <= 0) {
        output.innerHTML = "Jumlah produksi tidak valid!";
        return; // Menghentikan proses jika tidak valid
    }

    // Rumus Total per Unit (Sumber [4], [2])
    let totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

    // Struktur percabangan untuk status biaya (Sumber [4], [2])
    let status = "";
    if (jumlahProduksi < 100) {
        status = "Biaya Tinggi (Ekonomi Skala Kecil)";
    } else {
        status = "Biaya Efisien";
    }

    // Menampilkan hasil dengan innerHTML dan format Rupiah (Sumber [2])
    output.innerHTML = "Total Biaya per Unit: Rp " +
        totalPerUnit.toLocaleString("id-ID", { minimumFractionDigits: 2 }) +
        "<br>Status Produksi: " + status;

    // Log ke console sesuai instruksi (Sumber [3])
    console.log("Total Biaya per Unit: " + totalPerUnit);
    console.log("Status: " + status);
    console.log("Biaya Bahan Baku: ", biayaBahanBaku);
    console.log("Biaya Tenaga Kerja: ", biayaTenagaKerja);
    console.log("Biaya Overhead: ", biayaOverhead);
    console.log("Jumlah Produksi: ", jumlahProduksi);
});