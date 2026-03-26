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

### 🛡️ Security

- JWT Token Authentication
- Protected Route di React
- Authorization Header otomatis dengan Axios Interceptor

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

## 📁 Struktur Project
