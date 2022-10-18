from pickle import NONE
from flask import Blueprint, jsonify, request
from app.models import User, db, Item,Image,Review
from flask_login import login_required
from ..forms.create_item import CreateItem
from ..forms.update_item_form import UpdateItem

from flask_login import login_required, current_user
from app.models.reviews import Review
# from app.forms import ItemsForm #TODO ItemsForm needs to be created, added to forms.__init__.py

item_routes = Blueprint('items', __name__)

@item_routes.route('', methods=["GET"])
def get_item():
    """
    Get all items
    """
    items = Item.query.all()
    return {'items': [i.to_dict() for i in items]}


@item_routes.route('', methods=["POST"])
@login_required
def create_new_item():
    """
    Create new item
    """  
    print(request.get_json())
    owner_id = current_user.id
    print(owner_id)
    form = CreateItem()
    print(form.data)
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        # print(form)
        # image = Image()
        # form.populate_obj(image)

        item = Item()
        form.populate_obj(item)
        item.owner_id = owner_id
        # item.images.append(image)
        db.session.add(item)
        db.session.commit()
        return item.to_dict()
    else:
        return {'errors': form.errors}, 400  
    
@item_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_item(id):
    """
    Update item
    """  
    owner_id = current_user.id
    form = UpdateItem()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        item = Item.query.filter_by(id=id).first()
        if item is None:
            return {'error': "Item couldn't be found"}, 404 
        form.populate_obj(item)
        db.session.commit()
        return item.to_dict()
    else:
        return {'errors': form.errors}, 400  

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
        return {'errors': ["Item couldn't be found"]}, 404      
