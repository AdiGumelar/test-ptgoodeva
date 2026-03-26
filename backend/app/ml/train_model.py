import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib
import os

# load dataset
df = pd.read_csv('../../data/sales_data.csv')

# preprocessing
df['status'] = df['status'].map({
    'Tidak': 0,
    'Laris': 1
})

# fitur & target
X = df[['jumlah_penjualan', 'harga', 'diskon']]
y = df['status']

# split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# training model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# evaluasi
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print("Accuracy:", accuracy)

# simpan model
BASE_DIR = os.path.dirname(__file__)
model_path = os.path.join(BASE_DIR, "model.pkl")

joblib.dump(model, model_path)

print("Model berhasil disimpan!")