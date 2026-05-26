export default function RiwayatData({ data = [], onDelete }) {
    return (
        <div className="container mt-4 text-start">
            <h2 className="mb-4 fw-bold text-dark">Riwayat Data Produksi</h2>

            <div className="card border-0 shadow-sm rounded-3">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4">No</th>
                                    <th>Tanggal</th>
                                    <th>Produksi</th>
                                    <th>Reject</th>
                                    <th>Netto</th>
                                    <th>Yield</th>
                                    <th className="pe-4 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan="7" className="text-center py-4 text-muted">
                                            Belum ada data laporan. Silakan isi di menu Input Laporan.
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((item, index) => {
                                        const netto = Number(item.produksi || 0) - Number(item.reject || 0);
                                        const yieldPercentage = Number(item.produksi || 0) > 0
                                            ? ((netto / Number(item.produksi)) * 100).toFixed(1) + '%'
                                            : '0%';

                                        return (
                                            <tr key={item.id || index}>
                                                <td className="ps-4 fw-medium">{index + 1}</td>
                                                <td>{item.tanggal}</td>
                                                <td>{item.produksi}</td>
                                                <td>
                                                    <span className="badge bg-danger-subtle text-danger px-2 py-1 rounded">
                                                        {item.reject}
                                                    </span>
                                                </td>
                                                <td>{netto}</td>
                                                <td>
                                                    <span className="fw-bold text-success">
                                                        {yieldPercentage}
                                                    </span>
                                                </td>
                                                <td className="pe-4 text-center">
                                                    <button
                                                        onClick={() => onDelete && onDelete(item.id)}
                                                        className="btn btn-sm btn-outline-danger"
                                                    >
                                                        Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}