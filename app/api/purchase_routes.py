from pickle import NONE
from flask import Blueprint, jsonify, request
from app.api.auth_routes import login
from app.models import User, db, Purchase
# from flask_login import login_required
# from ..forms.create_item import CreateItem
# from ..forms.update_item_form import UpdateItem

from flask_login import login_required, current_user
# from app.models.reviews import Review
# from app.forms import ItemsForm #TODO ItemsForm needs to be created, added to forms.__init__.py

purchase_routes = Blueprint('purchases', __name__)

@purchase_routes.route('/<int:id>', methods=["GET"])
@login_required
def get_item(id):
    """
    Get all purchases for current user
    """

    purchases = Purchase.query.filter_by(user_id=id)
    print(purchases)
    return {'purchases': [i.to_dict() for i in purchases]}


# @item_routes.route('', methods=["POST"])
# @login_required
# def create_new_item():
#     """
#     Create new item
#     """
#     owner_id = current_user.id
#     print(owner_id)
#     form = CreateItem()
#     print(form.data)
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         item = Item()
#         form.populate_obj(item)
#         item.owner_id = owner_id


#         for image_url in form.image_urls.data:
#             image = Image()
#             image.image_url = image_url
#             item.images.append(image)

#         db.session.add(item)
#         db.session.commit()
#         return item.to_dict()
#     else:
#         return {'errors': form.errors}, 400

# @item_routes.route('/<int:id>', methods=["PUT"])
# @login_required
# def edit_item(id):
#     """
#     Update item
#     """
#     owner_id = current_user.id
#     form = UpdateItem()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         item = Item.query.filter_by(id=id).first()
#         if item is None:
#             return {'error': "Item couldn't be found"}, 404
#         form.populate_obj(item)
#         db.session.commit()
#         return item.to_dict()
#     else:
#         return {'errors': form.errors}, 400

# @item_routes.route('/<int:id>', methods=["GET"])
# def get_item_by_id(id):
#     """
#     Get all items
#     """
#     items = Item.query.filter_by(id=id).all()
#     return {'items': [i.to_dict() for i in items]}

# @item_routes.route('/<int:id>', methods=["DELETE"])
# def delete_item_by_id(id):
#     """
#     Delete item by id
#     """
#     item = Item.query.filter_by(id=id).first()
#     if item is not None:
#         db.session.delete(item)
#         db.session.commit()
#         return {"message": "Deleted successfuly"}
#     else:
#         return {'errors': ["Item couldn't be found"]}, 404
