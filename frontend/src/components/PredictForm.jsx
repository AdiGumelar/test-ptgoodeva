import { useState } from "react";
import API from "../services/api";

export default function PredictForm() {
  const [form, setForm] = useState({
    jumlah_penjualan: "",
    harga: "",
    diskon: "",
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  // Validasi Inputan
  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!form.jumlah_penjualan) {
      newErrors.jumlah_penjualan = "Jumlah penjualan wajib diisi";
      isValid = false;
    } else if (Number(form.jumlah_penjualan) <= 0) {
      newErrors.jumlah_penjualan = "Harus lebih dari 0";
      isValid = false;
    }

    if (!form.harga) {
      newErrors.harga = "Harga wajib diisi";
      isValid = false;
    } else if (Number(form.harga) <= 0) {
      newErrors.harga = "Harus lebih dari 0";
      isValid = false;
    }

    if (!form.diskon) {
      newErrors.diskon = "Diskon wajib diisi";
      isValid = false;
    } else if (Number(form.diskon) < 0 || Number(form.diskon) > 100) {
      newErrors.diskon = "Diskon harus 0 - 100";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePredict = async () => {
    if (!validate()) return;
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
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">🤖 Prediksi Produk</h4>
        </div>

        <div className="card-body">
          {/* Input Jumlah */}
          <div className="mb-3">
            <label className="form-label">Jumlah Penjualan</label>
            <input
              type="number"
              className={`form-control ${errors.jumlah_penjualan ? "is-invalid" : ""}`}
              placeholder="Masukkan jumlah penjualan"
              value={form.jumlah_penjualan}
              onChange={(e) => setForm({ ...form, jumlah_penjualan: e.target.value })}
            />
            {errors.jumlah_penjualan && <div className="invalid-feedback">{errors.jumlah_penjualan}</div>}
          </div>

          {/* Input Harga */}
          <div className="mb-3">
            <label className="form-label">Harga</label>
            <input type="number" className={`form-control ${errors.harga ? "is-invalid" : ""}`} placeholder="Masukkan harga" value={form.harga} onChange={(e) => setForm({ ...form, harga: e.target.value })} />
            {errors.harga && <div className="invalid-feedback">{errors.harga}</div>}
          </div>

          {/* Input Diskon */}
          <div className="mb-3">
            <label className="form-label">Diskon (%)</label>
            <input type="number" className={`form-control ${errors.diskon ? "is-invalid" : ""}`} placeholder="Masukkan diskon" value={form.diskon} onChange={(e) => setForm({ ...form, diskon: e.target.value })} />
            {errors.diskon && <div className="invalid-feedback">{errors.diskon}</div>}
          </div>

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
