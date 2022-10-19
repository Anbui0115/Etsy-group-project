from .db import db
from flask_login import UserMixin


# class Shopping_cart(db.Model, UserMixin):
class Shopping_cart(db.Model):
    __tablename__ = 'shopping_carts'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id", ondelete="CASCADE"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    
    #relationship
    item = db.relationship("Item", back_populates="shopping_cart", lazy=False)
    user = db.relationship("User",back_populates="shopping_cart", lazy=False)

    def to_dict(self):
        return {
            'id': self.id,
            'item': self.item.to_dict(),
            'user': self.user.to_dict(),
            'quantity': self.quantity            
        }