# syntax=docker/dockerfile:1

#base image
#FROM python:3.9
FROM python:3.11-alpine3.15

# create working dir 
WORKDIR /app


COPY ./requirements.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt
RUN pip install python-multipart
RUN pip install --upgrade pip


COPY . .
EXPOSE 8001
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001"]
