from app.models import db, Item


def seed_items():
    itemName = Item(
        user_id = "user_id", title = "item name", description = "item description", price = "item price"
    )
