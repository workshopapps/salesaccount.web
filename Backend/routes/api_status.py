#!/usr/bin/python3
""" API STATUS """
from fastapi import APIRouter


router = APIRouter()


@router.get("/", status_code=200)
def api_status():
    """ Returns a json object with successful connection to the api """
    return {"message": "Connection Successful"}
