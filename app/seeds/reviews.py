from app.models import db, Review


def seed_reviews():
    reviewName = Review(
        product_id = "item_id", user_id = "user_id", stars = "stars", title = "review title", description = "review description"
    )
