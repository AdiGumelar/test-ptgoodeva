import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "secret_123")
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY", "jwt_secret_123")
    JWT_ACCESS_TOKEN_EXPIRES = 3600  # 1 jam