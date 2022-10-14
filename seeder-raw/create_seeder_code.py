# don't run this, you don't need this

import re
import os

print(os.getcwd())

# we have a

parentdir = os.getcwd()
# os.mkdir(os.path.join(parentdir,"seeder_data"))

# testa = ["https://media.discordapp.net/attachments/1017492963720433868/1030621688771121192/2534014992_real_life_50_foot_churro.png",
#         "https://media.discordapp.net/attachments/1017492963720433868/1030625840620384306/pexels-lorena-martinez-2320244.jpg?width=702&height=468"
#         ]
# p = re.compile('(\?.*)')
# print(p.sub("", "https://media.discordapp.net/attachments/1017492963720433868/1030625840620384306/pexels-lorena-martinez-2320244.jpg?width=702&height=468" ))

def filter_img_url(url):
    p = re.compile('(\?.*)')
    return(p.sub("", url ))

with open('names.txt', 'r') as names:
    for name in names.readlines():
        foldername = re.sub('[^0-9a-zA-Z]+', '_', name)
        path = os.path.join(parentdir,"seeder_data",foldername)
        with open(os.path.join(path,"title.txt")) as title_file:
            print(title_file.readline())
        with open(os.path.join(path,"description.txt")) as desc_file:
            print(desc_file.read())
        with open(os.path.join(path,"images.txt")) as images_file:
            for img in images_file.readlines():
                print(filter_img_url(img))
        # print image titles, filtered
