from dotenv import dotenv_values
import requests
import json
import base64
config = dotenv_values(".env")
client_id = config['CLIENT_ID']
client_secret = config['CLIENT_SECRET']
bearer_token = config['BEARER_TOKEN']



def uploadImage(localUrl):
    api = 'https://api.imgur.com/3/image'
    params = dict( client_id=client_id)
    headers = { "Authorization" : "Client-ID " + client_id }

    with open(localUrl, 'rb') as f:
        encoded = base64.b64encode(f.read()).decode('utf-8')

    files = dict(image=encoded, type='base64' )
    r = requests.post(url=api, data=files, headers=headers)
    data = json.loads(r.text)

    print(r, r.status_code)

    if r.status_code != 200: return None
    else: return data["data"]["link"]

print(uploadImage('./pexels-karolina-grabowska-4207793.jpg'))
