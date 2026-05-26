import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InputLaporan({ onTambahLaporan }) {
    const navigate = useNavigate();

    // State untuk masing-masing input form
    const [tanggal, setTanggal] = useState('');
    const [shift, setShift] = useState('Pagi');
    const [mesin, setMesin] = useState('');
    const [produksi, setProduksi] = useState('');
    const [reject, setReject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasi sederhana agar input tidak kosong
        if (!tanggal || !mesin || !produksi || !reject) {
            alert('Harap isi semua kolom terlebih dahulu!');
            return;
        }

        // Buat objek data baru
        const dataBaru = {
            tanggal,
            shift,
            mesin,
            produksi: parseInt(produksi),
            reject: parseInt(reject)
        };

        // Kirim data ke App.jsx
        onTambahLaporan(dataBaru);

        // Otomatis pindah halaman ke Riwayat Data setelah simpan
        navigate('/riwayat');
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0 text-start">
                        <div className="card-body p-4 p-md-5">
                            <h4 className="fw-bold mb-4 text-dark border-bottom pb-3">Form Input Laporan</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Tanggal</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={tanggal}
                                        onChange={(e) => setTanggal(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Shift Kerja</label>
                                    <select
                                        className="form-select"
                                        value={shift}
                                        onChange={(e) => setShift(e.target.value)}
                                    >
                                        <option value="Pagi">Pagi</option>
                                        <option value="Siang">Siang</option>
                                        <option value="Malam">Malam</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Nama Mesin</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan tipe/nama mesin"
                                        value={mesin}
                                        onChange={(e) => setMesin(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Jumlah Produksi</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Contoh: 200"
                                        value={produksi}
                                        onChange={(e) => setProduksi(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold text-secondary">Jumlah Reject</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Contoh: 15"
                                        value={reject}
                                        onChange={(e) => setReject(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-2 fw-bold shadow-sm">
                                    Simpan Laporan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}