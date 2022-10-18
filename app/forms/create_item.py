from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FieldList,FloatField
from wtforms import validators
from .list_field import ListField, ListFieldLengthValidator


class CreateItem(FlaskForm):
    title = StringField('title',validators=[validators.input_required()])
    description = StringField('description',validators=[validators.input_required()])
    price = FloatField('price',validators=[validators.input_required()])
    image_urls = ListField(StringField('image_urls',validators=[validators.input_required(),validators.url()]),validators=[validators.input_required(),ListFieldLengthValidator(1,5)])
    

