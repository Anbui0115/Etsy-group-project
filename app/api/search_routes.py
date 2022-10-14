from flask import Blueprint, jsonify
from app.models import User, db
from app.forms import SearchForm #TODO SearchForm needs to be created, added to forms.__init__.py

search_routes = Blueprint('search', __name__)


@search_routes.route('/')
def get_search(): #TODO query.filter().all()
    pass


@search_routes.route('/')
def edit_search():
    pass
