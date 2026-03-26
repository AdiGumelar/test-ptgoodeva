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

## 🧠 Design Decision & Assumptions

### 📌 Design Decision

Beberapa keputusan desain yang diambil dalam pengembangan sistem ini:

#### 1. Arsitektur Fullstack (React + Flask)

Aplikasi dibangun menggunakan arsitektur terpisah antara frontend dan backend:

- React digunakan untuk membangun antarmuka pengguna yang interaktif
- Flask digunakan sebagai REST API untuk mengelola data dan proses machine learning

---

#### 2. Penggunaan JWT untuk Authentication

Autentikasi menggunakan JSON Web Token (JWT):

- Token dibuat saat login
- Disimpan di `localStorage` di sisi frontend
- Dikirim melalui header `Authorization` untuk setiap request

---

#### 3. Axios Interceptor

Menggunakan Axios interceptor untuk:

- Menambahkan token secara otomatis ke setiap request API
- Menghindari duplikasi kode

---

#### 4. Protected Route di React

Halaman seperti dashboard dilindungi menggunakan mekanisme Protected Route:

- User tanpa token tidak dapat mengakses halaman tersebut
- Redirect otomatis ke halaman login

---

#### 5. Machine Learning Integration

Model machine learning (LogisticRegression):

- Digunakan untuk memprediksi status produk
- Model disimpan dalam file `.pkl` menggunakan `joblib`
- Backend bertanggung jawab melakukan inference

---

#### 6. UI dengan Bootstrap

Menggunakan Bootstrap untuk:

- Mempercepat pengembangan UI
- Memberikan tampilan yang responsif dan konsisten

---

### ⚠️ Assumptions

Beberapa asumsi yang digunakan dalam pengembangan sistem ini:

#### 1. Data Input Valid

Diasumsikan bahwa:

- Input dari user berupa angka valid (tidak kosong / tidak invalid)
- Validasi dasar dilakukan di frontend

---

#### 2. Single User Role

Sistem hanya memiliki satu jenis user (tidak ada role admin/user terpisah)

---

#### 3. Model Sudah Terlatih

Model machine learning:

- Sudah dilatih sebelumnya
- Tidak dilakukan training ulang di dalam aplikasi

---

#### 4. Penyimpanan Data Sederhana

Data penjualan:

- Disimpan secara statis / sederhana (tidak menggunakan database kompleks)
- Fokus pada demonstrasi fitur, bukan production

---

#### 5. Token Expiration

Token memiliki masa berlaku (expired):

- Jika token expired, user harus login ulang

---

#### 6. Lingkungan Lokal (Development)

Aplikasi dijalankan dalam lingkungan lokal:

- Backend: `localhost:5000`
- Frontend: `localhost:5173`

---

## 🔧 Cara Menjalankan Project

Project ini terdiri dari 2 bagian:

- Backend (Flask)
- Frontend (React)

### 1️. Menjalankan Backend (Flask)

Masuk ke folder backend:

1. cd backend
2. pip install -r requirements.txt
3. python app.py
4. Backend akan berjalan di http://127.0.0.1:5000

### 2. Menjalankan Frontend(React)

Masuk ke folder backend:

1. cd frontend
2. npm install
3. npm run dev
4. Frontend akan berjalan di http://localhost:5173 (Port ini yang dibuka di browser)
