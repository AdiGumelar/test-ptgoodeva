from flask import jsonify
from flask_jwt_extended import create_access_token

def login_user(data):
    username = data.get("username")
    password = data.get("password")

    # dummy user
    if username == "admin" and password == "admin":
        token = create_access_token(identity=username)
        return jsonify({"token": token})

    return jsonify({"error": "Invalid credentials"}), 401