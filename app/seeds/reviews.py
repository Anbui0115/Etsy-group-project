from app.models import db, Review


def seed_reviews():
    reviewName = Review(
        item_id = 1, user_id = 1, purchase_id = 1, stars = 4, title = "Man", description = "My wife divorced me for this"
    )

    db.session.add(reviewName)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
