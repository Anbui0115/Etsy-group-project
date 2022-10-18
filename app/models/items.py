from .db import db
from flask_login import UserMixin


# class Item(db.Model, UserMixin):
class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    owner_id = db.Column(db.Integer,db.ForeignKey("users.id", ondelete="CASCADE"))
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    price = db.Column(db.Float, nullable=False)

    #relationships 
    owner = db.relationship("User", back_populates="items", lazy=False)
    reviews = db.relationship("Review", cascade="all, delete", back_populates="item", lazy=False)
    images = db.relationship("Image", cascade="all, delete", back_populates="item",lazy=False)
    shopping_cart = db.relationship("Shopping_cart",cascade="all, delete", back_populates="items")
    purchases = db.relationship("Purchase", back_populates="item")

    
    def to_dict(self):
        return {
            'id': self.id,
            'owner':  self.owner.to_dict(),
            'title': self.title,
            'description': self.description,
            'price': self.price,
            'images': [i.to_dict() for i in self.images],
            'reviews': [i.to_dict() for i in self.reviews]
        }
