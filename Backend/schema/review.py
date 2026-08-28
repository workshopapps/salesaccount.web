#!/usr/bin/python3
""" Review module """
from pydantic import BaseModel


class CreateReview(BaseModel):
    id: str
    email: str
    text: str
    stars: int
    date: float
