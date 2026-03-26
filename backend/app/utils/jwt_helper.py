import jwt
from datetime import datetime, timedelta

SECRET_KEY = "secret123"

def generate_token(username):
    payload = {
        "user": username,
        "exp": datetime.utcnow() + timedelta(hours=1)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")