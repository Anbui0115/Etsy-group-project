import re
import os
import random

parentdir = os.getcwd()

def filter_img_url(url):
    p = re.compile('(\?.*)')
    return(p.sub("", url ).strip())

with open('itemcode.py', "w") as itemcodefile, open('imagecode.py', 'w') as imagecodefile:
    with open('names.txt', 'r') as names:
        i = 1
        i2 = 1
        for name in names.readlines():

            user_id = random.randint(1, 3)
            itemCodeString = "item" + str(i) + " = Item( owner_id = " + str(user_id) + ","
            foldername = re.sub('[^0-9a-zA-Z]+', '_', name)
            path = os.path.join(parentdir,"seeder_data",foldername)
            with open(os.path.join(path,"title.txt")) as title_file:
                title = title_file.readline().strip()
                itemCodeString += " title = " + f'"{title}",'
            with open(os.path.join(path,"description.txt")) as desc_file:
                description = desc_file.read().strip().replace('\n', '\\n').replace('"',"'")
                itemCodeString += " description = " + f'"{description}",'
            with open(os.path.join(path,"images.txt")) as images_file:
                for img in images_file.readlines():

                    url = filter_img_url(img)
                    imageCodeString = "image" + str(i2) + " = Image( item_id = " + str(i) + ","
                    imageCodeString += " image_url = " + f'"{url}")'
                    imagecodefile.write(imageCodeString + "\n")
                    imagecodefile.write(f"db.session.add(image{i2})"+"\n")
                    i2 += 1

            price = str(round(random.uniform(14.00, 99.99), 2))
            if len(price) == 4: price += "0"
            itemCodeString += " price = " + f'"{price}")'

            itemcodefile.write(itemCodeString + "\n")
            itemcodefile.write(f"db.session.add(item{i})"+"\n")
            i+=1




"""
    imageName = Image(
        item_id = "item_id", image_url = "image url"
    )

    itemName = Item(
        user_id = 1, title = "item name", description = "item description", price = 11.11
    )
"""
