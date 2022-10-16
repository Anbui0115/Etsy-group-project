from flask import Blueprint, jsonify
from app.models import User, db
from flask_login import login_required
# from app.forms import ReviewForm #TODO ReviewForm needs to be created, added to forms.__init__.py

review_routes = Blueprint('review', __name__)


@review_routes.route('/')
def get_reviews(): #TODO update State for reviews when you open an item
    pass


@review_routes.route('/')
def create_review():
    pass


@review_routes.route('/')
def edit_review():
    pass


@review_routes.route('/')
def delete_review():
    pass
