from flask import jsonify
from app.ml.ml_model import predict

def predict_product(data):
    try:
        result = predict([
            data['jumlah_penjualan'],
            data['harga'],
            data['diskon']
        ])

        label = "Laris" if result == 1 else "Tidak"

        return jsonify({
            "prediction": label
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400