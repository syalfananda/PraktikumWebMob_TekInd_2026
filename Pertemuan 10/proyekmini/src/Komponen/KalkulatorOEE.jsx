import React, { useState } from "react";

function KalkulatorOEE() {
    // STATE
    const [planTime, setPlanTime] = useState(480);
    const [runTime, setRunTime] = useState(420);
    const [totalParts, setTotalParts] = useState(800);
    const [goodParts, setGoodParts] = useState(760);

    const standar = 2;

    // PERHITUNGAN
    const availability = planTime > 0 ? runTime / planTime : 0;
    const performance =
        runTime > 0 ? totalParts / (runTime * standar) : 0;
    const quality =
        totalParts > 0 ? goodParts / totalParts : 0;

    const oee =
        availability * performance * quality * 100;

    // WARNA DINAMIS
    let warna = "#ffc107";
    let bgStatus = "#fff3cd";
    let label = "Acceptable";

    if (oee >= 85) {
        warna = "#198754";
        bgStatus = "#d1e7dd";
        label = "World Class";
    }

    if (oee < 50) {
        warna = "#dc3545";
        bgStatus = "#f8d7da";
        label = "Need Improvement";
    }

    return (
        <div
            className="card shadow-lg border-0 p-4"
            style={{
                borderRadius: "18px",
                background:
                    "linear-gradient(135deg,#f8fafc,#e9f2ff)"
            }}
        >
            <h3 className="text-center fw-bold mb-4">
                Kalkulator OEE
            </h3>

            {/* INPUT */}
            <div className="row g-3 mb-4">
                <InputBox
                    label="Plan Time (min)"
                    value={planTime}
                    setValue={setPlanTime}
                />

                <InputBox
                    label="Run Time (min)"
                    value={runTime}
                    setValue={setRunTime}
                />

                <InputBox
                    label="Total Parts"
                    value={totalParts}
                    setValue={setTotalParts}
                />

                <InputBox
                    label="Good Parts"
                    value={goodParts}
                    setValue={setGoodParts}
                />
            </div>

            <hr />

            {/* OEE SCORE */}
            <div
                className="text-center mb-4 p-4"
                style={{
                    background: bgStatus,
                    borderRadius: "14px"
                }}
            >
                <h6>OEE Score</h6>

                <h1
                    className="display-1 fw-bold"
                    style={{
                        color: warna,
                        textShadow:
                            "0 5px 15px rgba(0,0,0,0.15)"
                    }}
                >
                    {oee.toFixed(1)}%
                </h1>

                <span
                    className="badge fs-6 px-3 py-2"
                    style={{
                        background: warna
                    }}
                >
                    {label}
                </span>
            </div>

            {/* FAKTOR */}
            <div className="row text-center">

                <FactorBox
                    title="Availability"
                    value={availability}
                    color="#198754"
                    bg="#e8f5e9"
                />

                <FactorBox
                    title="Performance"
                    value={performance}
                    color="#0d6efd"
                    bg="#e3f2fd"
                />

                <FactorBox
                    title="Quality"
                    value={quality}
                    color="#fd7e14"
                    bg="#fff3e0"
                />

            </div>
        </div>
    );
}

/* COMPONENT INPUT */

function InputBox({ label, value, setValue }) {
    return (
        <div className="col-md-3">
            <label className="fw-semibold mb-1">
                {label}
            </label>

            <input
                type="number"
                className="form-control shadow-sm"
                style={{
                    borderRadius: "10px"
                }}
                value={value}
                onChange={(e) =>
                    setValue(
                        e.target.value === ""
                            ? ""
                            : Number(e.target.value)
                    )
                }
            />
        </div>
    );
}

/* COMPONENT FAKTOR */

function FactorBox({ title, value, color, bg }) {
    const percent = (value * 100).toFixed(1);

    return (
        <div className="col-md-4">
            <div
                className="p-3 shadow-sm"
                style={{
                    borderRadius: "14px",
                    background: bg,
                    borderLeft:
                        "6px solid " + color
                }}
            >
                <h6 className="text-muted">
                    {title}
                </h6>

                <h4
                    className="fw-bold"
                    style={{
                        color: color
                    }}
                >
                    {percent}%
                </h4>

                {/* PROGRESS BAR */}

                <div className="progress mt-2">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                            width: percent + "%",
                            backgroundColor: color
                        }}
                    />
                </div>

            </div>
        </div>
    );
}

export default KalkulatorOEE;