from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
# from wtforms import validators
# from .list_field import ListField, ListFieldLengthValidator


class CreateReviewForm(FlaskForm):
    item_id = IntegerField('item_id')
    user_id = IntegerField('user_id')
    purchase_id = IntegerField('purchase_id')
    stars = IntegerField('stars')
    title = StringField('title')
    description = StringField('description')


class EditReviewForm(FlaskForm):
    stars = IntegerField('stars')
    title = StringField('title')
    description = StringField('description')
