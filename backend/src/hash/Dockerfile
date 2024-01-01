FROM python:3.11-alpine

RUN apk update && apk upgrade
RUN apk add --no-cache libffi-dev python3-dev gcc libc-dev
RUN pip install "poetry==1.4.2"

WORKDIR /api
COPY poetry.lock pyproject.toml /api
RUN poetry install

COPY ./api/main.py /api

CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
