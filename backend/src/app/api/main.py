import json
import requests

from fastapi import FastAPI, HTTPException
from fastapi.responses import RedirectResponse
from playhouse.shortcuts import model_to_dict
from peewee import IntegrityError
from redis import Redis

from  .db import pg_db
from .models import UrlModel
from .schemas import UrlCreate, UrlLookup

pg_db.connect()
pg_db.create_tables([UrlModel], safe=True)
pg_db.close()

app = FastAPI()
r = Redis(host='cache', port=6379, decode_responses=True)

@app.post("/lookup")
def get_url(url: UrlLookup, response_class=RedirectResponse):
    if r.exists(url.short_url):
        data = json.loads(r.get(url.short_url))
        # return data
        return RedirectResponse(data["long_url"], status_code=302)

    try:
        url = UrlModel.get(short_url=url.short_url)
    except UrlModel.DoesNotExist as e:
        raise HTTPException(status_code=404, detail="Record not found")

    url_dict = model_to_dict(url)
    r.set(url_dict["short_url"], json.dumps(url_dict, default=str), ex=60*60*24)

    # return url_dict
    return RedirectResponse(url.long_url, status_code=302)


@app.post("/create")
def post_url(url: UrlCreate):
    response = requests.post(
        url="http://hash:80/hash",
        json={"long_url": url.long_url},
    )
    if response.status_code != 200:
        raise HTTPException(status_code=400, detail="Unable to hash url")

    data = response.json()
    short_url = f"http://www.short.url/{data['hash']}"

    try:
        url = UrlModel.create(
            short_url=short_url,
            long_url=url.long_url
        )
    except IntegrityError as e:
        url = UrlModel.get(short_url=short_url)

    return model_to_dict(url)
