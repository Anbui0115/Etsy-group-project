from math import fabs
from app.models import db, Item, User


def seed_items():
    user = User.query.filter_by(email="demo@aa.io").first()
    print(user)

    item1 = Item(
        owner_id = user.id, title = "MegaGear Sequoia Canvas Camera Bag Shoulder Bag Case" , description = "50% Wallet sale! (Father's Day Offer) Add any wallet from our store to your cart and we will reimburse you 50 percent of the wallet price after the checkout.", price = "47.99"
    )

    item2 = Item(
        owner_id = user.id, title = "Leather Weekender Bag, Leather Duffle Bag, Large Travel Bag, Personalized Outdoor Bag" , description = "Duffle Bag, Travel Bag, Personalized Groomsmen Gift, Custom Leather Holdall Bag, Leather Personalized Gift, Mens Duffle Bag, Father’s Day Gift, Birthday Gift, Gift for Him", price = "96.00"
    )

    if Item.query.filter_by(title=item1.title).first() is None:
        db.session.add(item1)
    if Item.query.filter_by(title=item2.title).first() is None:
        db.session.add(item2)
   


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
