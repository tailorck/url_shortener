FROM python:3.11-alpine

RUN apk update && apk upgrade
RUN apk add --no-cache libffi-dev python3-dev gcc libc-dev postgresql postgresql-client curl
RUN pip install "poetry==1.4.2"

RUN mkdir -p /app/api
WORKDIR /app
COPY poetry.lock pyproject.toml /app
RUN poetry install

COPY ./api/*.py /app/api

CMD ["poetry", "run", "uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "80"]
