from flask import Blueprint, request
from app.models import User, db
from flask_login import login_required, current_user
from app.models import User, db, Shopping_cart
from ..forms.shopping_cart import CreateShoppingCart


shopping_cart_routes = Blueprint('cart', __name__)


@shopping_cart_routes.route('/')
def get_shopping_cart():
    """
    Get all items in the shopping cart
    """
    shopping_cart = Shopping_cart.query.all()
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


# @shopping_cart_routes.route('/')
# def edit_shopping_cart():
#     pass


# @shopping_cart_routes.route('/')
# def delete_shopping_cart():
#     pass
