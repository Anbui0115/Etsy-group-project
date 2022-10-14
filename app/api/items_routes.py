from flask import Blueprint, jsonify
from app.models import User, db
from flask_login import login_required
# from app.forms import ItemsForm #TODO ItemsForm needs to be created, added to forms.__init__.py

item_routes = Blueprint('items', __name__)


@item_routes.route('/')
def get_item():
    pass


@item_routes.route('/')
def create_item():
    pass


@item_routes.route('/')
def edit_item():
    pass


@item_routes.route('/')
def delete_item():
    pass
