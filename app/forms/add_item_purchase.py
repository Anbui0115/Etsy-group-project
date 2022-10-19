from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms import validators



class AddItemPurchase(FlaskForm):
    item_id = IntegerField('item_id',validators=[validators.input_required()])
    quantity = IntegerField('quantity',validators=[validators.input_required()])
    price = IntegerField('price',validators=[validators.input_required()])

    
    