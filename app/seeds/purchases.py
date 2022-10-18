from app.models import db, Purchase


def seed_purchases():
    reviewName = Purchase(
        item_id = 1, user_id = 1, quantity = 1, price = 5.23
    )

    reviewName1 = Purchase(
        item_id = 2, user_id = 1, quantity = 2, price = 5.30
    )

    reviewName2 = Purchase(
        item_id = 3, user_id = 1, quantity = 3, price = 4.00
    )


    db.session.add(reviewName)
    db.session.add(reviewName1)
    db.session.add(reviewName2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_purchases():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
