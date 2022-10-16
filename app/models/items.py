from .db import db
from flask_login import UserMixin


# class Item(db.Model, UserMixin):
class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    owner_id = db.Column(db.Integer,db.ForeignKey("users.id", ondelete="CASCADE"))
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    price = db.Column(db.Integer, nullable=False)

    #relationships 
    owner = db.relationship("User", back_populates="items")
    reviews = db.relationship("Review", back_populates="item")
    images = db.relationship("Image", back_populates="item")
    shopping_cart = db.relationship("Shopping_cart", back_populates="items")

    
    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'title': self.title,
            'description': self.description,
            'price': self.price
        }
