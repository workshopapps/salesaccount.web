#!/usr/bin/python3
""" API STATUS """
from fastapi import APIRouter


router = APIRouter()


@router.get("/", status_code=200)
def api_status():
    """ Returns a json object with successful connection to the api """
    division_by_zero = 1 / 0
    return {"message": "Connection Successful"}
