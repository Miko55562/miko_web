FROM python:3.12.4-slim-bookworm

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get -y update
RUN apt-get -y install gcc
RUN apt-get -y install libpq-dev
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools wheel
RUN pip cache purge

COPY . ./

RUN pip install -r requirements.txt --no-build-isolation

# ENTRYPOINT ["python", "manage.py", "runserver", "0:8000"]