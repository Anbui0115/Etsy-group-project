from flask import Blueprint, jsonify
from app.models import User, db
from flask_login import login_required
# from app.forms import ItemsForm #TODO ItemsForm needs to be created, added to forms.__init__.py

cart_routes = Blueprint('cart', __name__, url_prefix="cart")


@cart_routes.route('/')
def get_cart():
    pass


@cart_routes.route('/')
def edit_cart():
    pass


@cart_routes.route('/')
def delete_cart():
    pass
