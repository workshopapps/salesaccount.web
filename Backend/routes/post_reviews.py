#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING REVIEWS """
from fastapi import APIRouter


router = APIRouter()


@router.post("/reviews")
def reviews():
    """Uploads a review to file storage

    Arg:
        text: uploaded review

    Returns:
        json object with success message
    """
    pass
