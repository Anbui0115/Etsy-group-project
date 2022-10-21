from app.models import db, Review


def seed_reviews():
    reviewName = Review(
        item_id = 1, user_id = 1, purchase_id = 1, stars = 4, title = "Man!", description = "My wife divorced me for this"
    )

    reviewName2 = Review(
        item_id = 2, user_id = 1, purchase_id = 2, stars = 1, title = "I ate it and i died", description = "I will forever haunt whoever sold this. shame on you!"
    )

    reviewName3 = Review(
        item_id = 3, user_id = 1, purchase_id = 3, stars = 5, title = "I ate it and it turned me into a newt", description = "But I got better, so really it's not that bad!"
    )

    reviewName4 = Review(
        item_id = 1, user_id = 2, purchase_id = 1, stars = 5, title = "Oh heck yes", description = "So delicious i neglected my personal responsibilities"
    )

    reviewName5 = Review(
        item_id = 1, user_id = 3, purchase_id = 1, stars = 1, title = "can't get enough", description = "Boss fired me after I got caught embezzling money to buy more"
    )



    db.session.add(reviewName)
    db.session.add(reviewName2)
    db.session.add(reviewName3)
    db.session.add(reviewName4)
    db.session.add(reviewName5)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
