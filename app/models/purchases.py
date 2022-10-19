from .db import db
from flask_login import UserMixin


# class Purchase(db.Model, UserMixin):
class Purchase(db.Model):
    __tablename__ = 'purchases'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id", ondelete="CASCADE"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)

    #relationships
    user = db.relationship("User", back_populates="user_purchases")
    item = db.relationship("Item", back_populates="purchases")
    reviews = db.relationship("Review", back_populates="purchase")

    def to_dict(self):
        return {
            'id': self.id,
            'itemId': self.item_id,
            'userId': self.user_id,
            'quantity': self.quantity,
            'price' : self.price,
            'review' : [i.to_dict() for i in self.reviews]
        }
