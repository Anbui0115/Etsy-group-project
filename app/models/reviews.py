from .db import db
from flask_login import UserMixin


# class Review(db.Model, UserMixin):
class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id", ondelete="CASCADE"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    purchase_id = db.Column(db.Integer, db.ForeignKey("purchases.id", ondelete="CASCADE"), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    # relationship
    user_review = db.relationship("User", back_populates="reviews")
    item = db.relationship("Item" , back_populates="reviews")
    purchase = db.relationship("Purchase", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'item_id': self.item_id,
            'user_id': self.user_id,
            'purchase_id' : self.purchase_id,
            'stars': self.stars,
            'title': self.title,
            'description': self.description
        }
