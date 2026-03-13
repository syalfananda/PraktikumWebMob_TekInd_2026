// array daftar cacat produk
let daftarCacat = [
    "C-001",
    "C-002",
    "C-003",
    "C-001",
    "C-004",
    "C-001",
    "C-002"
];

// tampilkan array di halaman
document.getElementById("arrayData").innerText = daftarCacat.join(" , ");

function hitungCacat() {

    let counter = 0;

    // loop untuk mencari C-001
    for (let i = 0; i < daftarCacat.length; i++) {

        if (daftarCacat[i] === "C-001") {
            counter++;
        }

    }

    document.getElementById("hasil").innerText = "Jumlah C-001: " + counter;

    // tampil di console
    console.log("Array Cacat:", daftarCacat);
    console.log("Jumlah C-001:", counter);

}