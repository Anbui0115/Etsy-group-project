import re
import os
import random

parentdir = os.getcwd()

def filter_img_url(url):
    p = re.compile('(\?.*)')
    return(p.sub("", url ))

with open('names.txt', 'r') as names:
    i = 1
    for name in names.readlines():
        print("\n")
        user_id = random.randint(3, 9)
        itemCodeString = "item" + str(i) + " = Item( user_id = " + str(user_id) + ","

        foldername = re.sub('[^0-9a-zA-Z]+', '_', name)
        path = os.path.join(parentdir,"seeder_data",foldername)
        with open(os.path.join(path,"title.txt")) as title_file:
            title = title_file.readline().strip()
            print(title)
            itemCodeString += " title = " + f'"{title}",'
        with open(os.path.join(path,"description.txt")) as desc_file:
            description = desc_file.read().strip().replace('\n', '\\n').replace('"',"'")
            print(description)
            itemCodeString += " description = " + f'"{description}",'
        with open(os.path.join(path,"images.txt")) as images_file:
            for img in images_file.readlines():
                #print(filter_img_url(img))
                pass

        price = str(round(random.uniform(14.00, 99.99), 2))
        if len(price) == 4: price += "0"
        print(price)
        itemCodeString += " price = " + f'"{price}")'

        i+=1
        print(itemCodeString)
        # print image titles, filtered


"""
    itemName = Item(
        user_id = 1, title = "item name", description = "item description", price = 11.11
    )
"""
