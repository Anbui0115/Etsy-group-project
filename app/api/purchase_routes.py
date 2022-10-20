from pickle import NONE
from flask import Blueprint, jsonify, request
from app.api.auth_routes import login
from app.models import User, db, Purchase,Shopping_cart
from ..forms.add_item_purchase import AddItemPurchase
# from ..forms.update_item_form import UpdateItem

from flask_login import login_required, current_user


purchase_routes = Blueprint('purchases', __name__)

@purchase_routes.route('/<int:id>', methods=["GET"])
@login_required
def get_item(id):
    """
    Get all purchases for current user
    """
    purchases = Purchase.query.filter_by(user_id=id)
    return {'purchases': [i.to_dict() for i in purchases]}


# @purchase_routes.route('', methods=["POST"])
# @login_required
# def add_order():
#     """
#      Add purchases for current user
#     """
#     user_id = current_user.id
#     form = AddItemPurchase()
    
#         purchase = Purchase()
#         purchase.user_id - user_id
#         form.populate_obj(purchase)
#         db.session.add(purchase)
#         db.session.commit()
#         return {'purchase': purchase.to_dict()}




