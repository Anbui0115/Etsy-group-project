import re
from flask import Blueprint, jsonify, request
from app.models import User, db, Review, Purchase
from flask_login import login_required
from app.forms.review_form import CreateReviewForm

review_routes = Blueprint('review', __name__)

@review_routes.route('', methods=["POST"])
@login_required
def create_review():
    form = CreateReviewForm()
    review = Review()
    form.populate_obj(review)
    db.session.add(review)
    db.session.commit()

    return {'ok': "ok"}


@review_routes.route('/')
def edit_review():
    pass


@review_routes.route('/')
def delete_review():
    pass
