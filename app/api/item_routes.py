from pickle import NONE
from flask import Blueprint, jsonify, request
from app.models import User, db, Item,Image,Review
from flask_login import login_required
from ..forms.create_item import CreateItem
from flask_login import login_required, current_user
from app.models.reviews import Review
# from app.forms import ItemsForm #TODO ItemsForm needs to be created, added to forms.__init__.py

item_routes = Blueprint('items', __name__)

@item_routes.route('/', methods=["GET"])
def get_item():
    """
    Get all items
    """
    items = Item.query.all()
    return {'items': [i.to_dict() for i in items]}

@item_routes.route('/<int:id>', methods=["GET"])
def get_item_by_id(id):
    """
    Get all items
    """
    items = Item.query.filter_by(id=id).all()
    return {'items': [i.to_dict() for i in items]}

@item_routes.route('/<int:id>', methods=["DELETE"])
def delete_item_by_id(id):
    """
    Delete item by id
    """     
    item = Item.query.filter_by(id=id).first()
    if item is not None:      
        db.session.delete(item)
        db.session.commit()
        return {"message": "Deleted successfuly"}
    else:
        return {"message": "item is not found"}    

@item_routes.route('/', methods=["POST"])
# @login_required
def create_item():
    """
    Create new item
    """
    form = CreateItem()
    form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    title = request.form["title"]
    description = request.form["description"]
    price = request.form["price"]
    owner_id = 1
    # owner_id = current_user.id
    item = Item(owner_id,title,description,price)
    db.session.add(item)

    image_url = request.form["image_url"]
    item_id = item.id
    image = Image(item_id, image_url)
    
    db.session.add(image)
    db.session.commit()

    return {'items': [i.to_dict() for i in item]}
    
    
    
    


    


# @item_routes.route('/')
# def edit_item():
#     pass


# @item_routes.route('/')
# def delete_item():
#     pass
