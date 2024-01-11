import datetime

import peewee

from .db import pg_db
from .constants import (
    LONG_URL_MAX_LENGTH,
    SHORT_URL_MAX_LENGTH
)


class UrlModel(peewee.Model):
    short_url = peewee.CharField(max_length=SHORT_URL_MAX_LENGTH, unique=True, index=True)
    long_url = peewee.CharField(max_length=LONG_URL_MAX_LENGTH)
    created_at = peewee.DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = pg_db
        table_name = "url"
