from flask import Blueprint
from app.services.sales_service import get_sales_data
from flask_jwt_extended import jwt_required

sales_bp = Blueprint('sales', __name__)

@sales_bp.route('/sales', methods=['GET'])
@jwt_required()
def sales():
    return get_sales_data()