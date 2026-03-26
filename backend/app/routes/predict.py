from flask import Blueprint, request
from app.services.predict_service import predict_product

predict_bp = Blueprint('predict', __name__)

@predict_bp.route('/predict', methods=['POST'])
@jwt_required()
def predict():
    data = request.json
    return predict_product(data)