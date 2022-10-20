# so what we're going to do in here is basically populate each folder's images.txt
# with the images we upload
import re
import os
from second import uploadImage, test
import time
import sys

parentdir = os.getcwd()

def createImageList(ppath, imageFiles):
    # imageFiles.join("\n")
    if os.path.exists(os.path.join(ppath,"images.txt")):
        print(f"{ppath} images already uploaded")
        return None

    imgurFiles = []
    for imageFile in imageFiles:
        sys.exit("dfsdf")
        imgurFile = uploadImage(os.path.join(ppath, imageFile))
        if imgurFile: imgurFiles.append(imgurFile)
        else: sys.exit("something went wrong")
        print(imgurFile)
        time.sleep(5)
    iString = '\n'.join(str(x) for x in imgurFiles)
    with open(os.path.join(ppath, "images.txt"), 'w') as f:
        f.write(iString)



with open('../names.txt', 'r') as names:
    for name in names.readlines():
        foldername = re.sub('[^0-9a-zA-Z]+', '_', name)

        path = os.path.join(parentdir,"seeder_data",foldername)
        allFiles = os.listdir(path)
        imageFiles = [file for file in allFiles if ".jpg" in file]
        createImageList(path,imageFiles)

print(test())
