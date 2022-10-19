import re
from flask import Blueprint, jsonify, request
from app.models import User, db, Review, Purchase
from flask_login import login_required
from app.forms.review_form import CreateReviewForm, EditReviewForm

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


@review_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_review(id):
    print(id)
    # print(f"test\n\n\n\n")
    form = EditReviewForm()
    review = Review.query.filter_by(id=id).first()
    form.populate_obj(review)
    db.session.commit()
    return {'ok': "ok"}


@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
    review = Review.query.filter_by(id=id).first()
    db.session.delete(review)
    db.session.commit()
    return {'ok': "ok"}
