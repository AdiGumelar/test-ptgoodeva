from flask import jsonify
from app.utils.jwt_helper import generate_token

def login_user(data):
    username = data.get("username")
    password = data.get("password")

    # dummy user
    if username == "admin" and password == "admin":
        token = generate_token(username)
        return jsonify({"token": token})

    return jsonify({"error": "Invalid credentials"}), 401