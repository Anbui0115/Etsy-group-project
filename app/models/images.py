from .db import db
from flask_login import UserMixin


# class Image(db.Model, UserMixin):
class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.String(255), db.ForeignKey("items.id", ondelete="CASCADE"), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)

    #relationship
    item = db.relationship("Item" , back_populates="images" )
       
    def to_dict(self):
        return {
            'id': self.id,
            'item_id': self.item_id,
            'image_url': self.image_url            
        }
