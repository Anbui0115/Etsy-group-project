from .db import db
from flask_login import UserMixin


# class Item(db.Model, UserMixin):
class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id", ondelete="CASCADE"), primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    price = db.Column(db.Float, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.userId,
            'title': self.title,
            'description': self.description,
            'price': self.price
        }
