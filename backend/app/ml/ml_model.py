import joblib
import os

model_path = os.path.join(os.path.dirname(__file__), "model.pkl")
model = joblib.load(model_path)

def predict(data):
    result = model.predict([data])
    return result[0]