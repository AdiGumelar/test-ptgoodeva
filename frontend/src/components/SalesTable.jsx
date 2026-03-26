import { useEffect, useState } from "react";
import API from "../services/api";

export default function SalesTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const res = await API.get("/sales");
    setData(res.data);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">📊 Data Penjualan</h4>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>Produk</th>
                  <th>Penjualan</th>
                  <th>Harga</th>
                  <th>Diskon</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {data.length > 0 ? (
                  data.map((item, i) => (
                    <tr key={i}>
                      <td className="fw-semibold">{item.product_name}</td>
                      <td>{item.jumlah_penjualan}</td>
                      <td>Rp {item.harga}</td>
                      <td>{item.diskon}%</td>
                      <td>
                        <span className={`badge ${item.status === "Laris" ? "bg-success" : "bg-secondary"}`}>{item.status}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-muted">
                      Tidak ada data...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
