import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">PT. Manufaktur Jaya Abadi</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/input">Input Laporan</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/riwayat">Riwayat Data</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}