import datetime

import peewee

from .db import pg_db


class UrlModel(peewee.Model):
    short_url = peewee.CharField(max_length=64, unique=True, index=True)
    long_url = peewee.CharField(max_length=255)
    created_at = peewee.DateTimeField(default=datetime.datetime.now)    
    expires_at = peewee.DateTimeField(null=False, default=datetime.datetime.now() + datetime.timedelta(days=1825))

    class Meta:
        database = pg_db
        table_name = "url"
