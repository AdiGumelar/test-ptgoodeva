import { useState } from "react";
import API from "../services/api";

export default function PredictForm() {
  const [form, setForm] = useState({
    jumlah_penjualan: "",
    harga: "",
    diskon: "",
  });

  const [result, setResult] = useState("");

  const handlePredict = async () => {
    try {
      const payload = {
        jumlah_penjualan: Number(form.jumlah_penjualan),
        harga: Number(form.harga),
        diskon: Number(form.diskon),
      };

      const res = await API.post("/predict", payload);
      setResult(res.data.prediction);
    } catch (err) {
      console.error(err);
      alert("Gagal prediksi");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        {/* Header */}
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">🤖 Prediksi Produk</h4>
        </div>

        {/* Body */}
        <div className="card-body">
          {/* Input Jumlah */}
          <div className="mb-3">
            <label className="form-label">Jumlah Penjualan</label>
            <input type="number" className="form-control" placeholder="Masukkan jumlah penjualan" value={form.jumlah_penjualan} onChange={(e) => setForm({ ...form, jumlah_penjualan: e.target.value })} />
          </div>

          {/* Input Harga */}
          <div className="mb-3">
            <label className="form-label">Harga</label>
            <input type="number" className="form-control" placeholder="Masukkan harga" value={form.harga} onChange={(e) => setForm({ ...form, harga: e.target.value })} />
          </div>

          {/* Input Diskon */}
          <div className="mb-3">
            <label className="form-label">Diskon (%)</label>
            <input type="number" className="form-control" placeholder="Masukkan diskon" value={form.diskon} onChange={(e) => setForm({ ...form, diskon: e.target.value })} />
          </div>

          {/* Button */}
          <button className="btn btn-success w-100" onClick={handlePredict}>
            🚀 Prediksi Sekarang
          </button>

          {/* Result */}
          {result && (
            <div className="alert alert-info mt-4 text-center">
              <h5 className="mb-0">
                Hasil Prediksi: <strong>{result}</strong>
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
