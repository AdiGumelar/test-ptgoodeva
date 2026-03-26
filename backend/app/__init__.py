from flask import Flask
from flask_cors import CORS
from app.routes.auth import auth_bp
from app.routes.sales import sales_bp
from app.routes.predict import predict_bp

def create_app():
    app = Flask(__name__)

    CORS(app)

    app.register_blueprint(auth_bp)
    app.register_blueprint(sales_bp)
    app.register_blueprint(predict_bp)

    return app