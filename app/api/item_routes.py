from pickle import NONE
from flask import Blueprint, jsonify, request
from app.models import User, db, Item,Image,Review
from ..forms.create_item import CreateItem
from ..forms.update_item_form import UpdateItem
from flask_login import login_required, current_user
from app.models.reviews import Review
import re

item_routes = Blueprint('items', __name__)

@item_routes.route('', methods=["GET"])
def get_item():
    """
    Get all items
    """
    searchTerm ='%'+request.args['q']+'%' if 'q' in request.args.keys() else '%'
    try:
        searchTerms = request.args.to_dict()['q'].split(" ")
        returnList = []
        for searchTerm in searchTerms:
            items = Item.query.filter(Item.title.ilike("%" + searchTerm + "%") | Item.description.ilike("%" + searchTerm + "%")).all()
            returnList.extend([i.to_dict() for i in items])
        return { 'items' : returnList}
    except:
        items = Item.query.all()
        return {'items': [i.to_dict() for i in items]}

@item_routes.route('', methods=["POST"])
@login_required
def create_new_item():
    """
    Create new item
    """
    owner_id = current_user.id
    form = CreateItem()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        item = Item()
        form.populate_obj(item)
        item.owner_id = owner_id
        for image_url in form.image_urls.data:
            image = Image()
            image.image_url = image_url
            item.images.append(image)

        db.session.add(item)
        db.session.commit()
        return {'items': item.to_dict()}
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
        return {'items': item.to_dict()}
    else:
        return {'errors': form.errors}, 400

@item_routes.route('/<int:id>', methods=["GET"])
def get_item_by_id(id):
    """
    Get all items
    """
    items = Item.query.filter_by(id=id).all()
    return {'items': [i.to_dict() for i in items]}

@item_routes.route('/<int:sid>', methods=["DELETE"])
@login_required
def delete_item_by_id(sid):
    """
    Delete item by id
    """
    item = Item.query.filter_by(id=sid).first()
    if item is not None:
        db.session.delete(item)
        db.session.commit()
        return {"message": "Deleted successfuly"}
    else:
        return {'errors': ["Item couldn't be found"]}, 404
