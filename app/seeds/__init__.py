from flask.cli import AppGroup
from .users import seed_users, undo_users
from .items import seed_items, undo_items
from .images import seed_images, undo_images
from .purchases import seed_purchases, undo_purchases
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_items()
    seed_images()
    seed_purchases()
    seed_reviews()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_items()
    undo_images()
    undo_purchases()
    seed_reviews()
    # Add other undo functions here
