from typing import Any, List, Union

import peewee
from pydantic import BaseModel
from pydantic.utils import GetterDict


class PeeweeGetterDict(GetterDict):
    def get(self, key: Any, default: Any = None):
        res = getattr(self._obj, key, default)
        if isinstance(res, peewee.ModelSelect):
            return list(res)
        return res


class UrlCreate(BaseModel):
    long_url: str


class UrlLookup(BaseModel):
    short_url: str


class Url(UrlCreate, UrlLookup):
    created_at: str
    expires_at: str

    class Config:
        orm_mode = True
        getter_dict = PeeweeGetterDict