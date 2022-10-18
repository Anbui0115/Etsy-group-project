from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms import validators
from .list_field import ListField, ListFieldLengthValidator

class UpdateItem(FlaskForm):
    title = StringField('title',validators=[validators.input_required()])
    description = StringField('description',validators=[validators.input_required()])
    price = IntegerField('price',validators=[validators.input_required()])
   