from flask import Blueprint, jsonify
from app.models import User, db
from flask_login import login_required
# from app.forms import ItemsForm #TODO ItemsForm needs to be created, added to forms.__init__.py

shopping_cart_routes = Blueprint('shopping_cart', __name__)


@shopping_cart_routes.route('/')
def get_shopping_cart():
    pass


@shopping_cart_routes.route('/')
def edit_shopping_cart():
    pass


@shopping_cart_routes.route('/')
def delete_shopping_cart():
    pass
