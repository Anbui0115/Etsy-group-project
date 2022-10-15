from app.models import db, Item


def seed_items():
    item26 = Item( user_id = 9, title = "Existential Funnel Cake", description = "When you walk through an amusement park, do you ever wonder, 'Wow, I'm paying money to experience excitement. Does that make it any less real?'\nAnyway, you can have that existentialism without waiting in a long line to get into Knott's Berry Farm or something.", price = "84.66")
    db.session.add(item26)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
