from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField
from wtforms import validators
from .list_field import ListField, ListFieldLengthValidator

class UpdateCart(FlaskForm):
    quantity = IntegerField('quantity',validators=[validators.input_required()])
   
   