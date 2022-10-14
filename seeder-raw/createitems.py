# don't run this, you don't need this

import re
import os

print(os.getcwd())

# we have a

names = open('names.txt', 'r').readlines

def make_skeleton(path,title):
    with open(os.path.join(path, "title.txt"), 'w') as f:
        f.write(title)
    with open(os.path.join(path, "description.txt"), 'w') as f:
        f.write(".")


parentdir = os.getcwd()
os.mkdir(os.path.join(parentdir,"seeder_data"))

with open('names.txt', 'r') as names:
    for name in names.readlines():
        foldername = re.sub('[^0-9a-zA-Z]+', '_', name)

        path = os.path.join(parentdir,"seeder_data",foldername)
        os.mkdir(path)
        make_skeleton(path,name)
