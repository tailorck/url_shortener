from typing import Any, List, Union

import peewee
from pydantic import BaseModel
from pydantic.utils import GetterDict

from .constants import LONG_URL_MAX_LENGTH


def length_check(url: str) -> str:
    assert len(url) < LONG_URL_MAX_LENGTH, "Long url is too long"
    return url


LongUrl = Annotated[str, AfterValidator(length_check)]


class PeeweeGetterDict(GetterDict):
    def get(self, key: Any, default: Any = None):
        res = getattr(self._obj, key, default)
        if isinstance(res, peewee.ModelSelect):
            return list(res)
        return res


class UrlCreate(BaseModel):
    long_url: LongUrl


class UrlLookup(BaseModel):
    short_url: str


class Url(UrlCreate, UrlLookup):
    created_at: str
    expires_at: str

    class Config:
        orm_mode = True
        getter_dict = PeeweeGetterDict
