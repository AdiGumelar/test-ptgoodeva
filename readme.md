# 🚀 Fullstack Sales Prediction System (React + Flask)

Sistem ini merupakan aplikasi fullstack berbasis web yang digunakan untuk:

- Mengelola data penjualan
- Melakukan prediksi status produk menggunakan machine learning
- Mengimplementasikan autentikasi menggunakan JWT

Project ini dibangun menggunakan:

- Frontend: React.js + Bootstrap
- Backend: Flask (Python)
- Machine Learning: LogisticRegression

---

## 🧠 Fitur Utama

### 🔐 Authentication

- Login menggunakan username & password
- Token berbasis JWT
- Proteksi halaman dashboard (hanya user login)

### 📊 Data Penjualan

- Menampilkan data penjualan dalam tabel
- Informasi:
  - Nama Produk
  - Jumlah Penjualan
  - Harga
  - Diskon
  - Status

### 🤖 Prediksi Produk

- Input:
  - Jumlah penjualan
  - Harga
  - Diskon
- Output:
  - Status produk (misalnya: Laris / Tidak Laris)

---

## ⚙️ Teknologi yang Digunakan

### Frontend

- React.js
- Axios
- React Router DOM
- Bootstrap 5

### Backend

- Flask
- Flask-CORS
- PyJWT
- Scikit-learn
- Joblib

---

## 🔧 Cara Menjalankan Project

Project ini terdiri dari 2 bagian:

- Backend (Flask)
- Frontend (React)

---

### 1️⃣ Menjalankan Backend (Flask)

Masuk ke folder backend:

1. cd backend
2. pip install -r requirements.txt
3. python app.py
4. Backend akan berjalan di http://127.0.0.1:5000

### 1️⃣ Menjalankan Frontend(React)

Masuk ke folder backend:

1. cd frontend
2. npm install
3. npm run dev
4. Frontend akan berjalan di http://localhost:5173 (Port ini yang dibuka di browser)
