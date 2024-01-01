from peewee import PostgresqlDatabase
import os

pg_db = PostgresqlDatabase(
    database=os.environ["POSTGRES_DB"],
    user=os.environ["POSTGRES_USER"],
    password=os.environ["POSTGRES_PASSWORD"],
    host="db",
    port=5432
)
