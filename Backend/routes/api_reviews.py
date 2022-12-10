#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING REVIEWS """
from fastapi import APIRouter
from models.review import Review
from models import storage




router = APIRouter()


@router.get("/reviews")
def read_reviews():
    """Uploads a review to file storage

    Arg:
        text: uploaded review

    Returns:
        json object with success message
    """
    obj_list = []
    for key, obj in storage.all().items():
        obj_list.append(str(obj.dict()))
    if len(obj_list) < 1:
        return {"message": "No reviews yet"}
    return obj_list


@router.post("/reviews")
def create_reviews(review: Review):
    """Uploads a review to file storage

    Arg:
        text: uploaded review

    Returns:
        json object with success message
    """
    new_obj = review
    storage.new(new_obj)
    storage.save()
    return {"message": "Thanks you for your review"}


@router.put("/reviews/{id}")
def create_reviews(review: Review, id: int, attr):
    """Uploads a review to file storage

    Arg:
        text: uploaded review

    Returns:
        json object with success message
    """
    obj = storage.all()[id]
    if attr in dir(obj):
        attr_type = type(getattr(obj, attr))
        obj.__dict__[attr] = attr_type(review[attr])
    else:
        obj.__dict__[attr] = review[attr]
    storage.new(obj)
    storage.save()
    return {"message": "Review updated"}