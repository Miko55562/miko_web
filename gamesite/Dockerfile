FROM python:3.12.4-slim-bookworm

WORKDIR /gamesite

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get -y install gcc
RUN apt-get -y install libpq-dev
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools wheel
RUN pip cache purge
RUN rm -rf /var/lib/apt/lists

COPY . ./

RUN pip install -r requirements.txt --no-build-isolation --no-warn-script-location

RUN useradd --create-home --shell /bin/bash server
USER server

ENTRYPOINT ["python", "manage.py", "runserver", "0:8000"]