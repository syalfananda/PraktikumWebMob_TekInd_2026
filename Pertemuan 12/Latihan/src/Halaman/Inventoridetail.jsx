import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function InventoriDetail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.log(err));
    }, [id]);

    if (!item) return <p>Loading...</p>;

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">

                    <div className="card border-0 shadow-lg" style={{ borderRadius: '16px' }}>

                        {/* Header */}
                        <div
                            className="p-4 text-white"
                            style={{
                                background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
                                borderTopLeftRadius: '16px',
                                borderTopRightRadius: '16px'
                            }}
                        >
                            <h4 className="mb-0 fw-bold">Detail Bahan</h4>
                            <small className="opacity-75">Informasi lengkap material</small>
                        </div>

                        {/* Body */}
                        <div className="p-4">

                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <small className="text-muted">ID</small>
                                    <div className="fw-bold">{item.id}</div>
                                </div>

                                <span className="badge bg-success align-self-start">
                                    Available
                                </span>
                            </div>

                            <hr />

                            <div className="mb-3">
                                <small className="text-muted">Nama Bahan</small>
                                <div className="fs-5 fw-semibold">
                                    {item.title}
                                </div>
                            </div>

                            <div className="mb-4">
                                <small className="text-muted">Deskripsi</small>
                                <p className="mb-0 text-secondary" style={{ lineHeight: '1.6' }}>
                                    {item.body}
                                </p>
                            </div>

                            {/* Action */}
                            <Link
                                to="/inventori"
                                className="btn btn-dark px-4"
                                style={{ borderRadius: '10px' }}
                            >
                                ← Kembali
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default InventoriDetail;