import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login gagal");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">🔐 Login</h3>

        {/* Username */}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" placeholder="Masukkan username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Masukkan password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>

        {/* Button */}
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          🚀 Login
        </button>
      </div>
    </div>
  );
}
