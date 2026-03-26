from flask import Blueprint
from app.services.sales_service import get_sales_data

sales_bp = Blueprint('sales', __name__)

@sales_bp.route('/sales', methods=['GET'])
def sales():
    return get_sales_data()