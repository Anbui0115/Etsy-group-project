from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms import validators



class CreateShoppingCart(FlaskForm):
    item_id = IntegerField('title',validators=[validators.input_required()])
    quantity = IntegerField('price',validators=[validators.input_required()])
    
    

