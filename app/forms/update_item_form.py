from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FloatField
from wtforms import validators
from .list_field import ListField, ListFieldLengthValidator

class UpdateItem(FlaskForm):
    title = StringField('title',validators=[validators.input_required()])
    description = StringField('description',validators=[validators.input_required()])
    price = FloatField('price',validators=[validators.input_required()])
   