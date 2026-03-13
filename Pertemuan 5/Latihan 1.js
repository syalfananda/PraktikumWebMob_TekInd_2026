function hitungLingkaran(jariJari) {

    const phi = 3.14;

    let luas = phi * jariJari * jariJari;
    let keliling = 2 * phi * jariJari;

    return {
        luas: luas,
        keliling: keliling
    }
}

function proses() {

    let r = document.getElementById("jariJari").value;

    if (r === "") {
        alert("Masukkan jari-jari terlebih dahulu!");
        return;
    }

    let hasil = hitungLingkaran(r);

    document.getElementById("luas").innerText = hasil.luas.toFixed(2);
    document.getElementById("keliling").innerText = hasil.keliling.toFixed(2);

    console.log("===== HASIL PERHITUNGAN LINGKARAN =====");
    console.log("Jari-jari :", r);
    console.log("Luas :", hasil.luas);
    console.log("Keliling :", hasil.keliling);
}