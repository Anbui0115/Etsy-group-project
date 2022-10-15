from .db import db
from flask_login import UserMixin


# class Purchase(db.Model, UserMixin):
class Purchase(db.Model):
    __tablename__ = 'purchases'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id", ondelete="CASCADE"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
   
    def to_dict(self):
        return {
            'id': self.id,
            'itemId': self.itemId,
            'userId': self.userId,
            'quantity': self.quantity            
        }