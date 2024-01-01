from typing import Union
import hashlib

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Url(BaseModel):
    long_url: str


@app.post("/hash")
def get_hash(url: Url):
    return {"hash": hashlib.md5(bytes(url.long_url, 'utf-8')).hexdigest()}
