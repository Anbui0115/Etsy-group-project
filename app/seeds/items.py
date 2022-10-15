from app.models import db, Item


def seed_items():
    itemName = Item(
        user_id = "user_id", title = "item name", description = "item description", price = "item price"
    )

    db.session.add(itemName)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
