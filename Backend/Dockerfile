# syntax=docker/dockerfile:1

#base image
FROM python:3.9

LABEL name='Chidubem' email='dubemnwabuisi@gmail.com'

# create working dir 
WORKDIR /app


COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
RUN pip install python-multipart
RUN pip install --upgrade pip


COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "8000"]

