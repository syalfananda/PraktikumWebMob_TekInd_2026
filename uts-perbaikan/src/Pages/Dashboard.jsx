export default function Dashboard({ data = [] }) {
    // Menghitung akumulasi total produksi dan reject secara aman
    const totalProduksi = data.reduce((sum, item) => sum + Number(item.produksi || 0), 0);
    const totalReject = data.reduce((sum, item) => sum + Number(item.reject || 0), 0);
    const totalNetto = totalProduksi - totalReject;

    // Menghitung persentase yield efisiensi
    const totalYield = totalProduksi > 0
        ? ((totalNetto / totalProduksi) * 100).toFixed(1) + '%'
        : '0%';

    return (
        <div>
            <h2 className="mb-4 fw-bold text-dark text-start">Dashboard Produksi</h2>
            <div className="row g-3">

                {/* Kartu Total Produksi */}
                <div className="col-md-4 text-start">
                    <div className="card bg-primary text-white p-4 border-0 shadow-sm">
                        <p className="mb-1 small text-uppercase fw-semibold text-white-50">Total Produksi</p>
                        <h2 className="mb-0 fw-bold">{totalProduksi}</h2>
                    </div>
                </div>

                {/* Kartu Total Reject */}
                <div className="col-md-4 text-start">
                    <div className="card bg-danger text-white p-4 border-0 shadow-sm">
                        <p className="mb-1 small text-uppercase fw-semibold text-white-50">Total Reject</p>
                        <h2 className="mb-0 fw-bold">{totalReject}</h2>
                    </div>
                </div>

                {/* Kartu Yield (Efisiensi) */}
                <div className="col-md-4 text-start">
                    <div className="card bg-success text-white p-4 border-0 shadow-sm">
                        <p className="mb-1 small text-uppercase fw-semibold text-white-50">Yield (Efisiensi)</p>
                        <h2 className="mb-0 fw-bold">{totalYield}</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}