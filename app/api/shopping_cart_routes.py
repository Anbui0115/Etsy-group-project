from flask import Blueprint, request
from app.models import User, db
from flask_login import login_required, current_user
from app.models import User, db, Shopping_cart
from ..forms.shopping_cart import CreateShoppingCart


shopping_cart_routes = Blueprint('cart', __name__)


@shopping_cart_routes.route('/')
@login_required
def get_shopping_cart():
    """
    Get all items in the shopping cart
    """
    owner_id = current_user.id
    shopping_cart = Shopping_cart.query.filter_by(user_id=owner_id).all()
    return {'shopping_cart': [i.to_dict() for i in shopping_cart]}

@shopping_cart_routes.route('', methods=["POST"])
@login_required
def add_shopping_cart():
    """
    Add to shopping cart
    """
    owner_id = current_user.id
    form = CreateShoppingCart()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        shopping_cart = Shopping_cart()
        form.populate_obj(shopping_cart)
        shopping_cart.user_id = owner_id
        db.session.add(shopping_cart)
        db.session.commit()
        return {'shopping_cart': shopping_cart.to_dict()}
    else:
        return {'errors': form.errors}, 400

@shopping_cart_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_shopping_cart(id):
    """
    Delete item in shopping cart by id
    """
    cart = Shopping_cart.query.filter_by(id=id).first()
    if cart is not None:
        db.session.delete(cart)
        db.session.commit()
        return {"message": "Deleted successfuly"}
    else:
        return {'errors':["Item couldn't be found"]}, 400



# @shopping_cart_routes.route('/')
# def edit_shopping_cart():
#     pass
