from dotenv import dotenv_values
import requests
config = dotenv_values(".env")
import json


client_id = config['CLIENT_ID']
client_secret = config['CLIENT_SECRET']
bearer_token = config['BEARER_TOKEN']

img_url = 'https://media.discordapp.net/attachments/983420455258042418/1032742079073370224/unknown.png'

api = 'https://api.imgur.com/3/image'

params = dict(
    client_id=client_id
)

headers = { "Authorization" : "Client-ID " + client_id }

# authorization = {
#     "Token" : bearer_token
# }

files = dict(
    image=img_url,
    # name=(None, ''),
    type='URL',
)

r = requests.post(url=api, data=files, headers=headers)
# print(r.request.url)
# print(r.request.body)
# print(r.request.headers)

data = json.loads(r.text)

# print(r, r.status_code, r.text)
# print(json.dumps(data, indent=4))
print(data["data"]["link"])
# print(())
