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
        user_id = random.randint(3, 9)
        itemCodeString = "imageName = Image("

        foldername = re.sub('[^0-9a-zA-Z]+', '_', name)
        path = os.path.join(parentdir,"seeder_data",foldername)
        with open(os.path.join(path,"title.txt")) as title_file:
            print(title_file.readline())
            pass
        with open(os.path.join(path,"description.txt")) as desc_file:
            #print(desc_file.read())
            pass
        with open(os.path.join(path,"images.txt")) as images_file:
            for img in images_file.readlines():
                #print(filter_img_url(img))
                pass
        price = str(round(random.uniform(14.00, 99.99), 2))
        if len(price) == 4: price += "0"
        print(price)
        i+=1
        # print image titles, filtered


"""
    imageName = Image(
        item_id = "item_id", image_url = "image url"
    )
"""
