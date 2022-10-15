from app.models import db, Item


def seed_items():
    item1 = Item( user_id = 1, title = "Gummies Of Real Things", description = "Humanity has long been obsessed with eating small versions of real life things. We're just here to fill that need.", price = "86.59")
    db.session.add(item1)
    item2 = Item( user_id = 2, title = "DIY Pocky Kit", description = "Love Pocky but tired of having to pay an arm and a leg for them? Look no further than this fun and cheap kit!", price = "60.47")
    db.session.add(item2)
    item3 = Item( user_id = 1, title = "Cartoon Chip Set - Great for Parties!", description = "'Chips are a child's best friend!' - Mother Teresa", price = "18.34")
    db.session.add(item3)
    item4 = Item( user_id = 1, title = "Edible Paper Kit", description = "What, you don't want to buy edible money because you think you can make it yourself? Why not counterfeit some edible money with this well-priced kit!", price = "49.92")
    db.session.add(item4)
    item5 = Item( user_id = 3, title = "Literally Just Pies", description = "It's random. No, you can't choose which flavors you get.", price = "59.91")
    db.session.add(item5)
    item6 = Item( user_id = 2, title = "Edible Money", description = "You might be too old for chocolate gold coins, but you're never too old for edible big hundos\n\nPhoto by Alexander Mils: https://www.pexels.com/photo/person-holding-100-us-dollar-banknotes-2068975/\nPhoto by Pixabay: https://www.pexels.com/photo/hard-cash-on-a-briefcase-259027/", price = "60.44")
    db.session.add(item6)
    item7 = Item( user_id = 1, title = "Pretzel-Covered Chocolate", description = "Pretzels were born to be on the outside, not protected by softness.", price = "72.19")
    db.session.add(item7)
    item8 = Item( user_id = 1, title = "Cookies", description = "Photo by Tina Nord: https://www.pexels.com/photo/selective-focus-photography-of-chocolate-cookies-1775283/\nPhoto by Suzy Hazelwood: https://www.pexels.com/photo/baked-cookies-and-glass-of-milk-1325467/\nPhoto by Lisa Fotios: https://www.pexels.com/photo/macro-photography-of-pile-of-3-cookie-230325/", price = "58.87")
    db.session.add(item8)
    item9 = Item( user_id = 1, title = "Candied Pickles", description = "Sweet and sour. Don't sue us if this sends you to the hospital!\n\nPhotos by Polina Tankilevitch: https://www.pexels.com/photo/close-up-photo-of-pickles-on-a-glass-jar-8599636/", price = "96.63")
    db.session.add(item9)
    item10 = Item( user_id = 1, title = "Coding Bootcamp Fortune Cookies", description = "Are you uncertain about your future? Put your trust and faith into a cookie!", price = "82.32")
    db.session.add(item10)
    item11 = Item( user_id = 3, title = "DIY Potato Chip Kit", description = "Air fryer and potato slicer not included.\n\nPhoto by Marco Antonio Victorino: https://www.pexels.com/photo/photo-of-pile-of-potatoes-2286776/", price = "24.13")
    db.session.add(item11)
    item12 = Item( user_id = 2, title = "A Box Of Cereal Signed By Brad Simpson", description = "60% of the proceeds will go towards my lifetime subscripton to Netflix.", price = "59.29")
    db.session.add(item12)
    item13 = Item( user_id = 2, title = "A Can Of Jellybeans From John Lee's Toyota Prius", description = "Nobody tell him about this listing. I still have college student loans to pay off.\n\nPhoto by Nora Topicals: https://www.pexels.com/photo/boxes-of-jellybeans-7038189/", price = "91.94")
    db.session.add(item13)
    item14 = Item( user_id = 3, title = "Salt, Once Owned By David Rogers", description = "He left his front door open a few weeks ago and one thing led to another\n\nPhoto by Lorena Martínez: https://www.pexels.com/photo/mason-jar-filled-with-salt-2320244/", price = "37.31")
    db.session.add(item14)
    item15 = Item( user_id = 1, title = "Cesar Solano's World-Famous Potato Salad", description = "Photo by Karolina Grabowska: https://www.pexels.com/photo/crop-person-eating-cutlet-with-potatoes-and-meat-salad-4210806/", price = "99.85")
    db.session.add(item15)
    item16 = Item( user_id = 3, title = "Coding Bootcamp Energy Drink - LIMITED TIME", description = "Need to stay up over the weekend to finish your group project? Get some of this!\n\nPhoto by Mikhail Nilov: https://www.pexels.com/photo/person-holding-a-bottle-of-juice-6740777/", price = "54.70")
    db.session.add(item16)
    item17 = Item( user_id = 1, title = "Bottle Of Water, Signed By A Dog", description = "We asked the dog why he was famous, but he just said 'ARF ARF ARF ARF ARF ARF ARF ARF ARF'\n\nPhoto by Nida: https://www.pexels.com/photo/kitten-and-a-bottle-of-water-on-log-9497051/", price = "82.29")
    db.session.add(item17)
    item18 = Item( user_id = 2, title = "Sugar (1lb)", description = "Person not included\n\nPhoto by Meruyert Gonullu: https://www.pexels.com/photo/a-woman-pouring-sugar-in-a-pot-8290186/", price = "45.59")
    db.session.add(item18)
    item19 = Item( user_id = 1, title = "Flour (1lb)", description = "Are you a fan of donuts? Then buy this.\n\nPhoto by Klaus Nielsen: https://www.pexels.com/photo/craft-bag-with-flour-and-shovel-6294375/", price = "55.98")
    db.session.add(item19)
    item20 = Item( user_id = 1, title = "Paprika (1lb)", description = "This is a lifetime supply. If you run out, then I have some bad news for you.\n\nPhoto by Karolina Grabowska: https://www.pexels.com/photo/silver-spoon-with-red-paprika-powder-4199095/", price = "49.93")
    db.session.add(item20)
    item21 = Item( user_id = 3, title = "Thyme (1lb)", description = "It's Thyme for you to buy this", price = "67.84")
    db.session.add(item21)
    item22 = Item( user_id = 3, title = "Endless Pancakes Stolen From Denny's", description = "Please take these off our hands, the Feds are on our tail and we need to leave this country in a week.", price = "42.23")
    db.session.add(item22)
    item23 = Item( user_id = 3, title = "McDonald's Style Water", description = "Our top scientists have spent years researching how to replicate the water from McDonald's. As we all know, tap water doesn't hold a candle to it.\n\nPhoto by Steve Johnson: https://www.pexels.com/photo/clear-disposable-bottle-on-black-surface-1000084/", price = "74.56")
    db.session.add(item23)
    item24 = Item( user_id = 1, title = "Water-Flavored Pepper", description = "Love the texture of black pepper on your fettucine, but hate the flavor?\n\nPhoto by Eva Bronzini: https://www.pexels.com/photo/close-up-photo-of-whole-peppercorns-5988689/\nPhoto by Karolina Grabowska: https://www.pexels.com/photo/mix-of-pepper-seeds-on-wooden-surface-4198658/", price = "90.19")
    db.session.add(item24)
    item25 = Item( user_id = 3, title = "50-Foot Churro", description = "You ever want to impress your loved ones? Buy a 50-foot churro to make your ex jealous! Replace her in your life with this amazing specimen of brown sugar and flour!", price = "66.90")
    db.session.add(item25)
    item26 = Item( user_id = 1, title = "Existential Funnel Cake", description = "When you walk through an amusement park, do you ever wonder, 'Wow, I'm paying money to experience excitement. Does that make it any less real?'\nAnyway, you can have that existentialism without waiting in a long line to get into Knott's Berry Farm or something.", price = "69.18")
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
