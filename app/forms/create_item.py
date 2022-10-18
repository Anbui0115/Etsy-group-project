from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FieldList
from wtforms import validators

class CreateItem(FlaskForm):
    image_urls = FieldList(StringField('image_urls',validators=[validators.input_required()]), min_entries = 1, max_entries = 5)
    title = StringField('title',validators=[validators.input_required()])
    description = StringField('description',validators=[validators.input_required()])
    price = IntegerField('price',validators=[validators.input_required()])
