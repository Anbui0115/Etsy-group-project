from flask import Blueprint, request
from app.forms.update_cart_form import UpdateCart
from app.models import User, db, user
from flask_login import login_required, current_user
from app.models import User, db, Shopping_cart,Item
from app.models.purchases import Purchase
from ..forms.shopping_cart import CreateShoppingCart



shopping_cart_routes = Blueprint('cart', __name__)


@shopping_cart_routes.route('', methods=["GET"])
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
        cartItem = Shopping_cart.query.filter_by(item_id=shopping_cart.item_id, user_id=owner_id).first()
        if cartItem is not None: 
            cartItem.quantity = cartItem.quantity + shopping_cart.quantity
            db.session.commit()
            return {'shopping_cart': cartItem.to_dict()}
        else:
            db.session.add(shopping_cart)
            db.session.commit()
            return {'shopping_cart': shopping_cart.to_dict()}
    else:
        return {'errors': form.errors}, 400

@shopping_cart_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_cart(id):
    """
    Edit shopping cart
    """
    form = UpdateCart()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        cartItem = Shopping_cart.query.filter_by(id=id).first()
        if cartItem is None:
            return {'error': "This item is not in cart"}, 404 
        else:
            form.populate_obj(cartItem)
            db.session.commit()
            return cartItem.to_dict()

@shopping_cart_routes.route('/checkout', methods=["POST"])
@login_required
def checkout_cart():
    """
    Empty shopping cart and send items to purchase
    """
    user_id = current_user.id
    cartItems = Shopping_cart.query.filter_by(user_id=user_id).all()
    
    for cartItem in cartItems:

        purchase = Purchase()
        purchase.user_id = user_id
        purchase.item_id = cartItem.item_id
        purchase.quantity = cartItem.quantity
        purchase.price = cartItem.item.price
        db.session.add(purchase)
        db.session.delete(cartItem)

    db.session.commit()
    return {"message":"successfuly added to purchase table"}

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
