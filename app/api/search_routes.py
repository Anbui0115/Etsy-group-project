from flask import Blueprint, jsonify
from app.models import User, db, Item
# from app.forms import SearchForm #TODO SearchForm needs to be created, added to forms.__init__.py

search_routes = Blueprint('search', __name__)


@search_routes.route('', methods=["POST"])
def get_search(): #TODO query.filter().all()
    print(f"hi\n\n\n\n")
    return {}


# @search_routes.route('/')
# def edit_search():
#     pass
