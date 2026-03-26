import pandas as pd
from flask import jsonify

def get_sales_data():
    df = pd.read_csv("data/sales_data.csv")
    return jsonify(df.to_dict(orient="records"))